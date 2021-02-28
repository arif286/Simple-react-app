import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import playerData from '../../playerData/MOCK_DATA.json';
import Cart from '../Cart/Cart';
import Cricketer from '../Cricketer/Cricketer';


const Player = () => {
    const [player, setPlayer] = useState([]);
    useEffect(() => {
        setPlayer(playerData);
    }, []);
    return (
        <div className='container'>
            <Row className='mt-4 d-flex'>
                {player.map(cricketer => <Cricketer player={cricketer} key={player.id} />)}
                <Col lg={3}>
                    <Cart/>
                </Col>
            </Row>
        </div>
    );
};

export default Player;