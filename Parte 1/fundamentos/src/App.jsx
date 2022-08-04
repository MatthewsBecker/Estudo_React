import { useState } from 'react'

import './App.css'
import Chanllenge from './Components/challenge'
import FirstComponents from './Components/firstComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>Hello word</h1>
      < FirstComponents />
      < Chanllenge/>
    </div>
  )
}

export default App
