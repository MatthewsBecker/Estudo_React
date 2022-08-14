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

  const [words] = useState(wordsList)

  const [pickedWord, setPickedWord] = useState("")
  const [pickedCategory, setPickedCategory] = useState("")
  const [letters, setLetters] = useState([])

  //Iniciando o jogo

  const pickWordAndCategory = () => {
    //pick a random category
    const categories = Object.keys(words)

    const category = categories[Math.floor(Math.random() * Object.keys(categories).length)]

    console.log(category)

    // pick a random word
    const word = words[category][Math.floor(Math.random() * words[category].length)]
    console.log(word)

    return {word, category}
  }

  const startGame = () => {
    //pick word and pick category
    const {word, category} = pickWordAndCategory()

    // create an array of letters
    let wordLetters = word.split("")
    wordLetters = wordLetters.map((l) => l.toLowerCase())

    console.log(wordLetters)

    console.log(word, category)

    //fill states
    setPickedWord(word)
    setPickedCategory(category)
    setLetters(letters)

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
