import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './index.css'
import './css.scss'

import Carousels from './Carousels'

import Search from './Search'
import { GalleryWithCarousel } from './GalleryWithCarousel'
import Horloge from './Horloge'
import { Carousel } from '@material-tailwind/react'





/*4089e1  7a8ae8 */ 
function App() {
  const [count, setCount] = useState(0);

  return (
    <>


<Search/>
           </>
  );
}


export default App
