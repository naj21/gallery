import React from "react";
import "./Photos.scss";

const Photos = ({ setModalDisplay, images, isLoading }) => {
    let photos = [1, 2, 3, 4, 5, 6, 7];

    if (images && images.length)  photos = [...images];

  return (
    <div className="PhotoGroup">
        {
            photos.map(image =>
                isLoading
                    ? (<div className="placeholder">
                        <div></div>
                        <div></div>
                    </div>)
                    : (<div className="image" onClick={()=>image.urls && setModalDisplay(image)}>
                        <img src={image.urls && image.urls.full} alt={(image.user && image.user.name) || "UNSPLASH"} />
                        <div className="overlay"></div>
                    </div>)                    
            )
        }
    </div>
  )
}

export default Photos;