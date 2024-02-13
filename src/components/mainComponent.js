import { useParams, useLocation } from "react-router-dom";
import { componentIdentifier } from "../constants/constant";
import React, { useState }  from "react";
import FormWrapper from "./formWrapper";
import TableWrapper from "./tableWrapper";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import {ButtonGroup} from '../constants/constant.js';
import { useDispatch } from 'react-redux';
import { updateBaseUrl } from '../Slices/baseUrlSlice';

const BodyComponent = () => {
  const dispatch = useDispatch();
  const { envButton: btnGroup } = ButtonGroup;
  let { entity, subEntity } = useParams();
  const [selectedButton, setSelectedButton] = useState(btnGroup.UAT.name);
  const pathPref = subEntity.split("-");

  let redirectionUrl = entity === 'apac' ? '/nonApac' : '/apac',
      redirectionName = entity === 'apac' ? 'Non-APAC' : 'APAC'


  const convertString = inputString => {
    inputString = inputString.replace("_", " ");
    const parts = inputString.split("-");
    const formattedString = parts
      .map(part => {
        if (part.includes("Request")) {
          return (
            part.charAt(0).toUpperCase() +
            part.slice(1).replace(/([A-Z])/g, " $1")
          );
        } else {
          return part.charAt(0).toUpperCase() + part.slice(1);
        }
      })
      .join(" > ");

    return formattedString;
  };

  const handleButtonClick = (buttonConfig) => {
    setSelectedButton(buttonConfig.name);
    dispatch(updateBaseUrl(buttonConfig.baseURL));
  };

  let pageTitle = `${entity.toUpperCase()} > ${convertString(subEntity)}`;

  if (pathPref[0] === componentIdentifier.MY_REQUEST) {
    return (
      <div className="main-page-layout">
        <div className="inline-title-container">
          <h1 className="title-page-heading">{pageTitle}</h1>


      <div className="main-component-options-strip">
      <Button
        variant="contained"
        className= {selectedButton === btnGroup.UAT.name ? 'button-selected button-capsule-left' : 'button-not-selected button-capsule-left'}
        onClick={() => handleButtonClick(btnGroup.UAT)}
        size="large"
      >
       {btnGroup.UAT.name}
      </Button>

      <Button
        variant="contained"
        className= {selectedButton === btnGroup.IT.name ? 'button-selected button-capsule-right' : 'button-not-selected button-capsule-right'}
        onClick={() => handleButtonClick(btnGroup.IT)}
        size="large"
      >
      {btnGroup.IT.name}
      </Button>
        </div>
          <Link className="redirection-link" to={redirectionUrl}>{redirectionName}</Link>
        </div>

        <TableWrapper />
      </div>
    );
  } else if (pathPref[0] === componentIdentifier.NEW_REQUEST) {
    return (
      <div className="main-page-layout">
        <h1 className="title-page-heading"> {pageTitle}</h1>
        <Paper className="paper-adjust" elevation={2}>
          <FormWrapper />
        </Paper>
      </div>
    );
  } else {
    return <> </>;
  }
};

export default BodyComponent;
