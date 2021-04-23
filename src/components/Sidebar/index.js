import React, {useState} from 'react';
import {SidebarStyled} from './sidebarStyled.js';
import Search from "../Search";
import CurrentTemp from "../CurrentTemp";
import CurrentWeather from "../CurrentWeather";
import TodaysDate from "../TodaysDate";
import SearchedCity from "../SearchedCity";
import SelectedCityOption from '../SelectedCityOption';
import heavyRain from "../../img/HeavyRain.png";



const Sidebar = ({isSidebarSearchView, handleOnSidebarViewChange, unitType}) => {
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <SidebarStyled>
      {!isSidebarSearchView && (
        <>
          <Search
            isSidebarSearchView={isSidebarSearchView}
            handleOnSidebarViewChange={handleOnSidebarViewChange}
          />
          <img className="current-weather-icon" src={heavyRain}/>
          <CurrentTemp
            unitType={unitType}
          />
          <CurrentWeather/>
          <TodaysDate/>
          <SearchedCity/>
        </>
      )}
      {isSidebarSearchView && (
        <>
          <div className="close-button" onClick={()=> handleOnSidebarViewChange(!isSidebarSearchView)}>X</div>
          <div className="searchBarContainer">
            <div className="search-bar">
              <input className="city-search" value="Charlotte" />
              <button className="city-search-submit">Search</button>
            </div>
          </div>
          <SelectedCityOption
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
          />
        </>
      )}
    </SidebarStyled>
  );
};

export default Sidebar;
