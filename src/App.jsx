import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState('');
  const [resultado, setResultado] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const alturaM = parseFloat(altura) / 100;
    const pesoKg = parseFloat(peso);
    const imc = pesoKg / (alturaM * alturaM);
    setResultado(imc);
  };

  const getClassificacao = (imc) => {
    if (imc < 18.5) {
      return 'Abaixo do peso';
    } else if (imc >= 18.5 && imc < 24.9) {
      return 'Peso normal';
    } else if (imc >= 25 && imc < 29.9) {
      return 'Sobrepeso';
    } else {
      return 'Obesidade';
    }
  };

  return (
    <div className="App">
      <header className="App__header">
        <h1 className="App__title">Calculadora de IMC</h1>
        <form className="App__form" onSubmit={handleSubmit}>
          <div className="App__form-group form-group">
            <label className="App__label" htmlFor="altura">Altura (cm): </label>
            <input
              className="App__input form-control"
              type="number"
              id="altura"
              value={altura}
              onChange={(e) => setAltura(e.target.value)}
              required
            />
          </div>
          <div className="App__form-group form-group">
            <label className="App__label" htmlFor="peso">Peso (kg): </label>
            <input
              className="App__input form-control"
              type="number"
              id="peso"
              value={peso}
              onChange={(e) => setPeso(e.target.value)}
              required
            />
          </div>
          <button className="App__button btn btn-primary" type="submit">Calcular</button>
        </form>
        {resultado && (
          <div className="App__result">
            <h2 className="App__imc">Seu IMC: {resultado.toFixed(2)}</h2>
            <h3 className="App__classificacao">Classificação: {getClassificacao(resultado)}</h3>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;

