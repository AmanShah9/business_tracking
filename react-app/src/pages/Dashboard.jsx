import React from 'react';
import { Container, Grid, Paper, Typography, Button } from '@mui/material';
import { useAuth } from '../context/AuthContext';

const Dashboard = () => {
  const { user, logout } = useAuth();
  return (
    <Container sx={{ mt: 3 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h5">Welcome, {user?.name}</Typography>
            <Typography variant="subtitle1">Role: {user?.role}</Typography>
            <Button variant="outlined" sx={{ mt: 2 }} onClick={logout}>Logout</Button>
          </Paper>
        </Grid>

        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6">Pending Tasks</Typography>
            <Typography variant="h4">12</Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6">Completed Today</Typography>
            <Typography variant="h4">8</Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6">Payments Due</Typography>
            <Typography variant="h4">₹ 18,500</Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Dashboard;
