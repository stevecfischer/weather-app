import React from 'react';
import styled, { css } from 'styled-components';

const TodaysDateStyled = styled.div`
  ${() => {
    return css`
      color: #88869d;
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

const TodaysDate = ({ todayDate }) => {
  return (
    <TodaysDateStyled>
      <div className="today-label">Today</div>
      <div className="today-dot">.</div>
      <div className="today-date">{todayDate}</div>
    </TodaysDateStyled>
  );
};

export default TodaysDate;
