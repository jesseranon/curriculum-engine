import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faEye, faEyeSlash, faUpDown } from '@fortawesome/free-solid-svg-icons'
import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'

const LayerItem = (props) => {
  // {id, title, description, standards, order, visibility=true}
  const [calendarVisibility, setCalendarVisibility] = useState(props.visibility)

  const {
    attributes,
    listeners,
    setNodeRef,
    setActivatorNodeRef,
    transform,
    transition
  } = useSortable({
    id: props.id,
    data: {
      index: props.index
    }
  })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition
  }

  return (
    <li id={props.id} className="text-lg flex flex-row justify-around min-w-full text-center" ref={setNodeRef} style={style}>
      <div className="p-2.5 basis-1/5 cursor-pointer"><FontAwesomeIcon icon={faPenToSquare} /></div>
      <div className="p-2.5 basis-1/5 cursor-pointer">
        <FontAwesomeIcon icon={calendarVisibility ? faEye : faEyeSlash} />
      </div>
      <div className="p-2.5 basis-2/5 cursor-pointer">{props.title}</div>
      <button className="p-2.5 basis-1/5 cursor-pointer" ref={setActivatorNodeRef} {...attributes} {...listeners}><FontAwesomeIcon icon={faUpDown} /></button>
    </li>
  )
}

export default LayerItem