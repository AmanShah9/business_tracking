import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography, Paper, Button } from '@mui/material';
import { fetchTask } from '../api/taskApi';

const TaskDetails = () => {
  const { id } = useParams();
  const [task, setTask] = useState(null);

  useEffect(() => {
    fetchTask(id).then((res) => setTask(res)).catch(() => setTask(null));
  }, [id]);

  if (!task) return <Container sx={{ mt: 3 }}>Loading...</Container>;

  return (
    <Container sx={{ mt: 3 }}>
      <Paper sx={{ p: 2 }}>
        <Typography variant="h6">Task {task.id}</Typography>
        <Typography>Customer: {task.customerName}</Typography>
        <Typography>Service: {task.serviceType}</Typography>
        <Typography>Office: {task.office}</Typography>
        <Typography>Status: {task.status}</Typography>
        <Typography>Advance Paid: ₹{task.advance}</Typography>
        <Button variant="contained" sx={{ mt: 2 }}>Mark Complete</Button>
      </Paper>
    </Container>
  );
};

export default TaskDetails;
