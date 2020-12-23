


import './App.css';


import React, { useRef, useState, useEffect } from 'react'

function App() {



  useEffect(
    ()=> {
    console.log("new event")
  }
  )

  const inputNameRef = useRef()

  const dataResturnFromServer = [{ id: 1, item: "first todo" }, { id: 1, item: "second todo" }]
  const [todos, setTodos] = useState(dataResturnFromServer)


  function add() {

    const userValue = inputNameRef.current.value
    setTodos(
      prev => {
        return [...prev, { item: userValue }]
      }
    )



    inputNameRef.current.value = null
  }



  function remove() {
    const userValue = inputNameRef.current.value

    setTodos(
      todos.filter(todo => todo.item != userValue)
    )

    inputNameRef.current.value = null

  }


  return (
    <div className="App">
      <header className="App-header">

        <input ref={inputNameRef} id="name" type="text" />
        <button onClick={remove}>remove</button>
        <button onClick={add}>add</button>
        <div>
          {todos.map(todo => <p>{todo.item}</p>)}
        </div>

      </header>


    </div>
  );
}

export default App;
