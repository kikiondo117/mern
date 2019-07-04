import React, { Fragment } from "react";
// ? Components
import Navbar from "../../shared/layout/Navbar.component";
// ? State
import ContactState from "../../pages/contacts/state/contact.state";

function App({ children }) {
  return (
    <ContactState>
      <Fragment>
        <Navbar title='Bigmama' />
        <div className='container'>{children}</div>
      </Fragment>
    </ContactState>
  );
}

export default App;
