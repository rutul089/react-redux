const validationRules = (value, rules, form) => {
  let valid = true;

  for (let rule in rules) {
    //console.log(form);
    // console.log(rule);
    switch (rule) {
      case "isRequired":
        valid = valid && validateRequired(value);
        break;
      case "isEmail":
        valid = valid && checkForValidEmail(value);
        break;
      case "minLength":
        valid = valid && checkForValidForLength(value, rules[rule]);
        break;
      case "confirmPass":
        valid =
          valid &&
          validateConfirmPassword(value, form[rules.confirmPass].value);
        break;
      case "isNumber":
        valid = valid && checkForNumber(value);
        break;
      default:
        valid = true;
        break;
    }
  }
  return valid;
};

const validateRequired = value => {
  if (value !== "") {
    return true;
  }
  return false;
};

const checkForValidEmail = email => {
  const expression = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return expression.test(String(email).toLowerCase());
};

const checkForValidForLength = (value, ruleValue) => {
  if (value.length >= ruleValue) {
    return true;
  }
  return false;
};

const validateConfirmPassword = (confirmPass, password) => {
  //console.log(confirmPass + password);
  return confirmPass === password;
};

const checkForNumber = phone => {
  const expression = /^[0-9,+]*$/;
  return expression.test(String(phone).toLowerCase());
};

export default validationRules;
