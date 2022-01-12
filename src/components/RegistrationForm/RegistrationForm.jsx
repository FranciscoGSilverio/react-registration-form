import React, { useState } from "react";
import { Button, TextField, Switch, FormControlLabel } from "@mui/material";

function RegistrationForm() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        console.log(name, lastName);
      }}
    >
      <TextField
        value={name}
        onChange={(event) => {
          let tempName = event.target.value;
          if (tempName.length >= 5) {
            tempName = name.substr(0, 5);
          }
          setName(tempName);
        }}
        id="name"
        label="Name"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        value={lastName}
        onChange={(event) => {
          setLastName(event.target.value);
        }}
        id="lastname"
        label="Last Name"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        id="id"
        label="ID"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <FormControlLabel
        label="Offers"
        control={<Switch name="Offers" defaultChecked color="primary" />}
      />
      <FormControlLabel
        label="News"
        control={<Switch name="News" defaultChecked color="primary" />}
      />

      <Button type="submit" variant="contained">
        REGISTER
      </Button>
    </form>
  );
}

export default RegistrationForm;
