import styled, { css } from 'styled-components';

export const DayForecastStyled = styled.div`
  ${() => {
    return css`
      border-radius: 0;
      padding: 18px 20px;
      color: #e7e7eb;
      background-color: #1e213a;
      font-family: Raleway;
      font-size: 16px;
      flex-direction: column;
      align-items: center;
      display: flex;
      margin-right: 30px;
      min-width: 110px;

      .date {
        margin-bottom: 10px;
      }

      .icon {
        margin-bottom: 32px;
      }

      .icon img {
        height: 60px;
        width: 55px;
      }

      .tempContainer {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: center;
      }

      .temp {
        display: flex;
        width: 100%;
        justify-content: center;
      }

      .tempLow {
        //width: 50%;
      }

      .tempHigh {
        //width: 50%;
      }
    `;
  }}
`;
