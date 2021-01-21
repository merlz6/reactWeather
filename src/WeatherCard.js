import React, { useEffect } from "react";

export default function WeatherCard(props) {
  useEffect(() => {
    console.log("this is props", props);
  });

  return (
    <div className="weatherCard">
      <h1>{props.data.name} Current Weather</h1>
      <h1>{props.main.temp} <span>&#8457;</span></h1>

      <div style={{ "background-color": "grey" }}>
        <img src={props.img} alt="weather_icon" />
      </div>
    </div>
  );
}
