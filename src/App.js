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
        <RegistrationForm />
      </Container>
    );
  }
}

export default App;
