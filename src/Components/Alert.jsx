/* eslint-disable react/prop-types */
import { useState } from 'react';
import { Alert } from 'react-bootstrap';

function AlertMessage({ type, message }) {
  const [show, setShow] = useState(true);

  return (
    <Alert variant={type} onClose={() => setShow(false)} dismissible show={show}>
      {message}
    </Alert>
  );
}

export default AlertMessage;
