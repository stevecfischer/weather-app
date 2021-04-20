import styled, { css } from 'styled-components';

export const PreviewDayStyled = styled.div`
  ${props => {
    return css`
      height: 177px;
      width: 120px;
      left: 200px;
      top: 862px;
      border-radius: 0px;
      background-color: #1E213A;
      color: #E7E7EB;
      font-family: Raleway;
      font-size: 16px;

      .date {
        margin-bottom: 10px;
      }
      
      .icon {
        margin-bottom: 32px;
      }
      
      .tempContainer {
        display: flex;
      }
      
      .tempLow {
        width: 50%;
      }
      
      .tempHigh {
        width: 50%;
      }
    `;
  }}
`;
