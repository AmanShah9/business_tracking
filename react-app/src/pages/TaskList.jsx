import React, { useState } from 'react';
import { Container, Button } from '@mui/material';
import TaskTable from '../components/TaskTable';
import SearchBar from '../components/SearchBar';
import useTasks from '../hooks/useTasks';
import { Link as RouterLink } from 'react-router-dom';

const TaskList = () => {
  const [query, setQuery] = useState('');
  const { items = [], loading } = useTasks({ q: query });

  return (
    <Container sx={{ mt: 3 }}>
      <Button variant="contained" component={RouterLink} to="/tasks/create" sx={{ mb: 2 }}>Create Task</Button>
      <SearchBar value={query} onChange={setQuery} placeholder="Search tasks by customer, id or service" />
      <TaskTable tasks={items} />
    </Container>
  );
};

export default TaskList;
