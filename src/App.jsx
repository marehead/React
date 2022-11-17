import './App.css';
import { useState } from 'react';

function App() {
    const [contador, setContador] = useState(0);

    const adicionarUm = () => {
        setContador((contador) => contador + 1);
    };

    const subtrairUm = () => {
      setContador((contador) => contador - 1);
    };

    const traduzirTitulo = () => {

      if (titulo === "Meu primeiro contado") {
        setTitulo("My first counter!");
      } else {
      setTitulo("Meu primeiro contador!");
    }

    const pt = "";
    const en = "";
    titulo === en ? setTitulo(pt) : setTitulo(en); 
  };


  return (
    <div className="App">
      <h1>Meu Primeiro contador</h1>
      <button>Traduzir</button>
      <br />
      <br />
      <button onClick={subtrairUm}>-</button>
        <h1> {contador} </h1>
        <button onClick={adicionarUm}>+</button>  
    </div>
  );
}

export default App;
