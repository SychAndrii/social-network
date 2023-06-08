import React from 'react'

type Props = {
    children: React.ReactNode,
    classes?: string
}

const GreyButton = ({children, classes}: Props) => {
  return (
    <div className={`flex justify-center items-center bg-[#F2F3F5] ${classes}`}>
        {children}
    </div>
  )
}

export default GreyButton