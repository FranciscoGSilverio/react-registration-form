import React, { useState } from "react";
import { Button, TextField } from "@mui/material";

function DeliveryData({ onSubmit }) {
  const [zipCode, setZipCode] = useState("");
  const [adress, setAdress] = useState("");
  const [number, setNumber] = useState("");
  const [state, setTheState] = useState("");
  const [city, setCity] = useState("");
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        onSubmit({ zipCode, adress, number, state, city });
      }}
    >
      <TextField
        value={zipCode}
        onChange={(event) => {
          setZipCode(event.target.value);
        }}
        id="zipCode"
        label="Zip Code"
        type="number"
        variant="outlined"
        margin="normal"
      />
      <TextField
        value={adress}
        onChange={(event) => {
          setAdress(event.target.value);
        }}
        id="adress"
        label="Adress"
        type="text"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        value={number}
        onChange={(event) => {
          setNumber(event.target.value);
        }}
        id="number"
        label="Number"
        type="number"
        variant="outlined"
        margin="normal"
      />
      <TextField
        value={state}
        onChange={(event) => {
          setTheState(event.target.value);
        }}
        id="state"
        label="State"
        type="text"
        variant="outlined"
        margin="normal"
      />
      <TextField
        value={city}
        onChange={(event) => {
          setCity(event.target.value);
        }}
        id="city"
        label="City"
        type="text"
        variant="outlined"
        margin="normal"
      />
      <Button type="submit" variant="contained" fullWidth>
        FINISH REGISTRATION
      </Button>
    </form>
  );
}

export default DeliveryData;
