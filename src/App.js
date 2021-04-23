import React, {useEffect, useState} from 'react';
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
import {AppStyled} from './appStyled'
import {todaysMetrics, dailyMetrics} from "./metricData";


function App() {
  const [unitType, setUnitType] = useState("C");
  const [isSidebarSearchView, setIsSidebarSearchView] = useState(false);
  const [selectedCity, setSelectedCity] = useState(null);

  const handleOnCitySelect = (city) => {
    setSelectedCity(city);
  }

  const handleOnClick = (unit) => {
    setUnitType(unit);
  }



  return (
    <AppStyled>
        <Sidebar
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
    </AppStyled>
  );
}

export default App;
