import React from 'react'

type Props = {
  children: React.ReactNode
}

const Main = ({ children }: Props) => {
  return (
    <main className='w-full bg-grey-bg pt-5'>
      <div className="flex w-full max-w-desktop-edge mx-auto px-3 main-padding:px-0">
        {children}
      </div>
    </main>
  )
}

export default Main