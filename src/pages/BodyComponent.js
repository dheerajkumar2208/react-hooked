import React from "react";
import Sidebar from "../components/sidebar";
import { Grid } from "@mui/material";
import MainComponent from "../components/mainComponent";

const BodyComponent = props => {
  return (
      <Grid container spacing={20}>
        <Grid item xs={12} md={2}>
          <Sidebar />
        </Grid>
        <Grid item xs={12} md={10}>
          <div className="body-component">
            <MainComponent />
          </div>
        </Grid>
      </Grid>
  );
};

export default BodyComponent;
