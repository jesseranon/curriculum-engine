import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faEye, faEyeSlash, faUpDown } from '@fortawesome/free-solid-svg-icons'

const LayerItem = ({id, title, description, standards, order, visibility=true}) => {
  const [calendarVisibility, setCalendarVisibility] = useState(visibility)

  return (
    <li className="text-lg flex flex-row justify-around min-w-full text-center">
      <div className="p-2.5 basis-1/5 cursor-pointer"><FontAwesomeIcon icon={faPenToSquare} /></div>
      <div className="p-2.5 basis-1/5 cursor-pointer">
        <FontAwesomeIcon icon={calendarVisibility ? faEye : faEyeSlash} />
      </div>
      <div className="p-2.5 basis-2/5 cursor-pointer">{title}</div>
      <div className="p-2.5 basis-1/5 cursor-pointer"><FontAwesomeIcon icon={faUpDown} /></div>
    </li>
  )
}

export default LayerItem