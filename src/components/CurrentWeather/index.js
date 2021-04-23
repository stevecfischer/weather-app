import React, {Fragment} from 'react';
import styled, { css } from 'styled-components';

export const CurrentWeatherStyled = styled.div`
  ${props => {
  return css`
    font-family: Raleway;
    font-style: normal;
    font-weight: 600;
    font-size: 36px;
    line-height: 42px;
    text-align: center;
    color: #A09FB1;
    margin-bottom: 90px;
    `;
}}
`;


const CurrentWeather = ({metric}) => {
  return (
    <CurrentWeatherStyled>
      {metric}
    </CurrentWeatherStyled>
  );
};

export default CurrentWeather;
