import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import './index.css';
import './css.scss';

import Carousels from './Carousels';
import Search from './Search';
import { GalleryWithCarousel } from './GalleryWithCarousel';
import Horloge from './Horloge';
import { Carousel } from '@material-tailwind/react';

function App() {
  const [count, setCount] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768); // Set threshold for mobile devices
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);

  if (isMobile) {
    return (
      <div style={{ textAlign: 'center', marginTop: '20%', fontSize: '1.5rem', color: '#333' }}>
        This website is not supported on mobile devices.
      </div>
    );
  }

  return (
    <>
      <Search />
    </>
  );
}

export default App;
