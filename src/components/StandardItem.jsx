import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarCheck } from '@fortawesome/free-solid-svg-icons'
import SubstandardsDetails from './SubstandardsDetails'
import DraggableSelection from './DraggableSelection'

const StandardItem = ({id, description, substandards = []}) => {
  // <div className={"draggable w-1/6 p-4 cursor-pointer text-center"}>
  //           <FontAwesomeIcon icon={faCalendarCheck} />
  //         </div>
  return (
    <li id={id} className="text-lg flex flex-row justify-between content-stretch align-middle">
      <details className="w-5/6">
        <summary className="cursor-pointer">
          {id}
        </summary>
        <p className="text-md">{description}</p>
        {(substandards.length > 0) && <SubstandardsDetails substandards={substandards} />}
      </details>
      <DraggableSelection 
        id={`${id}-selector`}
        classes={`w-1/6 p-4 text-center ${description.indexOf("not applicable") > -1 && "opacity-30"}`}
        disabled={description.indexOf("not applicable") > -1} 
      />
    </li>
  )
}

export default StandardItem