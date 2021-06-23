import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  const [peso, setPeso] = useState(''); // armazena o peso
  const [altura, setAltura] = useState(''); // armazena o peso

  function executarCalculos() {
    const alt = altura / 100; // convertendo cm para metro
    const imc = peso / (alt * alt);
    alert(imc.toFixed(2));
    if (imc < 18.6) {
      alert('Você está abaixo do peso - IMC = ' + imc.toFixed(2));
    } else if (imc >= 18,6 && imc < 24.9) {
      alert('Você está com o peso ideal - IMC = ' + imc.toFixed(2));
    } else if (imc >= 24.9 && imc < 34.9) {
      alert('Você está levemente acima do peso - IMC = ' + imc.toFixed(2));
    } else if (imc >= 34.9) {
      alert('Você está acima do peso - IMC = ' + imc.toFixed(2));
    }
    setPeso('');
    setAltura('');
  }

  return (
    <View style={estilo.container}>

      <Text style={estilo.title}> Calcule seu IMC </Text>

      <TextInput
        style = {estilo.input}
        value = {peso} // valor dentro do componente
        onChangeText = { (peso) => setPeso(peso) } // toda vez que o campo mudar ele é salvo
        placeholder = "Peso (kg)"
        keyboardType = "numeric"
      />

      <TextInput
        style = {estilo.input}
        value = {altura} // valor dentro do componente
        onChangeText = { (altura) => setAltura(altura) } // toda vez que o campo mudar ele é salvo
        placeholder = "Altura (cm)"
        keyboardType = "numeric"
      />

      <TouchableOpacity style={estilo.botao} onPress={executarCalculos}>
        <Text style={estilo.textoBotao}>Calcular</Text>
      </TouchableOpacity>

    </View>
  );
}

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1C1C1C',
    marginTop: 25
  },

  title: {
    textAlign: 'center',
    marginTop: 25,
    fontSize: 30,
    color: '#ddd', //cor da letra
    fontWeight: 'bold'
  },

  input: {
    backgroundColor: '#DDD',//cor do fundo do input
    borderRadius: 10,
    margin: 15,
    padding: 10,
    color: '#000', //cor da letra
    fontSize: 23
  },

  botao: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 15,
    backgroundColor: '#20B2AA',
    padding: 10,
    borderRadius: 10,
  },

  textoBotao: {
    color: '#FFF',
    fontSize: 25,
  }

});
