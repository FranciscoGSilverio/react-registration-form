import React, { useState, useContext } from "react";
import {
  Button,
  TextField,
  Switch,
  FormControlLabel,
  Box,
} from "@mui/material";
import RegisterValidations from "../../contexts/RegisterValidations"
import useErrors from "../../hooks/useErrors";

function PersonalData({ onSubmit }) {
  const [theName, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [id, setId] = useState("");
  const [offers, setOffers] = useState(true);
  const [news, setNews] = useState(true);
  const validations = useContext(RegisterValidations);
  const [errors, validateField, canSubmit] = useErrors(validations);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (canSubmit()) {
          onSubmit({ theName, lastName, id, offers, news });
        }
      }}
    >
      <TextField
        value={theName}
        onChange={(event) => {
          setName(event.target.value);
        }}
        onBlur={validateField}
        error={!errors.name.valid}
        helperText={errors.name.text}
        name="name"
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
        error={!errors.lastName.valid}
        helperText={errors.lastName.text}
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
          NEXT
        </Button>
      </Box>
    </form>
  );
}

export default PersonalData;
