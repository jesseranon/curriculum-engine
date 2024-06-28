import React, {useState, useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons'
import {DateTime as dt} from 'luxon'
import CalendarDay from './CalendarDay'
import Spinner from './Spinner'

const Calendar = () => {
  // const [isLoading, setIsLoading] = useState(true)
  const [displayDateObject, setDisplayObject] = useState(dt.now())
  const [displayMonth, setDisplayMonth] = useState('')
  const [displayYear, setDisplayYear] = useState('')
  const [selectedDate, setSelectedDate] = useState()  

  // useEffect(() => {
    
  // },[])

  // const monthStartDateWeekday = monthStartDate.toFormat('E')
  // const monthEndDateWeekday = monthEndDate.toFormat('E')

  // console.log(monthStartDate.day)
  // console.log(monthEndDate.day)
  // console.log(monthStartDateWeekday)
  // console.log(monthEndDateWeekday)

  // const monthStart = 1
  // const monthEnd = null
  // console.log(today.toFormat('MMMM')) //Get month
  // console.log(today.toFormat('M')) //Get month unpadded number
  // console.log(today.toFormat('EEEE')) //Get day of week as unabbreviated string
  // console.log(today.toFormat('EEE')) //Get day of week abbreviated string
  // console.log(today.toFormat('E')) //Get day of week as number (1 is monday, 7 is sunday)
  // console.log(today.toFormat('yyyy')) //Get year as digits
  
  const generateCalendarArray = (dtObject) => {
    const monthStartDate = dtObject.set({day: 1})
    const monthEndDate = dtObject.endOf('month')
    const calendarArray = []
    let currentDate = monthStartDate
    while (currentDate < monthEndDate) {
      calendarArray.push(currentDate)
      currentDate = currentDate.plus({day: 1})
    }
    return calendarArray
  }

  const calendarArray = generateCalendarArray(displayDateObject)

  return (
    <section className="w-full h-1/2">
      <div className="flex justify-center">
        <FontAwesomeIcon icon={faCaretLeft} />
        <span className="text-xl">{displayDateObject.toFormat('MMMM')}</span>
        <span className="text-xl">{displayDateObject.toFormat('yyyy')}</span>
        <FontAwesomeIcon icon={faCaretRight} />
      </div>
      
      <ul className="list-none grid grid-cols-5 grid-rows-4 grid-flow-row w-full">
        <li>Mon</li>
        <li>Tue</li>
        <li>Wed</li>
        <li>Thu</li>
        <li>Fri</li>
        {calendarArray.map((dtObj) => {
          if (dtObj.weekday < 6) {
            return <CalendarDay key={`${dtObj.year}-${dtObj.month}-${dtObj.day}`} {...dtObj.c} />
          }
        })}
      </ul>
    </section>
  )
}

export default Calendar