import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import useS from './useS';

const App = () => {
  const { eleccionComputadora, eleccionJugador, resultado, logica } = useS();

  const opciones = ['Piedra', 'Papel', 'Tijera'];

  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>Piedra, Papel o Tijera</Text>
      <View style={styles.contenedorOpciones}>
        {opciones.map((opcion) => (
          <TouchableOpacity
            key={opcion}
            style={styles.botonOpcion}
            onPress={() => logica(opcion)}
          >
            <Text style={styles.textoBoton}>{opcion}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <Text style={styles.texto}>Tu elección: {eleccionJugador}</Text>
      <Text style={styles.texto}>Computadora: {eleccionComputadora}</Text>
      <Text style={styles.textoResultado}>Resultado: {resultado}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  titulo: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  contenedorOpciones: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 30,
  },
  botonOpcion: {
    backgroundColor: '#3498db',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  textoBoton: {
    color: 'white',
    fontSize: 18,
  },
  texto: {
    fontSize: 18,
    marginBottom: 10,
  },
  textoResultado: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
  },
});

export default App;
