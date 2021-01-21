import React, { useState } from "react";
import "./App.css";
import WeatherCard from "./WeatherCard";


export default function App() {
  const [zip, setZip] = useState("");
  const [weather, setWeather] = useState({});
  const [show, setShow] = useState(false);
  const [img, setImg] = useState("");
  const [description, setDescription] = useState("");
  const [main, setMain] = useState({});

  const handleSubmit = async(e) => {
    e.preventDefault();
    let url = `https://api.openweathermap.org/data/2.5/weather?zip=${zip},us&units=imperial&appid=c9a0604ff76350b32823210bc6388bcb`;
    console.log(url)
    await fetch(url)
      .then((res) => res.json())
      // .then((data) => console.log(data.weather))
      .then((data) => {
        setWeather(data);
        setDescription(data.weather[0].description);
        setMain(data.main);
        let icon = data.weather[0].icon
        let imgString = `http://openweathermap.org/img/wn/${icon}@2x.png`;
        setImg(imgString);
      })


    setShow(true);
  };

  const handleChange = (e) => {
    e.preventDefault();
    setZip(e.target.value);
  };

  return (
    <div className="App">
      <h4>Enter Zip Code Below:</h4>
      <form onSubmit={handleSubmit}>
        <label for="zip">Zip Code : </label>
        <input name="zip" value={zip} onChange={handleChange} />
        <input type="submit" name="" value="Get Weather" />
      </form>
      {show ? (
        <WeatherCard
          data={weather}
          img={img}
          main={main}

          description={description}
        />
      ) : (
        ""
      )}
    </div>
  );
}
