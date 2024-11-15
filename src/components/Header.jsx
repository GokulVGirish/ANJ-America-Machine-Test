import React from 'react'

function Header() {
  return (
    <header className="h-20 w-full flex justify-between border-b-2 px-2">
        <div className=' flex items-center'>
            <button className='font-bold'>My Project</button>
        </div>
        <div className='flex items-center '>
          <input className='p-3 rounded-lg' placeholder='text'/>

        </div>
        
    </header>
  )
}

export default Header