import React, { useContext } from 'react';
import styled, { css } from 'styled-components';
import { UnitTypeContext } from '../../providers/unitType';

const ToggleUnitStyled = styled.div`
  ${() => {
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
        background-color: #e7e7eb;
        color: #585676;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .unitCircle-active {
        background-color: #585676;
        color: #e7e7eb;
      }
    `;
  }}
`;
const ToggleUnit = () => {
  const { activeUnitType, setActiveUnitType } = useContext(UnitTypeContext);
  return (
    <ToggleUnitStyled>
      <div
        className={`celsius unitCircle ${activeUnitType === 'metric' ? 'unitCircle-active' : ''}`}
        onClick={() => setActiveUnitType('metric')}
      >
        <div>C</div>
      </div>
      <div
        className={`celsius unitCircle ${activeUnitType === 'imperial' ? 'unitCircle-active' : ''}`}
        onClick={() => setActiveUnitType('imperial')}
      >
        <div>F</div>
      </div>
    </ToggleUnitStyled>
  );
};

export default ToggleUnit;
