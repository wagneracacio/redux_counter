import { INCREMENTAR, DECREMENTAR, IAction } from "../actions/contador";

const initialState = {
  contador: 0,
};

const contadorReducer = (state = initialState, action: IAction) => {
  console.log(action)
  switch (action.type) {
    case INCREMENTAR:
      return {
        ...state,
        contador: state.contador + 1,
      };
    case DECREMENTAR:
      return {
        ...state,
        contador: state.contador - 1,
      };
    default:
      return state;
  }
};

export default contadorReducer;
