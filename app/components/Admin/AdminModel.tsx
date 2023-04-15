'use client'

import RisingFallingModel from '@/Utils/Components/RisingFallingModel'
import { useStore } from '@/Zustand/store'
import { useRef, useState } from 'react'
import { signIn } from "next-auth/react";
import { useRouter } from 'next/navigation';

const AdminModel = () => {
    const router = useRouter()
    const { adminModelActive } = useStore()
    const [passwordPin, setPasswordPin] = useState<number[]>([])
    let nameEntered = useRef<HTMLInputElement>(null)
    let fadedBackground = useRef<HTMLDivElement>(null)
    const handleAccountModelToggle = (e: any) => {
        if(e.target !== fadedBackground.current)return
        setPasswordPin([])
        useStore.setState(() => ({
            adminModelActive : false
        }))
    }
    const pinPush = async (pin: number) => {
        console.log(passwordPin.length)
        setPasswordPin([...passwordPin, pin])
        if(passwordPin.length < 3){
            
        }else{
            const res = await signIn('credentials', {
                name: nameEntered.current!.value,
                pin: [...passwordPin, pin],
                redirect: false
            })
            if(res!.ok){
                useStore.setState(() => ({
                    adminModelActive : false
                }))
                setTimeout(() => {
                    router.refresh()
                }, 300)
            }else{
                setPasswordPin([])
            }
        }
    }
    return (
        <RisingFallingModel active={adminModelActive} cancelFunction={handleAccountModelToggle} 
            fadedBackgroundRef={fadedBackground} tailwindStyles={'top-[15%] bg-white w-[80%] p-4 aspect-[3/4] flex flex-col'}>
            <label>Enter name</label>
            <input ref={nameEntered} className='mt-2 mb-6 border border-black' type='text'/>
            <div className='flex mb-4 mx-auto gap-4'>
                <div className={`${passwordPin.length >= 1 ? 'bg-black' : 'bg-transparent'} h-4 w-4 border-black border rounded-full`}></div>
                <div className={`${passwordPin.length >= 2 ? 'bg-black' : 'bg-transparent'} h-4 w-4 border-black border rounded-full`}></div>
                <div className={`${passwordPin.length >= 3 ? 'bg-black' : 'bg-transparent'} h-4 w-4 border-black border rounded-full`}></div>
                <div className={`${passwordPin.length === 4 ? 'bg-black' : 'bg-transparent'} h-4 w-4 border-black border rounded-full`}></div>
            </div>
            <div className='grid grid-cols-3 flex-1 gap-6'>
                <button onClick={() => pinPush(1)} className='rounded-full shadow-xl bg-gray-200 aspect-square backdrop-blur-xl'>1</button>
                <button onClick={() => pinPush(2)} className='rounded-full shadow-xl bg-gray-200 aspect-square backdrop-blur-xl'>2</button>
                <button onClick={() => pinPush(3)} className='rounded-full shadow-xl bg-gray-200 aspect-square backdrop-blur-xl'>3</button>
                <button onClick={() => pinPush(4)} className='rounded-full shadow-xl bg-gray-200 aspect-square backdrop-blur-xl'>4</button>
                <button onClick={() => pinPush(5)} className='rounded-full shadow-xl bg-gray-200 aspect-square backdrop-blur-xl'>5</button>
                <button onClick={() => pinPush(6)} className='rounded-full shadow-xl bg-gray-200 aspect-square backdrop-blur-xl'>6</button>
                <button onClick={() => pinPush(7)} className='rounded-full shadow-xl bg-gray-200 aspect-square backdrop-blur-xl'>7</button>
                <button onClick={() => pinPush(8)} className='rounded-full shadow-xl bg-gray-200 aspect-square backdrop-blur-xl'>8</button>
                <button onClick={() => pinPush(9)} className='rounded-full shadow-xl bg-gray-200 aspect-square backdrop-blur-xl'>9</button>
                <div></div>
                <button onClick={() => pinPush(0)} className='rounded-full shadow-xl bg-gray-200 aspect-square backdrop-blur-xl'>0</button>
                <div></div>
            </div>
        </RisingFallingModel>
    )
}

export default AdminModel