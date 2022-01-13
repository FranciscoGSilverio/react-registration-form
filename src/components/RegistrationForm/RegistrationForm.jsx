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
  return (
    <>
      <PersonalData
        onSubmit={onSubmit}
        validateId={validateId}
        validateName={validateName}
        validateLastName={validateLastName}
      />
      <UserData />
      <DeliveryData />
    </>
  );
}

export default RegistrationForm;
