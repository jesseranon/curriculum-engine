import React, {useState} from 'react'
import {useDroppable} from '@dnd-kit/core'

const CalendarDay = (props) => {
  // {year, month, day, children = []}
  const {isOver, setNodeRef} = useDroppable({
    id: props.id
  })

  return (
    <li 
      id={props.id}
      ref={setNodeRef}
      className={`w-30 h-30 ${isOver && "bg-pink-500"}`}
    >
      {props.day}
      {props.children}
    </li>
  )
}

export default CalendarDay