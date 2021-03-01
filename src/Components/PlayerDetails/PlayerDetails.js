import React from 'react';

const PlayerDetails = (props) => {
    const player = props.player;
    return (
        <div className='card text-center my-4 player-container'>
            <div className='card-body'>
                <h5 className="card-title">Name: {player.first_name} {player.last_name}</h5>
                <p className="card-text">Salary: ${player.salary}</p>
            </div>
        </div>
    );
};

export default PlayerDetails;