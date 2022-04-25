import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import Slideshow from "./slideshow";

const ModalButton = () => {
  const [show, setShow] = useState(false);

  const toggleModal = () => {
    setShow(!show);
  };

  return (
    <>
      <Button onClick={toggleModal}>Slideshow</Button>
      <Modal show={show} onHide={toggleModal}>
        <Modal.Header closeButton>
          <h1>PokeShow</h1>
        </Modal.Header>
        <Modal.Body>
          <Slideshow />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={toggleModal}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalButton;
