import './App.css'
import City from './assets/ny.jpg'
import ManageData from './components/ManageData'
import RenderLista from './components/RenderLista'

function App() {

  return (
    <div className="App">
      {/* Imagem em public */}
      <img src="/paisagem1.jpg" alt="paisagem" />

      {/* Imagem em assets */}
      <img src={City} alt="Cidade" />
      <ManageData />
      <RenderLista />
    </div>
  )
}

export default App
