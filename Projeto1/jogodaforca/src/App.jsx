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

const guessesQty = 3

function App() {
  const [gameStage, setGameStage] = useState(stages[0].name)

  const [words] = useState(wordsList)

  const [pickedWord, setPickedWord] = useState("")
  const [pickedCategory, setPickedCategory] = useState("")
  const [letters, setLetters] = useState([])


  const [guessedLetters, setGuessedLetters] = useState([])
  const [wrongLetters, setWrongLetters] = useState([])
  const [guesses, setGuesses] = useState(guessesQty)
  const [score, setScore] = useState(0)
  

  //Iniciando o jogo

  const pickWordAndCategory = useCallback(() => {
    //pick a random category
    const categories = Object.keys(words)

    const category = categories[Math.floor(Math.random() * Object.keys(categories).length)]

    // pick a random word
    const word = words[category][Math.floor(Math.random() * words[category].length)]

    return {word, category}
  }, [words])

  const startGame = useCallback(() => {
    //resetando as palavras 
    clearLetterStates()


    //pick word and pick category
    const {word, category} = pickWordAndCategory()

    // create an array of letters
    let wordLetters = word.split("")
    wordLetters = wordLetters.map((l) => l.toLowerCase())

    //fill states
    setPickedWord(word)
    setPickedCategory(category)
    setLetters(wordLetters)

    setGameStage(stages[1].name)
  }, [pickWordAndCategory])
  
  //processando a letra
  const verifyLetter = (letter) => {
    const normalizedLetter = letter.toLowerCase()
    
    // check if letter has already been utilized
    if (guessedLetters.includes(normalizedLetter) || wrongLetters.includes(normalizedLetter)){
      return 
    }

    
    // psuh guessed letter or remove a guess
    if(letters.includes(normalizedLetter)){
      setGuessedLetters((actualGuessedLetters) => [
        ...actualGuessedLetters,
        normalizedLetter
      ])
    } else {
      setWrongLetters((actualWrongLetters) => [
        ...actualWrongLetters,
        normalizedLetter
      ])

      setGuesses((actualGuesses) => actualGuesses - 1)
    }
  }

  const clearLetterStates = () => {
    setGuessedLetters([])
    setWrongLetters([])
  }

// checando derrotas 
  useEffect(() => {
    if (guesses <= 0){
      //reset all states
      clearLetterStates()

      setGameStage(stages[2].name)
    }
  }, [guesses])

  //checando vitorias
  useEffect(() => {

    const uniqueLetters = [... new Set(letters)]

    // win codition
    if(guessedLetters.length === uniqueLetters.length) {
      // add score 
      setScore((actualScore) => actualScore += 100)

      //resetando nova palavra
      startGame()
    }

  }, [guessedLetters, letters, startGame])

  //resetando o jogo
  const retry = () => {
    setScore(0)
    setGuesses(guessesQty)


    setGameStage(stages[0].name)
  }

  return (
    <div className="App">
      { gameStage === 'start' && <StartJogo startGame={startGame} />}
      { gameStage === 'game' && <Game verifyLetter={verifyLetter} pickedWord={pickedWord} pickedCategory={pickedCategory} letters={letters} guessedLetters={guessedLetters} wrongLetters={wrongLetters} guesses={guesses} score={score} />}
      { gameStage === 'end' && <GameOver retry={retry} score={score} />}
    </div>
  )
}

export default App
