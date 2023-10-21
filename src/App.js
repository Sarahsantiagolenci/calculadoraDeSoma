import "./styles.css";
import { useState } from "react";

export default function App() {
  const [primeiroValor, setPrimeiroValor] = useState();
  const [segundoValor, setSegundoValor] = useState();
  const [resultado, setresultado] = useState();

  const CapturarValor = (item) => {
    setPrimeiroValor(Number(item.target.value));
  };

  const CapturarSegundoValor = (item) => {
    setSegundoValor(Number(item.target.value));
  };

  const Soma = () => {
    setResultado(primeiroValor + segundoValor);
  };

  return (
    <div>
      <h1>Calculadora</h1>
      <input type="number" onChange={CapturarValor} />
      <input type="number" onChange={CapturarSegundoValor} />
      <button>+</button>
      <h3>{resultado}</h3>
    </div>
  );
}
