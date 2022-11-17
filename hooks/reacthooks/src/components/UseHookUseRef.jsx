import {useEffect, useState, useRef} from 'react'

function UseHookUseRef() {

    // UseRef
    const numberRef = useRef(0)
    const [counter, setCounter] = useState(0)
    const [counterB, setCounterB] = useState(0)

    useEffect(() => {
        numberRef.current = numberRef.current + 1
    })

  return (
    <div>
        <h2>UseHookUseRef</h2>
        
        <p>O componete renderizou {numberRef.current} vezes</p>

        <p>Counter1: {counter}</p>
        <button onClick={() => setCounter(counter + 1)}>Contador A</button>

        <p>Counter2: {counterB}</p>
        <button onClick={() => setCounterB(counterB + 1)}>Contador B</button>

    </div>
  )
}

export default UseHookUseRef