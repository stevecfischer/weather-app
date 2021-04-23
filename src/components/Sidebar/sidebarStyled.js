import styled, { css } from 'styled-components';
import cloudyBg from "../../img/Cloud-background.png";

export const SidebarStyled = styled.div`
  ${props => {
    return css`
      padding-top: 40px;
      background-color: #1E213A;
      flex-basis: 33%;
      flex-grow: 1;

      
      .sidebar-container {
        width: 80%;
        margin: 0 auto;
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: flex-start;
      }
      
      
      .current-weather-icon {
        display: inline-block;
        margin-bottom: 90px;
      }
      
      
      // &::after{
      //   content: ""; // ::before and ::after both require content
      //   position: absolute;
      //   top: 0;
      //   left: 0;
      //   width: 80%;
      //   height: 100%;
      //   background: url(${cloudyBg}) no-repeat;
      //   opacity: .25;
      // }
      
      
      .close-button {
        color: #fff;
        font-size: 25px;
        margin-bottom: 20px;
        text-align: right;
        cursor: pointer;
      }
      
      .search-bar-container {
        width: 100%;
        margin-bottom: 30px;
      }

      .search-bar-container .search-bar {
        display: flex;
        justify-content: space-between;
        width: 100%;
      }
      
      .search-bar .city-search {
        border: 1px solid #E7E7EB;
        box-sizing: border-box;
        width: 268px;
        height: 48px;
        color: #616475;
        font-family: Raleway;
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 19px;
        padding-left: 10px;
      }
      
      .city-search-submit {
        width: 86px;
        height: 48px;
        background-color: #3C47E9;
        color: #E7E7EB;
      }
      
      .previous-searched-cities {
        font-family: Raleway;
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 19px;
      }

      .previous-searched-cities ul li {
        margin-bottom: 20px;
      }
    `;
  }}
`;
