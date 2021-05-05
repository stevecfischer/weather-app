import React, {useContext} from 'react';
import Search from "../Search";
import CurrentTemp from "../CurrentTemp";
import TodaysDate from "../TodaysDate";
import SearchedCity from "../SearchedCity";
import getDate from "../../helpers/getDate";
import {UnitTypeContext} from "../../providers/unitType";


export const SidebarWeather = ({
                                 sidebarError,
                                 todayWeatherData,
                                 setIsSidebarSearchView,
                                 activeCity,
                               }) => {
  const bar = useContext(UnitTypeContext)
  console.log(bar, 'unitcontext-bar');
  const todayDate = getDate(todayWeatherData.dt)
  const handleOnCloseWeatherView = () => {
    setIsSidebarSearchView(true);
  }

  return (
    <>
      {sidebarError ? (
        <h1>Try Again</h1>
      ) : (
        <>
          <Search
            handleOnCloseWeatherView={handleOnCloseWeatherView}
          />
          <img
            className="current-weather-icon"
            src={`http://openweathermap.org/img/wn/${todayWeatherData.weather[0].icon}@2x.png`}
          />
          <CurrentTemp
            currentTemp={todayWeatherData.main.temp}
            // unitType={unitType}
          />
          <div className="weatherDesc">{todayWeatherData.weather[0].main}</div>

          <TodaysDate
            todayDate={todayDate}
          />
          <SearchedCity metric={activeCity}/>
        </>
      )}

      {/*{isSidebarSearchView && (*/}
      {/*  <>*/}
      {/*    <div className="close-button" onClick={() => handleOnSidebarViewChange(!isSidebarSearchView)}>X</div>*/}
      {/*    <div className="search-bar-container">*/}
      {/*      <div className="search-bar">*/}
      {/*        <input className="city-search" value={city} onChange={(e) => handleOnCityChange(e)}/>*/}
      {/*        <button*/}
      {/*          className="city-search-submit"*/}
      {/*          onClick={*/}
      {/*            () => {*/}
      {/*              handleOnCitySubmit(city)*/}
      {/*              handleOnSidebarViewChange(!isSidebarSearchView)*/}
      {/*            }*/}
      {/*          }*/}
      {/*        >*/}
      {/*          Search*/}
      {/*        </button>*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*    <SelectLocation*/}
      {/*      selectedOption={selectedOption}*/}
      {/*      setSelectedOption={setSelectedOption}*/}
      {/*    />*/}
      {/*    /!*<div className="previous-searched-cities">*!/*/}
      {/*    /!*  <ul>*!/*/}
      {/*    /!*    <li><a>Charlotte</a></li>*!/*/}
      {/*    /!*    <li><a>Utica</a></li>*!/*/}
      {/*    /!*    <li><a>Branson</a></li>*!/*/}
      {/*    /!*  </ul>*!/*/}
      {/*    /!*</div>*!/*/}
      {/*  </>*/}
      {/*)}*/}
    </>
  )
};
