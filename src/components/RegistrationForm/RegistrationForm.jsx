import { Step, StepLabel, Stepper, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import DeliveryData from "./DeliveryData";
import PersonalData from "./PersonalData";
import UserData from "./UserData";

function RegistrationForm({ onSubmit }) {
  const [currentStage, setCurrentStage] = useState(0);
  const [collectedData, setCollectedData] = useState({});

  useEffect(() => {
    if (currentStage === forms.length - 1) {
      onSubmit(collectedData);
    }
  });

  const forms = [
    <UserData onSubmit={collectData} />,
    <PersonalData onSubmit={collectData} />,
    <DeliveryData onSubmit={collectData} />,
    <Typography variant="h5" align="center">
      Thank you for your registration
    </Typography>,
  ];

  function collectData(data) {
    setCollectedData({ ...collectedData, ...data });
    next();
  }

  function next() {
    setCurrentStage(currentStage + 1);
  }

  return (
    <>
      <Stepper activeStep={currentStage}>
        <Step>
          <StepLabel>Login</StepLabel>
        </Step>
        <Step>
          <StepLabel>Personal</StepLabel>
        </Step>
        <Step>
          <StepLabel>Delivey</StepLabel>
        </Step>
        <Step>
          <StepLabel>Finish</StepLabel>
        </Step>
      </Stepper>
      {forms[currentStage]}
    </>
  );
}

export default RegistrationForm;
