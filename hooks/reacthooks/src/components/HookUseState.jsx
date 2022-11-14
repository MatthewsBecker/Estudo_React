import React, { useState } from 'react'

const HookUseState = () => {

    // 1 - useState
    let userName ="João"
    const [name, setName] =useState("Matheus")

    const changeNames = () => {
        userName = "João Souza"
        setName("MaTHEUS GAMA")
    }

  return (
    <div>

        <h2>UseState</h2>
        <p>Variavel: {userName}</p>
        <p>useState: {name}</p>
        <button onClick={changeNames}>Mudar nomes</button>
    </div>
  )
}

export default HookUseState