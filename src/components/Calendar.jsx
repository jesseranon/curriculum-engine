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

  // console.log(dt.now())
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
    const calendarArray = []
    const monthStartDate = dtObject.set({day: 1})
    const monthStartWeekday = monthStartDate.weekday
    if (monthStartWeekday > 1 && monthStartWeekday < 6) {
      let padCount = 1
      while (padCount < monthStartWeekday) {
        calendarArray.push({pad: true, id=`pad-${padCount}`})
        padCount += 1
      }
    }
    const monthEndDate = dtObject.endOf('month')
    let currentDate = monthStartDate
    while (currentDate < monthEndDate) {
      calendarArray.push(currentDate)
      currentDate = currentDate.plus({day: 1})
    }
    return calendarArray
  }

  const calendarArray = generateCalendarArray(displayDateObject)

  const handleButtonClick = (num) => {
    setDisplayObject((prevDtObj) => {
      return prevDtObj.plus({month: num})
    })
  }

  return (
    <section className="w-full h-3/5">
      <div className="text-2xl font-semibold flex flex-row content-center justify-center">
        <button className="p-2.5" onClick={() => handleButtonClick(-1)}><FontAwesomeIcon icon={faCaretLeft} /></button>
        <span className="w-80">{displayDateObject.toFormat('MMMM')} {displayDateObject.toFormat('yyyy')}</span>
        <button className="p-2.5" onClick={() => handleButtonClick(1)}><FontAwesomeIcon icon={faCaretRight} /></button>
      </div>
      
      <ol className="text-xl grid grid-cols-5 grid-rows-1 grid-flow-row mb-1 gap-3">
        {["Mon", "Tue", "Wed", "Thu", "Fri"].map((day) => {
          return (<li key={`heading-${day}`} className="w-28 h-auto">
            {day}
          </li>)
        })}
      </ol>

      <ol className="text-xl grid grid-cols-5 grid-rows-5 grid-flow-row gap-3">
        {
          calendarArray.map((dtObj) => {
            if (dtObj.weekday < 6) {
              if (dtObj.pad) {
                return (
                  <CalendarDay key={dtObj.id}  >
                  </CalendarDay>
                )
              }
              const id = {`${dtObj.year}-${dtObj.month}-${dtObj.day}`}
              return (
                <CalendarDay key={id} id={id} {...dtObj.c}>
                  {dtObj.day}
                </CalendarDay>
              )
              
            }
          })
        }
      </ol>
          
        
    </section>
  )
}

export default Calendar