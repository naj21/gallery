import React, { useState, useEffect } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
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
    
  return (
    <div className="container">
    
      <div>
        <div onClick={() => setModalDisplay(images)}>
          <h3>SLIDESHOW</h3>
        </div>
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