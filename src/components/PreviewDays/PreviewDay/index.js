import React from 'react';
import PropTypes from 'prop-types';
import {PreviewDayStyled} from "./PreviewDayStyled";
import HeavyRain from "../../../img/HeavyRain.png";
import HeavyCloud from "../../../img/HeavyCloud.png";
import LightRain from "../../../img/LightRain.png";
import LightCloud from "../../../img/LightCloud.png";
import Clear from "../../../img/Clear.png";
import Hail from "../../../img/Hail.png";

const PreviewDay = ({metrics, unitType}) => {
  return (
    <PreviewDayStyled>
      <div className="date">{metrics.date}</div>
      <div className="icon"><img src={LightCloud} /></div>
      <div className="tempContainer">
        <div className="temp tempLow">{metrics.tempLow}&#176;{unitType}</div>
        <div className="temp tempHigh">{metrics.tempHigh}&#176;{unitType}</div>
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
