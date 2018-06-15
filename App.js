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
      showResult: false, 
      operand: '',
      operator: '',
      temp: []
    };
    this.inputOperand = this.inputOperand.bind(this);
    this.changeOperator = this.changeOperator.bind(this);
    this.inputDot = this.inputDot.bind(this);
  }

  inputOperand(n) {
    if (this.state.operand === '0' && n === '0') {
      return;
    }
    if (this.state.showResult) {
      this.setState({ temp: [n], showResult: false, operand: n });
      return;
    }

    var newOperand = (this.state.operand === '0' && n !== '0') ? n : this.state.operand+n;
    var newTemp = this.state.temp.slice();
    if (newTemp.length > 0) {
      var lastElement = newTemp[newTemp.length - 1];
      if (!isNaN(lastElement)) {
        newTemp[newTemp.length - 1] = newOperand;
      } else if (lastElement === '.') {
        newOperand = n;
        newTemp.push(n);
      } else {
        newTemp.push(newOperand);
      }
    } else {
      newTemp.push(newOperand);
    }
    
    this.setState({ operand: newOperand, temp: newTemp });
  }

  changeOperator(operator) {
    if (this.state.showResult) {
      this.setState({ temp: [operator], showResult: false, operand: newOperand });
    }

    var newTemp = this.state.temp.slice();
    if (newTemp.length > 0) {
      var lastElement = newTemp[newTemp.length - 1];
      if (isNaN(lastElement)) {
        newTemp[newTemp.length - 1] = operator;
      } else {
        newTemp.push(operator);
      }
    }

    if (this.state.operand !== '') {
      this.setState({ operand: '', operator, temp: newTemp });
    } else {
      this.setState({ operator, temp: newTemp });
    }
  }

  inputDot() {
    if (this.state.showResult) {
      this.setState({ temp: [], showResult: false, operand: '', operator: '' });
      return;
    }

    var newTemp = this.state.temp.slice();
    if (newTemp.length > 0) {
      var lastElement = newTemp[newTemp.length - 1];
      if (lastElement === '.') {
        return;
      }
      newTemp.push('.');
    }
    this.setState({ temp: newTemp });
  }

  render() {
    var result = this.state.temp.join('');
    if (this.state.showResult) {
      result += '=' + eval(result);
    }

    return (
      <View style={styles.container}>
        <View style={styles.numberTextSection}>
          <Text style={styles.numberText}>{result}</Text>
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
            <TouchableOpacity style={styles.operationButton} onPress={() => { this.changeOperator('/'); }}>
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
            <TouchableOpacity style={styles.operationButton} onPress={() => { this.changeOperator('*'); }}>
              <Text stlye={styles.operationButtonText}>x</Text>
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
            <TouchableOpacity style={styles.operationButton} onPress={() => { this.changeOperator('-'); }}>
              <Text stlye={styles.operationButtonText}>-</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.buttonRowContainer}>
              <TouchableOpacity style={styles.numberButton} onPress={() => { this.inputOperand('0'); }}>
                <Text stlye={styles.numberButtonText}>0</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.numberButton} onPress={() => { this.inputDot(); }}>
                <Text stlye={styles.numberButtonText}>.</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.operationButton} onPress={() => { this.setState({ showResult: true }); }}>
                <Text stlye={styles.operationButtonText}>=</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.operationButton} onPress={() => { this.changeOperator('+'); }}>
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
