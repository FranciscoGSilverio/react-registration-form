import React, { useState, useContext } from "react";
import {
  TextField,
  Button,
  Box,
  Select,
  MenuItem,
  InputLabel,
} from "@mui/material";
import useErrors from "../../hooks/useErrors";
import RegisterValidations from "../../contexts/RegisterValidations";

function PaymentData({ onSubmit }) {
  const [cardNumber, setCardNumber] = useState("");
  const [cardOwner, setCardOwner] = useState("");
  const [securityCode, setSecurityCode] = useState("");
  const validations = useContext(RegisterValidations);
  const [errors, validateField, canSubmit] = useErrors(validations);
  const [cardFlag, setCardFlag] = useState("");

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (canSubmit())
          onSubmit({ cardNumber, cardOwner, securityCode, cardFlag });
      }}
    >
      <TextField
        value={cardNumber}
        onChange={(event) => {
          setCardNumber(event.target.value);
        }}
        onBlur={validateField}
        error={!errors.cardNumber.valid}
        helperText={errors.cardNumber.text}
        name="cardNumber"
        id="cardNumber"
        label="Card Number"
        type="number"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        value={cardOwner}
        onChange={(event) => {
          setCardOwner(event.target.value);
        }}
        onBlur={validateField}
        error={!errors.cardOwner.valid}
        helperText={errors.cardOwner.text}
        name="cardOwner"
        id="cardOwner"
        label="Card Owner"
        type="text"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        value={securityCode}
        onChange={(event) => {
          setSecurityCode(event.target.value);
        }}
        onBlur={validateField}
        error={!errors.securityCode.valid}
        helperText={errors.securityCode.text}
        name="securityCode"
        id="securityCode"
        label="Security Code"
        type="number"
        variant="outlined"
        margin="normal"
      />
      <br />
      <InputLabel id="cardFlag">Card Flag</InputLabel>
      <Select
        variant="outlined"
        labelId="cardFlag"
        id="cardFlag"
        value={cardFlag}
        label="Card Flag"
        onChange={(event) => {
          setCardFlag(event.target.value);
        }}
      >
        <MenuItem value={"MastercardCredit"}>Mastercard Credit</MenuItem>
        <MenuItem value={"MastercardDebit"}>Mastercard Debit</MenuItem>
        <MenuItem value={"VisaCredit"}>Visa Credit</MenuItem>
        <MenuItem value={"VisaDebit"}>Visa Debit</MenuItem>
      </Select>

      <br />
      <Box textAlign="center">
        <Button type="submit" variant="contained">
          NEXT
        </Button>
      </Box>
    </form>
  );
}

export default PaymentData;
