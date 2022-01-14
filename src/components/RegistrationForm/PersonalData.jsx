import React, { useState } from "react";
import {
  Button,
  TextField,
  Switch,
  FormControlLabel,
  Box,
} from "@mui/material";

function PersonalData({ onSubmit, validations }) {
  const [theName, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [id, setId] = useState("");
  const [offers, setOffers] = useState(true);
  const [news, setNews] = useState(true);
  const [errors, setErrors] = useState({ id: { valid: true, text: "" } });

  function validateField(event) {
    const { name, value } = event.target;
    const newState = { ...errors };
    newState[name] = validations[name](value);
    setErrors(newState);
  }

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        onSubmit({ theName, lastName, id, offers, news });
      }}
    >
      <TextField
        value={theName}
        onChange={(event) => {
          setName(event.target.value);
        }}
        onBlur={validateField}
        error={!errors.id.valid}
        name="name"
        helperText={errors.id.text}
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
        onBlur={validateField}
        name="lastName"
        error={!errors.id.valid}
        helperText={errors.id.text}
        id="lastname"
        label="Last Name"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        value={id}
        onChange={(event) => {
          setId(event.target.value);
        }}
        onBlur={validateField}
        name="id"
        error={!errors.id.valid}
        helperText={errors.id.text}
        id="id"
        label="ID"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <FormControlLabel
        label="Offers"
        control={
          <Switch
            checked={offers}
            onChange={(event) => {
              setOffers(event.target.checked);
            }}
            name="Offers"
            color="primary"
          />
        }
      />
      <FormControlLabel
        label="News"
        control={
          <Switch
            checked={news}
            onChange={(event) => {
              setNews(event.target.checked);
            }}
            name="News"
            color="primary"
          />
        }
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

export default PersonalData;
