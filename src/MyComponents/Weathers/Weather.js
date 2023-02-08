import axios from "axios";
import { useState } from "react";
import './Weather.css';
import cloudy from './cloudy.png'
import raining from './raining.png'
import sun from './sun.png'
function App() {


  const apiKey = "f56f24967aaf51182d1d4df628297c6d"
  const [inputCity, setInputCity] = useState("")
  const [data, setData] = useState({})


  const getWetherDetails = (cityName) => {
    if (!cityName) return
    const apiURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + apiKey
    axios.get(apiURL).then((res) => {
      setData(res.data)
    }).catch((err) => {
      console.log("err", err)
    })
  }

  const handleChangeInput = (e) => {
    setInputCity(e.target.value)
  }

  const handleSearch = () => {
    getWetherDetails(inputCity)
  }
  let ConvertTime = (time) => {
    var date = new Date(time * 1000);
    var hours = date.getHours();
    var minutes = "0" + date.getMinutes();
    var seconds = "0" + date.getSeconds();
    var formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
    return formattedTime
  }

  let temperature = ((data?.main?.temp) - 273.15).toFixed(2)
  let iconImage = (temperature) => {
    if (temperature > 25) {
      return sun
    } if (temperature >= 15) {
      return cloudy
    } else {
      return raining
    }
  }
  function degreeToDirection(degree) {
    const directions = ["North", "North-East", "East", "SouthEast", "South", "SouthWest", "West", "NorthWest"];
    return directions[Math.floor(((degree + 22.5) % 360) / 45)];
  }


  return (
    <div className="col-md-12">
      <div className="wetherBg">
        <h1 className="heading">Weather App</h1>

        <div className="d-grid gap-3 col-4 mt-4">
          <input type="text" className="form-control"
            value={inputCity}
            onChange={handleChangeInput} />
          <button className="btn btn-primary" type="button"
            onClick={handleSearch}
          >Search</button>
        </div>
      </div>

      {Object.keys(data).length > 0 &&
        <div className="col-md-12 text-center mt-5">

          <div className="shadow rounded wetherResultBox">

            <div className="middiumbox">
              <div className="windspeed">
                <h2 className="words">Wind Speed</h2>
                <h2 className="number">{((data?.wind.speed) * 3.6).toFixed(2)} Km/h</h2>
              </div>
              <div className="direction">
                <h2 className="words">Direction</h2>
                <h2 className="number">{degreeToDirection(data?.wind.deg)}</h2>
              </div>
            </div>

            <div className="middiumbox">
            <div className="currentTime">
            <h className="words"> Weather Condition</h>
            <h1 className="number">{(data?.weather[0].description)}</h1>
          </div>

            </div>
          </div>

          <div className="shadow rounded wetherResultBox">
            <div className=" middiumbox">
              <img className="weathorIcon" src={iconImage(temperature)} />
              <div className="weathorCity"> {data?.name},{data?.sys.country} </div>
              <h6 className="weathorTemp">{temperature}°C</h6>
            </div>
            <div className=" middiumbox">
              <div className="sunrise">
                <h2 className="words">Pressure</h2>
                <h2 className="number">{(data?.main.pressure)}hPa</h2>
              </div>
              <div className="sunset">
                <h2 className="words">Humidity</h2>
                <h2 className="number">{(data?.main.humidity)}%</h2>
              </div>
            </div>
          </div>


          <div className="shadow rounded wetherResultBox">
            <div className="middiumbox">
              <div className="currentTime">
                <h className="words"> Current time</h>
                <h2 className="number">{ConvertTime(data?.dt)}</h2>
              </div>


            </div>
            <div className="middiumbox">
              <div className="sunrise">
                <h1 className="words">Sunrise</h1>
                <h2 className="number">{ConvertTime(data?.sys.sunrise)}</h2>
              </div>
              <div className="sunset">
                <h1 className="words">Sunrise</h1>
                <h2 className="number">{ConvertTime(data?.sys.sunset)}</h2>
              </div>

            </div>
          </div>

        </div>
      }
    </div>
  );
}

export default App;
