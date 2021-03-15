import React from "react";
import { connect } from "react-redux";
import { Dropdown as Select, DropdownButton } from "react-bootstrap";

const DropdownFirst = (props) => {
  
  const selectHandler = (event) => {
    props.dispatch({ type: "DEFAULT" });
    props.dispatch({type: "DEFAULTNUMBER"})
    props.dispatch({ type: event });
  };

  return (
    <>
      <Select>
        <DropdownButton
          title={props.chosenRover.rover}
          id="dropdown-menu"
          onSelect={selectHandler}
        >
          <Select.Item eventKey="CURIOSITY">Curiosity</Select.Item>
          <Select.Item eventKey="OPPORTUNITY">Opportunity</Select.Item>
          <Select.Item eventKey="SPIRIT">Spirit</Select.Item>
        </DropdownButton>
      </Select>
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

export default connect(mapStateToProps)(DropdownFirst);
