import React from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Link as RouterLink } from 'react-router-dom';

const Sidebar = () => (
  <Drawer variant="permanent" anchor="left">
    <List sx={{ width: 240 }}>
      <ListItem button component={RouterLink} to="/dashboard"><ListItemText primary="Dashboard" /></ListItem>
      <ListItem button component={RouterLink} to="/tasks"><ListItemText primary="Tasks" /></ListItem>
      <ListItem button component={RouterLink} to="/tasks/create"><ListItemText primary="Create Task" /></ListItem>
      <ListItem button component={RouterLink} to="/payments"><ListItemText primary="Payments" /></ListItem>
      <ListItem button component={RouterLink} to="/reports"><ListItemText primary="Reports" /></ListItem>
    </List>
  </Drawer>
);

export default Sidebar;
