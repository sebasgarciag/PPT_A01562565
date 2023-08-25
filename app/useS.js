import React, { useState } from 'react';
import utileriasS from './utileriasS.js';

const opciones = ['Piedra', 'Papel', 'Tijera'];

const useS = () => {
  const [eleccionJugador, setEleccionJugador] = useState(null);
  const [eleccionComputadora, setEleccionComputadora] = useState(null);
  const [resultado, setResultado] = useState('');
  const { checar } = utileriasS();

  function logica(eleccionJugador) {
    const eleccionComputadoraAleatoria = opciones[Math.floor(Math.random() * 3)];
    setEleccionJugador(eleccionJugador);
    setEleccionComputadora(eleccionComputadoraAleatoria);
    const resultado = checar(eleccionJugador, eleccionComputadoraAleatoria);
    setResultado(resultado);
  }

  return { logica, eleccionComputadora, eleccionJugador, resultado };
};

export default useS;
