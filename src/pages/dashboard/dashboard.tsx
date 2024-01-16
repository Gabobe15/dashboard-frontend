import React from 'react';
import { Box, Grid } from '@mui/material';
import DataRibbon from '@/components/Dashboard/DataRibbon';
import TransactionPerDay from '@/components/Dashboard/TransactionsPerDay';
import TransactionBottomRow from '@/components/Dashboard/TransactionBottomRow';
import scss from './Dashboard.module.scss';

const Dashboard = () => {
  return (
    <Box className={scss.dashboard}>
      <Grid container gap={4} marginTop={2}>
        <DataRibbon />
        <TransactionPerDay />
      </Grid>
      <TransactionBottomRow />
    </Box>
  );
};

export default Dashboard;
