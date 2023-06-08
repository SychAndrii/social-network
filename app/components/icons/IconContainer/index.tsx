import React from 'react'

type Props = {
    children: React.ReactNode,
    classes?: string
}

const IconContainer = ({children, classes}: Props) => {
  return (
    <div className={`text-icon text-xl font-bold ${classes}`}>{children}</div>
  )
}

export default IconContainer