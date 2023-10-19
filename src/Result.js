 import React, { Component } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity} from 'react-native';

export default class App extends Component {

  render(){
    return (
        <View style={styles.container}>
            
            <Image 
            source={require('../assets/gas.png')}
            style={styles.gasImage}
            />
            
            <Text style={styles.title}>Compensa usar {this.props.varResult} </Text>
        
            <View style={styles.prices}>
                <Text style={{color:'#FFF', fontSize: 28, fontWeight: 'bold'}}>Com os preços: </Text>
                <Text style={{color:'#FFF', fontSize: 18}}>Álcool: R$ {this.props.varAlcohol}</Text>
                <Text style={{color:'#FFF', fontSize: 18}}>Gasolina: R$ {this.props.varGas}</Text>
            </View>

            <TouchableOpacity style={styles.button} onPress={this.props.close}>
                <Text style={styles.buttonText}>Calcular novamente</Text>
            </TouchableOpacity>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    container:{
        width: '100%', 
        height: '100%',
        justifyContent: 'center',
        alignItems:'center',
        backgroundColor: '#292929',
    },
    gasImage: {

    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#00F661',
        marginTop: 20 
    },
    prices: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        gap: 10,
    },
    button: {
        width: 300,
        alignItems: 'center',
        justifyContent: 'center',
        height: 40,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#FC3C34',
        marginTop: 40
    },
    buttonText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#FC3C34'
    }

})