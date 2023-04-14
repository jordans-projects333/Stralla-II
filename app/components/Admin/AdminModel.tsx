'use client'

import RisingFallingModel from '@/Utils/Components/RisingFallingModel'
import { useStore } from '@/Zustand/store'
import { useRef, useState } from 'react'

const AdminModel = () => {
    const { adminModelActive } = useStore()
    const [passwordIndex, setPasswordIndex] = useState(0)
    let fadedBackground = useRef<HTMLDivElement>(null)
    const handleAccountModelToggle = (e: any) => {
        if(e.target !== fadedBackground.current)return
        useStore.setState(() => ({
            adminModelActive : false
        }))
    }

    return (
        <RisingFallingModel active={adminModelActive} cancelFunction={handleAccountModelToggle} 
            fadedBackgroundRef={fadedBackground} tailwindStyles={'top-[15%] bg-white w-[80%] p-4 aspect-[3/4] flex flex-col'}>
            <label>Enter name</label>
            <input className='mt-2 mb-6 border border-black' type='text'/>
            <div className='flex mb-4 mx-auto gap-4'>
                <div className={`${passwordIndex >= 1 ? 'bg-black' : 'bg-transparent'} h-4 w-4 border-black border rounded-full`}></div>
                <div className={`${passwordIndex >= 2 ? 'bg-black' : 'bg-transparent'} h-4 w-4 border-black border rounded-full`}></div>
                <div className={`${passwordIndex >= 3 ? 'bg-black' : 'bg-transparent'} h-4 w-4 border-black border rounded-full`}></div>
                <div className={`${passwordIndex === 4 ? 'bg-black' : 'bg-transparent'} h-4 w-4 border-black border rounded-full`}></div>
            </div>
            <div className='grid grid-cols-3 flex-1 gap-6'>
                <button onClick={() => setPasswordIndex((prev) => prev + 1)} className='rounded-full shadow-xl bg-gray-200 aspect-square backdrop-blur-xl'>1</button>
                <button onClick={() => setPasswordIndex((prev) => prev + 1)} className='rounded-full shadow-xl bg-gray-200 aspect-square backdrop-blur-xl'>2</button>
                <button onClick={() => setPasswordIndex((prev) => prev + 1)} className='rounded-full shadow-xl bg-gray-200 aspect-square backdrop-blur-xl'>3</button>
                <button onClick={() => setPasswordIndex((prev) => prev + 1)} className='rounded-full shadow-xl bg-gray-200 aspect-square backdrop-blur-xl'>4</button>
                <button onClick={() => setPasswordIndex((prev) => prev + 1)} className='rounded-full shadow-xl bg-gray-200 aspect-square backdrop-blur-xl'>5</button>
                <button onClick={() => setPasswordIndex((prev) => prev + 1)} className='rounded-full shadow-xl bg-gray-200 aspect-square backdrop-blur-xl'>6</button>
                <button onClick={() => setPasswordIndex((prev) => prev + 1)} className='rounded-full shadow-xl bg-gray-200 aspect-square backdrop-blur-xl'>7</button>
                <button onClick={() => setPasswordIndex((prev) => prev + 1)} className='rounded-full shadow-xl bg-gray-200 aspect-square backdrop-blur-xl'>8</button>
                <button onClick={() => setPasswordIndex((prev) => prev + 1)} className='rounded-full shadow-xl bg-gray-200 aspect-square backdrop-blur-xl'>9</button>
                <div></div>
                <button onClick={() => setPasswordIndex((prev) => prev + 1)} className='rounded-full shadow-xl bg-gray-200 aspect-square backdrop-blur-xl'>0</button>
                <div></div>
            </div>
        </RisingFallingModel>
    )
}

export default AdminModel