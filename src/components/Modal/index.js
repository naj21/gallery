import React, { useState, useEffect } from 'react';
import './Modal.scss';
import { Carousel, Slides, Slide, SlideNav, SlideNavItem, Controls, IconButton, ProgressBar } from '/Users/mac/Documents/gallery/src/components/Carousel/index.js';
import {
      FaPlay,
      FaPause,
      FaForward,
      FaBackward,
      FaTimes } from 'react-icons/fa';

const Modal = ({ modalDisplay, setModalDisplay }) => {

    const [ currentIndex, setCurrentIndex ] = useState(0);
    const [ isPlaying, setIsPlaying ] = useState(false);
    const timeoutDuration = 3000;

    useEffect(() => {
        if (isPlaying && modalDisplay) {
        const timeout = setTimeout(() => {
            setCurrentIndex((currentIndex+1)%modalDisplay.length)
        }, timeoutDuration);
        return () => {clearTimeout(timeout)};
        }
    }, [isPlaying, currentIndex, modalDisplay])

    return (
        <div className={modalDisplay ? 'modal' : 'modal hidden'}>
            <FaTimes 
                style={{color: 'white'}}
                onClick={() => setModalDisplay(null)}
             />
             {!Array.isArray(modalDisplay)
                ? (<div>
                    <img src={modalDisplay && modalDisplay.urls.full} alt={modalDisplay && modalDisplay.user.name} />
                    <div className="details">
                        <p className="photographer">{modalDisplay && modalDisplay.user.name}</p>
                        <p className="location">{modalDisplay && modalDisplay.user.location}</p>
                    </div>
                </div>)
                : (<Carousel>
                    <Slides>
                        {
                        modalDisplay.map((image, index) => (
                            <Slide
                            key = {index}
                            img = {image.urls.full}
                            isCurrent = {index === currentIndex}
                            />
                        ))
                        }
                    </Slides>
                    <SlideNav>
                        {
                        modalDisplay.map((item, index) => (
                            <SlideNavItem
                            key = {index}
                            isCurrent = {index === currentIndex}
                            onClick = {() => {setCurrentIndex(index)}}
                            />
                        ))
                        }
                    </SlideNav>
                    <Controls>
                        <IconButton
                        children = { <FaBackward style={{color: 'white'}}/> }
                        isPlaying = {false}
                        onClick = {() => {
                            setCurrentIndex((currentIndex-1+modalDisplay.length)%modalDisplay.length);
                            setIsPlaying(false);
                        }}
                        />
                        <IconButton
                        children = { !isPlaying ? <FaPlay style={{color: 'white'}}/> : <FaPause style={{color: 'white'}}/> }
                        onClick = {() => { !isPlaying ? setIsPlaying(true) : setIsPlaying(false) }}
                        />
                        <IconButton
                        children = { <FaForward style={{color: 'white'}}/> }
                        onClick = {() => {
                            setCurrentIndex((currentIndex+1)%modalDisplay.length);
                            setIsPlaying(false);
                        }}
                        />
                    </Controls>
                    <ProgressBar
                        isPlaying = {isPlaying}
                        duration = {timeoutDuration}
                    />
                </Carousel>)
             }
        </div>
    )
}

export default Modal;