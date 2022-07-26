export const INCREMENTAR = "CONTADOR::INCREMENTAR";
export const DECREMENTAR = "CONTADOR::DECREMENTAR";

export interface IAction {
  type: string;
}

export const incrementarContador = (item: string) => ({
  type: INCREMENTAR,
  payload: item || "",
});

export const decrementarContador = () => ({
  type: DECREMENTAR,
  payload: "",
});
