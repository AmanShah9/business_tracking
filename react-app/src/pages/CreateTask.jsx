import React, { useState } from 'react';
import { Container, Box, TextField, Button, MenuItem, Typography } from '@mui/material';
import { createTask } from '../api/taskApi';
import { useNavigate } from 'react-router-dom';

const services = ['Aadhaar Card', 'PAN Card', 'Driving License', 'Birth Certificate'];
const offices = ['Office A', 'Office B', 'Office C'];

const CreateTask = () => {
  const [form, setForm] = useState({ customerName: '', serviceType: services[0], office: offices[0], advance: 0 });
  const navigate = useNavigate();

  const handleChange = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const created = await createTask(form);
      navigate(`/tasks/${created.id}`);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Container sx={{ mt: 3 }}>
      <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: 600 }}>
        <Typography variant="h6" sx={{ mb: 2 }}>Create New Task</Typography>
        <TextField label="Customer Name" fullWidth value={form.customerName} onChange={handleChange('customerName')} sx={{ mb: 2 }} />
        {/* <TextField select label="Service Type" fullWidth value={form.serviceType} onChange={handleChange('serviceType')} sx={{ mb: 2 }>
          {services.map((s) => <MenuItem key={s} value={s}>{s}</MenuItem>)}
        </TextField>
        <TextField select label="Office" fullWidth value={form.office} onChange={handleChange('office')} sx={{ mb: 2 }>
          {offices.map((o) => <MenuItem key={o} value={o}>{o}</MenuItem>)}
        </TextField> */}
        <TextField label="Advance (₹)" type="number" fullWidth value={form.advance} onChange={handleChange('advance')} sx={{ mb: 2 }} />
        <Button type="submit" variant="contained">Create</Button>
      </Box>
    </Container>
  );
};

export default CreateTask;
