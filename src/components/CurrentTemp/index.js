import React, {Fragment} from 'react';
import styled, {css} from 'styled-components';

const CurrentTempStyled = styled.div`
  ${props => {
    return css`
      color: #E7E7EB;
      margin-bottom: 90px;

      .tempInt {
        font-family: Raleway;
        font-style: normal;
        font-weight: 500;
        font-size: 144px;
        line-height: 169px;
      }

      .unitType {
        font-size: 48px;
        color: #A09FB1;
        line-height: 56px;
      }
    `;
  }}
`;

const CurrentTemp = ({metrics, unitType}) => {
  return (
    <CurrentTempStyled>
      <span className="tempInt">{metrics.main.temp.toFixed(0)}</span>
      <span className="unitType">&#176; {unitType}</span>
    </CurrentTempStyled>
  );
};

export default CurrentTemp;
