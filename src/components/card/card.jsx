import React from 'react';
import './card.css';

export const Card = props => (
    <div className="card-container">
        <img src={`//robohash.org/${props.robot.id}?set=set1&size=250x250`} alt="robomugshot"/>
        <h2>
            {props.robot.name} <small>({props.robot.username})</small>
        </h2>
        
        <a className="phone" href={'tel:'+props.robot.phone}>{props.robot.phone}</a>
        <p>{props.robot.email}</p>
    </div>
);