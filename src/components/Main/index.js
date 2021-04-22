import React, {useEffect, useState} from 'react';
import Grid from '@material-ui/core/Grid';
import ToggleUnit from "../ToggleUnit";
import PreviewDays from "../PreviewDays";
import {MainStyled} from "./MainStyled";
import TodaysHighlights from "../TodaysHighlights";

const Main = ({onUnitToggle, unitType}) => {

  return (
    <MainStyled>
      <div className="main-container">
        <ToggleUnit
          unitType={unitType}
          onUnitToggle={onUnitToggle}
        />
        <PreviewDays
          unitType={unitType}
        />
        <TodaysHighlights/>
      </div>
    </MainStyled>
  );
};

export default Main;
