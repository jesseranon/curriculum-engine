import React, {useState} from 'react'
import StandardGroup from './StandardGroup'

const StandardsList = ({strand}) => {
  const standards = strand.groups.map((group) => {
    return group.standards.map((standard) => {
      return standard
    })
  })
  console.log(standards)
  return (
    <>
      {strand.groups.map((group) => {
        return <StandardGroup group={group} />
      })}
    </>
  )
}

export default StandardsList