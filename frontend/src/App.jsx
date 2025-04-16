import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from './components/ui/button'
import Home from './pages/Home'
import NavBar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <NavBar />
     <Home />
       
    </>
  )
}

export default App
