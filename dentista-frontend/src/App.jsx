

import './App.css'
import Navbar from './components/Navbar'
import { Header } from './views/header/Header'
import { Diferencia } from './views/diferencia/Diferencia'
import AboutUs from './views/aboutus/AboutUs'

function App() {

  return (
    <>
        <Navbar/>
        <Header />
        <Diferencia />
        <AboutUs />
    </>
  )
}

export default App
