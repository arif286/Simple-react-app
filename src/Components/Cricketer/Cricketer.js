import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import './Cricketer.css';


const Cricketer = (props) => {
    const { first_name, last_name, Birth, picture, salary, test, odi, t20, country } = props.player;
    const [ isClicked, setIsClicked ] =  useState(false);
    return (
        
        <Row className='p-3 player-container mt-4'>
            <div className='col-md-4 text-center'>
                    <img className='player-img' src={picture} alt='' />
                    <h5 className='pt-2'>{first_name} {last_name}</h5>
            </div>
            <div className='col-md-8'>
                <Row className='d-flex justify-content-around'>
                    <div className='player-info'>
                        <p>Country: {country}</p>
                        <p>Date of Birth: {Birth}</p>
                        <p>Salary: ${salary}</p>
                            
                    </div>
                    <div className='player-info'>
                        <p>Test Ranking: {test}</p>
                        <p>ODI Ranking: {odi}</p>
                        <p>T20 Ranking: {t20}</p>
                    </div>
            
                </Row>
                <Row className=' d-flex justify-content-center pt-3'>
                    <Button disabled={isClicked} variant="primary" onClick={() => {
                        props.handleAddPlayer(props.player)
                        setIsClicked(true)}}>
                        <FontAwesomeIcon icon={faShoppingCart}/>
                         {isClicked ? "Already Selected" : "Select Me"}
                    </Button>
                </Row>    
            </div>
        </Row>

    );
};

export default Cricketer;