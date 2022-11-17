import { useLayoutEffect, useEffect, useState} from 'react'

function HookUseLayoutEffect() {

    const [name, setName] = useState ("Alguma nome")

    useEffect(() => {
        console.log("2")
        setName("Mudou de novo!")
    }, [])

    useLayoutEffect(() => {
        console.log("1")
        setName("Outro nome")
    }, [])

    console.log(name)

  return (
    <div>
        <h2>HookUseLayoutEffect</h2>
        <p>Nome: {name}</p>
    </div>
  )
}

export default HookUseLayoutEffect