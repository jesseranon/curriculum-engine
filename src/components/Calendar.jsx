import React from 'react'
import CalendarDay from './CalendarDay'

const Calendar = () => {
  return (
    <section>
      <CalendarDay key="1" />
      <CalendarDay key="2" />
      <CalendarDay key="3" />
      <CalendarDay key="4" />
      <CalendarDay key="5" />
    </section>
  )
}

export default Calendar