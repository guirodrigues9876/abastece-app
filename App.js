import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput ,View, Image, TouchableOpacity, Modal } from 'react-native';
import { ResultScreen } from './src/Result';

export default function App() {

  const [modalVisible, setModalVisible] = useState(false);
  const [gas, setGas] = useState('');
  const [alcohol, setAlcohol] = useState('');
  const [result, setResult] = useState('');


  const close = (visible) => {
    setModalVisible(visible);
  };

  const calculate = () => {
    if(gas && alcohol){
      if((alcohol / gas) < 0.7){
        setResult('Álcool');
      }else{
        setResult('Gasolina');
      }
      setModalVisible(true);
    }else{
      alert('Preencha todos os campos')
    }
  };

  return (
      <View style={styles.container}>
        <StatusBar style="auto" />

        <Image
          source={require('./assets/logo.png')}
          style={styles.logoImage}
        />
        <Text style={styles.title}>Qual melhor opção?</Text>

        <View style={styles.inputsArea}>

          <Text style={styles.label}>Álcool(preço por litro):</Text>
          <TextInput
            keyboardType="numeric"
            multiline
            numberOfLines={1}
            style={styles.input}
            onChangeText={(text) => setAlcohol(text)}
          />
          
          <Text style={styles.label}>Gasolina(preço por litro):</Text>
          <TextInput
            keyboardType="numeric"
            style={styles.input}
            onChangeText={(text) => setGas(text)}
          />

          <TouchableOpacity style={styles.button} onPress={calculate}>
            <Text style={styles.buttonText}>Calcular</Text>  
          </TouchableOpacity>

        </View>

        <Modal transparent={true} animationType='fade' visible={modalVisible}>
          <ResultScreen 
            close={() => close(false)} 
            varResult= {result} 
            varGas= {gas} 
            varAlcohol= {alcohol} 
          />
        </Modal>

      </View>
    );
  };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#212121',
    alignItems: 'center',
  },
  logoImage: {
    marginTop: 100,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#FFF',
    marginTop: 20
  },
  inputsArea: {
    flex: 1,
    width: '100%',
    margin: 50,
    padding: 15,
    gap: 15
  },
  label: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#FFF',
  },
  input: {
    width: '100%',
    height: 50,
    padding: 10,
    backgroundColor: '#FFF',
    borderRadius: 5
  },
  buttonText: {
    padding: 10,
    height:50,
    textAlign: 'center',
    backgroundColor: '#FA302A',
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 20,
    borderRadius: 5,
  }

});
