import React from 'react'
import { useReducer } from 'react'

function HookUseReducer() {
    // 1 começando com useReducer
    const {number, dispatch} = useReducer((state, action) => {
        return Math.random(state)
    })

  return (
    <div>
        <h2>useReducer</h2>
        <p>Numero {number}</p>
        <button onClick={ dispatch }>Alterar numero</button>
    </div>
  )
}

export default HookUseReducer