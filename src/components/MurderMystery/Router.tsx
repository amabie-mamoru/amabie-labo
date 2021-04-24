import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { RouteComponentProps } from 'react-router-dom'
import Index from './Index';
import EndOfSpaceJourney from './EndOfSpaceJourney';
import EndOfSpaceJourneyAnotherStory from './EndOfSpaceJourneyAnotherStory';
import NotFound from '../NotFound';

const MurderMysteryRouter: React.FC<RouteComponentProps> = (props) => {
  const { match } = props
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={`${match.path}`} component={Index} />
        <Route exact path={`${match.path}/end_of_space_journey`} component={EndOfSpaceJourney} />
        <Route exact path={`${match.path}/end_of_space_journey_another_story`} component={EndOfSpaceJourneyAnotherStory} />
        <Route path='*' component={NotFound} />
      </Switch>
    </BrowserRouter>
  )
}

export default MurderMysteryRouter
