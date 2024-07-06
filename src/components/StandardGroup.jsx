import React from 'react'
import StandardItem from './StandardItem'

const StandardGroup = ({group}) => {
  return (
    <section className="rounded">
      <p className="text-xl">{group.title}</p>
      <ol className="flex flex-col text-left">
          {
            group.standards.map(standard => {
              if (standard.description.indexOf("not applicable") > -1) {
                return <StandardItem key={standard.id} {...standard} disabled />
              }
              return <StandardItem key={standard.id} {...standard} />
            })
          }
      </ol>
    </section>
  )
}

export default StandardGroup