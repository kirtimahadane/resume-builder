//import React from 'react'

import DarkMode from "./DarkMode"

const Header = () => {
  return (
    <div className="max-w-5xl h-40 dark:bg-slate-600 dark:text-white 
    d-flex justify-between gap-4 relative mx-auto rounded-md" 
    >
       <div className="relative">
       <h1 className="text-3xl font-bold absolute top-10 pl-4"> Resume Builder</h1>
       </div>
       
      
       <div className="relative top-12">
       <DarkMode />
       </div>
      
      
       
    </div>
  )
}

export default Header