import React from 'react';
import styled, {css} from 'styled-components';
import DayForecast from "./DayForecast";
import getDate from "../../helpers/getDate";

export const FiveDayForecastStyled = styled.div`
  ${props => {
    return css`
      display: flex;
      flex-direction: row;
      margin-bottom: 70px;
      justify-content: space-around;
    `;
  }}`
;


const FiveDayForecast = ({fiveDayWeatherData}) => {
  console.log(fiveDayWeatherData, 'fiveDayWeatherData');
  return (
    <FiveDayForecastStyled>
      {fiveDayWeatherData.map((day) => {
        return (
          <DayForecast
            date={getDate(day.dt)}
            dayWeather={day.weather[0]}
            dayTempMax={day.temp.max}
            dayTempMin={day.temp.min}
          />
        )
      })}
    </FiveDayForecastStyled>
  );
};

export default FiveDayForecast;
