


import './App.css';
import { v4 as uuidv4 } from 'uuid';

import React, { useRef, useState, useEffect } from 'react'
import Header from './Header';

function App() {

  useEffect(
    () => {
      console.log("first time")
    }, [])

  const inputNameRef = useRef()

  const dataResturnFromServer = [
    { id: uuidv4(), item: "first todo" }, 
    { id: uuidv4(), item: "second todo" }]


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


    const userValue = inputNameRef.current.value
    setTodos(
      prev => {
        return [...prev, { item: userValue, id: uuidv4() }]
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

      <Header todos={todos}/>
        <input ref={inputNameRef} id="name" type="text" />
        <button onClick={remove}>remove</button>
        <button onClick={add}>add</button>


      </header>


    </div>
  );
}

export default App;
