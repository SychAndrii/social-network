import React from 'react'

type Props = {
    children: React.ReactNode
}

const Main = ({children}: Props) => {
  return (
    <main className="flex w-full max-w-desktop-edge mx-auto px-4">
        {children}
    </main>
  )
}

export default Main