import React from "react";
import { Button, TextField } from "@mui/material";

function DeliveryData() {
  return (
    <form>
      <TextField
        id="zipCode"
        label="Zip Code"
        type="number"
        variant="outlined"
        margin="normal"
      />
      <TextField
        id="adress"
        label="Adress"
        type="text"
        variant="outlined"
        margin="normal"
      />
      <TextField
        id="number"
        label="Number"
        type="number"
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
