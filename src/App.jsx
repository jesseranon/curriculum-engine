import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Standards from './components/Standards'
import Calendar from './components/Calendar'
import LayersList from './components/LayersList'
import Footer from './components/Footer'

function App() {
  const [things, setThings] = useState([])

  return (
    <container className="h-full flex flex-col justify-between">
      <Header />
      <Standards />
      <Calendar />
      <LayersList />
      <Footer />
    </container>
  )
}

export default App
