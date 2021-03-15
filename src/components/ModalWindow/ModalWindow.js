import React, { useState } from "react";
import { Button } from "react-bootstrap";
import CenteredModal from "./CenteredModal";
import { connect } from "react-redux";

const ModalWindow = (props) => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <style type="text/css">
        {`
    .btn-flat {
      background-color: #cc5200;
      color: white;
    }

    .btn-xxl {
      padding: 1rem 1.5rem;
      font-size: 1.5rem;
    }
    `}
      </style>
      <Button
        variant="flat"
        onClick={() => {
          setModalShow(true);
          props.dispatch({ type: "CLOSE" });
          props.dispatch({ type: "DEFAULT" });
          props.dispatch({ type: "DEFAULTROVER" });
          props.dispatch({ type: "DEFAULTNUMBER" });
        }}
      >
        Set your Rover
      </Button>
      <CenteredModal
        show={modalShow}
        onHide={() => {}}
        hide={() => setModalShow(false)}
      />
    </>
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

export default connect(mapStateToProps)(ModalWindow);
