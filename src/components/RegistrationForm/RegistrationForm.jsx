import React, { useState } from "react";
import DeliveryData from "./DeliveryData";
import PersonalData from "./PersonalData";
import UserData from "./UserData";

function RegistrationForm({
  onSubmit,
  validateId,
  validateName,
  validateLastName,
}) {
  const [currentStage, setCurrentStage] = useState(0);
  const forms = [
    <UserData onSubmit={next} />,
    <PersonalData
      onSubmit={next}
      validateId={validateId}
      validateName={validateName}
      validateLastName={validateLastName}
    />,
    <DeliveryData onSubmit={onSubmit} />,
  ];

  function next() {
    setCurrentStage(currentStage + 1);
  }

  return <>{forms[currentStage]}</>;
}

export default RegistrationForm;
