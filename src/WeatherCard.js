import React, { useEffect } from "react";

export default function WeatherCard(props) {
  let hours=''
  useEffect(() => {
    console.log("this is props", props);
    // let date = new Date(props.data.sys.sunrise * 1000)
    //  hours = date.getHours()
    // console.log(hours)
  });

  return (
    <div className="weatherCard">

    <div className="weatherIconHolder" style={{ "background-color": "grey" }}>
      <img src={props.img} alt="weather_icon" className="weatherIcon" />
    </div>
      <div className="weatherCardInfoHolder">
      <h1>{props.data.name}</h1>
      <h1>{props.main.temp} <span>&#8457;</span></h1>
      <h3> {props.description}</h3>
    
      </div>

    </div>
  );
}
