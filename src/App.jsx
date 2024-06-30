import './App.css'
import Header from './components/Header'
import Standards from './components/Standards'
import Calendar from './components/Calendar'
import Layers from './components/Layers'
import Footer from './components/Footer'
import {
  DndContext,
  closestCenter
} from '@dnd-kit/core'

function App() {
  return (
    <container>
      <Header />
      <DndContext
        onDragOver={handleDragOver}
        onDragEnd={handleDragEnd}
        collisionDetection={closestCenter}
      >
        <div className="flex flex-row justify-between min-h-full">
          <Standards />
          <div className="flex flex-col justify-start min-h-full w-1/2">
            <Calendar />
            <Layers />
          </div>
        </div>
      </DndContext>
      <Footer />
    </container>
  )

  function handleDragOver(event) {
    const {active, over} = event
    console.log(over.data)
  }

  function handleDragEnd(event) {
    // console.log(event)
  }
}

export default App
