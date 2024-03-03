"use client"

import React,{ useEffect ,useState} from 'react'
import '../CSS/weather.css'
import axios from 'axios'
import { useCallback } from 'react';


const WEATHER_API = "UjRMDIgCrjk3IzE79ymjVYJfEkWcGTbx";
const LOCATION_API_KEY = "65dedac5e35e6015506630mad31e96a" 

const Weather = () => {


    const [userLocation , setUserLocation] = useState("");
    const [weatherinfo,setWeatherINfo] = useState({})
  
    const Area_finder = useCallback(()=>{
    navigator.geolocation.getCurrentPosition(async(pos)=>{
        await Weather_Finder(pos.coords)
    });
  
    })
  
    const Weather_Finder = useCallback(async(loc)=>{
     let url =`https://api.tomorrow.io/v4/weather/forecast?location=${loc.latitude},${loc.longitude}&apikey=${WEATHER_API}`
      let res = await  axios.get(url);
      let d =  res.data.timelines.daily[0]
      let dt =d.values;
      console.log(d)
      let dtobj = {temp:dt.temperatureAvg}
      setWeatherINfo(dtobj)
    })
  
    useEffect(()=>{
      console.log("it runs once useeffect");
      async function fun(){
        await Area_finder()
      
      }
  
     fun()
  
  
      
    },[])



  return (
    <div
    className="weatherinsidemaindev w-[35%] min-w-[300px] max-w-[800px] h-[50%] min-h-[120px] max-h-[500px] b-5px rounded-[35px] relative left-[50%] top-[10%] translate-x-[-50%] z-10"
    >
      <img
      className="w-full h-full rounded-[35px] " 
      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-weather/draw1.webp" 
      alt="#"
      ></img>

      <div 
      className="absolute top-0 left-0 p-[12%] text-black"
      >
        <h3
        className="text-xl font-semibold "
        >
          Juneau, Alaska, US
        </h3>
        <h1
        className="text-5xl tracking-widest pl-[5px] pt-4"
        >
          {weatherinfo.temp?weatherinfo.temp:'00.00'}<sup>o</sup>C
        </h1>
        <p
        className="mt-8 pl-2"
        >
        Feels Like: <span className="font-semibold ">-1.08 °C</span> 
        </p>
        <h4
        className="mt-2 font-semibold pl-2"
        >Snowy
        </h4>

      </div>
        
    </div>
  )
}

export default Weather
