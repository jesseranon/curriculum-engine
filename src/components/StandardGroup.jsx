import React from 'react'
import StandardItem from './StandardItem'

const StandardGroup = ({group}) => {
  return (
    <ul>
        <li>{group.title}</li>
        {group.standards.map((standard) => {
            return <StandardItem id={standard.id} description={standard.description} />
        })}
    </ul>
  )
}

export default StandardGroup