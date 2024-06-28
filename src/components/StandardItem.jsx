import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarCheck } from '@fortawesome/free-solid-svg-icons'
import SubstandardsDetails from './SubstandardsDetails'

const StandardItem = ({id, description, substandards = []}) => {
  return (
    <li className="flex flex-row justify-between content-stretch align-middle">
      <details className="w-4/6">
        <summary className="cursor-pointer">
          {id}
        </summary>
        <p className="text-sm">{description}</p>
        {(substandards.length > 0) && <SubstandardsDetails substandards={substandards} />}
      </details>
      <div className="w-1/6 p-4 cursor-pointer text-center">
        <FontAwesomeIcon icon={faCalendarCheck} />
      </div>
    </li>
  )
}

export default StandardItem