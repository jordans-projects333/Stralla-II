'use client'

import { useStore } from "@/Zustand/store"
import { signOut } from "next-auth/react"

const SignInButton = ({user}:any) => {
    const handleAdminToggle = () => {
        useStore.setState(() => ({
            adminModelActive : true
        }))
    }
    if(!user)return (
        <button className='ml-auto text-white bg-black rounded-lg px-3 mr-2 py-1 mt-2' onClick={() => handleAdminToggle()}>Sign in</button>
    )
    return (
        <button className='ml-auto mr-2 py-1 mt-2' onClick={() => signOut()}><svg className="h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"/></svg></button>
    )
}

export default SignInButton