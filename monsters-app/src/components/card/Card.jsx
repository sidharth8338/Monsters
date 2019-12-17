import React from 'react';
import './card.style.css'



const Card = (props) => (
    <div className="card-container">
        <img alt='monster' src={`https://robohash.org/${props.monsters.id}?set=set2`} />
        <h1>{props.monsters.name}</h1>
        <div>{props.monsters.email}</div>
    </div>
)

export default Card