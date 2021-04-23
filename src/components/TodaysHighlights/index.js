import React from 'react';
import styled, {css} from 'styled-components';


const TodaysHighlightsStyled = styled.div`
  ${props => {
    return css`
      width: 100%;

      .section-heading {
        font-family: Raleway;
        font-style: normal;
        font-weight: bold;
        font-size: 24px;
        line-height: 28px;
        color: #E7E7EB;
        margin-bottom: 30px;
        text-align: left;
      }
    `;
  }}
`;

const HighlightBoxStyled = styled.div`
  ${props => {
    return css`
      width: 328px;
      background-color: #1E213A;
      color: #E7E7EB;
      text-align: center;
      margin:0 20px 20px 0;

      .highlight-box-heading {
        font-family: Raleway;
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 19px;
        margin-top: 20px;
        margin-bottom: 10px;
      }

      .highlight-box-md {
        font-family: Raleway;
        font-style: normal;
        font-weight: bold;
        font-size: 64px;
        line-height: 75px;
        margin-bottom: 30px;
      }

      .highlight-box-additional {
        margin-bottom: 35px;
      }
    `;
  }}
`;

const HighlightBoxContainer = styled.div`
  ${props => {
    return css`
      display: flex;
      flex-wrap: wrap;
      width: 100%;
    `;
  }}
`;


const TodaysHighlights = ({todaysMetrics}) => {
  return (
    <TodaysHighlightsStyled>
      <div className="section-heading">Today's Highlights</div>
      <HighlightBoxContainer>
        {todaysMetrics.map((metric, i) => (
          <HighlightBoxStyled>
            <div className="highlight-box-heading">{metric.heading}</div>
            <div className="highlight-box-md metric-data">{metric.data}</div>
            {metric.additional !== "" && (
              <div className="highlight-box-additional">{metric.additional}</div>
            )}
          </HighlightBoxStyled>
        ))}
      </HighlightBoxContainer>
    </TodaysHighlightsStyled>
  );
};

export default TodaysHighlights;
