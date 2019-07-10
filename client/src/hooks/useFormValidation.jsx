import { useState, useEffect } from "react";

function useFormValidation(initialState, validate, authenticate) {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (isSubmitting) {
      const noErrors = Object.keys(errors).length === 0;
      if (noErrors) {
        console.log("authenticated", values);
        authenticate(values);
        setSubmitting(false);
      } else {
        setSubmitting(false);
        console.log("Error", noErrors);
      }
    }
  }, [errors]);

  const handleChange = event => {
    event.persist();
    setValues(previousValues => ({
      ...previousValues,
      [event.target.name]: event.target.value
    }));
  };

  function handlerBlur() {
    const validationErrors = validate(values);
    setErrors(validationErrors);
  }

  const handleOnSubmit = event => {
    event.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);
    setSubmitting(true);
  };

  return {
    handleChange,
    handlerBlur,
    handleOnSubmit,
    values,
    errors,
    isSubmitting
  };
}

export default useFormValidation;
