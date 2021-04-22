import styled, { css } from 'styled-components';
import cloudyBg from "../../img/Cloud-background.png";

export const SidebarStyled = styled.div`
  ${props => {
    return css`
      padding-top: 40px;
      background-color: #1E213A;
      flex-basis: 33%;
      flex-grow: 1;
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: flex-start;
      
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
    `;
  }}
`;
