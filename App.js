import React, { Component } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput ,View, Image, TouchableOpacity, Modal } from 'react-native';
import Result from './src/Result';

export default class App extends Component  {

  constructor(props){
    super(props);
    this.state={
      modalVisible: false,
      gas: '',
      alcohol: '',
      result: '',

    };

    this.calculate = this.calculate.bind(this);
    this.close = this.close.bind(this);
  }

  close (visible){
    this.setState({modalVisible: visible});
  }

  calculate(){
    if(this.state.gas && this.state.alcohol){
      if((this.state.alcohol / this.state.gas) < 0.7){
        this.setState({result: 'Álcool'})
      }else{
        this.setState({result: 'Gasolina'})
      }
      console.log(this.state.result)
      this.setState({modalVisible: true});
    }else{
      alert('Preencha todos os campos')
    }

  }

  render(){
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
            onChangeText={(text) => this.setState({alcohol: text})}
          />
          
          <Text style={styles.label}>Gasolina(preço por litro):</Text>
          <TextInput
            keyboardType="numeric"
            style={styles.input}
            onChangeText={(text) => this.setState({gas: text})}
          />

          <TouchableOpacity style={styles.button} onPress={this.calculate}>
            <Text style={styles.buttonText}>Calcular</Text>  
          </TouchableOpacity>

        </View>

        <Modal transparent={true} animationType='fade' visible={this.state.modalVisible}>
          <Result 
            close={() => this.close(false)} 
            varResult= {this.state.result} 
            varGas= {this.state.gas} 
            varAlcohol= {this.state.alcohol} 
          />
        </Modal>

      </View>
    );
  }
}

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
