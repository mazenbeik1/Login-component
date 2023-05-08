import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Welcome = ()=> {
    return (
    <div className="WelcomePage">
        <div className="WelcomePage-content">
            <img src="/imgs/IoT.png" alt="Logo" style={{height:'30vh', transform:'translate(7px, 0)'}}/>
            <h1 className='WelcomeMsg'>Welcome to MZmZ IoT</h1>
            <p>Connect devices through internet</p>
            <Button as={Link} to={'/workouts'} variant='secondary' className='button1 button2'>Get Started</Button>
        </div>
    </div>
    );
}


export default Welcome;