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
    <section className="w-full h-3/5">
      <div className="text-2xl font-semibold flex flex-row content-center justify-center">
        <button className="p-2.5"><FontAwesomeIcon icon={faCaretLeft} /></button>
        <span className="w-80">{displayDateObject.toFormat('MMMM')} {displayDateObject.toFormat('yyyy')}</span>
        <button className="p-2.5"><FontAwesomeIcon icon={faCaretRight} /></button>
      </div>
      
      <div className="list-none grid grid-cols-5 grid-rows-2 grid-flow-row w-full">
        <ul className="text-xl grid grid-cols-5 col-span-full h-10">
          {["Mon", "Tue", "Wed", "Thu", "Fri"].map((day) => {
            return (<li key={`heading-${day}`} className="w-40 h-auto">
              {day}
            </li>)
          })}
        </ul>

        

        <div className="grid grid-cols-5 col-span-full">
          {calendarArray.map((dtObj) => {
            if (dtObj.weekday < 6) {
              return <CalendarDay key={`${dtObj.year}-${dtObj.month}-${dtObj.day}`} {...dtObj.c} />
            }
          })}
        </div>
        
      </div>
    </section>
  )
}

export default Calendar