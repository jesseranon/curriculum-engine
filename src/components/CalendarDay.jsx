import React, {useState} from 'react'
import {useDroppable} from '@dnd-kit/core'

const CalendarDay = (props) => {
  // {year, month, day, children = []}
  const {isOver, setNodeRef} = useDroppable({
    id: props.id,
    data: {
      id: props.id
    }
  })

  const baseStyle = "rounded outline outline-1 h-20 pl-1 text-sm text-left"

  if (props.displayMonth == props.month) {
    return (
        <li 
          id={props.id}
          ref={setNodeRef}
          className={`${baseStyle} cursor-pointer ${isOver && "bg-pink-500"}`}
        >
          {props.children}
        </li>
      )
  }

  return (
    <li 
      id={props.id}
      className={`${baseStyle} opacity-30 bg-black text-white`}
    >
      {props.children}
    </li>
  )
}

export default CalendarDay