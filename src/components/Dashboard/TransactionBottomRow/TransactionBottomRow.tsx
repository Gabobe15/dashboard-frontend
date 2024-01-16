import React from 'react';
import { Paper, Grid } from '@mui/material';
import DataChart from '@/components/DataChart';
import { doughnutChartData } from '@/components/mockData';
import scss from './TransactionBottomRow.module.scss';

const TransactionBottomRow = () => {
  return (
    <Grid container className={scss.bottomRow}>
      <Grid>
        <Paper className={scss.dataCard}>
          <p>Transaction per user type</p>
          <DataChart type={'doughnut'} data={doughnutChartData} />
        </Paper>
      </Grid>
      <Grid>
        <Paper className={scss.dataCard}>
          <p>Transaction per user type</p>
          <DataChart type={'doughnut'} data={doughnutChartData} />
        </Paper>
      </Grid>
      <Grid>
        <Paper className={scss.dataCard}>
          <p>Transaction per user type</p>
          <DataChart type={'doughnut'} data={doughnutChartData} />
        </Paper>
      </Grid>
      <Grid>
        <Paper className={scss.dataCard}>
          <p>Transaction per user type</p>
          <DataChart type={'doughnut'} data={doughnutChartData} />
        </Paper>
      </Grid>
    </Grid>
  );
};

export default TransactionBottomRow;
