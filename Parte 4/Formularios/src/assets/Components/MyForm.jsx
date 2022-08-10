import React, { useState } from 'react'
import "./MyForm.css"

function MyForm() {

  // 4 - geranciamento de dados
  const [nome, setNome] = useState()
  const [email, setEmail] = useState()

  const handleNome = (e) => {
    setNome(e.target.value)
  }

  const handleSumit = (event) => {
    // event.preventDefault() para não deixar a pagina recarregar
    event.preventDefault()
    console.log("Enviando o formulario")
    console.log(nome)
    console.log(email)
  }

  

  return (
    <div>
        {/* 6 - envio de formulario */}
        {/* 2- Criando formularios */}
        <form onSubmit={handleSumit}>
            <div>
                <label htmlFor='name'>Nome:</label>
                <input type="text" name='name' placeholder='digite seu nome' onChange={handleNome}/>
            </div>
            <input type="submit" value="enviar" />
        </form>

        {/* 3 - Envolvendo input */}
        <label>
            <span>Email</span>
            {/* 5 - Simplificação de manipulação de state */}
            <input type="email" name='email' placeholder='digite seu email' onChange={(e) => setEmail(e.target.value)} />
        </label>
        <input type="submit" value="Enviar" />


    </div>
  )
}

export default MyForm