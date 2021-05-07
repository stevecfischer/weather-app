import React from 'react';
import styled, { css } from 'styled-components';
import { MyLocation } from '@material-ui/icons';

const SearchStyled = styled.div`
  ${() => {
    return css`
      display: flex;
      justify-content: space-between;
      width: 400px;

      .search-button {
        color: #e7e7eb;
        text-align: center;
        padding: 10px 18px;
        background-color: #6e707a;
        cursor: pointer;
      }

      .search-button-icon {
        width: 40px;
        height: 40px;
        background: rgba(255, 255, 255, 0.2);
        border-radius: 50%;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        display: flex;
        justify-content: center;
        align-items: center;
      }
    `;
  }}
`;

const Search = ({ handleOnCloseWeatherView }) => {
  return (
    <SearchStyled>
      <button type="button" className="search-button" onClick={() => handleOnCloseWeatherView()}>
        Search
      </button>
      <div className="search-button-icon" onClick={() => handleOnCloseWeatherView()}>
        <MyLocation />
      </div>
    </SearchStyled>
  );
};

export default Search;
