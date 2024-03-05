import React from "react";
import Sidebar from "../components/Sidebar";
import MainComponent from "../components/MainComponent";
import "./styles/bodyComponent.scss"

const BodyComponent = (props) => {
  return (
    <div className="body-container">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="main-content">
        <MainComponent />
      </div>
    </div>
  );
};

export default BodyComponent;
