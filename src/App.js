


import './App.css';


import React, { useRef, useState, useEffect } from 'react'

function App() {



  useEffect(
    () => {
      console.log("first time")
    }, [])

  const inputNameRef = useRef()

  const dataResturnFromServer = [{ id: 1, item: "first todo" }, { id: 1, item: "second todo" }]
  const [todos, setTodos] = useState(dataResturnFromServer)

  const namesFromServer = ["avi"]
  const [names, setNames] = useState(namesFromServer)


  useEffect(
    () => {
      console.log("todos changed")
    }, [todos])


    useEffect(
      () => {
        console.log("names changed")
      }, [namesFromServer])

    // useEffect(
    //   () => {
    //     console.log("something changed")
    //   })

  function add() {
    namesFromServer.push("avi 2")


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
