const initialStateToggle = {
  open: false,
};

const reducerToggle = (state = initialStateToggle, action) => {
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
export default reducerToggle;
