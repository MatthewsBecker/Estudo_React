import React from 'react'

function UserDetails({ nome, idade, profissao}) {
  return (
    <div>
      <h2>{nome}</h2>
      <ul>
        <li>idade: {idade}</li>
        <li>profissão: {profissao}</li>
        {(idade > 18) && <p>Ja pode dirigir</p> }
      </ul>
    </div>
  )
}

export default UserDetails