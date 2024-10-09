import { Carousel } from "@material-tailwind/react";
import React, { useEffect, useState } from 'react';
import axios from 'axios'; // Make sure to import axios


const API_URL = "https://api.unsplash.com/search/photos";
const IMAGES_PER_PAGE = 20;

export function GalleryWithCarousel({ data }) {
  const [checked, setChecked] = useState(true);
  const [images, setImages] = useState([]);
  const [totalPages, setTotalPages] = useState(0);

  console.log('key', import.meta.env.VITE_API_Key);

  const handleChange = () => {
    setChecked(!checked);
  };

  const fetchImage = async () => {
    try {
      console.log("first");
      const result = await axios.get(`${API_URL}?query=${data.name}&page=1&per_page=${IMAGES_PER_PAGE}&client_id=${import.meta.env.VITE_API_Key}`);
      console.log('result', result.data);
      setImages(result.data.results); 
      setTotalPages(result.totalPages)
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    fetchImage();
  },[data]);
    

  return (
    <>
        <div className="center">
  <div className="carousel-wrapper">
  <input
      id="slide1"
      type="radio"
      name="controls"
      checked={checked}
      onChange={handleChange}
    />    <input id="slide2" type="radio" name="controls" />
    <input id="slide3" type="radio" name="controls" />
    <input id="slide4" type="radio" name="controls" />
    <input id="slide5" type="radio" name="controls" />

    <label htmlFor="slide1" style={{marginLeft:"-2em"}} className="nav-dot"></label>
    <label htmlFor="slide2" style={{marginLeft:"-1em"}} className="nav-dot"></label>
    <label htmlFor="slide3" style={{marginLeft:"0em"}} className="nav-dot"></label>
    <label htmlFor="slide4" style={{marginLeft:"1em"}} className="nav-dot"></label>
    <label htmlFor="slide5" style={{marginLeft:"2em"}} className="nav-dot"></label>

    <label htmlFor="slide1" className="left-arrow">  </label>
    <label htmlFor="slide2" className="left-arrow"> </label>
    <label htmlFor="slide3" className="left-arrow">  </label>
    <label htmlFor="slide4" className="left-arrow">  </label>
    <label htmlFor="slide5" className="left-arrow">  </label>

    <label htmlFor="slide1" className="right-arrow">  </label>
    <label htmlFor="slide2" className="right-arrow">  </label>
    <label htmlFor="slide3" className="right-arrow">  </label>
    <label htmlFor="slide4" className="right-arrow">  </label>
    <label htmlFor="slide5" className="right-arrow">  </label>

      <div className="carousel">
          <ul>
            {images.length > 0 ? (
              images.slice(0, 4).map((image) => (
                <li key={image.id}>
                  <img
                  id="cityphoto"
                    src={image.urls.full}
                    alt={image.alt_description}
                    className="image"
                  />
                </li>
              ))
            ) : (
              [1, 2, 3].map((num) => (
                <li key={num}>{num}</li>
              ))
            )}
          </ul>
        </div>
  </div>
</div>



    </>
  );


}