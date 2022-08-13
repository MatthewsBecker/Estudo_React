//css
import './App.css'

//react
import { useCallback, useEffect, useState } from 'react'

//dados
import { wordsList } from "./data/words"

//Components
import StartJogo from './components/StartJogo'
import Game from './components/Game'
import GameOver from './components/GameOver'

const stages = [
  {id: 1, name: "start"},
  {id: 2, name: "game"},
  {id: 3, name: "end"},
]

function App() {
  const [gameStage, setGameStage] = useState(stages[0].name)

  const [words] =useState(wordsList)

  console.log(words)

  return (
    <div className="App">
      { gameStage === 'start' && <StartJogo />}
      { gameStage === 'game' && <Game />}
      { gameStage === 'end' && <GameOver />}
    </div>
  )
}

export default App
