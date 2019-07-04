import React, { useContext, Fragment } from "react";
// ! Context
import ContactContext from "../state/contact.context";
// ? Component
import ContactsComponent from "./Contacts.component";

const ContactsContainer = () => {
  const contactContext = useContext(ContactContext); // * Aqui ya tenemos accesos al estado del contexto
  const { contacts } = contactContext;

  return (
    <div className='grid-2'>
      <ContactsComponent contacts={contacts} />
    </div>
  );
};

export default ContactsContainer;
