import "./App.css";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { decrementarContador, incrementarContador } from "./actions/contador";

interface Props {
  contador: number;
  incrementar: (item: string) => void;
  decrementar: () => void;
}
export default connect(
  (state: any) => ({
    contador: state.contadorReducer.contador,
  }),
  (dispatch: Dispatch) => ({
    incrementar: (item: string) => dispatch(incrementarContador(item)),
    decrementar: () => dispatch(decrementarContador()),
  })
)(function App({ contador, incrementar, decrementar }: Props) {
  return (
    <>
      <div className="App">Contador: {contador}</div>
      <button id="add" onClick={() => incrementar("hello")}>
        Incrementar
      </button>
      <button onClick={decrementar}>Decrementar</button>
    </>
  );
});
