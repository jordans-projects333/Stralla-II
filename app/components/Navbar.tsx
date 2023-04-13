'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'

const Navbar = () => {
    const pathname = usePathname()
    return (
        <nav>
            <ul className='flex max-w-full overflow-x-auto mt-2 gap-4 ml-1 pr-6'>
                <li className={`flex-shrink-0 pb-1 px-1 ${pathname === '/' && 'border-b-2 border-black'}`}><Link href={'/'}>Deployments</Link></li>
                <li className={`flex-shrink-0 pb-1 px-1 ${pathname === '/ImageManager' && 'border-b-2 border-black'}`}><Link href={'/ImageManager'}>Image Manager</Link></li>
                <li className={`flex-shrink-0 pb-1 px-1 ${pathname === '/ComponentLibrary' && 'border-b-2 border-black'}`}><Link href={'/ComponentLibrary'}>Components</Link></li>
                <li className={`flex-shrink-0 pb-1 px-1 ${pathname === '/SvgLibrary' && 'border-b-2 border-black'}`}><Link href={'/SvgLibrary'}>Svg's</Link></li>
                <li className={`flex-shrink-0 pb-1 px-1 ${pathname === '/FontLibrary' && 'border-b-2 border-black'}`}><Link href={'/FontLibrary'}>Fonts</Link></li>
                <li className={`flex-shrink-0 pb-1 px-1 ${pathname === '/Notes' && 'border-b-2 border-black'}`}><Link href={'/Notes'}>Notes</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar