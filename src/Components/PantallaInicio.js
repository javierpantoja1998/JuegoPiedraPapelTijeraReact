import React from 'react';
import '../Assets/css/PantallaInicio.css';

function PantallaInicio({ iniciarJuego }) {
  return (
    <div className="PI_container">
      <h1 className="PI_title">JUEGO DE PIEDRA, PAPEL, O TIJERA</h1>
      <button className="PI_button" onClick={iniciarJuego}>Iniciar Juego </button>
    </div>
  );
}

export default PantallaInicio;