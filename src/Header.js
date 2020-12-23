import React, { useEffect } from 'react'



export default function Header({ todos }) {


    useEffect(async () => {
        const response = await fetch("https://api.github.com/users/ronezra3/repos")
         const data = await response.json()
         console.log(data)
            // .then(response => {
            //     return response.json()
            // })
            // .then(data => {
            //     console.log(data)
            // });

    }, [])



    return (
        <div>
            <div>
                {todos.map((todo, index) => <p key={todo.id} > {todo.item}</p>)}
            </div>


            {/* {names.map(name => <p>{name}</p>)} */}

        </div>
    )

}










