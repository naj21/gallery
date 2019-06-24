import React, { useState, useEffect } from 'react';
import { HairCut } from '../../assets/images';
import { Carousel, Slides, Slide, SlideNav, SlideNavItem, Controls, IconButton, ProgressBar } from 'components/Carousel';
import {
  FaPlay,
  FaPause,
  FaForward,
  FaBackward,
} from 'react-icons/fa';

const Gallery = () => {
  const [ currentIndex, setCurrentIndex ] = useState(0);
  const [ isPlaying, setIsPlaying ] = useState(false);
  const timeoutDuration = 2000;

  useEffect(() => {
    if (isPlaying) {
      const timeout = setTimeout(() => {
        setCurrentIndex((currentIndex+1)%HairCut.length)
      }, timeoutDuration);
      return () => {clearTimeout(timeout)};
    }
  }, [isPlaying, currentIndex])
    
  return (
    <Carousel>
      <Slides>
        {
          HairCut.map((cut, index) => (
            <Slide
              key = {index}
              img = {cut}
              isCurrent = {index === currentIndex}
            />
          ))
        }
      </Slides>
      <SlideNav>
        {
          HairCut.map((item, index) => (
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
            setCurrentIndex((currentIndex-1+HairCut.length)%HairCut.length);
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
            setCurrentIndex((currentIndex+1)%HairCut.length);
            setIsPlaying(false);
          }}
        />
      </Controls>
      <ProgressBar
        isPlaying = {isPlaying}
        duration = {timeoutDuration}
      />
    </Carousel>
  )
}

export default Gallery;