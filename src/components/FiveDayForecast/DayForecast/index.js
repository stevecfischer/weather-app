import React, {useContext} from 'react';
import {DayForecastStyled} from "./DayForecastStyled";
import {UnitTypeContext} from "../../../providers/unitType";

const DayForecast = ({date,dayWeather, dayTempMin, dayTempMax}) => {
  const {unitTypeSymbol} = useContext(UnitTypeContext);
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
        <div className="temp tempLow">{dayTempMin.toFixed(0)}&#176;{unitTypeSymbol()}</div>
        <div className="temp tempHigh">{dayTempMax.toFixed(0)}&#176;{unitTypeSymbol()}</div>
      </div>
    </DayForecastStyled>
  );
};

export default DayForecast;
