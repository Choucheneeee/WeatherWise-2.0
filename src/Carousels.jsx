import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './carousels.css';

const API_URL = "https://api.unsplash.com/search/photos";
const IMAGES_PER_PAGE = 4;

function Carousels({ data }) {
  const [images, setImages] = useState([]);

  const fetchImage = async () => {
    try {
      const result = await axios.get(`${API_URL}?query=${data.name}&page=1&per_page=${IMAGES_PER_PAGE}&client_id=${import.meta.env.VITE_API_Key}`);
      setImages(result.data.results); 
    } catch (error) {
    }
  };

  useEffect(() => {
    fetchImage();
  }, [data]); 

  return (
    <>
      <div >
      {data && (
  images.length > 0 ? (
    images.slice(0, 4).map((image, index) => (
      <input
        key={index}
        type="radio"
        name="position"
        defaultChecked={index === 0}
        className='button'
        
      />
    ))
  ) : (
    [1, 2, 3].map((num, index) => (
      <input
        key={index}
        type="radio"
        name="position"
        defaultChecked={index === 0}
      />
    ))
  )
)}

        <main id="carousel">
          {images.length > 0 ? (
            images.slice(0, 4).map((image) => (
              <div key={image.id} className="item">
                <img
                  id="cityphoto"
                  src={image.urls.full}
                  alt={image.alt_description}
                  className="image"
                />
              </div>
            ))
          ) : (
            [1, 2, 3].map((num) => (
              <div key={num} className="item">
                
              </div>
            ))
          )}
        </main>
      </div>
    </>
  );
}

export default Carousels;
