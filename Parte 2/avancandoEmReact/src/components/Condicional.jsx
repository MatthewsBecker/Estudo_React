import React, { useState } from 'react'

function Condicional() {

    const [x] = useState(false)

    const [nome, setNome] = useState("Maria")

  return (
    <div>
        <h1>Isso é verdadeiro?</h1>
        {x && <p>Esse p é verdadeiro</p>}
        {!x && <p>Esse p é Falso</p>}

        {nome === "Maria" ? (<p>O nome é verdadeiro</p>) : (<p>Nome não encontrtado</p>)}

        <button onClick={() => setNome("joao")}>Clique</button>

    </div>
  )
}

export default Condicional