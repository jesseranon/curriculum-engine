import React from 'react'
import SubstandardItem from './SubstandardItem'

const SubstandardsDetails = ({substandards}) => {

  return (
    <details className="pl-6">
        <summary className="cursor-pointer">Substandards</summary>
        <ul className="text-md">
            {substandards.map(substandard => <SubstandardItem key={substandard.id} {...substandard} />)}
        </ul>
    </details>
  )
}

export default SubstandardsDetails