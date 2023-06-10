import React from 'react'

type Props = {
    children: React.ReactNode,
    classes?: string
}

const BlackButton = ({children, classes}: Props) => {
    return (
        <button className={`mr-3 flex items-center hover:bg-[#a0a0a0] px-4 py-2 bg-[#909090] text-white transition-colors text-sm font-bold cursor-pointer rounded-md ${classes}`}>
            {children}
        </button>
    )
}

export default BlackButton