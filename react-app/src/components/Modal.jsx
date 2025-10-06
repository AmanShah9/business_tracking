import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';

const Modal = ({ open, onClose, title, children, actions }) => (
  <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
    {title && <DialogTitle>{title}</DialogTitle>}
    <DialogContent>{children}</DialogContent>
    <DialogActions>
      {actions ? actions : <Button onClick={onClose}>Close</Button>}
    </DialogActions>
  </Dialog>
);

export default Modal;
