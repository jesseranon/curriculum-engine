import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faEye, faEyeSlash, faUpDown } from '@fortawesome/free-solid-svg-icons'

const LayerItem = ({id, title, description, standards, order}) => {
  return (
    <li className="flex flex-row justify-around min-w-full text-center">
      <div className="basis-1/5 cursor-pointer"><FontAwesomeIcon icon={faPenToSquare} /></div>
      <div className="basis-1/5 cursor-pointer"><FontAwesomeIcon icon={faEye} /></div>
      <div className="basis-2/5 cursor-pointer">{title}</div>
      <div className="basis-1/5 cursor-pointer"><FontAwesomeIcon icon={faUpDown} /></div>
    </li>
  )
}

export default LayerItem