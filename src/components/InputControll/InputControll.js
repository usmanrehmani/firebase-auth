
import React from 'react';
import styles from "./InputControll.module.css";

function InputControll(props) {
  return (
    <div className={styles.container}>
      {props.label && <label>{props.label}</label>}
      <input type="text" {...props}/>
    </div>
  )
}

export default InputControll
