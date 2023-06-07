import React from 'react'

type Props = {
    children: React.ReactNode,
    classes?: string
}

function ItemWrapper({ children, classes }: Props) {
    return (
        <div className={`h-full py-2 px-4 flex items-center hover:bg-slate-100 hover:cursor-pointer ${classes && classes}`}>
            {children}
        </div>
    )
}

export default ItemWrapper