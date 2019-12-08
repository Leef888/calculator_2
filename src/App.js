import React from 'react';
import './App.css';
import Button from './components/button';

export default class App extends React.Component {
  render() {
    let thisValue = ""

    let newValue = React.createRef()

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
    ]

    let numberButtons = buttons.map((n) => {
      return (<Button className={n.action} buttonsName={n.name} newValue={newValue} buttonsAction={n.action} />)
    })

    return (
      <div className="calculator">
        <div>
          <input className="calculatorScreen" ref={newValue} value={thisValue} />
        </div>
        <div>
          <div className="allNumbers">{numberButtons}</div>
        </div>
      </div>
    );
  }
}
