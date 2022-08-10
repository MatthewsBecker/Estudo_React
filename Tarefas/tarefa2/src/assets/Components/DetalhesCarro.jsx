import React from 'react'
import Detalhes from "../Components/Detalhes.css"

function DetalhesCarro({marca, km, cor, newCar}) {
  return (
    <div>
        <h3>Detalhes do carro</h3>
        <ul>
            <li>Marca: {marca}</li>
            <li>KM: {km}</li>
            <li>Cor: {cor}</li>
        </ul>
        {newCar && <h4>Esse carro é novo</h4>}
    </div>
    
  )
}

export default DetalhesCarro