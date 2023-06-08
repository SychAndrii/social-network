import React from 'react'

type Props = {
    children: React.ReactNode
}

function MobileItemWrapper({ children }: Props) {
    return (
        <div className={`flex flex-col items-center py-2  hover:cursor-pointer`}>
            {children}
        </div>
    )
}

export default MobileItemWrapper