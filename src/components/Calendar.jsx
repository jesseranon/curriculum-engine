import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons'
import {DateTime as dt} from 'luxon'
import CalendarDay from './CalendarDay'
import Spinner from './Spinner'

const Calendar = () => {
  const [currentMonth, setCurrentMonth] = useState()
  const [currentYear, setCurrentYear] = useState()
  
  const today = dt.now()

  // console.log(today.toFormat('MMMM')) //Get month
  // console.log(today.toFormat('EEEE')) //Get day of week

  // useEffect(() => {

  // },[])

  return (
    <section className="w-full h-1/2">
      <FontAwesomeIcon icon={faCaretLeft} />
      <span className="text-xl"></span>
      <FontAwesomeIcon icon={faCaretRight} />
      <CalendarDay key="1" />
      <CalendarDay key="2" />
      <CalendarDay key="3" />
      <CalendarDay key="4" />
      <CalendarDay key="5" />
    </section>
  )
}

export default Calendar