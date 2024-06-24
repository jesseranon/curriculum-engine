import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarCheck } from '@fortawesome/free-solid-svg-icons'
import SubstandardsDetails from './SubstandardsDetails'

const StandardItem = ({id, description, substandards = []}) => {
  return (
    <li className="flex flex-row justify-start content-center">
      <details className="w-5/6">
        <summary>
          {id}
        </summary>
        <p className="text-sm">{description}</p>
        {(substandards.length > 0) && <SubstandardsDetails substandards={substandards} />}
      </details>
      <span className="w-1/6">
        <FontAwesomeIcon icon={faCalendarCheck} />
      </span>
    </li>
  )
}

export default StandardItem