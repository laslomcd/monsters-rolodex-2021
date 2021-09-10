import React from 'react';
import './card.css';

const Card = ( { monster: { id, email, name}}) => {

    return (
        <div className="card-container">
            <img src={`https://robohash.org/${id}?size=180x180`} alt="monster" />
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    )
}

export default Card;