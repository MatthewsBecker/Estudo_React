import { useState } from 'react'

const ManageData = () => {
    let Dado = 10

    const [numero, setNumero] = useState(14)

  return (
    <div>
        <p>Valor: {Dado}</p>
        <button onClick={() => (Dado = 12)}>Mudar valor</button>

        <p>Valor: {numero}</p>
        <button onClick={() => setNumero(17)}>Mudar State</button>
    </div>
  )
}

export default ManageData