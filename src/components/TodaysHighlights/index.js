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


const TodaysHighlights = ({todayWeatherData}) => {
  console.log(todayWeatherData, 'todayWeatherData');
  return (
    <TodaysHighlightsStyled>
      <div className="section-heading">Today's Highlights</div>
      <HighlightBoxContainer>
        <HighlightBoxStyled>
          <div className="highlight-box-heading">Wind Status</div>
          <div className="highlight-box-md metric-data">{todayWeatherData.wind_speed.toFixed(0)} mph</div>
        </HighlightBoxStyled>
        <HighlightBoxStyled>
          <div className="highlight-box-heading">Humidity</div>
          <div className="highlight-box-md metric-data">{todayWeatherData.humidity}%</div>
        </HighlightBoxStyled>
        <HighlightBoxStyled>
          <div className="highlight-box-heading">Visibility</div>
          <div className="highlight-box-md metric-data">{(todayWeatherData.visibility*0.000621371192).toFixed(0)} miles</div>
        </HighlightBoxStyled>
        <HighlightBoxStyled>
          <div className="highlight-box-heading">Air Pressure</div>
          <div className="highlight-box-md metric-data">{(todayWeatherData.pressure/100).toFixed(0)} mb</div>
        </HighlightBoxStyled>
      </HighlightBoxContainer>
    </TodaysHighlightsStyled>
  );
};

export default TodaysHighlights;
