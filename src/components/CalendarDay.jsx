import React from 'react'
import {useDroppable} from '@dnd-kit/core'

const CalendarDay = (props) => {
  // {year, month, day, children = []}
  const {setNodeRef} = useDroppable({
    id: props.id
  })

  return (
    <li className="w-30 h-30">
      {props.day}
      {props.children}
    </li>
  )
}

export default CalendarDay