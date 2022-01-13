import { Button, TextField } from "@mui/material";
import React from "react";

function UserData({onSubmit}) {
  return (
    <form onSubmit={(event) =>{
      event.preventDefault();
      onSubmit();
    }} >
      <TextField
        id="email"
        label="email"
        type="email"
        required
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        id="password"
        label="password"
        type="password"
        required
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <Button type="submit" variant="contained">
        REGISTER
      </Button>
    </form>
  );
}

export default UserData;
