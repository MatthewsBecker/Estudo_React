import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

function HookUseEffect() {

    // 1useEffect sem dependencias
    useEffect(() => {
        console.log("Estou sendo executado")
    }) 

    const [number, setNumber] = useState(1)

    const changeSomething = () => {
        setNumber(number + 1)
    }

    // 3 - item no array de dependencias
    const [outroNumero, setOutroNumero] = useState(0)

    useEffect(() => {

        console.log("Sou executado apenas quando o 'outroNumero' muda ")

    }, [outroNumero])

  return (
    <div>
        <h2>HookUseEffect</h2>
        <p>Number: {number}</p>
        <button onClick={changeSomething}>Excecutar</button>

        <p>Outro Numero {outroNumero}</p>
        <button onClick={() => setOutroNumero( outroNumero + 1)}>
            Mudar Outro Numero
        </button>
    </div>
  )
}

export default HookUseEffect