import React, { useEffect, useState } from 'react';
import SidebarSearch from './components/SidebarSearch';
import Main from './components/Main';
import { AppStyled } from './appStyled';
import { getZip } from './helpers/getZip';
import { getWeather } from './helpers/getWeather';
import { getUnitTypeSymbol } from './helpers/getUnitTypeSymbol';
import { SidebarWeather } from './components/SidebarWeather';
import { SidebarStyled } from './components/SidebarWeather/sidebarStyled';
import { UnitTypeContext } from './providers/unitType';

function App() {
  const [activeUnitType, setActiveUnitType] = useState('imperial');
  const [isSidebarSearchView, setIsSidebarSearchView] = useState(true);
  const [sidebarError, setSidebarError] = useState(false);
  const [location, setLocation] = useState(null);
  const [activeLongLat, setActiveLongLat] = useState(null);
  const [fiveDayWeatherData, setFiveDayWeatherData] = useState(null);
  const [todayWeatherData, setTodayWeatherData] = useState(null);
  const [activeCity, setActiveCity] = useState(null);

  const UnitTypeProviderValue = {
    activeUnitType,
    setActiveUnitType,
    unitTypeSymbol: () => getUnitTypeSymbol(activeUnitType),
  };

  const handleOnLocationSubmit = (searchStr) => {
    setLocation(searchStr);
  };

  const getLocation = () => {
    if (!navigator.geolocation) {
      console.error('Geolocation is not supported by your browser');
    } else {
      // setStatus('Locating...');
      navigator.geolocation.getCurrentPosition(
        (position) => {
          getWeather(position.coords.latitude, position.coords.longitude, 'imperial').then((rW) => {
            setActiveCity('foobar');
            setFiveDayWeatherData(rW?.daily.slice(0, 5));
            setTodayWeatherData(rW?.current);
          });
        },
        () => {
          // setStatus('Unable to retrieve your location');
        }
      );
    }
  };

  useEffect(() => {
    getLocation();
  }, []);

  useEffect(() => {
    if (location) {
      getZip(location)
        .then((longAndLat) => {
          console.log(longAndLat, 'arg');
          getWeather(longAndLat.lat, longAndLat.lng, activeUnitType)
            .then((rW) => {
              console.log(rW, 'rwrwrw');
              setActiveCity(longAndLat.city);
              // setWeatherData(rW);
              setFiveDayWeatherData(rW?.daily.slice(0, 5));
              setTodayWeatherData(rW?.current);
            })
            .catch((e) => {
              console.error(e);
              setSidebarError(true);
            });
        })
        .catch((e) => {
          console.error(e);
        });
    }
  }, [location, activeUnitType]);

  useEffect(() => {
    if (todayWeatherData) {
      setIsSidebarSearchView(false);
    } else {
      setSidebarError(true);
    }
  }, [todayWeatherData]);

  useEffect(() => {}, [setActiveLongLat]);

  return (
    <AppStyled>
      <UnitTypeContext.Provider value={UnitTypeProviderValue}>
        <SidebarStyled>
          <div className="sidebar-container">
            {/* {activeLongLat} */}
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
