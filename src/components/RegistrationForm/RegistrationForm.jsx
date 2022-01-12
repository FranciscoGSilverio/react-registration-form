import React, { useState } from "react";
import { Button, TextField, Switch, FormControlLabel } from "@mui/material";

function RegistrationForm({ onSubmit, validateId }) {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [id, setId] = useState("");
  const [offers, setOffers] = useState(true);
  const [news, setNews] = useState(true);
  const [errors, setErrors] = useState({ id: { valid: true, text: "" } });

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        onSubmit({ name, lastName, id, offers, news });
      }}
    >
      <TextField
        value={name}
        onChange={(event) => {
          setName(event.target.value);
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
        value={id}
        onChange={(event) => {
          setId(event.target.value);
        }}
        onBlur={(event) => {
          const isValid = validateId(id);
          setErrors({id:isValid});
        }}
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

      <Button type="submit" variant="contained">
        REGISTER
      </Button>
    </form>
  );
}

export default RegistrationForm;
