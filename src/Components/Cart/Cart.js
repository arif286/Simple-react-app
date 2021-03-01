import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import PlayerDetails from '../PlayerDetails/PlayerDetails';

const Cart = (props) => {
    const countPlayer = props.player;

    const totalSalary = countPlayer.reduce((total, money) => total + money.salary, 0);
    return (
        <div>
            <div className="card text-center player-container">
                <div className="card-body">
                    <h5 className="card-title">Added player {countPlayer.length}</h5>
                    <p className="card-text">Total salary: ${Number(totalSalary)}</p>
                    <a href="#cart" className="btn btn-primary"><FontAwesomeIcon icon={faShoppingCart} />Add Player</a>
                </div>
            </div>
            <div>
                {countPlayer.map(player => <PlayerDetails player={player} key={player.id}/>)
                }
            </div>
        </div>
    );
};

export default Cart;