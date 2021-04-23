import React, {useState} from 'react';
import {SidebarStyled} from './sidebarStyled.js';
import Search from "../Search";
import CurrentTemp from "../CurrentTemp";
import CurrentWeather from "../CurrentWeather";
import TodaysDate from "../TodaysDate";
import SearchedCity from "../SearchedCity";
import SelectCity from '../SelectCity';
import heavyRain from "../../img/HeavyRain.png";


const Sidebar = ({metrics, handleOnCitySubmit, isSidebarSearchView, handleOnSidebarViewChange, unitType}) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [city, setCity] = useState(null);

  const handleOnCityChange = (e) => {
    setCity(e.target.value);
  }

  return (
    <SidebarStyled>
      <div className="sidebar-container">
        {!isSidebarSearchView && (
          <>
            <Search
              isSidebarSearchView={isSidebarSearchView}
              handleOnSidebarViewChange={handleOnSidebarViewChange}
            />
            <img className="current-weather-icon" src={heavyRain}/>
            <CurrentTemp
              metrics={metrics}
              unitType={unitType}
            />
            <CurrentWeather
              metric={metrics.weather[0].main}
            />
            <TodaysDate/>
            <SearchedCity metric={metrics.name}/>
          </>
        )}
      </div>
      {isSidebarSearchView && (
        <>
          <div className="close-button" onClick={() => handleOnSidebarViewChange(!isSidebarSearchView)}>X</div>
          <div className="search-bar-container">
            <div className="search-bar">
              <input className="city-search" value={city} onChange={(e) => handleOnCityChange(e) }/>
              <button
                className="city-search-submit"
                onClick={
                  () => {
                    handleOnCitySubmit(city)
                    handleOnSidebarViewChange(!isSidebarSearchView)
                  }
                }
              >
                Search
              </button>
            </div>
          </div>
          <SelectCity
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
          />
          <div className="previous-searched-cities">
            <ul>
              <li><a>Charlotte</a></li>
              <li><a>Utica</a></li>
              <li><a>Branson</a></li>
            </ul>
          </div>
        </>
      )}

    </SidebarStyled>
  );
};

export default Sidebar;
