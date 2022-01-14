import { Button, TextField, Box } from "@mui/material";
import React, { useState } from "react";

function UserData({ onSubmit }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        onSubmit({ email, password });
      }}
    >
      <TextField
        value={email}
        onChange={(event) => {
          setEmail(event.target.value);
        }}
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
          REGISTER
        </Button>
      </Box>
    </form>
  );
}

export default UserData;
