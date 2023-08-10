
import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import Weather from './components/Weather'

function App() {
  const [weatherInfo, setWeatherInfo] = useState(null)
  


  const success =(pos)=>{
    const lat= pos.coords.latitude 
    const lon= pos.coords.longitude 
    // console.log({lat ,lon})
    const API_KEY = "f076dc0cad1a197b4d0f5d42b1d99e93"
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`
    //console.log(url)
    axios.get(url)
       .then (({data})=> setWeatherInfo(data))
       .catch((err)=> console.log(err))




  }
  useEffect(() => { 
    navigator.geolocation.getCurrentPosition(success) 
    
  
    
  }, [])
  
 
  return (
    <main className='items-center min-h-screen  text-white font-lato flex justify-center  w-full h-full bg-cover  bg-[url("/images/bg.png")]' >
      
        <Weather weatherInfo = {weatherInfo} />

    </main>
  )
}

export default App
