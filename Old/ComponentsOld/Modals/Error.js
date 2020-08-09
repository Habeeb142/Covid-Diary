import React, { useState } from "react";

import "./modals.css";

//Bootstrap
import { Modal, Button } from "react-bootstrap";

const Error = ({ name }) => {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);

  return (
    <>
      <Modal show={show} onHide={handleClose} backdrop="static">
        <Modal.Header>Error!</Modal.Header>
        <Modal.Body>Please enter your {name} to proceed.</Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={handleClose}
            style={{
              width: "91px",
              padding: "10px",
            }}
          >
            Dismiss
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Error;
