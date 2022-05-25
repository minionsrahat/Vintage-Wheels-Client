import React from 'react';
import { Modal, Button } from "react-bootstrap";

const ActionConfirmation = ({ showModal, hideModal, confirmModal, id,message })  => {
    return (
        <Modal show={showModal} onHide={hideModal}>
        <Modal.Header closeButton>
          <Modal.Title className='text-center'>Confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body><div className="alert alert-success">{message}</div></Modal.Body>
        <Modal.Footer>
          <Button variant="default" onClick={hideModal}>
            No
          </Button>
          <Button variant="success" onClick={() => confirmModal( id) }>
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
    )
};

export default ActionConfirmation;