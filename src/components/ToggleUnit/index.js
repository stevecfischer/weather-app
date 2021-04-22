import React, {useEffect, useState} from 'react';
import Grid from '@material-ui/core/Grid';
import styled, {css} from 'styled-components';

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


const ToggleUnit = ({unitType, onUnitToggle}) => {

  return (
    <ToggleUnitStyled unitType={unitType}>
      <div className={`celsius unitCircle ${unitType === "C" ? "unitCircle-active" : ""}`}
           onClick={() => onUnitToggle("C")}>C
      </div>
      <div className={`celsius unitCircle ${unitType === "F" ? "unitCircle-active" : ""}`}
           onClick={() => onUnitToggle("F")}>F
      </div>
    </ToggleUnitStyled>
  );
};

export default ToggleUnit;
