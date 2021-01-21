import React, { useEffect } from "react";

export default function WeatherCard(props) {
  useEffect(() => {
    console.log("this is props", props);
  });

  return (
    <div className="weatherCard">
      <h1>{props.data.name}'s Current Weather</h1>
      <h1>{props.main.temp} <span>&#8457;</span></h1>
      <h4> {props.description}</h4>
      <div style={{ "background-color": "grey" }}>
        <img src={props.img} alt="weather_icon" />
      </div>
    </div>
  );
}
