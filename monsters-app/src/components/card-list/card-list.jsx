import React from 'react';
import Card from '../card/Card.jsx.js'
import './card-list.style.css'

const Cardlist = (props) => (
    <div className='card-list'>
        {props.monsters.map((m) => {
            return <Card key={m.id} monsters={m} />
        })}
    </div>
)

export default Cardlist