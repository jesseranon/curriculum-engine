import React from 'react'
import StandardItem from './StandardItem'

const StandardGroup = ({group}) => {
  return (
    <section>
      <p className="text-xl">{group.title}</p>
      <ol className="flex flex-col text-left">
          {
            group.standards.map(standard => <StandardItem key={standard.id} {...standard} />)
          }
      </ol>
    </section>
  )
}

export default StandardGroup