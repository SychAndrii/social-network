import React from 'react'

type Props = {
    children: React.ReactNode
}

const BlueButton = ({children}: Props) => {
  return (
    <button className="mr-3 hover:bg-strong-blue px-4 py-2 text-attention-color transition-colors text-sm font-bold bg-light-blue cursor-pointer rounded-md">
          {children}
    </button>
  )
}

export default BlueButton