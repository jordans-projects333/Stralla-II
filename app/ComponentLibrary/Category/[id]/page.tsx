'use client'

import { useState } from 'react'
import AddComponentButton from './Components/AddComponentButton'
import AddComponentForm from './Components/AddComponentForm'

const page = () => {
  const [addingComponent, setAddingComponent] = useState(false)
  return (
    <div className='flex flex-1'>
        <div className='flex-[3] bg-gray-100'>
            <AddComponentButton setAddingComponent={setAddingComponent}/>
        </div>
        <div className='flex-[7] bg-gray-100'>
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

export default page