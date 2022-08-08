import React from 'react'

function Container( {children} ) {
  return (
    <div>
        <h2>Esse é o titulo do children</h2>
        {children}
    </div>
  )
}

export default Container