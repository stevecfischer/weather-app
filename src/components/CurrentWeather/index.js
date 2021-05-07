import React from 'react';
import styled, { css } from 'styled-components';

export const CurrentWeatherStyled = styled.div`
  ${() => {
    return css`
      font-family: Raleway;
      font-style: normal;
      font-weight: 600;
      font-size: 36px;
      line-height: 42px;
      text-align: center;
      color: #a09fb1;
      margin-bottom: 90px;
    `;
  }}
`;

const CurrentWeather = ({ metric }) => {
  return <CurrentWeatherStyled>{metric}</CurrentWeatherStyled>;
};

export default CurrentWeather;
