import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import DetalhesCarro from './assets/Components/DetalhesCarro'

function App() {
  const [count, setCount] = useState(0)

  const carros = [
    {id: 1, marca: "Ferrari", cor: "vermelho", newCar: true, km: 0},
    {id: 2, marca: "Fusca", cor: "verde", newCar: false, km: 110},
    {id: 3, marca: "mustang", cor: "amarelo", newCar: true, km: 0}
  ]

  return (
    <div className="App">
      <h1>Detalhes carros</h1>
      
      {carros.map((carro) => (
        <DetalhesCarro key={carro.id} marca={carro.marca} cor={carro.cor} km={carro.km} newCar={carro.newCar} /> 
      ))} 

    </div>
  )
}

export default App
