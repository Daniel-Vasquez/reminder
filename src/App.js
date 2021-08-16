import { useState } from "react";
import "./App.css";

const Loading = () => <p>Cargando...</p>;

const Results = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      {props.results.map((result) => {
        return <p>{result}</p>;
      })}
    </div>
  );
};

const state1 = {
  title: "Hola",
  results: [1, 2, 3],
  loading: false,
};

const state2 = {
  title: "Hola",
  results: [1, 2, 3],
  loading: true,
};

const state3 = {
  title: "Hola",
  results: [4, 2, 6],
  loading: false,
};

function App() {
  const [state, setState] = useState({
    title: "Hola",
    results: [1, 2, 3],
    loading: false,
  });

  return (
    <div>
      <button onClick={() => setState(state1)}>Initial state</button>
      <button onClick={() => setState(state2)}>Pedir datos a una API</button>
      <button onClick={() => setState(state3)}>
        Success y pintar nuevos datos
      </button>

      {state.loading && <Loading />}

      {!state.loading && (
        <Results title={state.title} results={state.results} />
      )}
    </div>
  );
}

export default App;
