import React, { Fragment } from "react";
// ? Components
import ContactItem from "./components/ContactItem.component";

import ContactForm from "./components/ContactForm.component";

const ContactsComponent = ({ contacts }) => {
  return (
    <Fragment>
      <div>
        <ContactForm />
      </div>
      <div>
        {contacts.map((contact, index) => (
          <ContactItem contact={contact} key={index} />
        ))}
      </div>
    </Fragment>
  );
};

export default ContactsComponent;
