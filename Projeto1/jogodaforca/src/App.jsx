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

  //Iniciando o jogo
  const startGame = () => {
    setGameStage(stages[1].name)
  }
  
  //processando a letra
  const verifyLetter = () => {
    setGameStage(stages[2].name)
  }

  //resetando o jogo
  const retry = () => {
    setGameStage(stages[0].name)
  }

  return (
    <div className="App">
      { gameStage === 'start' && <StartJogo startGame={startGame} />}
      { gameStage === 'game' && <Game verifyLetter={verifyLetter} />}
      { gameStage === 'end' && <GameOver retry={retry} />}
    </div>
  )
}

export default App
