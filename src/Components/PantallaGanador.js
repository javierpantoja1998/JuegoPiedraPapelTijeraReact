import React from 'react';
import '../Assets/css/PantallaGanador.css'; 

function PantallaGanador({ ganador }) {
  
  const reiniciarPartida = () => {
    window.location.reload(); 
  };

  return (
    <div className='PG_container'>
      <h1 className='PG_title'>¡Felicidades! El ganador es: {ganador}</h1>
      <button className='PG_button' onClick={reiniciarPartida}>Empezar otra partida</button>
    </div>
  );
}

export default PantallaGanador;