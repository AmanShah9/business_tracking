import React from 'react';
import Navbar from '../components/Navbar';
import { Box } from '@mui/material';

const StaffLayout = ({ children }) => (
  <Box>
    <Navbar />
    <Box sx={{ p: 2 }}>{children}</Box>
  </Box>
);

export default StaffLayout;
