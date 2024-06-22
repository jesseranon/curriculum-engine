import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserGraduate } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
  return (
    <header className="flex flex-row justify-around">
        <FontAwesomeIcon icon={faUserGraduate} />
        <span className="text-xl">Curriculum Engine: The Bootleg</span>
    </header>
  )
}

export default Header