import CONNECTION_STATUSES from './connection_statuses.enum.js';

class Contact {
  name = '';
  email = '';
  conected = CONNECTION_STATUSES.OFFLINE;

  constructor({ name, email, conected }) {
    this.name = name;
    this.email = email;
    this.conected = conected;
  }
}

export default Contact;
