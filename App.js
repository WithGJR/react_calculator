import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      result: 0,
      operand: '',
      operandStack: []
    };
    this.inputOperand = this.inputOperand.bind(this);
  }

  inputOperand(n) {
    if (this.state.operand === '0' && n === '0') {
      return;
    }
    if (this.state.operand === '0' && n !== '0') {
      this.setState({ operand: n });
      return;
    }
    this.setState({ operand: this.state.operand+n });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.numberTextSection}>
          <Text style={styles.numberText}>{this.state.operand}</Text>
        </View>

        <View style={styles.buttonsContainer}>
          <View style={styles.buttonRowContainer}>
            <TouchableOpacity style={styles.numberButton} onPress={() => { this.inputOperand('7'); }}>
              <Text stlye={styles.numberButtonText}>7</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.numberButton} onPress={() => { this.inputOperand('8'); }}>
              <Text stlye={styles.numberButtonText}>8</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.numberButton} onPress={() => { this.inputOperand('9'); }}>
              <Text stlye={styles.numberButtonText}>9</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.operationButton} onPress={() => {}}>
              <Text stlye={styles.operationButtonText}>/</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.buttonRowContainer}>
            <TouchableOpacity style={styles.numberButton} onPress={() => { this.inputOperand('4'); }}>
              <Text stlye={styles.numberButtonText}>4</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.numberButton} onPress={() => { this.inputOperand('5'); }}>
              <Text stlye={styles.numberButtonText}>5</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.numberButton} onPress={() => { this.inputOperand('6'); }}>
              <Text stlye={styles.numberButtonText}>6</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.operationButton} onPress={() => {}}>
              <Text stlye={styles.operationButtonText}>X</Text>
            </TouchableOpacity>
          </View>
          
          <View style={styles.buttonRowContainer}>
            <TouchableOpacity style={styles.numberButton} onPress={() => { this.inputOperand('1'); }}>
              <Text stlye={styles.numberButtonText}>1</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.numberButton} onPress={() => { this.inputOperand('2'); }}>
              <Text stlye={styles.numberButtonText}>2</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.numberButton} onPress={() => { this.inputOperand('3'); }}>
              <Text stlye={styles.numberButtonText}>3</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.operationButton} onPress={() => {}}>
              <Text stlye={styles.operationButtonText}>-</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.buttonRowContainer}>
              <TouchableOpacity style={styles.halfButton} onPress={() => { this.inputOperand('0'); }}>
                <Text stlye={styles.numberButtonText}>0</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.quarterButton} onPress={() => {}}>
                <Text stlye={styles.numberButtonText}>.</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.operationButton} onPress={() => {}}>
                <Text stlye={styles.operationButtonText}>+</Text>
              </TouchableOpacity>
              
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  numberTextSection: {
    flex: 0.3,
    justifyContent: 'center',
    alignItems: 'center'
  },
  numberText: {
    fontSize: 40
  },
  buttonsContainer: {
    flex: 0.7,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonRowContainer: {
    flex: 0.25,
    flexDirection: 'row'
  },
  numberButton: {
    backgroundColor: '#DDDDDD',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 0.25,
    height: '100%'
  },
  numberButtonText: {
    color: '#FF00FF',
    fontSize: 30
  },
  operationButton: {
    backgroundColor: '#FF8800',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 0.25,
    height: '100%'
  },
  operationButtonText: {
    color: '#FFFFFF',
    fontSize: 30
  },
  halfButton: {
    flex: 0.5,
    backgroundColor: '#DDDDDD',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%'
  },
  quarterButton: {
    flex: 0.25,
    backgroundColor: '#DDDDDD',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%'
  }
});
