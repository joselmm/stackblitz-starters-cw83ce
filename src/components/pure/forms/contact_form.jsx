import React, { useRef } from 'react';
import CONNECTION_STATUSES from '../../../models/connection_statuses.enum.js';

const ContactFormComponent = ({ add }) => {
  const nameRef = useRef();
  const emailRef = useRef();
  const connectionRef = useRef();
  return (
    <form
      className="mt-5"
      onSubmit={(e) => {
        e.preventDefault();
        //console.log(Boolean(connectionRef.current.value));
        add({
          name: nameRef.current.value,
          email: emailRef.current.value,
          conected: connectionRef.current.value,
        });
      }}
    >
      <div className="form-group text-center">
        <input
          /* value="jose" */
          className="form-control"
          required
          type="text"
          ref={nameRef}
          placeholder="Enter your contact name"
        />
        <input
          /* value="jose@correo.com" */
          className="form-control"
          required
          type="email"
          ref={emailRef}
          placeholder="Enter your contact email"
        />
        <label htmlFor="connection-status">Connection Status</label>
        <select
          ref={connectionRef}
          id="connection-status"
          className="form-control"
        >
          <option value={CONNECTION_STATUSES.OFFLINE}>Offline</option>
          <option value={CONNECTION_STATUSES.ONLINE}>Online</option>
        </select>
        <button
          className="form-control"
          type="submit"
          className="btn btn-success"
        >
          Add Contact
        </button>
      </div>
    </form>
  );
};

export default ContactFormComponent;
