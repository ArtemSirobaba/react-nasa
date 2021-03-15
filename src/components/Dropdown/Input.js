import React from "react";
import { InputGroup, FormControl } from "react-bootstrap";
import { connect } from "react-redux";

const Input = (props) => {
  const handleChange = (event) => {
    let number = event.target.value;
    if (number >= 0 && number <= 1000) {
      props.dispatch({ type: "NUMBER", value: number });
    }
  };

  return (
    <>
      <InputGroup>
        <FormControl
          placeholder="Chose Solar day on Mars (1-1000)"
          aria-label="sol"
          type="text"
          value={props.chosenSol.sol}
          aria-describedby="basic-addon1"
          onInput={handleChange}
        />
      </InputGroup>
    </>
  );
};

function mapStateToProps(state) {
  return {
    chosenRover: state.rover,
    chosenCamera: state.camera,
    chosenSol: state.sol,
  };
}

export default connect(mapStateToProps)(Input);
