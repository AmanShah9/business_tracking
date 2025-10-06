import React from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

const SearchBar = ({ value, onChange, placeholder = 'Search' }) => (
  <Box sx={{ mb: 2 }}>
    <TextField fullWidth value={value} onChange={(e) => onChange(e.target.value)} placeholder={placeholder} />
  </Box>
);

export default SearchBar;
