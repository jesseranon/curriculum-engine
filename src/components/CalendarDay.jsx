import React from 'react'

const CalendarDay = ({year, month, day}) => {
  return (
    <li className="w-30 h-30">{day}</li>
  )
}

export default CalendarDay