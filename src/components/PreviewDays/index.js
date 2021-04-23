import React, {Fragment} from 'react';
import PreviewDay from "./PreviewDay";
import styled, {css} from 'styled-components';

export const PreviewDaysStyled = styled.div`
  ${props => {
    return css`
      display: flex;
      flex-direction: row;
      margin-bottom: 70px;
      justify-content: space-around;
    `;
  }}`
;


const PreviewDays = ({dailyMetrics, unitType}) => {
  return (
    <PreviewDaysStyled>
      {['Sunday', 'Monday', 'Tuesday', 'wednesday', 'thursday'].map((value) => (
        <PreviewDay unitType={unitType} metrics={dailyMetrics[value.toLocaleLowerCase()]}/>
      ))}
    </PreviewDaysStyled>
  );
};

export default PreviewDays;
