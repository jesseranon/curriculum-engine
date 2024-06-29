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
    transform,
    transition
  } = useSortable({id: props.id})

  const style = {
    transform: CSS.Transform.toString(transform),
    transition
  }

  return (
    <li className="text-lg flex flex-row justify-around min-w-full text-center" ref={setNodeRef} style={style} {...attributes} {...listeners}>
      <div className="p-2.5 basis-1/5 cursor-pointer"><FontAwesomeIcon icon={faPenToSquare} /></div>
      <div className="p-2.5 basis-1/5 cursor-pointer">
        <FontAwesomeIcon icon={calendarVisibility ? faEye : faEyeSlash} />
      </div>
      <div className="p-2.5 basis-2/5 cursor-pointer">{props.title}</div>
      <div className="p-2.5 basis-1/5 cursor-pointer"><FontAwesomeIcon icon={faUpDown} /></div>
    </li>
  )
}

export default LayerItem