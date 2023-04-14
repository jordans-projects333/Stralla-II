'use client'

import { useStore } from "@/Zustand/store"

const SignInButton = () => {
    const handleAdminToggle = () => {
        console.log('heck')
        useStore.setState(() => ({
            adminModelActive : true
        }))
    }
    return (
        <button className='ml-auto text-white bg-black rounded-lg px-3 mr-2 py-1 mt-2' onClick={() => handleAdminToggle()}>Sign in</button>
    )
}

export default SignInButton