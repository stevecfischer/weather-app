import React, { useContext } from 'react';
import Search from '../Search';
import CurrentTemp from '../CurrentTemp';
import TodaysDate from '../TodaysDate';
import SearchedCity from '../SearchedCity';
import getDate from '../../helpers/getDate';
import { UnitTypeContext } from '../../providers/unitType';

export const SidebarWeather = ({ sidebarError, todayWeatherData, setIsSidebarSearchView, activeCity }) => {
  const bar = useContext(UnitTypeContext);
  const todayDate = getDate(todayWeatherData.dt);
  const handleOnCloseWeatherView = () => {
    setIsSidebarSearchView(true);
  };

  return (
    <>
      {sidebarError ? (
        <h1>Try Again</h1>
      ) : (
        <>
          <Search handleOnCloseWeatherView={handleOnCloseWeatherView} />
          <img
            alt={todayWeatherData.weather[0].main}
            className="current-weather-icon"
            src={`http://openweathermap.org/img/wn/${todayWeatherData.weather[0].icon}@2x.png`}
          />
          <CurrentTemp currentTemp={todayWeatherData.temp} />
          <div className="weatherDesc">{todayWeatherData.weather[0].main}</div>

          <TodaysDate todayDate={todayDate} />
          <SearchedCity metric={activeCity} />
        </>
      )}
    </>
  );
};
