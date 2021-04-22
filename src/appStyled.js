import styled, { css } from 'styled-components';

export const AppStyled = styled.div`
  ${props => {
    return css`
      display: flex;
      flex-wrap: wrap;
      height: 100vh;
    `;
  }}
`;
