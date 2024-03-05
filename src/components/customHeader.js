
import * as React from 'react';
import { Outlet } from "react-router-dom";
import {useParams } from 'react-router-dom';
import FlexGrid from "./FlexGrid"; // Import the FlexGrid component
import {DASHBOARD_NAMES, TEXT_CONSTANT} from '../constants/constant'
import Button from './Button';
import "./style/CustomHeader.scss"

export default function Navbar() {

  let { entity } = useParams();
  let currentMode = entity ? DASHBOARD_NAMES[entity] : TEXT_CONSTANT.HeaderText;
  return (
    
    <FlexGrid container direction='column'>
     <div className="app-bar">
      <span className='title-heading'>
        {currentMode}
      </span>
      <Button variant='primary'>Login</Button>
   
    </div>
    

    <Outlet/>
    </FlexGrid>
  );
}

