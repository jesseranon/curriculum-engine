import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserGraduate } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
  return (
    <header className="text-3xl py-4 text-center">
        <FontAwesomeIcon icon={faUserGraduate} />
        <span>Curriculum Engine: The Bootleg</span>
    </header>
  )
}

export default Header