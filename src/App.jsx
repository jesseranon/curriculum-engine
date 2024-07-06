import './App.css'
import Header from './components/Header'
import Standards from './components/Standards'
import Corkboard from './components/Corkboard'
import Calendar from './components/Calendar'
import Layers from './components/Layers'
import Footer from './components/Footer'
import {
  DndContext,
  closestCenter,
  pointerWithin
} from '@dnd-kit/core'

function App() {
  return (
    <container>
      <Header />
      <DndContext
        // onDragOver={handleDragOver}
        onDragEnd={handleDragEnd}
        collisionDetection={pointerWithin}
      >
        <div className="flex flex-row justify-between min-h-full max-h-full">
          <Standards />
          <Corkboard />
        </div>
      </DndContext>
      <Footer />
    </container>
  )

  // function handleDragOver(event) {
  //   const {active, over} = event
  //   console.log(over.data)
  // }

  function handleDragEnd(event) {
    const {active, over} = event
    console.log(active.data)
    console.log(over.data)
  }
}

export default App
