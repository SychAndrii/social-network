import React from 'react'
import SearchIcon from '../../icons/SearchIcon'
import IconContainer from '../../icons/IconContainer'

type Props = {}

const HeaderInput = (props: Props) => {
  return (
    <div>
      <div className="relative ml-6">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <IconContainer>
            <SearchIcon />
          </IconContainer>
        </div>
        <input type="text" id="global-input" placeholder="Search" className=" w-56 placeholder:text-gray-600 hover:bg-blue-hover bg-slate-100 text-sm rounded-lg block pl-10 p-1 focus:border-none focus:outline-none dark:text-white" />
      </div>
    </div>
  )
}

export default HeaderInput