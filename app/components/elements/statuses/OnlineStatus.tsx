import React from 'react'
import Status from './Status'

type Props = {
  classes: string
}

const OnlineStatus = ({classes}: Props) => {
  return (
    <Status classes={`bg-green-500 ${classes}`} />
  )
}

export default OnlineStatus