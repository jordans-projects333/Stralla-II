'use client'

import { useState } from 'react'
import AddComponentButton from './Components/AddComponentButton'
import AddComponentForm from './Components/AddComponentForm'

const Page = () => {
  const [addingComponent, setAddingComponent] = useState(false)
  return (
    <div className='flex flex-1'>
        <div className='flex-[3] bg-gray-100'>
            <AddComponentButton setAddingComponent={setAddingComponent}/>
        </div>
        <div className='flex-[7] bg-blue-500 overflow-hidden flex'>
          {/* <div className='flex-1 overflow-y-auto bg-red-600 h-full'>
              <div className='h-[7000px] w-full bg-green-400'></div>
          </div>
          <div className='flex-1 overflow-y-auto bg-orange-600 h-full'>
              <div className='h-full w-full bg-yellow-400'></div>
          </div> */}
            {addingComponent ? 
              <AddComponentForm/>
            :
              <div>
                
              </div>
            }
        </div>
    </div>
  )
}

export default Page