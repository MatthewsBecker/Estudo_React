const Chanllenge = () => {

    const n1 = 10
    const n2 = 17

    return(
        <div>
            <p>Numero 1: {n1}</p>
            <p>Numero 2: {n2}</p>
            <button onClick={ () => console.log(n1+n2) }>Click para somar no console</button>
        </div>
    )
}

export default Chanllenge