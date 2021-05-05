import React, {useEffect, useState} from 'react';
import SidebarSearch from "./components/SidebarSearch";
import Main from "./components/Main";
import {AppStyled} from './appStyled'
// import {todaysMetrics, dailyMetrics} from "./metricData";
import {getZip} from "./helpers/getZip";
import {getWeather} from "./helpers/getWeather";
import {SidebarWeather} from "./components/SidebarWeather";
import {SidebarStyled} from "./components/SidebarWeather/sidebarStyled";

function App() {

  const [unitType, setUnitType] = useState("imperial");
  const [isSidebarSearchView, setIsSidebarSearchView] = useState(true);
  const [sidebarError, setSidebarError] = useState(false);
  // const [isLoaded, setIsLoaded] = useState(false);
  const [location, setLocation] = useState(null);
  const [weatherData, setWeatherData] = useState(null);
  const [fiveDayWeatherData, setFiveDayWeatherData] = useState(null);
  const [todayWeatherData, setTodayWeatherData] = useState(null);
  const [activeCity, setActiveCity] = useState(null);

  const handleOnLocationSubmit = (searchStr) => {
    console.log(searchStr, 'searchStr');
    setLocation(searchStr);
  }

  const handleOnUnitToggle = (unit) => {
    setUnitType(unit);
  }

  useEffect(() => {
      if (location) {
        getZip(location)
          .then(r => {
            getWeather(r.zip_codes[0], "imperial")
              .then(rW => {
                setActiveCity(rW.city.name);
                setWeatherData(rW);
                setFiveDayWeatherData(rW?.list.slice(0, 5));
                setTodayWeatherData(rW?.list[0]);
              })
              .catch(e => {
                console.error(e);
                setSidebarError(true)
              })
          })
          .catch(e => {
            console.error(e);
          })
      }
    },
    [location]
  );

  useEffect(() => {
    if (todayWeatherData) {
      setIsSidebarSearchView(false);
    } else {
      setSidebarError(true)
    }
  }, [todayWeatherData])

  return (
    <AppStyled>
      <SidebarStyled>
        <div className="sidebar-container">
          {isSidebarSearchView ? (
            <SidebarSearch
              todayWeatherData={todayWeatherData}
              setIsSidebarSearchView={setIsSidebarSearchView}
              sidebarError={sidebarError}
              handleOnLocationSubmit={handleOnLocationSubmit}
              className="sidebar"
            />
          ) : (
            <SidebarWeather
              setIsSidebarSearchView={setIsSidebarSearchView}
              todayWeatherData={todayWeatherData}
              unitType={unitType}
              activeCity={activeCity}
            />
          )}
        </div>
      </SidebarStyled>
      <Main
        unitType={unitType}
        onUnitToggle={setUnitType}
        className="main"
        onLoadText="Enter City, State and click Search"
        fiveDayWeatherData={fiveDayWeatherData}
        todayWeatherData={todayWeatherData}
      />
    </AppStyled>
  );
}

export default App;
