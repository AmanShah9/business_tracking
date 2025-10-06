import React from 'react';
import Chip from '@mui/material/Chip';

const colorMap = {
  pending: 'warning',
  in_progress: 'info',
  completed: 'success',
  rejected: 'default',
};

const StatusBadge = ({ status = 'pending' }) => (
  <Chip label={status.replace('_', ' ').toUpperCase()} color={colorMap[status] || 'default'} size="small" />
);

export default StatusBadge;
