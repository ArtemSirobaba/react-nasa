import React from "react";
import DropdownFirst from "./DropdownFirst";
import DropdownSecond from "./DropdownSecond";

import { connect } from "react-redux";
import DropdownThird from "./Input";

const Dropdown = (props) => {
  return (
    <>
      <DropdownFirst />
      {props.chosenRover.rover !== "Chose Rover" ? <DropdownSecond /> : null}
      {props.chosenCamera.camera !== "Chose Camera" ? <DropdownThird /> : null}
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

export default connect(mapStateToProps)(Dropdown);
