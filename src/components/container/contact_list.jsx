import React, { useState } from 'react';
import Contact from '../../models/contact.class.js';
import ContactComponent from '../pure/contact.jsx';
import ContactFormComponent from '../pure/forms/contact_form.jsx';
import CONNECTION_STATUSES from '../../models/connection_statuses.enum.js';

const ContactListComponent = () => {
  const contact1 = new Contact({
    name: 'martin',
    email: 'martin@correo.com',
    conected: CONNECTION_STATUSES.OFFLINE,
  });
  const contact2 = new Contact({
    name: 'diego',
    email: 'diego@correo.com',
    conected: CONNECTION_STATUSES.ONLINE,
  });
  const contact3 = new Contact({
    name: 'maria',
    email: 'maria@correo.com',
    conected: CONNECTION_STATUSES.ONLINE,
  });
  const contactsInitialValue = [contact1, contact2, contact3];
  const [contacts, setContacts] = useState(contactsInitialValue);

  /* function to remove a contact from the list*/

  function removeContact(contact) {
    const tempList = [...contacts];
    const index = tempList.indexOf(contact);
    tempList.splice(index, 1);
    setContacts(tempList);
  }

  function toggleContactConnection(contact) {
    const tempList = [...contacts];
    const index = tempList.indexOf(contact);
    tempList[index].conected =
      tempList[index].conected === CONNECTION_STATUSES.ONLINE
        ? CONNECTION_STATUSES.OFFLINE
        : CONNECTION_STATUSES.ONLINE;
    setContacts(tempList);
  }

  function addContact(args) {
    const contact = new Contact(args);
    const tempList = [...contacts];
    tempList.push(contact);
    setContacts(tempList);
  }

  return (
    <div className="p-5">
      <div className="text-center">
        <h1 className="">Your Contacts</h1>
      </div>
      <div className="d-flex justify-content-center">
        <table>
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Connection</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact, index) => (
              <ContactComponent
                key={index}
                remove={removeContact}
                toggle={toggleContactConnection}
                contact={contact}
              />
            ))}
          </tbody>
        </table>
      </div>
      <div className="">
        <ContactFormComponent add={addContact} />
      </div>
    </div>
  );
};

export default ContactListComponent;
