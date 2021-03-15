import React from "react";
import { Button, Modal } from "react-bootstrap";
import Dropdown from "../Dropdown";
import { connect } from "react-redux";

const CenteredModal = (props) => {
  const startHandler = () => {
    if (
      props.chosenRover.rover !== "Chose Rover" &&
      props.chosenCamera.camera !== "Chose Camera" &&
      props.chosenSol.sol !== ""
    ) {
      props.dispatch({ type: "OPEN" });
      props.hide();
    }
    else alert('Chose All data')
  };

  return (
    <Modal
      show={props.show}
      onHide={props.onHide}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton onClick={() => props.hide()}>
        <Modal.Title id="contained-modal-title-vcenter">
          Chose Rover, Camera and Sol
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className='flex flex-col items-center -m-2' >
        <Dropdown/>
      </Modal.Body>
      <Modal.Footer >
        <Button variant="success" onClick={startHandler}>Let's go!</Button>
      </Modal.Footer>
    </Modal>
  );
};

function mapStateToProps(state) {
  return {
    chosenRover: state.rover,
    chosenCamera: state.camera,
    chosenSol: state.sol,
    toggle: state.toggle,
  };
}

export default connect(mapStateToProps)(CenteredModal);
