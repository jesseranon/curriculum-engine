import React from 'react'
import { useDraggable } from '@dnd-kit/core'
import {CSS} from '@dnd-kit/utilities'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarPlus } from '@fortawesome/free-solid-svg-icons'

const DraggableSelection = (props) => {
    const {isDragging, attributes, listeners, setNodeRef, transform} = useDraggable({
        id: props.id,
        disabled: props.disabled
    })
    const style = {
        transform: CSS.Translate.toString(transform)
    }

  return (
    <button className={`text-lg ${props.classes}`} ref={setNodeRef} style={style} {...listeners} {...attributes}>
        <FontAwesomeIcon icon={faCalendarPlus} />
    </button>
  )
}

export default DraggableSelection