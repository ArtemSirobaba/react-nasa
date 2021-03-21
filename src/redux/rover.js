const initialStateRover = {
  rover: "Chose Rover",
};

const reducerRover = (state = initialStateRover, action) => {
  switch (action.type) {
    case "CURIOSITY":
      return {
        rover: "Curiosity",
      };
    case "OPPORTUNITY":
      return {
        rover: "Opportunity",
      };
    case "SPIRIT":
      return {
        rover: "Spirit",
      };
    case "DEFAULTROVER":
      return {
        rover: "Chose Rover",
      };
    default:
      return state;
  }
};

export default reducerRover;
