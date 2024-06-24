import React from 'react'

const SubstandardItem = ({id, description}) => {
  return (
    <li className="flex flex-col justify-start">
        <span>{id}</span>
        <span>{description}</span>
    </li>
  )
}

export default SubstandardItem