import React, { useState } from 'react'
import "./MyForm.css"

function MyForm({user}) {

  // 6 - controlled inputs 


  // 4 - geranciamento de dados
  const [nome, setNome] = useState(user ? user.name : "")
  const [email, setEmail] = useState(user ? user.email : "")

  const [bio, setBio] = useState(user ? user.bio : "")

  const [role, setRole] = useState(user ? user.role : "")

  const handleNome = (e) => {
    setNome(e.target.value)
  }

  const handleSumit = (event) => {
    // event.preventDefault() para não deixar a pagina recarregar
    event.preventDefault()
    console.log("Enviando o formulario")
    console.log(nome)
    console.log(email)
    console.log(bio)
    console.log(role)
    
    // limpando formulario 
    setNome("")
    setEmail("")
    setBio("")
  }

  

  return (
    <div>
        {/* 6 - envio de formulario */}
        {/* 2- Criando formularios */}
        <form onSubmit={handleSumit}>
            <div>
                <label htmlFor='name'>Nome:</label>
                <input type="text" name='name' placeholder='digite seu nome' onChange={handleNome} value={nome}/>
            </div>
            <input type="submit" value="enviar" />
        </form>

        {/* 3 - Envolvendo input */}
        <label>
            <span>Email</span>
            {/* 5 - Simplificação de manipulação de state */}
            <input 
              type="email" 
              name='email' 
              placeholder='digite seu email' 
              onChange={(e) => setEmail(e.target.value)}
              value={email}            
            />
        </label>

        {/* 8 - Text Area */}
        <label>
          <span>Bio:</span>
          <textarea name="bio" placeholder='descrição do usuario' onChange={(e) => setBio(e.target.value)} value={bio}>
          </textarea>
        </label>        

        {/* 9 - Select */}
        <label>
          <span>Função no sistema</span>
          <select name="role" onChange={(e) => setRole(e.target.value)} value={role}>
            <option value="user">Usuario</option>
            <option value="editor">Editor</option>
            <option value="admin">Administrador</option>
          </select>
        </label>

    </div>
  )
}

export default MyForm