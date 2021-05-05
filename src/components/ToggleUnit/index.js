import React, {useContext} from 'react';
import styled, {css} from 'styled-components';
import {UnitTypeContext} from "../../providers/unitType";


const ToggleUnitStyled = styled.div`
  ${props => {
    return css`
      display: flex;
      flex-direction: row;
      margin-bottom: 65px;
      justify-content: flex-end;
      margin-right: 40px;


      .unitCircle {
        text-align: center;
        margin-left: 10px;
        width: 40px;
        height: 40px;
        border-radius: 54px;
        background-color: #585676;
      }

      .unitCircle-active {
        background-color: #E7E7EB;
      }
    `
  }}`
;


const ToggleUnit = () => {
  const {activeUnitType, setActiveUnitType} = useContext(UnitTypeContext);
  return (
    <ToggleUnitStyled>
      <div
        className={`celsius unitCircle ${activeUnitType === "metric" ? "unitCircle-active" : ""}`}
        onClick={() => setActiveUnitType("metric")}
      >
        C
      </div>
      <div
        className={`celsius unitCircle ${activeUnitType === "imperial" ? "unitCircle-active" : ""}`}
        onClick={() => setActiveUnitType("imperial")}
      >
        F
      </div>
    </ToggleUnitStyled>
  );
};

export default ToggleUnit;
