import React from 'react'
import "./StartJogo.css"

function StartJogo({startGame}) {
  return (
    <div className='start'>
        <h1>Secret Word</h1>
        <p>Clique no butão para começar a jogar</p>
        <button onClick={startGame}>Começar o jogo</button>
    </div>
  )
}

export default StartJogo