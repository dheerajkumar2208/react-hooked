// Dashboard.js
import React from "react";
import { NavLink } from "react-router-dom";
import FlexGrid from "../components/FlexGrid"; // Import the FlexGrid component
import "./styles/Dashboard.scss"

const Dashboard = (props) => {
  return (
   <div className="dashboard-container">
    <FlexGrid container direction="row" spacing={2}>
      <NavLink className="btn-dashboard" to="/royale">
        <div className="movie-ref">SBS-PX4</div>
      </NavLink>
      <NavLink className="btn-dashboard" to="/apac">
        <div className="movie-ref">APAC</div>
      </NavLink>
      <NavLink className="btn-dashboard" to="/nonApac">
        <div className="movie-ref">Non APAC</div>
      </NavLink>
      <NavLink className="btn-dashboard" to="/knight">
        <div className="movie-ref">Sing Co</div>
      </NavLink>
    </FlexGrid>
    </div>
  );
};

export default Dashboard;
