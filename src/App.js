


import './App.css';

import React, { useRef, useState, useEffect } from 'react'
import Contact from './Contact'

import changeCounter from './redux/store'


function App() {

  const [counter, setCounter] = useState(0)


  function storePlus() {
    const counterState = changeCounter('counter/incremented')
    setCounter(counterState.value)
  }


  function storeMinus() {
    const counterState = changeCounter('counter/decremented')
    setCounter(counterState.value)
  }

  return (
    <div>
      <button onClick={storePlus}>plus</button>
      <button onClick={storeMinus}>minus</button>
      <br />
      <span>Hello</span>
      <label>Hello</label>
      <p>Hedllo</p>
      {counter}
    </div>
  );
}

export default App;
