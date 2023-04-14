'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'

const Navbar = () => {
    const pathname = usePathname()
    return (
        <nav>
            <ul className='flex max-w-full overflow-x-auto mt-4 gap-4 ml-1 pr-6'>
                <li className={`flex-shrink-0 pb-1 px-1 relative `}>
                    <Link href={'/'}>Deployments</Link>
                    <div className={`absolute bottom-0 border-b-2 translate-x-[-50%] left-[50%] border-black ${pathname === '/' ? 'w-full duration-500' : 'w-0 duration-150'}`}></div>
                </li>
                <li className={`flex-shrink-0 pb-1 px-1 relative `}>
                    <Link href={'/ImageManager'}>Images-Opt</Link>
                    <div className={`absolute bottom-0 duration-500 border-b-2 translate-x-[-50%] left-[50%] border-black ${pathname === '/ImageManager' ? 'w-full duration-500' : 'w-0 duration-150'}`}></div>
                </li>
                <li className={`flex-shrink-0 pb-1 px-1 relative `}>
                    <Link href={'/SvgLibrary'}>Svg&apos;s</Link>
                    <div className={`absolute bottom-0 duration-500 border-b-2 translate-x-[-50%] left-[50%] border-black ${pathname === '/SvgLibrary' ? 'w-full duration-500' : 'w-0 duration-150'}`}></div>
                </li>
                <li className={`flex-shrink-0 pb-1 px-1 relative `}>
                    <Link href={'/ComponentLibrary'}>Components</Link>
                    <div className={`absolute bottom-0 duration-500 border-b-2 translate-x-[-50%] left-[50%] border-black ${pathname === '/ComponentLibrary' ? 'w-full duration-500' : 'w-0 duration-150'}`}></div>
                </li>
                <li className={`flex-shrink-0 pb-1 px-1 relative `}>
                    <Link href={'/FontLibrary'}>Fonts</Link>
                    <div className={`absolute bottom-0 duration-500 border-b-2 translate-x-[-50%] left-[50%] border-black ${pathname === '/FontLibrary' ? 'w-full duration-500' : 'w-0 duration-150'}`}></div>
                </li>
                <li className={`flex-shrink-0 pb-1 px-1 relative `}>
                    <Link href={'/Notes'}>Notes</Link>
                    <div className={`absolute bottom-0 duration-500 border-b-2 translate-x-[-50%] left-[50%] border-black ${pathname === '/Notes' ? 'w-full duration-500' : 'w-0 duration-150'}`}></div>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar