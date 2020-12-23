import React, { useEffect } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import axios from 'axios'


export default function Header({ todos }) {


    useEffect(() => {
        // const response = await 
        // // await response.json()
        // const data = response.data
        //  console.log(data)
        //  axios("https://api.github.com/users/ronezra3/repos")
        //     .then(response => {
        //         return response.json()
        //     })
        //     .then(data => {
        //         console.log(data)
        //     });

    }, [])



    return (
        // <div>
        //     <div>
        //         {todos.map((todo, index) => <p key={todo.id} > {todo.item}</p>)}
        //     </div>


        //     {/* {names.map(name => <p>{name}</p>)} */}

        // </div>

        <h1>Header</h1>
    )

}










