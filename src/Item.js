import React from 'react'



export default function Item({ names, name2 }) {



    return (
        <div>
            
            {names.map(name => <p>{name}</p>)}

            <h1>Hello {name2} !</h1>
        </div>
    )

}










