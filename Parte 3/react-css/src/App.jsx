import MyComponent from "../src/assets/Components/MyComponent"
import title from "../src/assets/Components/title"
import './App.css'

function App() {
  const n = 9

  const estado = false

  return (
    <div className="App">
      {/* Css global */}
      <h1>React com css</h1>
      {/* Css de componente */}
      <MyComponent />
      <p>esse e o paragrafo do aap.js</p>
      <p className="MyComponent">esse e o paragrafo dotambem do componente</p>

      {/* ccs inline */}
      <p style={{ color: "blue", padding: "23px", borderTop: "2px solid red" }} >Este paragrafo foi estilizado com css inline</p>

      {/* Css inline dinamico */}
      <h2 style={n < 10 ? ({color:"green"}) : ({color: "red"})}>Css dinamico</h2>

      {/* Classe dinamica */}
      <h3 className={estado ? "ativado" : "desativado" } >Este texto tem classe dinamica</h3>

      {/* css modules */}
      <title />
 
    </div>
  )
}

export default App
