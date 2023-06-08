import React from 'react';
import PropTypes from 'prop-types';
import Contact from '../../models/contact.class.js';
import '../../styles/contact.scss';
import CONNECTION_STATUSES from '../../models/connection_statuses.enum.js';

const ContactComponent = ({ contact, remove, toggle }) => {
  function connectionStatus() {
    return contact.conected === CONNECTION_STATUSES.ONLINE ? (
      <span>
        Online{' '}
        <i
          onClick={() => toggle(contact)}
          className="bi bi-check-circle-fill contact-action"
          style={{ color: 'green' }}
        ></i>
      </span>
    ) : (
      <span>
        Offline{' '}
        <i
          onClick={() => toggle(contact)}
          className="bi bi-x-circle-fill contact-action"
          style={{ color: 'red' }}
        ></i>
      </span>
    );
  }
  return (
    <tr>
      <td>{contact.name}</td>
      <td>{contact.email}</td>
      <td className="text-center">{connectionStatus()}</td>
      <td className="text-center">
        <i
          onClick={() => remove(contact)}
          className="bi bi-trash contact-action"
          style={{ color: 'red' }}
        ></i>
      </td>
    </tr>
  );
};

ContactComponent.propTypes = {
  contact: PropTypes.instanceOf(Contact).isRequired,
};

export default ContactComponent;
