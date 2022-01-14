import React, { Component } from "react";
import "./App.css";
import RegistrationForm from "./components/RegistrationForm/RegistrationForm";
import { Container, Typography } from "@mui/material";
import "@fontsource/roboto/300.css";
import {validateId, validateName, validateLastName, validatePassword} from "./models/registration"

class App extends Component {
  render() {
    return (
      <Container component="article" maxWidth="sm">
        <Typography variant="h3" align="center">
          Registration Form
        </Typography>
        <br />
        <RegistrationForm
          onSubmit={formSubmit}
          validations={{
            id: validateId,
            name: validateName,
            lastName: validateLastName,
            password: validatePassword,
          }}
        />
      </Container>
    );
  }
}

function formSubmit(data) {
  console.log(data);
}

export default App;
