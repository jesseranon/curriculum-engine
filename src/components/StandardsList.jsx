import React, {useState} from 'react'
import StandardGroup from './StandardGroup'

const StandardsList = ({strand}) => {
  return (
    <>
      {strand.groups.map((group) => {
        return <StandardGroup group={group} />
      })}
    </>
  )
}

export default StandardsList