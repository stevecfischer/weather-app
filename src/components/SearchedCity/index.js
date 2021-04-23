import React, {Fragment} from 'react';
import styled, { css } from 'styled-components';

export const SearchedCityStyled = styled.div`
  ${props => {
    return css`
      font-family: Raleway;
      font-style: normal;
      font-weight: 600;
      font-size: 18px;
      line-height: 21px;
      color: #888;
      display: flex;
      width: 200px;
      justify-content: space-around;
    `;
  }}
`;



const SearchedCity = ({metric}) => {
  return (
    <SearchedCityStyled>
      <div className="searched-city-pin">P</div>
      <div className="searched-city-name">{metric}</div>
    </SearchedCityStyled>
  );
};

export default SearchedCity;
