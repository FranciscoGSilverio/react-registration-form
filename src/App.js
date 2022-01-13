import React, { Component } from "react";
import "./App.css";
import RegistrationForm from "./components/RegistrationForm/RegistrationForm";
import { Container, Typography } from "@mui/material";
import "@fontsource/roboto/300.css";

class App extends Component {
  render() {
    return (
      <Container component="article" maxWidth="sm">
        <Typography variant="h3" align="center">
          Registration Form
        </Typography>
        <RegistrationForm
          onSubmit={formSubmit}
          validateId={validateId}
          validateName={validateName}
          validateLastName={validateLastName}
        />
      </Container>
    );
  }
}

function formSubmit(data) {
 console.log(data)
}

function validateId(id) {
  if (id.length !== 11) {
    return { valid: false, text: "ID must have 11 digits." };
  } else if (isNaN(id)) {
    return { valid: false, text: "ID can't contain letters." };
  } else return { valid: true, text: "" };
}

function validateName(name) {
  if (name.length === 0) {
    return { valid: false, text: "Still didn't fill this field." };
  } else if (!isNaN(name)) {
    return { valid: false, text: "Your name can't contain numbers." };
  } else return { valid: true, text: "" };
}

function validateLastName(lastName) {
  if (lastName.length === 0) {
    return { valid: false, text: "Still didn't fill this field." };
  } else if (!isNaN(lastName)) {
    return { valid: false, text: "Your last name can't contain numbers" };
  } else return { valid: true, text: "" };
}

export default App;
