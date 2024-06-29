import React, {useState} from 'react'
import LayerItem from './LayerItem'
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors
} from '@dnd-kit/core'
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy
} from '@dnd-kit/sortable'
import { 
  restrictToVerticalAxis,
  restrictToParentElement
 } from '@dnd-kit/modifiers'

const LayersList = (props) => {
  const [layerOrder, setLayerOrder] = useState(props.layers)
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates
    })
  )

  return (
    <DndContext
      modifiers={[
        restrictToVerticalAxis,
        restrictToParentElement
      ]}
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
    >
      <ol className="min-w-full">
        <SortableContext
          modifiers={[]}
          items={layerOrder}
        >
          {layerOrder.map(layer => <LayerItem key={layer.id} id={layer.id} {...layer} />)}
        </SortableContext>
      </ol>
    </DndContext>
  )

  function handleDragEnd(event) {
    const {active, over} = event

    if (active.id !== over.id) {
      setLayerOrder((layerOrder) => {
        const oldIndex = layerOrder.findIndex(item => item.id === active.id)
        const newIndex = layerOrder.findIndex(item => item.id === over.id)

        return arrayMove(layerOrder, oldIndex, newIndex)
      })
    }
  }
  // const [layerOrder, setLayerOrder] = useState(props.layers)
}

export default LayersList