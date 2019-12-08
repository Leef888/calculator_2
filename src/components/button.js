import React from 'react';
import './button.css';

const Button = (props) => {
    let buttonValue = React.createRef()

    let numberClicked = () => {
      let text = props.newValue.current.value + buttonValue.current.value;
      props.newValue.current.value = text
    }

    return (
        <div className={props.className}>
            <button className={props.className} ref={buttonValue} onClick={numberClicked} value={props.buttonsName} action={props.buttonsAction}>{props.buttonsName}</button>
        </div>
    );
}

export default Button;
