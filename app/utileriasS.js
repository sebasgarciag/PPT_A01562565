const utileriasS = () => {
    function checar(eleccionJugador, eleccionComputadoraAleatoria) {
      const combinacionGanadora = {
        Piedra: 'Tijera',
        Papel: 'Piedra',
        Tijera: 'Papel',
      };
  
      if (eleccionJugador === eleccionComputadoraAleatoria) {
        return 'Empate';
      } else if (combinacionGanadora[eleccionJugador] === eleccionComputadoraAleatoria) {
        return 'Ganaste';
      } else {
        return 'Perdiste';
      }
    }
  
    return { checar };
  };
  
  export default utileriasS;
  