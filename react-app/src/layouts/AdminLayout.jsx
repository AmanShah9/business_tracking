import React from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import { Box } from '@mui/material';

const AdminLayout = ({ children }) => (
  <Box sx={{ display: 'flex' }}>
    <Sidebar />
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <Navbar />
      {children}
    </Box>
  </Box>
);

export default AdminLayout;
