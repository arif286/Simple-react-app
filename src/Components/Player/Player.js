import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import playerData from '../../playerData/MOCK_DATA.json';
import Cart from '../Cart/Cart';
import Cricketer from '../Cricketer/Cricketer';


const Player = () => {
    const [player, setPlayer] = useState([]);
    const [addPlayer, setAddPlayer] = useState([]);
    const handleAddPlayer = playersData => {
        const newPlayer = [...addPlayer, playersData];
        setAddPlayer(newPlayer);
    }
    useEffect(() => {
        setPlayer(playerData);
    }, []);
    return (
        <div className='container'>
            <Row className='mt-4'>
                <Col lg={9}>
                    {player.map(cricketer => <Cricketer player={cricketer} handleAddPlayer={handleAddPlayer} key={player.id} />)}
                </Col>
                <Col lg={3} className="mt-4">
                    <Cart player={addPlayer} key={addPlayer.id}/>
                </Col>
            </Row>
        </div>
    );
};

export default Player;