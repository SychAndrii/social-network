import React from 'react'

type Props = {
    classes: string
}

const Status = ({classes}: Props) => {
  return (
    <div className={`w-4 h-4 rounded-full ${classes} absolute`}></div>
  )
}

export default Status