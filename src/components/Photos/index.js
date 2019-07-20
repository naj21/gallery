import React from "react";
import "./Photos.scss";

const Photos = ({ setModalDisplay }) => {
    const photos = [1, 2, 3, 4, 5, 6, 7];
    const isLoading = true;
  return (
    <div className="PhotoGroup">
        {
            photos.map(photo => (
                <div onClick={()=>setModalDisplay(true)}>
                    {isLoading
                        ? (<div className="placeholder">
                            <div></div>
                            <div></div>
                        </div>)
                        : (<div className="image">
                            <img src="" alt="unsplash"/>
                            <div className="overlay"></div>
                        </div>)
                    }
                </div>
            ))
        }
    </div>
  )
}

export default Photos;