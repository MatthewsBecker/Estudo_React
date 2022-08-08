import { useState } from 'react'
import './App.css'
import City from './assets/ny.jpg'
import CarDetails from './components/CarDetails'
import Condicional from './components/Condicional'
import Container from './components/Container'
import ExecuteFunction from './components/ExecuteFunction'
import ManageData from './components/ManageData'
import RenderLista from './components/RenderLista'
import ShowUserName from './components/ShowUserName'

function App() {

  const [msg, setMsg] = useState("")

  const handleMsg = (msgs) => {
    setMsg(msgs)
  }

  const nome = "pedro"
  const[user] = useState("Carlos")

  const cars = [
    {id: 1, marca: "Ferrari", cor: "vermelho", newCar: true, km: 0},
    {id: 2, marca: "Fusca", cor: "verde", newCar: false, km: 110},
    {id: 3, marca: "mustang", cor: "amarelo", newCar: true, km: 0}
  ]

  function Mensagem(){
    console.log("Evento acomtecendo")
  }

  return (
    <div className="App">
      {/* Imagem em public */}
      <img src="/paisagem1.jpg" alt="paisagem" />

      {/* Imagem em assets */}
      <img src={City} alt="Cidade" />
      <ManageData />
      <RenderLista />
      <Condicional/>
      <ShowUserName name={user} />
      <CarDetails marca="Ferrari" km={12000} cor="Azul" newCar={false}/>
      {/* Reaporveitando componetes  */}
      <CarDetails marca="Toyota" km={120} cor="Cinza" newCar={false}/>
      <CarDetails marca="Fiat" km={0} cor="Vermelho" newCar={true} />
      {/* loop em lista de objetos  */}
      {cars.map((car) => (
        <CarDetails key={car.id} marca={car.marca} cor={car.cor} km={car.km} newCar={car.newCar} /> 
      ))}
      {/* Children */}
      <Container>
        <p>Esse e outro paragrafo </p>
      </Container>

      {/* executar função */}
      <ExecuteFunction myFunction={Mensagem} />


      {/* state life */}
      <Mensagem msgs={msg} />
    </div>
  )
}

export default App
