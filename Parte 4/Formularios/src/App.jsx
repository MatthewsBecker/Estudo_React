import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import MyForm from './assets/Components/MyForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h2>Formularios</h2>
      <MyForm user={{name: "Isabella", email: "isa@gmail.com", bio: "Sou um advogada", role: "editor" }}/>
    </div>
  )
}

export default App
