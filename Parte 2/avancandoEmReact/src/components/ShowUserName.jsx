import React from 'react'

function ShowUserName(props) {
  return (
    <div>
        <h2>nome do usuario: {props.name}</h2>
    </div>
  )
}

export default ShowUserName