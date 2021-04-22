import React, {Fragment} from 'react';
import Grid from '@material-ui/core/Grid';

import styled, { css } from 'styled-components';

const TodaysDateStyled = styled.div`
  ${props => {
    return css`
      color: #88869D;
      display: flex;
      flex-direction: row;
      font-family: Raleway;
      font-style: normal;
      font-weight: 500;
      font-size: 18px;
      line-height: 21px;
      width: 200px;
      justify-content: space-around;
      margin-bottom: 30px; 
      
      .today-label {
        
      }
      
      .today-dot {
        
      }
      
      .today-date {
        
      }
    `;
  }}
`;

const TodaysDate = () => {
  return (
    <TodaysDateStyled>
      <div className="today-label">Today</div>
      <div className="today-dot">.</div>
      <div className="today-date">Fri, 5 Jun</div>
    </TodaysDateStyled>
  );
};

export default TodaysDate;
