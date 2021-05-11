import React from 'react'
import { Link } from 'react-router-dom'

export default function BigSearchButton () {
  return (
    <Link to='/search'>
      <button
        className=" hidden md:flex flex-row shadow-lg space-x-2 flex justify-center md:py-3 md:text-base w-8 md:w-28 py-2 self-center bg-poroporo hover:bg-poroporo text-white text-xs rounded-lg focus:ring transform transition hover:scale-105 duration-300 ease-in-out">
        <img className='w-4 md:w-6' src='/images/searchIcon.png'/>
        <text>SEARCH</text>
      </button>
    </Link>
  )
}