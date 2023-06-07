import React from 'react'
import {BsFillPlayFill} from 'react-icons/bs'
import {BsFillSkipEndFill} from 'react-icons/bs'
import {BsFillSkipStartFill} from 'react-icons/bs'
type Props = {}

const Player = (props: Props) => {
  return (
    <div className="flex items-center">
        <BsFillSkipStartFill className="text-icon text-2xl"  />
        <BsFillPlayFill className="text-icon text-2xl mx-4" />
        <BsFillSkipEndFill className="text-icon text-2xl" />
        <span className="ml-5 text-sm text-small-text">Moseqar - Say Something</span>
    </div>
  )
}

export default Player