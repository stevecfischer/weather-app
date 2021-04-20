import React, {Fragment} from 'react';
import Grid from '@material-ui/core/Grid';
import PreviewDay from "./PreviewDay";

const PreviewDays = () => {
  const metrics = {
    sunday: {
      date: "Sun 7, Jun",
      icon: "icon here",
      tempLow: "15",
      tempHigh: "70",
    },
    monday: {
      date: "Mon 8, Jun",
      icon: "icon here",
      tempLow: "25",
      tempHigh: "40",
    },
    tuesday: {
      date: "Tue 9, Jun",
      icon: "icon here",
      tempLow: "50",
      tempHigh: "70",
    },
  }

  return (
    <Fragment>
      <Grid container>
        <Grid container justify="center">
          {['Sunday', 'Monday', 'Tuesday'].map((value) => (
            <Grid key={value} item>
              <PreviewDay metrics={metrics[value.toLocaleLowerCase()]} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default PreviewDays;
