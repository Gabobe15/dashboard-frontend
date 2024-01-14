import React from 'react';
import { Box, Grid, Paper } from '@mui/material';
import sass from './dashboard.module.scss';

const Dashboard = () => {
  return (
    <Box>
      <Grid container gap={2} className={sass.topCardsContainer}>
        <Grid>
          <Paper className={sass.dataCard}>xs=4</Paper>
        </Grid>
        <Grid>
          <Paper className={sass.dataCard}>xs=4</Paper>
        </Grid>
        <Grid>
          <Paper className={sass.dataCard}>xs=4</Paper>
        </Grid>
      </Grid>
      <Grid xs={12} marginY={2}>
        <Paper className={sass.dataCard}>xs=12</Paper>
      </Grid>
    </Box>
  );
};

export default Dashboard;
