import React, { useState } from 'react';
import './App.css';
import PantallaJuego from './Components/PantallaJuego';
import PantallaInicio from './Components/PantallaInicio';
import PantallaGanador from './Components/PantallaGanador';

function App() {
  const [mostrarPantallaJuego, setMostrarPantallaJuego] = useState(false);
  const [mostrarPantallaGanador, setMostrarPantallaGanador] = useState(false);
  const [ganador, setGanador] = useState('');

  const iniciarJuego = () => {
    setMostrarPantallaJuego(true);
  };

  const mostrarGanador = (jugador) => {
    setGanador(jugador);
    setMostrarPantallaGanador(true);
  };

  return (
    <div className="container">
      {!mostrarPantallaGanador ? (
        mostrarPantallaJuego ? (
          <PantallaJuego mostrarGanador={mostrarGanador} />
        ) : (
          <PantallaInicio iniciarJuego={iniciarJuego} />
        )
      ) : (
        <PantallaGanador ganador={ganador} />
      )}
    </div>
  );
}

export default App;