import React, { useState } from 'react'

function RenderLista() {
    const [list, setList] = useState([
       { id: 1, nome: "matheus"}, 
        { id:2, nome: "joão"}, 
       { id:3, nome: "carla"}, 
        { id:4, nome: "isabela"},
    ])

    const deleteRandom = () => {
        const randomNum = Math.floor(Math.random() * 5)

        setList((prevList) => {
            console.log(prevList)
            return prevList.filter((list) => randomNum !== list.id)
        })
    }

  return (
    <div>
        <ul>
            {list.map((item) => (
                <li key={item.id}>{item.nome}</li>
            ))}
        </ul>
        <button onClick={deleteRandom}>Deletar</button>                
    </div>
  ) 
}

export default RenderLista