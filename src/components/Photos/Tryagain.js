import React from "react";
import { Button } from "react-bootstrap";
import { connect } from "react-redux";

const Tryagain = (props) => {
  return (
    <div className="flex justify-center items-center text-white text-6xl h-screen flex-col">
      <h1>OOOOPS NOTHING HERE:(</h1>
      <h3>TRY ANOTHER COMBINATION</h3>
      <Button className='w-36' onClick={() => props.dispatch({ type: "CLOSE" })} variant="info">Try Again</Button>
    </div>
  );
};


function mapStateToProps(state) {
    return {
      toggle: state.toggle,
    };
  } 

export default connect(mapStateToProps)(Tryagain);