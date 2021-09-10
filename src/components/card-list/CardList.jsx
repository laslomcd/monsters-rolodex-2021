import React from 'react';
import Card from '../card/Card';

import './cardList.css';

const CardList = ({ monsters }) => {
    return (
        <div className="card-list">
            {monsters.map(monster => (
                <Card monster={monster} key={monster.id} />
            ))}
        </div>
    )
}

export default CardList;