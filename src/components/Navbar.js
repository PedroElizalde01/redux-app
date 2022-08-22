import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';



const Navbar = () => {
  return (
    <Box mb={2}>
      <AppBar position="static" style={{background:"#212529"}}>
          <Toolbar>
            <Typography variant="h4">
              React Redux-App
            </Typography>
          </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Navbar