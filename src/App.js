import React, {useEffect, useState} from 'react';
import SidebarSearch from "./components/SidebarSearch";
import Main from "./components/Main";
import {AppStyled} from './appStyled'
import {getZip} from "./helpers/getZip";
import {getWeather} from "./helpers/getWeather";
import {getUnitTypeSymbol} from "./helpers/getUnitTypeSymbol";
import {SidebarWeather} from "./components/SidebarWeather";
import {SidebarStyled} from "./components/SidebarWeather/sidebarStyled";
import {UnitTypeContext} from "./providers/unitType";

function App() {
  const [activeUnitType, setActiveUnitType] = useState("imperial");
  const [isSidebarSearchView, setIsSidebarSearchView] = useState(true);
  const [sidebarError, setSidebarError] = useState(false);
  // const [isLoaded, setIsLoaded] = useState(false);
  const [location, setLocation] = useState(null);
  const [weatherData, setWeatherData] = useState(null);
  const [fiveDayWeatherData, setFiveDayWeatherData] = useState(null);
  const [todayWeatherData, setTodayWeatherData] = useState(null);
  const [activeCity, setActiveCity] = useState(null);

  const UnitTypeProviderValue = {
    activeUnitType,
    setActiveUnitType,
    unitTypeSymbol: () => getUnitTypeSymbol(activeUnitType),
  }

  const handleOnLocationSubmit = (searchStr) => {
    setLocation(searchStr);
  }

  useEffect(() => {
      if (location) {
        getZip(location)
          .then(r => {
            getWeather(r.zip_codes[0], activeUnitType)
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
    [location,activeUnitType]
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
      <UnitTypeContext.Provider value={UnitTypeProviderValue}>
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
                activeCity={activeCity}
              />
            )}
          </div>
        </SidebarStyled>
        <Main
          className="main"
          onLoadText="Enter City, State and click Search"
          fiveDayWeatherData={fiveDayWeatherData}
          todayWeatherData={todayWeatherData}
        />
      </UnitTypeContext.Provider>
    </AppStyled>
  );
}

export default App;
