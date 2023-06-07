import React from 'react'
import SearchIcon from './components/SearchIcon'

type Props = {}

const GlobalInput = (props: Props) => {
  return (
    <div>
      <div className="relative ml-6">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <SearchIcon />
        </div>
        <input type="text" id="global-input" placeholder="Search" className=" w-56 placeholder:text-gray-600 hover:bg-slate-200 bg-slate-100 text-sm rounded-lg block pl-10 p-1 focus:border-none focus:outline-none dark:text-white" />
      </div>
    </div>
  )
}

export default GlobalInput