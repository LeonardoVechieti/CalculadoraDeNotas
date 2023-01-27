import React, {Component} from 'react';
import {View, Text, TextInput, StyleSheet, TouchableOpacity} from 'react-native';

export default class App extends Component{

  constructor(props){
    super(props);
    this.state = {nota1: 0, nota2: 0, nota3: 0, media: 0, situacao: ''};
    this.calcular = this.calcular.bind(this);
  }
  calcular(){
    let nota1 = this.state.nota1;
    let nota2 = this.state.nota2;
    let nota3 = this.state.nota3;
    let media = (parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3)) / 3;
    media = media.toFixed(2);
    let situacao = '';
    if(media >= 7){
      situacao = 'Aprovado';
    }else{
      situacao = 'Reprovado';
    }
    this.setState({media: media, situacao: situacao});
  }

  render(){
    return(
      <View style={styles.container}>
        <Text style={{textAlign: 'center', fontSize: 30, marginTop: 30}}>Calculadora de Notas</Text>
        <TextInput 
          style={styles.textInput}
          placeholder="Digite a primeira nota"
          keyboardType='numeric'
          onChangeText={(nota1) => this.setState({nota1})}
        />
        <TextInput 
          style={styles.textInput}
          placeholder="Digite a segunda nota"
          keyboardType='numeric'
          onChangeText={(nota2) => this.setState({nota2})}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Digite a terceira nota"
          keyboardType='numeric'
          onChangeText={(nota3) => this.setState({nota3})}
        />
        <TouchableOpacity style={styles.button} onPress={this.calcular}>
          <Text style={{textAlign: 'center', fontSize: 30}}>Calcular</Text>
        </TouchableOpacity>
        <Text style={styles.textFinal}>Média: {this.state.media}</Text>
        <Text style={styles.textFinal}>Situação: {this.state.situacao} </Text>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textInput: {
    textAlign: 'center',
    padding: 30,
    backgroundColor: '#beb6b6',
    marginLeft: 30,
    marginRight: 30,
    marginTop: 30,
    fontSize: 25,
  },
  button: {
    backgroundColor: '#bf4b4b',
    marginLeft: 30,
    marginRight: 30,
    marginTop: 30,
    padding: 30,
  },
  textFinal: {
    textAlign: 'center',
    fontSize: 30,
    marginTop: 30,
  },
});
