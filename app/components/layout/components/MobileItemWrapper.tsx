import React from 'react'

type Props = {
    children: React.ReactNode
}

function MobileItemWrapper({ children }: Props) {
    return (
        <div className={`py-2 flex items-center hover:bg-slate-100 hover:cursor-pointer`}>
            {children}
        </div>
    )
}

export default MobileItemWrapper