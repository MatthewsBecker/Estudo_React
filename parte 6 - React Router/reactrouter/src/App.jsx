import { useState } from 'react'
import './App.css'

// 1 - config react router
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom"

//pages
import Home from "./pages/Home"
import About from "./pages/About"
import Product from './pages/Product'
import Info from './pages/info'
import NotFaund from './pages/NotFaund'
import Search from './pages/Search'

// components
import Navbar from './components/Navbar'
import SearchForm from './components/SearchForm'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <h1>React Router</h1>
     <BrowserRouter>
     {/* 2 - links com react router */}
        <Navbar />

        {/* Buscar */}
        <SearchForm />

        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/about" element={ <About/> } />
          {/* Rotas dinamicas */}
          <Route path='/products/:id' element={ <Product/> } />
          {/* Rotas nested */}
          <Route path='/products/:id/info' element={ <Info/> } />

          {/* 9 - search */}
          <Route path='search' element={ <Search/> } />

          {/* 10 - redirect */}
          <Route path="/company" element={<Navigate to="/about" />} />

          {/* no match route */}
          <Route path='*' element={ <NotFaund/> } />
        </Routes>
     </BrowserRouter>
    </div>
  )
}

export default App
