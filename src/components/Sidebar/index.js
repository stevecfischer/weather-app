import React, {Fragment} from 'react';
import {SidebarStyled} from './sidebarStyled.js';
import Grid from '@material-ui/core/Grid';
import Search from "../Search";
import CurrentTemp from "../CurrentTemp";
import CurrentWeather from "../CurrentWeather";
import TodaysDate from "../TodaysDate";
import SearchedCity from "../SearchedCity";
import heavyRain from "../../img/HeavyRain.png";

const Sidebar = ({unitType}) => {
  return (
    <SidebarStyled>
      <Search/>
      <img className="current-weather-icon" src={heavyRain} />
      <CurrentTemp
        unitType={unitType}
      />
      <CurrentWeather />
      <TodaysDate/>
      <SearchedCity/>
    </SidebarStyled>
  );
};

export default Sidebar;
