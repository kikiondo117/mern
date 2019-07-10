import React, { useState, useContext } from "react";
// Hooks Validation
import validate from "./ContactForm.validate";
import useFormValidation from "../../../../hooks/useFormValidation";
// ! Context
import ContactContext from "../../state/contact.context";

// * Inpus qye voy a ocupar
const INITIAL_STATE = {
  name: "",
  email: "",
  phone: "",
  type: "personal"
};

function ContactForm() {
  const contactContext = useContext(ContactContext);

  // * Authenticate user

  const authenticateUser = async values => {
    try {
      contactContext.addContact(values);
    } catch (err) {
      console.error("Authentication Error ", err);
    }
  };

  // * Form Validator
  const { handleChange, handleOnSubmit, values } = useFormValidation(
    INITIAL_STATE,
    validate,
    authenticateUser
  );

  const { name, email, phone, type } = values;

  return (
    <form onSubmit={handleOnSubmit}>
      <h2 className='text-primary'>Add Contact</h2>
      <input
        type='text'
        placeholder='Name'
        name='name'
        value={name}
        onChange={handleChange}
      />
      <input
        type='email'
        placeholder='Email'
        name='email'
        value={email}
        onChange={handleChange}
      />
      <input
        type='text'
        placeholder='Phone'
        name='phone'
        value={phone}
        onChange={handleChange}
      />
      <h5>Contact Type</h5>
      <input
        type='radio'
        name='type'
        value='personal'
        checked={type === "personal"}
        onChange={handleChange}
      />{" "}
      Personal{" "}
      <input
        type='radio'
        name='type'
        value='professional'
        checked={type === "professional"}
        onChange={handleChange}
      />
      Professional
      <div>
        <input
          type='submit'
          value='Add Contact'
          className='btn btn-primary btn-block'
        />
      </div>
    </form>
  );
}

export default ContactForm;

// const [contact, setContact] = useState({
//   name: "",
//   email: "",
//   phone: "",
//   type: "personal"
// });

// const { name, email, phone, type } = contact;
