import React from 'react'
import StandardItem from './StandardItem'

const StandardGroup = ({group}) => {
  return (
    <section>
      <p className="text-md">{group.title}</p>
      <ul className="flex flex-col text-left">
          {
            group.standards.map(standard => <StandardItem key={standard.id} {...standard} />)
          }
      </ul>
    </section>
  )
}

export default StandardGroup