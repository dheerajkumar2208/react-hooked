
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Grid } from '@mui/material';
import { Outlet } from "react-router-dom";
import {useParams } from 'react-router-dom';
import {DASHBOARD_NAMES, TEXT_CONSTANT} from '../constants/constant'
export default function Navbar() {

  let { entity } = useParams();
  let currentMode = entity ? DASHBOARD_NAMES[entity] : TEXT_CONSTANT.HeaderText;
  return (
    
    <Grid container direction='column'>
      <Grid item xs={12} md={12} lg={12}>
    <Box sx={{ flexGrow: 1, }}>
      <AppBar position="fixed" sx={{
    backgroundColor: '#00c0ff94',
  }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {currentMode}
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
    
    </Grid>
    <Grid item xs={12} md={12} lg={12}>

    <Outlet/>
    </Grid>
    </Grid>
  );
}