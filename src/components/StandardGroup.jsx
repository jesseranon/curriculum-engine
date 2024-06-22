import React from 'react'
import StandardItem from './StandardItem'

const StandardGroup = ({group}) => {
  return (
    <ul className="list-none">
        <li className="text-xl">{group.title}</li>
        {group.standards.map((standard) => {
            return (
              <>
                <StandardItem key={standard.id} standardId={standard.id} description={standard.description} />
                {standard.substandards && standard.substandards.map(substandard => <StandardItem key={substandard.id} standardId={substandard.id} description={substandard.description} />)}
              </>
            )
        })}
    </ul>
  )
}

export default StandardGroup