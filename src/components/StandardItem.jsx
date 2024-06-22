import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarCheck } from '@fortawesome/free-solid-svg-icons'

const StandardItem = ({standardId, description}) => {
  return (
    <li className="flex flex-row justify-between">
      <div className="w-5/6">
        <p>{standardId}</p>
        <p>{description}</p>
      </div>
      <FontAwesomeIcon icon={faCalendarCheck} />
    </li>
  )
}

export default StandardItem