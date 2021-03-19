import React, { useState } from 'react';
import '../carousel.scss';
import ImgComp from './ImgComp';
import beyonce from '../imgs/beyonce.jpeg';
import christina from '../imgs/christina.jpeg';
import greenday from '../imgs/greenday.jpeg';
import heroes from '../imgs/heroes.jpeg';
import inthismoment from '../imgs/inthismoment.jpeg';
import katyperry from '../imgs/katyperry.jpeg';
import madonna from '../imgs/madonna.jpeg';
import metallica from '../imgs/metallica.jpeg';
import nirvana from '../imgs/nirvana.jpeg';
import thedoors from '../imgs/thedoors.jpeg';


const Slides = () => {

    //array for component to show inside the carousel
    const carouselArr = [<ImgComp src = { inthismoment } />, <ImgComp src = { beyonce } />, <ImgComp src = { christina } />, <ImgComp src = { greenday } />, <ImgComp src = { heroes } />,  <ImgComp src = { katyperry } />, <ImgComp src = { madonna } />, <ImgComp src = { metallica } />, <ImgComp src = { nirvana } />, <ImgComp src = { thedoors } />]

    //Functions for buttons
    const [x, setX] = useState(0);
    const goLeft = () => {
        x === 0 ? setX(-100*(carouselArr.length - 1)) : setX(x + 100);
    };
    const goRight = () => {
        x === -100*(carouselArr.length - 1) ? setX(0) : setX(x - 100);
    };

    return (
        <div className = "slider">
            {
                carouselArr.map((item, index) => {
                    return(
                        <div key = { index } className = "slide" style = {{ transform : `translateX(${x}%)`}}>
                            { item }
                        </div>
                    );
                })
            }

            <button id = "goLeft" onClick = {goLeft}><i class="fas fa-chevron-left"></i></button>
            <button id = "goRight" onClick = {goRight}><i class="fas fa-chevron-right"></i></button>
        </div>
    );
}

export default Slides
