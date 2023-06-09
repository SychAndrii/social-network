import React from 'react'

type Props = {
    children: React.ReactNode
}

const PageBlock = ({children}: Props) => {
  return (
    <div className="w-full">
        {children}
    </div>
  )
}

export default PageBlock