import { useState } from 'react'
import UserDetails from './components/UserDetails'
import './App.css'

function App() {
  const pessoas = [
    {id: 1, nome: "Fernanda", idade: 23, profissao: "Engenheira"},
    {id: 2, nome: "Luiza", idade: 16, profissao: "Estudante"},
    {id: 3, nome: "Lucas", idade: 19, profissao: "Programador"},
    {id: 4, nome: "Natan", idade: 12, profissao: "Estudante"},
  ]

  return (
    <div className="App">
      
      {pessoas.map((pessoa) => (
        <UserDetails key={pessoa.id} nome={pessoa.nome} idade={pessoa.idade} profissao={pessoa.profissao} />
      ))}

    </div>
  )
}

export default App
