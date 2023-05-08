import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import CenterModal from '../CentralModal/CenterModal';
import { useState } from 'react';
const Welcome = ()=> {
    const user = useSelector((state) => state.user.email);
    const [showIntro, setShowIntro] = useState(false);
    const handleCloseIntro = () => setShowIntro(false);
    const handleShowIntro = () => setShowIntro(true);
    return (
    <div className="WelcomePage">
        <div className="WelcomePage-content">
            <img src="/imgs/LOGO3trans.png" alt="Logo" style={{height:'30vh', transform:'translate(7px, 0)'}}/>
            <h1 className='WelcomeMsg'>{`Welcome ${user}`}</h1>
            <p>Connect devices through internet</p>
            <Button variant='primary' className='button1 button2' onClick={handleShowIntro}>Game Intro</Button>
            <Button as={Link} to={'/cubesurfer'} variant='secondary' className='button1 button2'>Play Demo</Button>
            <CenterModal
                show={showIntro}
                title="CubeSurfer Intro"
                intropath='/vids/IntroTrim.mp4'
                onHide={() => handleCloseIntro()}
            />
        </div>
    </div>
    );
}


export default Welcome;