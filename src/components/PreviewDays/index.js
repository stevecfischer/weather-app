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


const PreviewDays = ({unitType}) => {
  const metrics = {
    sunday: {
      date: "Sun 7, Jun",
      icon: "",
      tempLow: "15",
      tempHigh: "70",
    },
    monday: {
      date: "Mon 8, Jun",
      icon: "icon here",
      tempLow: "25",
      tempHigh: "40",
    },
    tuesday: {
      date: "Tue 9, Jun",
      icon: "icon here",
      tempLow: "50",
      tempHigh: "70",
    },
    wednesday: {
      date: "Tue 9, Jun",
      icon: "icon here",
      tempLow: "50",
      tempHigh: "70",
    },
    thursday: {
      date: "Tue 9, Jun",
      icon: "icon here",
      tempLow: "50",
      tempHigh: "70",
    },
  }

  return (
    <PreviewDaysStyled>
      {['Sunday', 'Monday', 'Tuesday', 'wednesday', 'thursday'].map((value) => (
        <PreviewDay unitType={unitType} metrics={metrics[value.toLocaleLowerCase()]}/>
      ))}
    </PreviewDaysStyled>
  );
};

export default PreviewDays;
