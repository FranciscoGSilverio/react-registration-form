function validateId(id) {
  if (id.length !== 11) {
    return { valid: false, text: "ID must have 11 digits." };
  } else if (isNaN(id)) {
    return { valid: false, text: "ID can't contain letters." };
  } else return { valid: true, text: "" };
}

function validateName(name) {
  if (name.length === 0) {
    return { valid: false, text: "Still didn't fill this field." };
  } else if (!isNaN(name)) {
    return { valid: false, text: "Your name can't contain numbers." };
  } else return { valid: true, text: "" };
}

function validateLastName(lastName) {
  if (lastName.length === 0) {
    return { valid: false, text: "Still didn't fill this field." };
  } else if (!isNaN(lastName)) {
    return { valid: false, text: "Your last name can't contain numbers" };
  } else return { valid: true, text: "" };
}

function validatePassword(password) {
  if (password.length < 4 || password.length > 72) {
    return {
      valid: false,
      text: "Your password must have between 4 and 72 digits",
    };
  } else {
    return { valid: true, text: "" };
  }
}

function validateCardNumber(cardNumber) {
  if (cardNumber.length !== 16) {
    return {
      valid: false,
      text: "Your card number must have 16 digits ",
    };
  } else if (isNaN(cardNumber)) {
    return {
      valid: false,
      text: "Your card number can't contain letters ",
    };
  } else {
    return { valid: true, text: "" };
  }
}

function validateCardOwner(cardOwner) {
  if (cardOwner.length === 0) {
    return {
      valid: false,
      text: "Still didn't fill thsi field",
    };
  } else if (!isNaN(cardOwner)) {
    return {
      valid: false,
      text: "The card owner name can't contain numbers.",
    };
  } else
    return {
      valid: true,
      text: "",
    };
}

function validateSecurityCode(securityCode) {
  if (securityCode.length !== 3) {
    return {
      valid: false,
      text: "Your security code must have 3 digits.",
    };
  } else if (isNaN(securityCode)) {
    return {
      valid: false,
      text: "Your security code must contain only numbers.",
    };
  } else
    return {
      valid: true,
      text: "",
    };
}

export {
  validateId,
  validateName,
  validateLastName,
  validatePassword,
  validateCardNumber,
  validateCardOwner,
  validateSecurityCode,
};
