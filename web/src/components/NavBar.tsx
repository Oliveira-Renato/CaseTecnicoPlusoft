import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom';
import { Typography } from '@mui/material';

export default function DenseAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
             <Link to={"/"}>VroomVibes</Link>
          </IconButton>
          <Typography  color="inherit" component="div">
            <Link to={"/cadastrar"}>Cadastrar automóvel</Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
