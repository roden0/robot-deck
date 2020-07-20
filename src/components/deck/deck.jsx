import React from 'react';

import {Card} from '../card/card';

import './deck.css';

export const Deck = props => (
 <div className="deck">
     {props.robots.map(robot => (
        <Card key={robot.id} robot={robot} />
    ))}
 </div>
);