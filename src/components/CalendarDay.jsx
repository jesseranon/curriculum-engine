import React from 'react'
import {useDroppable} from '@dnd-kit/core'
const CalendarDay = () => {
  // {year, month, day, children = []}
  const {setNodeRef} = useDroppable({
    id: props.id
  })

  return (
    <li className="w-30 h-30">
      {props.children}
    </li>
  )
}

export default CalendarDay