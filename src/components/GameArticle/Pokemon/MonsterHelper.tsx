import React from 'react';
import ico_blissey from '../../../images/game-article/pokemon/monster/Blissey.gif';
import ico_cryogonal from '../../../images/game-article/pokemon/monster/Cryogonal.gif';
import ico_dosclops from '../../../images/game-article/pokemon/monster/Dosclops.gif';
import ico_dragalge from '../../../images/game-article/pokemon/monster/Dragalge.gif';
import ico_dusknoir from '../../../images/game-article/pokemon/monster/Dusknoir.gif';
import ico_flareon from '../../../images/game-article/pokemon/monster/Flareon.gif';
import ico_gengar from '../../../images/game-article/pokemon/monster/Gengar.gif';
import ico_grimmsnarl from '../../../images/game-article/pokemon/monster/Grimmsnarl.gif';
import ico_indeedee from '../../../images/game-article/pokemon/monster/Indeedee.gif';
import ico_klefki from '../../../images/game-article/pokemon/monster/Klefki.gif';
import ico_tangrowth from '../../../images/game-article/pokemon/monster/Tangrowth.gif';
import ico_snorlax from '../../../images/game-article/pokemon/monster/Snorlax.gif';
import ico_wailord from '../../../images/game-article/pokemon/monster/Wailord.gif';

const monsterList: any = {
  'ハピナス': ico_blissey,
  'フリージオ': ico_cryogonal,
  'サマヨール': ico_dosclops,
  'ドラミドロ': ico_dragalge,
  'ヨノワール': ico_dusknoir,
  'ブースター': ico_flareon,
  'ゲンガー': ico_gengar,
  'オーロンゲ': ico_grimmsnarl,
  'イエッサン♀': ico_indeedee,
  'クレッフィ': ico_klefki,
  'カビゴン': ico_snorlax,
  'モジャンボ': ico_tangrowth,
  'ホエルオー': ico_wailord
};

interface Props {
  name: string;
}

export const PokemonIcon: React.SFC<Props> = (props: Props) => {
  const { name } = props;
  return <img src={monsterList[name]} alt={name} />
}
