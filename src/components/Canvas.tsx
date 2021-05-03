import React, { useRef, useState } from 'react';

interface IProps {
  width: number;
  height: number;
}

interface IRect {
  width: number;
  height: number;
  left: number;
  right: number;
  top: number;
  bottom: number;
}

const Canvas: React.FC<IProps> = (props) => {
  const { width, height } = props
  let canvasRef = useRef<HTMLCanvasElement | null>(null);
  let mouseX: number | null = null;
  let mouseY: number | null = null;

  // stack
  const STACK_MAX_SIZE = 20;
  const [undoDataStack, SetUndoDataStack] = useState<ImageData[]>([]);
  const [redoDataStack, SetRedoDataStack] = useState<ImageData[]>([]);

  // erase
  const [eraseMode, SetEraseMode] = useState<boolean>(false);

  // visible
  const [visible, SetVisible] = useState<boolean>(true);
  const [visibleStack, SetVisibleStack] = useState<ImageData | null>(null);

  const getContext = (): CanvasRenderingContext2D => {
    const canvas: any = canvasRef.current;
    return canvas.getContext('2d');
  };

  const OnClick = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (e.button !== 0) { return; }
    const canvas: any = canvasRef.current;
    const rect: IRect = canvas.getBoundingClientRect();
    const x = ~~(e.clientX - rect.left);
    const y = ~~(e.clientY - rect.top);

    // stack
    const ctx = getContext();
    SetRedoDataStack([]);
    if (undoDataStack.length >= STACK_MAX_SIZE) {
      undoDataStack.pop();
    }
    const imageData: ImageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    undoDataStack.unshift(imageData);

    eraseMode ? Erase(x, y) : Draw(x, y);
  }

  const OnMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (e.buttons !== 1) { return; }
    const canvas: any = canvasRef.current;
    const rect: IRect = canvas.getBoundingClientRect();
    const x = ~~(e.clientX - rect.left);
    const y = ~~(e.clientY - rect.top);
    eraseMode ? Erase(x, y) : Draw(x, y);
  }

  const DrawEnd = (e: React.MouseEvent<HTMLCanvasElement>) => {
    mouseX = null;
    mouseY = null;
  }

  const Draw = (x: number, y: number) => {
    const ctx = getContext();
    ctx.globalCompositeOperation = "source-over";
    ctx.beginPath();
    ctx.globalAlpha = 1.0;
    if (mouseX === null || mouseY === null) {
      ctx.moveTo(x, y);
    } else {
      ctx.moveTo(mouseX, mouseY);
    }
    ctx.lineTo(x, y);
    ctx.lineCap = "round";
    ctx.lineWidth = 10;
    ctx.strokeStyle = "#884898";
    ctx.stroke();
    mouseX = x;
    mouseY = y;
  }

  const Reset = () => {
    const ctx = getContext();
    ctx.clearRect(0, 0, width, height);

    // stack
    SetRedoDataStack([]);
    SetUndoDataStack([]);
  }

  const Undo = () => {
    if (undoDataStack.length <= 0) { return; }

    const ctx = getContext();
    const canvas: any = canvasRef.current;
    redoDataStack.unshift(ctx.getImageData(0, 0, canvas.width, canvas.height));
    const imageData = undoDataStack.shift();
    if (imageData === undefined) { throw 'NoImageDataError'; }
    ctx.putImageData(imageData, 0, 0);
  }

  const Redo = () => {
    if (redoDataStack.length <= 0) { return; }

    const ctx = getContext();
    const canvas: any = canvasRef.current;
    undoDataStack.unshift(ctx.getImageData(0, 0, canvas.width, canvas.height));
    const imageData = redoDataStack.shift();
    if (imageData === undefined) { throw 'NoImageDataError'; }
    ctx.putImageData(imageData, 0, 0);
  }

  const Erase = (x: number, y: number) => {
    const ctx = getContext();
    ctx.globalCompositeOperation = "destination-out";
    ctx.beginPath();
    ctx.globalAlpha = 1.0;
    if (mouseX === null || mouseY === null) {
      ctx.moveTo(x, y);
    } else {
      ctx.moveTo(mouseX, mouseY);
    }
    ctx.lineTo(x, y);
    ctx.lineCap = "round";
    ctx.lineWidth = 10;
    ctx.stroke();
    mouseX = x;
    mouseY = y;
  }

  const ToggleEditMode = () => {
    SetEraseMode(!eraseMode);
  }

  const ToggleVisible = () => {
    const ctx = getContext();
    const canvas: any = canvasRef.current;
    if (visible) {
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
      if (imageData === undefined) { throw 'NoImageDataError'; }
      SetVisibleStack(imageData);
      ctx.clearRect(0, 0, width, height);
    } else {
      if (visibleStack === null || visibleStack === undefined) { throw 'NoImageDataError'; }
      ctx.putImageData(visibleStack, 0, 0);
      SetVisibleStack(null);
    }
    SetVisible(!visible);
  }

  return (
    <section>
      <div>
        <canvas onMouseDown={OnClick}
                onMouseMove={OnMove}
                onMouseUp={DrawEnd}
                onMouseOut={DrawEnd}
                ref={canvasRef}
                width={`${width}px`}
                height={`${height}px`}
        />
      </div>
      <div>
        <button onClick={ToggleEditMode}>{ eraseMode ? 'ペン' : '消しゴム' }</button>
        <button onClick={Undo}>元に戻す</button>
        <button onClick={Redo}>やり直す</button>
        <button onClick={ToggleVisible}>{ visible ? '非表示にする' : '表示する' }</button>
        <button onClick={Reset}>リセット</button>
      </div>
    </section>
  );
}

export default Canvas;
