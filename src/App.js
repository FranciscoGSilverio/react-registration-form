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
        <RegistrationForm onSubmit={formSubmit} validateId={validateId} />
      </Container>
    );
  }
}

function formSubmit(data) {
  console.log(data);
}

function validateId(id) {
  if (id.length !== 11) {
    return { valid: false, text: "ID must have 11 digits." };
  } else return { valid: true, text: "" };
}

export default App;
