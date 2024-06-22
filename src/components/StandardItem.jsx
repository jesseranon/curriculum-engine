import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarCheck } from '@fortawesome/free-solid-svg-icons'

const StandardItem = ({id, description}) => {
  return (
    <li key={id} className="flex flex-row justify-between">
      <span>{id}</span>
      <span>{description}</span>
      <FontAwesomeIcon icon={faCalendarCheck} />
    </li>
  )
}

export default StandardItem