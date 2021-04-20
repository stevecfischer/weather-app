import React from 'react';
import PropTypes from 'prop-types';
import {PreviewDayStyled} from "./PreviewDayStyled";

const PreviewDay = ({metrics}) => {
  console.log(metrics, 'props');
  return (
    <PreviewDayStyled>
      <div className="date">{metrics.date}</div>
      <div className="icon">{metrics.icon}</div>
      <div className="tempContainer">
        <div className="tempLow">{metrics.tempLow}</div>
        <div className="tempHigh">{metrics.tempHigh}</div>
      </div>
    </PreviewDayStyled>
  );
};

PreviewDay.propTypes = {
  metrics: PropTypes.shape({
    date: PropTypes.string,
    icon: PropTypes.string,
    tempLow: PropTypes.string,
    tempHigh: PropTypes.string,
  }),
};

export default PreviewDay;
