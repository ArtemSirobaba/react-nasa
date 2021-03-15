import React from "react";
import { Dropdown as Select, DropdownButton } from "react-bootstrap";
import { connect } from "react-redux";
import {Curiosity,OpportunitySpirit} from './RoverCameras'


const DropdownSecond = (props) => {

  const selectHandler = (event) => {
    props.dispatch({ type: event });
  };

  return (
    <>
      <Select>
        <DropdownButton
          alignRight
          title={props.chosenCamera.camera}
          id="dropdown-menu-align-right"
          onSelect={selectHandler}
          variant='warning'
          className='m-2'
        >
          {props.chosenRover.rover === "Curiosity" ? (
            <Curiosity />
          ) : (
            <OpportunitySpirit />
          )}
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

export default connect(mapStateToProps)(DropdownSecond);
