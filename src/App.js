import React, { Component, Fragment } from "react";
import "./App.css";
import RegistrationForm from "./components/RegistrationForm/RegistrationForm";

class App extends Component {
  render() {
    return (
      <Fragment>
        <h1>Registration Form</h1>
        <RegistrationForm />
      </Fragment>
    );
  }
}

export default App;
