import React, { useState, useEffect } from "react";
import axios from "axios";
import { connect } from "react-redux";
import LoadMore from "./Loadmore";
import './Photos.css'

const Photos = (props) => {
  const [data, setData] = useState([]);

  const API = `https://api.nasa.gov/mars-photos/api/v1/rovers/${props.chosenRover.rover.toLowerCase()}/photos?sol=${
    props.chosenSol.sol
  }${
    props.chosenCamera.id === "all" ? "" : props.chosenCamera.id
  }&api_key=9yrl1ulg6JlnMnFVu3vt51ulQ5I6kaal8gM5bcRO`;

  useEffect(() => {
    let cleanupFunction = false;
    const getData = async () => {
      const res = await axios.get(API);
      if (!cleanupFunction) {
        let timer = setTimeout(() => {
          setData(res.data);
          clearTimeout(timer);
        }, 2000);
      }
    };
    getData();
    return () => (cleanupFunction = true);
  }, [API]);

  if (data.length === 0) {
    return (
      <div ref={props.refProp} className="h-screen bg-black flex justify-center items-center">
        <div className="loader">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black">
      <LoadMore state={data} />
    </div>
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

export default connect(mapStateToProps)(Photos);