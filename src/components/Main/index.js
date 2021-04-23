import React, {useEffect, useState} from 'react';
import Grid from '@material-ui/core/Grid';
import ToggleUnit from "../ToggleUnit";
import PreviewDays from "../PreviewDays";
import {MainStyled} from "./MainStyled";
import TodaysHighlights from "../TodaysHighlights";

const Main = ({dailyMetrics, todaysMetrics, onUnitToggle, unitType}) => {

  return (
    <MainStyled>
      <div className="main-container">
        <ToggleUnit
          unitType={unitType}
          onUnitToggle={onUnitToggle}
        />
        <PreviewDays
          dailyMetrics={dailyMetrics}
          unitType={unitType}
        />
        <TodaysHighlights todaysMetrics={todaysMetrics}/>
      </div>
    </MainStyled>
  );
};

export default Main;
