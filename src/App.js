import React, {useEffect, useState} from 'react';
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
import {AppStyled} from './appStyled'


function App() {
  const [unitType, setUnitType] = useState("C");

  // useEffect(() => {
  //
  // }, [unitType]);

  const handleOnClick = (unit) => {
    setUnitType(unit);
  }
  return (
    <AppStyled>
        <Sidebar
          className="sidebar"
          unitType={unitType}
        />
        <Main
          className="main"
          unitType={unitType}
          onUnitToggle={handleOnClick}
        />
    </AppStyled>
  );
}

export default App;
