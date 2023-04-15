import Navbar from './Navbar'
import HeaderSidebar from '../Sidebar/HeaderSidebar'
import SignInButton from './SignInButton'
import { getServerSession } from 'next-auth'
import { authOptions } from "@/pages/api/auth/[...nextauth]"

const Header = async () => {
  const session = await getServerSession(authOptions)
  return (
    <header className='w-full flex bg-white z-50 shadow-2xl'>
        <HeaderSidebar/>
        <div className='flex flex-1 flex-col border-b border-gray-400'>
            <div className='flex'>
                <svg className='h-6 mt-4 ml-2' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M40 352l48 0c22.1 0 40 17.9 40 40l0 48c0 22.1-17.9 40-40 40l-48 0c-22.1 0-40-17.9-40-40l0-48c0-22.1 17.9-40 40-40zm192 0l48 0c22.1 0 40 17.9 40 40l0 48c0 22.1-17.9 40-40 40l-48 0c-22.1 0-40-17.9-40-40l0-48c0-22.1 17.9-40 40-40zM40 320c-22.1 0-40-17.9-40-40l0-48c0-22.1 17.9-40 40-40l48 0c22.1 0 40 17.9 40 40l0 48c0 22.1-17.9 40-40 40l-48 0zM232 192l48 0c22.1 0 40 17.9 40 40l0 48c0 22.1-17.9 40-40 40l-48 0c-22.1 0-40-17.9-40-40l0-48c0-22.1 17.9-40 40-40zM40 160c-22.1 0-40-17.9-40-40L0 72C0 49.9 17.9 32 40 32l48 0c22.1 0 40 17.9 40 40l0 48c0 22.1-17.9 40-40 40l-48 0zM232 32l48 0c22.1 0 40 17.9 40 40l0 48c0 22.1-17.9 40-40 40l-48 0c-22.1 0-40-17.9-40-40l0-48c0-22.1 17.9-40 40-40z"/></svg>
                <h1 className='text-3xl mt-2 ml-2 font-semibold tracking-wide'>Stralla</h1>
                <h2 className='text-lg'>Dev Tools</h2>
                <SignInButton user={session}/>
            </div>
            <Navbar/>
        </div>
    </header>
  )
}

export default Header as any