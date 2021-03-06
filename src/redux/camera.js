const initialStateCamera = {
  camera: "Chose Camera",
  id: "",
};

const reducerCamera = (state = initialStateCamera, action) => {
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

export default reducerCamera;