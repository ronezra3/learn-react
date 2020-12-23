


import './App.css';


import React, { useRef, useState } from 'react'

function App() {





  const inputNameRef = useRef()

  const dataResturnFromServer = [{ id: 1, item: "first todo" }, { id: 1, item: "second todo" }]
  const [todos, setTodos] = useState(dataResturnFromServer)


  function catchInput() {
    const userValue = inputNameRef.current.value

    setTodos(
      // prev => {
      //   return [...prev, { item: userValue }]
      // }


      todos.filter(todo => todo.item != userValue)

      
      
    )



    inputNameRef.current.value = null
  }

  return (
    <div className="App">
      <header className="App-header">

        <input ref={inputNameRef} id="name" type="text" />

        <button onClick={catchInput}>click</button>
        <div>
          {todos.map(todo => <p>{todo.item}</p>)}
        </div>
      </header>


    </div>
  );
}

export default App;
