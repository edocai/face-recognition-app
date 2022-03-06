import React from "react";
import Tilt from 'react-tilt';
import facerecog from './facerecog.png';
import './Logo.css';

const Logo = () => {
    return (
        <div className="ma4 mt0 center">
            <Tilt className="Tilt br2 shadow-2" options={{ max: 65 }} style={{ height: 250, width: 250 }} >
                <div className="Tilt-inner pa3"> <img className='w-100'style={{padding: '5px'}} alt='logo' src={facerecog}></img> </div>
            </Tilt>
        </div>
    )
}

export default Logo;