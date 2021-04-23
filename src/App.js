import React, {useEffect, useState} from 'react';
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
import {AppStyled} from './appStyled'
import {todaysMetrics, dailyMetrics} from "./metricData";

function App() {
  const weatherAPI = 'adc5a16466b1ffa37087a9d4cb31dc30';
  const [unitType, setUnitType] = useState("f");
  const [isSidebarSearchView, setIsSidebarSearchView] = useState(false);
  const [selectedCity, setSelectedCity] = useState("13502");
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [metrics, setMetricResponse] = useState(null);

  const handleOnCitySelect = (city) => {
    setSelectedCity(city);
  }

  const handleOnClick = (unit) => {
    setUnitType(unit);
  }

  useEffect(() => {
    const unit = unitType === "f" ? "imperial" : "metric";
    fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${selectedCity}&appid=adc5a16466b1ffa37087a9d4cb31dc30&units=${unit}`)
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setMetricResponse(result);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [selectedCity]);

  const handleOnCitySubmit = (city) => {
    setSelectedCity(city);
  }

  console.log(metrics, "metrics");
  return (
    <AppStyled>
      {metrics && (
        <>
          <Sidebar
            metrics={metrics}
            handleOnCitySubmit={handleOnCitySubmit}
            selectedCity={selectedCity}
            handleOnCitySelect={handleOnCitySelect}
            isSidebarSearchView={isSidebarSearchView}
            handleOnSidebarViewChange={setIsSidebarSearchView}
            className="sidebar"
            unitType={unitType}
          />
          <Main
            todaysMetrics={todaysMetrics}
            dailyMetrics={dailyMetrics}
            className="main"
            unitType={unitType}
            onUnitToggle={handleOnClick}
          />
        </>
      )}
    </AppStyled>
  );
}

export default App;
