// ValidationComponent.js
const Validation = ({ email, password }) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+}{":;';?/>.<,])(?=.*[^\s]).{8,}$/;

  const validate = () => {
    const errors = {};
    console.log(email);
    console.log(!email || !password);

    if (!email || !password) {
      errors.general = "All fields are required";
    } else {
      if (!emailRegex.test(email)) {
        errors.email = "Please enter a valid email address";
      }
      if (!passwordRegex.test(password)) {
        errors.password =
          "Please enter a valid password (at least 8 characters with at least one uppercase letter, one lowercase letter, one number, and one special character)";
      }
    }

    return errors;
  };

  return validate();
};

export default Validation;
