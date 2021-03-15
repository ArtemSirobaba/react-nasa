const initialStateRover = {
  rover: "Chose Rover",
};

export const reducerRover = (state = initialStateRover, action) => {
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

const initialStateCamera = {
  camera: "Chose Camera",
  id: "",
};

export const reducerCamera = (state = initialStateCamera, action) => {
  switch (action.type) {
    case "FHAZ":
      return {
        camera: "Front Hazard Avoidance Camera",
        id: "FHAZ",
      };
    case "RHAZ":
      return {
        camera: "Rear Hazard Avoidance Camera",
        id: "RHAZ",
      };
    case "MAST":
      return {
        camera: "Mast Camera",
        id: "MAST",
      };
    case "CHEMCAM":
      return {
        camera: "Chemistry and Camera Complex",
        id: "CHEMCAM",
      };
    case "MAHLI":
      return {
        camera: "Mars Hand Lens Imager",
        id: "MAHLI",
      };
    case "MARDI":
      return {
        camera: "Mars Descent Imager",
        id: "MARDI",
      };
    case "NAVCAM":
      return {
        camera: "Navigation Camera",
        id: "NAVCAM",
      };
    case "PANCAM":
      return {
        camera: "Panoramic Camera",
        id: "PANCAM",
      };
    case "MINITES":
      return {
        camera: "Mini-TES",
        id: "MINITES",
      };
    case "ALL":
      return {
        camera: "All Cameras",
        id: "all",
      };
    case "DEFAULT":
      return {
        camera: "Chose Camera",
        id: "",
      };
    default:
      return state;
  }
};

const initialStateSol = {
  sol: "",
};

export const reducerSol = (state = initialStateSol, action) => {
  switch (action.type) {
    case "NUMBER":
      return {
        sol: action.value,
      };
    case "DEFAULTNUMBER":
      return {
        sol: "",
      };
    default:
      return state;
  }
};

const initialStateToggle = {
  open: false,
};

export const reducerToggle = (state = initialStateToggle, action) => {
  switch (action.type) {
    case "OPEN":
      return {
        open: true,
      };
    case "CLOSE":
      return {
        open: false,
      };
    default:
      return state;
  }
};
