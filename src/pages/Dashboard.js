import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Grid , Button} from "@mui/material";
const Dashboard = (props) => {

  

  return (
    <Grid container  className="grid-dashboard" spacing={0}
    direction="column"
    alignItems="center"
    justifyContent="center"
    sx={{ minHeight: '100vh' }}>
     
    <Grid container columnSpacing = {2} spacing={10} xs={12} md={12} direction="row">
    <Grid item xs={12} md={3}>
    <Button color="secondary"><NavLink className='btn-dashboard' to="/royale">
           <div className="movie-ref">
               SBS-PX4
            </div>
         </NavLink></Button>
        </Grid> 
      <Grid item xs={12} md={3}>
      <Button color="secondary"><NavLink className='btn-dashboard' to="/wizard">
           <div className="movie-ref">
               WIZARD
            </div>
         </NavLink></Button>
        </Grid> 
        <Grid item xs={12} md={3}>
      <Button color="secondary"><NavLink className='btn-dashboard' to="/nonWizard">
           <div className="movie-ref">
               Non WIZARD
            </div>
         </NavLink></Button>
        </Grid> 
        <Grid item xs={12} md={3}>
      <Button color="secondary"><NavLink className='btn-dashboard' to="/knight">
           <div className="movie-ref">
               Sing Co
            </div>
         </NavLink></Button>
        </Grid> 
        </Grid>
    </Grid>
    );
};

export default Dashboard;


