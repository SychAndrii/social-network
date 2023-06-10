import React from 'react'

type Props = {
  children: React.ReactNode
}

const Main = ({ children }: Props) => {
  return (
    <main className='w-full bg-grey-bg desktop:pt-5 pt-0'>
      <div className="flex w-full max-w-desktop-edge mx-auto desktop:pr-3 pr-0 main-padding:px-0">
        {children}
      </div>
    </main>
  )
}

export default Main