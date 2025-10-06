import React from 'react';
import { Table, TableHead, TableRow, TableCell, TableBody, Paper, TableContainer } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import StatusBadge from './StatusBadge';

const TaskTable = ({ tasks = [] }) => (
  <TableContainer component={Paper}>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Task ID</TableCell>
          <TableCell>Customer</TableCell>
          <TableCell>Service</TableCell>
          <TableCell>Office</TableCell>
          <TableCell>Status</TableCell>
          <TableCell>Assignee</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {tasks.map((t) => (
          <TableRow key={t.id} hover component={RouterLink} to={`/tasks/${t.id}`} style={{ textDecoration: 'none' }}>
            <TableCell>{t.id}</TableCell>
            <TableCell>{t.customerName}</TableCell>
            <TableCell>{t.serviceType}</TableCell>
            <TableCell>{t.office}</TableCell>
            <TableCell><StatusBadge status={t.status} /></TableCell>
            <TableCell>{t.assignee || 'Unassigned'}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
);

export default TaskTable;
