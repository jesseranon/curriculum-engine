import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarPlus } from '@fortawesome/free-solid-svg-icons'
import { useDraggable } from '@dnd-kit/core'
import {CSS} from '@dnd-kit/utilities'
import SubstandardDetails from './SubstandardDetails'

const StandardItem = (props) => {
  const {isDragging, attributes, listeners, setNodeRef, setActivatorNodeRef, transform} = useDraggable({
    id: props.id,
    disabled: props.disabled,
    data: {
      id: props.id
    }
  })
  const style = {
      transform: CSS.Translate.toString(transform)
  }
  
  return (
    <li
      ref={setNodeRef}
      className={`${isDragging && "bg-pink-500"} text-md outline outline-1 p-2 flex flex-row justify-between content-stretch align-middle`}
    >
      <details className="w-5/6">
        <summary className="cursor-pointer">
          {props.id}
        </summary>
        <p className="text-sm">{props.description}</p>
        {(props.substandards) && <SubstandardDetails substandards={props.substandards} />}
      </details>
      <button className={`text-lg ${props.disabled && "opacity-40 pointer-events-none"}`} ref={setActivatorNodeRef} {...attributes} {...listeners} style={style}>
        <FontAwesomeIcon icon={faCalendarPlus} />
      </button>
    </li>
  )
}

export default StandardItem