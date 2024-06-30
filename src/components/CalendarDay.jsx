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
      className={`rounded-2xl outline w-full h-28 ${isOver && "bg-pink-500"}`}
    >
      {props.children}
    </li>
  )
}

export default CalendarDay