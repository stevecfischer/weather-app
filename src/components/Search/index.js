import React, {Fragment} from 'react';
import styled, {css} from 'styled-components';

const SearchStyled = styled.div`
  ${props => {
    return css`
      display: flex;
      justify-content: space-between;
      width: 400px;
    
      .search-button {
        color: #E7E7EB;
        text-align: center;
        padding: 10px 18px;
        background-color: #6E707A;
        cursor: pointer;
      }
      
      .search-button-icon {
        width: 40px;
        height: 40px;
        background: rgba(255, 255, 255, 0.2);
        border-radius: 50%;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      }
    `;
  }}
`;

const Search = ({isSidebarSearchView, handleOnSidebarViewChange}) => {
  return (
    <SearchStyled>
      <button className="search-button" onClick={() => handleOnSidebarViewChange(!isSidebarSearchView)}>
        Search
      </button>
      <div className="search-button-icon">I</div>
    </SearchStyled>
  );
};

export default Search;
