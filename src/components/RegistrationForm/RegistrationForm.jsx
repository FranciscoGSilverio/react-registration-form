import React from "react";
import Button from "@mui/material/Button";

function RegistrationForm() {
  return (
    <form>
      <label>Name</label>
      <input type="text" placeholder="Write your name..." />

      <label>Last Name</label>
      <input type="text" placeholder="Write your last name..." />

      <label>ID</label>
      <input type="text" placeholder="Wirte your ID number..." />

      <label>Offers</label>
      <input type="checkbox" />

      <label>News</label>
      <input type="checkbox" />

      <Button type="submit" variant="contained">
        REGISTER
      </Button>
    </form>
  );
}

export default RegistrationForm;
