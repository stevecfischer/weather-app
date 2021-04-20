import React, {Fragment} from 'react';
import Grid from '@material-ui/core/Grid';
import ToggleUnit from "../ToggleUnit";
import PreviewDays from "../PreviewDays";

const Body = () => {

  return (
    <Fragment>
      <Grid container xs={8}>
        <Grid item xs={12}>
          <ToggleUnit />
        </Grid>
        <Grid item xs={12}>
          <PreviewDays />
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default Body;
