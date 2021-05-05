import React from 'react';
import ToggleUnit from "../ToggleUnit";
import FiveDayForecast from "../FiveDayForecast";
import {MainStyled} from "./MainStyled";
import TodaysHighlights from "../TodaysHighlights";

const Main = ({fiveDayWeatherData, onLoadText, todayWeatherData}) => {
  console.log(fiveDayWeatherData, 'fiveDayForecast');

  return (
    <MainStyled>
      <div className="main-container">
        {(fiveDayWeatherData && todayWeatherData) ? (
          <>
            <ToggleUnit />
            <FiveDayForecast
              fiveDayWeatherData={fiveDayWeatherData}
            />
            <TodaysHighlights
              todayWeatherData={todayWeatherData}
            />
          </>
        ) : (
          <h1>{onLoadText}</h1>
        )}

      </div>
    </MainStyled>
  );
};

export default Main;



