import { Button, TextField, Box } from "@mui/material";
import React, { useState, useContext } from "react";
import RegisterValidations from "../../contexts/RegisterValidations";
import useErrors from "../../hooks/useErrors";

function UserData({ onSubmit }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const validations = useContext(RegisterValidations);
  const [errors, validateField, canSubmit] = useErrors(validations);

  /*function canSubmit() {
    for (let field in errors) {
      if (!errors[field].valid) {
        return false;
      }
    }
    return true;
  }*/
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (canSubmit()) {
          onSubmit({ email, password });
        }
      }}
    >
      <TextField
        value={email}
        onChange={(event) => {
          setEmail(event.target.value);
        }}
        name="email"
        id="email"
        label="email"
        type="email"
        required
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        value={password}
        onChange={(event) => {
          setPassword(event.target.value);
        }}
        onBlur={validateField}
        name="password"
        error={!errors.password.valid}
        helperText={errors.password.text}
        id="password"
        label="password"
        type="password"
        required
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <br />
      <Box textAlign="center">
        <Button type="submit" variant="contained">
          next
        </Button>
      </Box>
    </form>
  );
}

export default UserData;
