import React, { useReducer } from "react";
import uuid from "uuid";
import ContactContext from "./contact.context";
import contactReducer from "./contact/contact.reducer";
// * Types
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER
} from "./types";

// ! Crear el inicial state

const ContactState = props => {
  const initalState = {
    contacts: [
      {
        id: 1,
        name: "kikiondo",
        email: "kikiondo117@gmail.com",
        phone: "222-222-222-222",
        type: "personal"
      },
      {
        id: 2,
        name: "carlos",
        email: "kikisvv@gmail.com",
        phone: "222-222-222-222",
        type: "personal"
      },
      {
        id: 3,
        name: "vera",
        email: "kikiondo117@gmail.com",
        phone: "222-222-222-222",
        type: "professional"
      }
    ]
  };

  // ! Reducer
  const [state, dispatch] = useReducer(contactReducer, initalState);

  // *  Add Contact
  const addContact = contact => {
    contact.id = uuid.v4();
    dispatch({ type: ADD_CONTACT, payload: contact });
  };
  // * Delete Contact

  // * Set Current Contact

  // * Clear Current Contact

  // * Update Contact

  // * Filter Contacts

  // * Clear filter

  // ! Necesitamos retornar nuestro provider
  //  ? En el value se necesita poner los valores y actions que se quieren tener acceso en el store global
  return (
    <ContactContext.Provider value={{ contacts: state.contacts, addContact }}>
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
