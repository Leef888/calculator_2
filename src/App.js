import React from 'react';
import './App.css';
import Button from './components/button';

export default class App extends React.Component {
  render() {
    let buttons = [
      { name: "+", action: "operator" },
      { name: "-", action: "operator" },
      { name: "*", action: "operator" },
      { name: "/", action: "operator" },
      { name: "7", action: "number" },
      { name: "8", action: "number" },
      { name: "9", action: "number" },
      { name: "4", action: "number" },
      { name: "5", action: "number" },
      { name: "6", action: "number" },
      { name: "1", action: "number" },
      { name: "2", action: "number" },
      { name: "3", action: "number" },
      { name: ".", action: "decimate" },
      { name: "0", action: "number" },
      { name: "AC", action: "allClear" },
      { name: "=", action: "equal" }
    ];
    let a = "+";
    let b = "-";
    let c = "*";
    let d = "/";
    let thisValue = "";
    let newValue = "";
    let operatorsValue = "";
    let switcher = false;
    let calculationText = [];
    let screenRef = React.createRef()

    let switcherFalse = () => {
      switcher = false
    }

    let allClearButton = () => {
      calculationText = [];
      switcher = false
    }

    let saveValue = (text) => {
      if (switcher === true) {

      } else {
        newValue = text;
        calculationText.push(newValue);
        alert(calculationText)
      }
    }

    let addOperator = (text) => {
      if (switcher === true) {
        operatorsValue = text;
        let text_2 = calculationText[0] + operatorsValue + calculationText[0];
        alert(text_2);
        let text_3 = eval(text_2);
        alert(text_3);
        screenRef.current.value = text_3;
        allClearButton();

      } else if (calculationText.length >= 2) {
        alert("full house");
        let text_2 = calculationText[0] + calculationText[1] + calculationText[2];
        let text_3 = eval(text_2);
        alert(text_3)
        calculationText = [];
        calculationText.push(text_3);

        operatorsValue = text;
        calculationText.push(operatorsValue);
        alert(calculationText);
        switcher = true

      } else {
        operatorsValue = text;
        calculationText.push(operatorsValue);
        alert(calculationText);
        switcher = true
      }
    }

    let calculation = () => {
      let text = calculationText[0] + calculationText[1] + calculationText[2];
      let lastChar = calculationText.pop();
      if (lastChar === a || lastChar === b || lastChar === c || lastChar === d) {
        return calculationText.pop()

      } else {
        let text_2 = eval(text);
        screenRef.current.value = text_2;
        allClearButton();
      }
    }

    let updateInput = (text) => {
      thisValue = text;
    }

    let inputChanged = () => {
      let text = screenRef.current.value;
      updateInput(text);
    }

    let numberButtons = buttons.map((n) => {
      return (<Button className={n.action} switcherFalse={switcherFalse} buttonsName={n.name} allClearButton={allClearButton} thisValue={screenRef} saveValue={saveValue} addOperator={addOperator} calculation={calculation} />)
    })

    return (
      <div className="calculator">
        <div>
          <input onChange={inputChanged} className="calculatorScreen" ref={screenRef} value={thisValue} />
        </div>
        <div>
          <div className="allNumbers">{numberButtons}</div>
        </div>
      </div>
    );
  }
}
