import React, { useState, useEffect } from 'react';
// import { HairCut } from '../../assets/images';
// import { Carousel, Slides, Slide, SlideNav, SlideNavItem, Controls, IconButton, ProgressBar } from '/Users/mac/Documents/gallery/src/components/Carousel/index.js';
import {
//   FaPlay,
//   FaPause,
//   FaForward,
//   FaBackward,
  FaArrowLeft
} from 'react-icons/fa';
import Photos from '/Users/mac/Documents/gallery/src/components/Photos/index.js'
import Search from '../../components/Search';
import './Gallery.scss'

const Gallery = ({ setModalDisplay }) => {
  const [ images, setImages ] = useState([]);
  const [ isLoading, setIsLoading ] = useState(null);
  const [ result, setResult ] = useState(null);

  const fetchData = async () => {
    const api = `https://api.unsplash.com/photos?client_id=7d00dac39ad904ca430ef93913e550192f1a70a80f00e3598a100c147591d0b7&per_page=7`;
    const res = await fetch(api);
    setImages(await res.json());
  }
  useEffect(() => {
      fetchData();
  }, []);
  // const [ currentIndex, setCurrentIndex ] = useState(0);
  // const [ isPlaying, setIsPlaying ] = useState(false);
  // const timeoutDuration = 2000;

  // useEffect(() => {
  //   if (isPlaying) {
  //     const timeout = setTimeout(() => {
  //       setCurrentIndex((currentIndex+1)%HairCut.length)
  //     }, timeoutDuration);
  //     return () => {clearTimeout(timeout)};
  //   }
  // }, [isPlaying, currentIndex])
    
  return (
    <div className="container">
    {/* <Carousel>
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
      </Controls> */}
      {/* <ProgressBar
        isPlaying = {isPlaying}
        duration = {timeoutDuration}
      />
    </Carousel> */}
      <div>
        <FaArrowLeft onClick={() => setResult(null)} className={(!result && !isLoading) && "hide"} />
        {isLoading && !result
          ? <h2 className="result">Searching for <span>"{isLoading}"</span></h2>
          : !result && <Search setImages={setImages} setIsLoading={setIsLoading} setResult={setResult} />
        }  
        {result 
          && <h2 className="result">Search Results for <span>"{result}"</span></h2>
        } 
      </div> 
      <Photos setModalDisplay={setModalDisplay}  images={images} />
    </div>
  )
}

export default Gallery;