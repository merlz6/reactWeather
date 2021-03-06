import React, { useState, useEffect } from "react";
import "./App.css";
import WeatherCard from "./WeatherCard";


export default function App() {
  const [zip, setZip] = useState("");
  const [weather, setWeather] = useState({});
  const [show, setShow] = useState(false);
  const [img, setImg] = useState("");
  const [description, setDescription] = useState("");
  const [main, setMain] = useState({});
  const [coordinates, setCoordinates]= useState({})


useEffect(()=> {

})

  const handleSubmit = async(e) => {
    e.preventDefault();

    //local
    let url = `https://api.openweathermap.org/data/2.5/weather?zip=${zip},us&units=imperial&appid={Your API KEY}`;


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
        setCoordinates(data.coord)
        // getOneCall(data.coord)
      })


    setShow(true);
  };



  const handleChange = (e) => {
    e.preventDefault();
    setZip(e.target.value);
  };



  return (
    <div className="App">
      <div style={{'margin-top':'100px'}}>
      <h4>Enter Zip Code Below:</h4>
      <form onSubmit={handleSubmit}>
        <label for="zip">Zip Code : </label>
        <input name="zip" value={zip} onChange={handleChange} />
        <input type="submit" name="" value="Get Weather" />
      </form>
      </div>
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
