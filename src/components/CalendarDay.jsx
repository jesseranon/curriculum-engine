import React, {useState} from 'react'
import {useDroppable} from '@dnd-kit/core'

const CalendarDay = (props) => {
  // {year, month, day, children = []}
  const {isOver, setNodeRef} = useDroppable({
    id: props.id
  })

  if (props.displayMonth == props.month) {
    return (
        <li 
          id={props.id}
          ref={setNodeRef}
          className={`cursor-pointer rounded-2xl outline w-full h-28 ${isOver && "bg-pink-500"}`}
        >
          {props.children}
        </li>
      )
  }

  return (
    <li 
      id={props.id}
      className={`rounded-2xl outline w-full h-28 opacity-30 bg-black text-white`}
    >
      {props.children}
    </li>
  )
}

export default CalendarDay