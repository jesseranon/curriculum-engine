import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarCheck } from '@fortawesome/free-solid-svg-icons'
import SubstandardsDetails from './SubstandardsDetails'

const StandardItem = ({id, description, substandards = []}) => {
  return (
    <li className="text-lg flex flex-row justify-between content-stretch align-middle">
      <details className="w-5/6">
        <summary className="cursor-pointer">
          {id}
        </summary>
        <p className="text-md">{description}</p>
        {(substandards.length > 0) && <SubstandardsDetails substandards={substandards} />}
      </details>
      {description.indexOf("not applicable") === -1 
        ? <div className={"draggable w-1/6 p-4 cursor-pointer text-center"}>
            <FontAwesomeIcon icon={faCalendarCheck} />
          </div>
        : <div className={"w-1/6 p-4 text-center opacity-30"}>
            <FontAwesomeIcon icon={faCalendarCheck} />
          </div>
      }
    </li>
  )
}

export default StandardItem