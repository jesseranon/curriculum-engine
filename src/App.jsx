import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Standards from './components/Standards'
import Calendar from './components/Calendar'
import Layers from './components/Layers'
import Footer from './components/Footer'

function App() {
  return (
    <container className="h-full">
      <Header />
      <div className="flex flex-row justify-between min-h-full">
        <Standards />
        <div className="flex flex-col justify-start min-h-full w-1/2">
          <Calendar />
          <Layers />
        </div>
      </div>
      <Footer />
    </container>
  )
}

export default App
