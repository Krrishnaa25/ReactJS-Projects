useEffect(() => {
    if(weatherTrait) {
      switch (weatherTrait) {
        case "Clouds":setWeatherSate("wi-day-cloudy");
          break;
        case "Haze":setWeatherSate("wi-fog");
            break;
        case "Clear":setWeatherSate("wi-day-sunny");
          break;
        default:setWeatherSate("wi-day-sunny");
          break;
      }
    }
  
  }, [weatherTrait])

  const [weatherSate, setWeatherSate] = useState("");
  

  const [destInfo, setDestInfo] = useState({});

  const { temp, humidity, pressure, weatherTrait, name, speed, country, sunset } = destInfo;
  
  let sec = sunset
  let date = new Date(sec * 1000);
  let newSunset = `${date.getHours()}:${date.getMinutes()}`

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

