import React from 'react';
import {DayForecastStyled} from "./DayForecastStyled";

const DayForecast = ({date,dayWeather, dayTempMin, dayTempMax}) => {
  return (
    <DayForecastStyled>
      <div className="date">{date}</div>
      <div className="icon">
        <img
          className="current-weather-icon"
          src={`http://openweathermap.org/img/wn/${dayWeather.icon}@2x.png`}
        />
      </div>
      <div className="tempContainer">
        <div className="temp tempLow">{dayTempMin}&#176;</div>
        <div className="temp tempHigh">{dayTempMax}&#176;</div>
      </div>
    </DayForecastStyled>
  );
};

export default DayForecast;
