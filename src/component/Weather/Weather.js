//https://api.openweathermap.org/data/2.5/weather?q=pune&units=metric&appid=9956257f3810b46f02366cd047eb81db

import React, { useEffect, useState } from 'react'
import './style.css'

const Weather = () => {

  const [weatherSate, setWeatherSate] = useState("");

  const [searchValue, setSearchValue] = useState("mumbai");

  const [destInfo, setDestInfo] = useState({});

  const { temp, humidity, pressure, weatherTrait, name, speed, country, sunset } = destInfo;

  let sec = sunset
  let date = new Date(sec * 1000);
  let newSunset = `${date.getHours()}:${date.getMinutes()}`

  const getWeatherInfo = async () => {

    try {

     let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=9956257f3810b46f02366cd047eb81db`
     let res = await fetch(url);
     let data = await res.json();

     const { temp, humidity, pressure } = data.main;
     const { main:weatherTrait } = data.weather[0];
     const { name } = data;
     const { speed } = data.wind;
     const { country, sunset } = data.sys;

     const weatherDestructInfo = {
      temp, humidity, pressure, weatherTrait, name, speed, country, sunset
     }

     setDestInfo(weatherDestructInfo);

    } catch (error) {
      console.log(error)
    }

  }

  useEffect(() => {
    if(weatherTrait) {
      switch (weatherTrait) {
        case "Clouds":setWeatherSate("wi-day-cloudy");
          break;
        case "Haze":setWeatherSate("wi-fog");
            break;
        case "Clear":setWeatherSate("wi-day-sunny");
          break;
        case "Smoke":setWeatherSate("wi-smoke");
          break;
        default:setWeatherSate("wi-day-sunny");
          break;
      }
    }
  
  }, [weatherTrait])
  

  useEffect(() => {
  
      getWeatherInfo();
    
  },[]);

  return (
    <>
      <div className='wrap'>
        <div className='search'>
          <input
            type="search"
            placeholder='Enter city name...'
            autoFocus
            id='search'
            className='searchTerm'
            value={searchValue}
            onChange={(e)=> setSearchValue(e.target.value)}
          />
          <button className='searchButton' type='button' onClick={getWeatherInfo}>
            Search
          </button>
        </div>
      </div>

      {/*Weather card*/}
      <article className='widget'>
        <div className='weatherIcon'>
          <i className={`wi ${weatherSate}`}> </i>
        </div>
        <div className='weatherInfo'>
          <div className='temperature'>
            <span>{temp}&deg;</span>
          </div>
          <div className="description">
            <div className='weatherCondition'> {weatherTrait} </div>
            <div className='place'> {name}, {country} </div>
          </div>
        </div>
        <div className="date"> {new Date().toLocaleString()} </div>

        {/* below section */}
        <div className='extra-temp'>
          <div className='temp-info-minmax'>
            <div className="two-sided-section">
              <p><i className={"wi wi-sunset"}></i></p>
              <p className='extra-info-leftside'>
                {newSunset} <br />
                Sunset
              </p>
            </div>

            <div className="two-sided-section">
              <p><i className={"wi wi-humidity"}></i></p>
              <p className='extra-info-leftside'>
                {humidity} <br />
                Humidity
              </p>
            </div>
          </div>

          <div className="weather-extra-info">
            <div className="two-sided-section">
              <p><i className={"wi wi-rain"}></i></p>
              <p className="extra-info-leftside">
                {pressure} <br />
                Pressure
              </p>
            </div>

            <div className="two-sided-section">
              <p><i className={"wi wi-strong-wind"}></i></p>
              <p className="extra-info-leftside">
                {speed} <br />
                Speed
              </p>
            </div>
          </div>
        </div>
      </article>

    </>
  )
}

export default Weather