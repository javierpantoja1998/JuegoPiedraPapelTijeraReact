import React, { useState, useEffect } from 'react';
import '../Assets/css/PantallaJuego.css'; // Importar el archivo CSS

function PantallaJuego({ mostrarGanador }) {
  const [victoriasJug1, setVictoriasJug1] = useState(0);
  const [victoriasJug2, setVictoriasJug2] = useState(0);
  const [resultado, setResultado] = useState('');
  const [seleccionJug1, setSeleccionJug1] = useState(0);
  const [seleccionJug2, setSeleccionJug2] = useState(0);
  const [botonesJug1Activos, setBotonesJug1Activos] = useState(true);
  const [botonesJug2Activos, setBotonesJug2Activos] = useState(true);

  useEffect(() => {
    if (seleccionJug1 !== 0 && seleccionJug2 !== 0) {
      comprobarSelecciones();
    }
  }, [seleccionJug1, seleccionJug2]);

  const eleccionJugador1 = (seleccion) => {
    setSeleccionJug1(seleccion);
    setBotonesJug1Activos(false);
  };

  const eleccionJugador2 = (seleccion) => {
    setSeleccionJug2(seleccion);
    setBotonesJug2Activos(false);
  };

  const comprobarSelecciones = () => {
    let nuevasVictoriasJug1 = victoriasJug1;
    let nuevasVictoriasJug2 = victoriasJug2;
  
    if ((seleccionJug1 === 1 && seleccionJug2 === 3) ||
        (seleccionJug1 === 2 && seleccionJug2 === 1) ||
        (seleccionJug1 === 3 && seleccionJug2 === 2)) {
      nuevasVictoriasJug1++;
      setResultado('RONDA PARA EL JUGADOR 1');
    } else if ((seleccionJug2 === 1 && seleccionJug1 === 3) ||
               (seleccionJug2 === 2 && seleccionJug1 === 1) ||
               (seleccionJug2 === 3 && seleccionJug1 === 2)) {
      nuevasVictoriasJug2++;
      setResultado('RONDA PARA EL JUGADOR 2');
    } else {
      setResultado('EMPATE! Se repite ronda');
    }
  
    if (nuevasVictoriasJug1 === 3) {
      mostrarGanador("Jugador 1");
      return;
    } else if (nuevasVictoriasJug2 === 3) {
      mostrarGanador("Jugador 2");
      return;
    }
  
    setVictoriasJug1(nuevasVictoriasJug1);
    setVictoriasJug2(nuevasVictoriasJug2);
    setSeleccionJug1(0);
    setSeleccionJug2(0);
    // Habilitar los botones para la siguiente ronda
    setBotonesJug1Activos(true);
    setBotonesJug2Activos(true);
  };

  const comprobarGanador = () => {
    if (victoriasJug1 === 3) {
      mostrarGanador("Jugador 1");
    } else if (victoriasJug2 === 3) {
      mostrarGanador("Jugador 2");
    }
  };

  return (
    <div className="PJ_container">
        <div className="PJ_playerPanel">
            <h2>Jugador 1</h2>
            <button className={`PJ_button ${seleccionJug1 === 1 ? 'selected' : ''}`} onClick={() => eleccionJugador1(1)} disabled={!botonesJug1Activos}>Seleccionar Piedra</button>
            <button className={`PJ_button ${seleccionJug1 === 2 ? 'selected' : ''}`} onClick={() => eleccionJugador1(2)} disabled={!botonesJug1Activos}>Seleccionar Papel</button>
            <button className={`PJ_button ${seleccionJug1 === 3 ? 'selected' : ''}`} onClick={() => eleccionJugador1(3)} disabled={!botonesJug1Activos}>Seleccionar Tijera</button>
            <p>{victoriasJug1}</p>
        </div>
        <div className="PJ_playerPanel">
            <h2>Jugador 2</h2>
            <button className={`PJ_button ${seleccionJug2 === 1 ? 'selected' : ''}`} onClick={() => eleccionJugador2(1)} disabled={!botonesJug2Activos}>Seleccionar Piedra</button>
            <button className={`PJ_button ${seleccionJug2 === 2 ? 'selected' : ''}`} onClick={() => eleccionJugador2(2)} disabled={!botonesJug2Activos}>Seleccionar Papel</button>
            <button className={`PJ_button ${seleccionJug2 === 3 ? 'selected' : ''}`} onClick={() => eleccionJugador2(3)} disabled={!botonesJug2Activos}>Seleccionar Tijera</button>
            <p>{victoriasJug2}</p>
        </div>
    </div>
  );
}

export default PantallaJuego;