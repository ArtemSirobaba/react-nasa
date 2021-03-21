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

export default reducerSol;
