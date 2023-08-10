import React, { useState } from 'react'

const Weather = ({weatherInfo}) => {
    const [isCelcius, setIsCelcius] = useState(true)
    console.log(weatherInfo)
    const kelvinToCelcius=(tempKelvin)=>{
        return (tempKelvin - 273.15).toFixed(1)
    }

    const kelvinToFarenheits=(tempKelvin)=>{
        return (((tempKelvin - 273.15)*9/5)+32).toFixed(1)
    }

    const handleChangeUnitTemp= ()=>{
        setIsCelcius(!isCelcius)


    }
    const SENAL = weatherInfo?.weather[0].icon
 

    

    
  return (
    
         <section className='text-center p-6 '>
        <form className='flex rounded-md overflow-hidden max-w-max mx-auto text-black'>
             <input   placeholder='City' id = "countryname" type='text' />
             <button className='text-white'>Buscar</button>
        </form>




       <h2 className='p-3'>{weatherInfo?.name} , {weatherInfo?.sys.country} </h2>
      <section className='grid gap-4 sm:grid-cols-[auto_auto]'>
       {/* ************************************************* */}
            {/* Seccion Superior */}
        <section className='bg-white/60 p-2 rounded-2xl grid grid-cols-2 items-center'>
            <h4 className='col-span-2'>{weatherInfo?.weather[0].description}</h4>
            <span className='text-4xl'>{isCelcius ? kelvinToCelcius(weatherInfo?.main.temp)   : kelvinToFarenheits(weatherInfo?.main.temp)  } {isCelcius ? "C°" : "F°"}</span>
            <div>
                <img src={`https://openweathermap.org/img/wn/${SENAL}@4x.png`} alt='' />
               
                
            </div>
        </section>
        {/* ************************************************* */}
            {/* Seccion inferior */}
            {/* la parte del article - div - img - span es para las tres caja que me pide */}
        <section className='bg-white/60 p-2 py-4 rounded-2xl grid grid-cols-3 items-center sm:grid-cols-1'>

            {/* primera caja */}
            <article className='flex gap-2 items-center'>
                <div className='w-[18px] '>
                    <img src={'/images/wind.png'} alt='' />
                </div>
                <span>{weatherInfo?.wind.speed} m/s</span>
            </article>

            {/* segunda caja */}
            <article className='flex gap-2 items-center'>
                <div className='w-[18px] '>
                    <img src={'/images/humidity.png'} alt='' />
                </div>
                <span>{weatherInfo?.main.humidity}%</span>
            </article>

            {/* tercera caja */}
            <article className='flex gap-2 items-center'>
                <div className='w-[18px] '>
                    <img src={'/images/pressure.png'} alt='' />
                </div>
                <span>{weatherInfo?.main.pressure}hPa</span>
            </article>



        </section>






    </section>

    <button onClick={handleChangeUnitTemp}  className='mt-4 bg-white text-blue-500 p-3 rounded-3xl '> Cambiar a F° </button>


   </section>
  
  )
}

export default Weather