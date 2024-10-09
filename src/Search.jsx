import React from 'react'
import './index.css'
import './App.css'
import { useState,useEffect } from 'react'
import { GalleryWithCarousel } from './GalleryWithCarousel'
import Horloge from './Horloge'
import Carousels from './Carousels'
import Sunrise from './Sunrise'
import Loader from './Loader'
import Rainy from './Rainy'
import Clear from './Clear'
import Clouds from './Clouds'
import Snow from './Snow'
import BackgroundDay from './BackgroundDay'
import BackgroundNight from './BackgroundNight'
import './titlerainy.css'
import './sunrise.css'
import './titleclouds.css'
import './titleSnow.css'
import './titleclouds.css'
import './night.scss';
import './day.scss';




<style>
  .night{
    
  }
</style>



function Search() {
  const [data, setData] = useState(null);
  const [country, setCountry] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [city,setCity]=useState("kelibia")
  const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
  const [weatherClass, setWeatherClass] = useState('');
  const [isDay, setIsDay] = useState(false);

  
  const handleSubmit = (event) => {
    
    event.preventDefault();
    setError(null); 

    setIsLoading(true);
    fetchData();
  };
  const fetchData = async () => {

    
    try {
      const response = await fetch(`${apiUrl}${city}&appid=${import.meta.env.VITE_API_Key_Weather}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const jsonData = await response.json();
      setData(jsonData);
      setCountry(jsonData.sys.country); 
      setIsLoading(false);
   
     
        console.log((new Date().getTime() + jsonData.timezone * 1000))
        console.log((jsonData.sys.sunrise * 1000))
      console.log((jsonData.sys.sunset * 1000 + 1800000))

      console.log((new Date().getTime() + jsonData.timezone * 1000) > (jsonData.sys.sunrise * 1000))
      console.log((new Date().getTime() + jsonData.timezone * 1000) > (jsonData.sys.sunset * 1000 + 1800000))


      console.log("okeey");
    } catch (error) {
      console.log("erreuuur");
      setError(error.message);
    } finally {
      console.log("loading");
      
      setIsLoading(false);
    }
  };
  useEffect(() => {
    if (data){
    const currentTime = new Date().getTime() + data.timezone * 1000;
    const sunriseTime = data.sys.sunrise * 1000;
    const sunsetTime = data.sys.sunset * 1000;

    if (currentTime > sunriseTime && currentTime < sunsetTime) {
      setIsDay(true);
      console.log(isDay,'day')
    } else {
      setIsDay(false);
    }}

  }, [data]);
  useEffect(() => {
    if (isDay) {
      document.body.classList.add('day');
      document.body.classList.remove('night');
    } else {
      document.body.classList.add('night');
      document.body.classList.remove('day');
    }
  }, [isDay]);

  if (isLoading){
    return <div className="loader"></div>
  }

  if (error) {
    return <><div  className="loader"></div> <div>Error: {error}</div></>;
  }
  

  const flagUrl = `https://flagsapi.com/${country}/flat/64.png`;
  console.log(isDay ? 'day' : 'night','hahaha')
return (<>
   {data && (
  <div className={isDay ? 'day' : 'night'}>
    {isDay ? <BackgroundDay /> : <BackgroundNight />}
  </div>
)}




<form className="flex items" onSubmit={handleSubmit}>
    <label htmlFor="simple-search" className="sr-only">Search</label>
    <div className="relative w-full" id="simple-search">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400"  aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
                <path stroke="currentColor" strokeLinecap="round"  strokeLinejoin="round" strokeWidth="2" d="M3 5v10M3 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0V6a3 3 0 0 0-3-3H9m1.5-2-2 2 2 2"/>
            </svg>
        </div>
        <input type="text" value={city} onChange={(e) => setCity(e.target.value)}   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search branch name..." required />
    </div>
    
    <button type="submit" className="p-2.5 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
        </svg>
        <span className="sr-only">Search</span>
    </button>
</form>



<div role="status" id='widget' >
  
  <div className='gallery'>
    
    
  <h1 id='cityName' className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white"><span className="text-blue-600 dark:text-blue-500">{data && <span>{data.name}</span>}</span> {data && <span className="text-lg font-bold dark:text-white">{data.sys.country}</span>}
  {data && <img className='flag' src={flagUrl} alt={`Flag of ${country}`} />
}
  </h1>
<Carousels data={data}/>
        
      </div>

      <div className='info' style={{ position: 'relative', top: '10em' }}>

      <div className='az'>
  {data && (
    <h2 id='city' className="text-lg font-bold dark:text-white">
      City time: {new Date(new Date().getTime() + data.timezone * 1000- 3600000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false  })}
    </h2>
  )}




    <div>
  {data && <h2 className="text-lg font-bold text-white">Sunrise: {new Date((data.sys.sunrise + data.timezone) * 1000- 3600000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false })}</h2>}
</div>
<div>
  {data && <h2>Sunset: {new Date((data.sys.sunset + data.timezone) * 1000- 3600000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false })}</h2>}
</div>
<div>
  {data && (
    <h2 className="text-lg font-bold text-white">
      Sunrise effect: 
      {Math.abs(new Date(new Date().getTime() + data.timezone * 1000 - 3600000) - new Date((data.sys.sunrise + data.timezone) * 1000 - 3600000)) < 1800000 || 
       Math.abs(new Date(new Date().getTime() + data.timezone * 1000 - 3600000) - new Date((data.sys.sunset + data.timezone) * 1000 - 3600000)) < 1800000 ? 
       <Sunrise /> : 
       <p>
         Sunrise: {Math.abs(new Date(new Date().getTime() + data.timezone * 1000 - 3600000) - new Date((data.sys.sunrise + data.timezone) * 1000 - 3600000)) < 1800000 ? 'true' : 'false'} 
           &  Sunset: {Math.abs(new Date(new Date().getTime() + data.timezone * 1000 - 3600000) - new Date((data.sys.sunset + data.timezone) * 1000 - 3600000)) < 1800000 ? 'true' : 'false'}
       </p>
      }
    </h2>
  )}
</div>
</div>
<div className='no'>
<div>
  {data && (
    <h2 className="text-lg font-bold dark:text-white">
      {data.weather[0].main.trim() === "Rain" ? <Rainy data={"Rain"} /> : ""}
    </h2>
  )}
</div>
<div>
  {data && (
    <h2 className="text-lg font-bold dark:text-white">
      {data.weather[0].main.trim() === "Snow" ? <Snow data={"Snow"} />  : ""}
    </h2>
  )}
</div>
<div>
  {data && (
    <h2 className="text-lg font-bold dark:text-white">
      {data.weather[0].main.trim() === "Clouds" ? <Clouds data={"Clouds"} /> : ""}
    </h2>
  )}
</div>
<div>
  {data && (
    <h2 className="text-lg font-bold dark:text-white">
      {data.weather[0].main.trim() === "Clear" ? <Clear data={"Clear"} /> : ""}
    </h2>
  )}
</div>


</div> 
<span className={weatherClass}>{weatherClass}</span>


</div>
    
    <span className="sr-only">Loading...</span>
</div>
  {data && <Horloge data={data}/>  }

  {!data && <Loader/>    }

  {data && (
    <>
        <h1 id='deg' className="text-lg font-bold dark:text-white">{data.main.temp}</h1>
        <h2 id='deg2' >°C</h2>
    </>
)}

  

    
  </>

)
}

export default Search
