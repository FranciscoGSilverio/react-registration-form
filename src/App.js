import React, { Component } from "react";
import "./App.css";
import RegistrationForm from "./components/RegistrationForm/RegistrationForm";
import { Container, Typography } from "@mui/material";
import "@fontsource/roboto/300.css";
import {
  validateId,
  validateName,
  validateLastName,
  validatePassword,
} from "./models/registration";
import RegisterValidations from "./contexts/RegisterValidations";

class App extends Component {
  render() {
    return (
      <Container component="article" maxWidth="sm">
        <Typography variant="h3" align="center">
          Registration Form
        </Typography>
        <br />
        <RegisterValidations.Provider
          value={{
            id: validateId,
            name: validateName,
            lastName: validateLastName,
            password: validatePassword,
          }}
        >
          <RegistrationForm onSubmit={formSubmit} />
        </RegisterValidations.Provider>
      </Container>
    );
  }
}

function formSubmit(data) {
  console.log(data);
}

export default App;
