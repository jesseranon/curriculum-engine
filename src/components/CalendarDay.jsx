import React from 'react'

const CalendarDay = ({year, month, day}) => {
  return (
    <li className="w-full h-full">{day}</li>
  )
}

export default CalendarDay