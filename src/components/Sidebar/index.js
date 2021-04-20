import React, {Fragment} from 'react';
import {SidebarStyled} from './sidebarStyled.js';
import Grid from '@material-ui/core/Grid';

const Sidebar = () => {
  return (
    <Fragment>
      <SidebarStyled>
        <Grid xs={4}>
          hello
        </Grid>
      </SidebarStyled>
    </Fragment>
  );
};

export default Sidebar;
