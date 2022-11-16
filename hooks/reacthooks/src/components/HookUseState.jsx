import React, { useState } from 'react'

const HookUseState = () => {

    // 1 - useState
    let userName ="João"
    const [name, setName] =useState("Matheus")

    const changeNames = () => {
        userName = "João Souza"
        setName("MaTHEUS GAMA")
    }

    // useStates e input

    const [age, setAge] = useState(30)

    const handleSumit = (e) => {
      e.preventDefault()
    }

  return (
    <div>

        <h2>UseState</h2>
        <p>Variavel: {userName}</p>
        <p>useState: {name}</p>
        <button onClick={changeNames}>Mudar nomes</button>

        <form onSubmit={handleSumit}>
          <input type="text" value={age} onChange={(e) => setAge(e.target.value) }/>
        </form>
        <p>Voce tem {age} anos!</p>

    </div>
  )
}

export default HookUseState