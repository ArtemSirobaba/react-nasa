import React, { useRef, useEffect } from "react";
import ModalWindow from "./ModalWindow/ModalWindow";
import Photos from "./Photos/Photos";
import { connect } from "react-redux";

const Home = (props) => {
  const isVisible = props.toggle.open;

  const myRef = useRef(null);

  useEffect(() => {
    if (isVisible) {
      let timeout = setTimeout(
        () =>
          myRef.current.scrollIntoView({ behavior: "smooth", block: "start" }),
        500
      );
      return () => clearTimeout(timeout);
    }
  }, [isVisible]);

  return (
    <>
      <div className="text-white relative h-full">
        <div className="font-mono absolute top-1/2 m-2 md:right-1/3 lg:right-1/2">
          <h1 className="text-2xl sm:text-3xl md:text-5xl pb-2">Explore MARS with us</h1>
          <ModalWindow />
        </div>
      </div>
      {isVisible ? <Photos refProp={myRef} /> : null}
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

export default connect(mapStateToProps)(Home);
