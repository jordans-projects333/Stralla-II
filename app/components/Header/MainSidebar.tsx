'use client'

import { usePathname } from "next/navigation"



const MainSidebar = () => {
    const pathname = usePathname()
    return (
        <div className={`${pathname === '/ComponentLibrary' ? 'w-12' : 'w-0 md:w-12'} bg-black duration-200 flex flex-col items-center justify-center gap-8`}>
            <svg className='h-5 fill-white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 142.514 142.514"><path d="M34.367,142.514c11.645,0,17.827-10.4,19.645-16.544c0.029-0.097,0.056-0.196,0.081-0.297    c4.236-17.545,10.984-45.353,15.983-65.58h17.886c3.363,0,6.09-2.726,6.09-6.09c0-3.364-2.727-6.09-6.09-6.09H73.103    c1.6-6.373,2.771-10.912,3.232-12.461l0.512-1.734c1.888-6.443,6.309-21.535,13.146-21.535c6.34,0,7.285,9.764,7.328,10.236    c0.27,3.343,3.186,5.868,6.537,5.579c3.354-0.256,5.864-3.187,5.605-6.539C108.894,14.036,104.087,0,89.991,0    C74.03,0,68.038,20.458,65.159,30.292l-0.49,1.659c-0.585,1.946-2.12,7.942-4.122,15.962H39.239c-3.364,0-6.09,2.726-6.09,6.09    c0,3.364,2.726,6.09,6.09,6.09H57.53c-6.253,25.362-14.334,58.815-15.223,62.498c-0.332,0.965-2.829,7.742-7.937,7.742    c-7.8,0-11.177-10.948-11.204-11.03c-0.936-3.229-4.305-5.098-7.544-4.156c-3.23,0.937-5.092,4.314-4.156,7.545    C13.597,130.053,20.816,142.514,34.367,142.514z"/><path d="M124.685,126.809c3.589,0,6.605-2.549,6.605-6.607c0-1.885-0.754-3.586-2.359-5.474l-12.646-14.534l12.271-14.346    c1.132-1.416,1.98-2.926,1.98-4.908c0-3.59-2.927-6.231-6.703-6.231c-2.547,0-4.527,1.604-6.229,3.684l-9.531,12.454L98.73,78.391    c-1.89-2.357-3.869-3.682-6.7-3.682c-3.59,0-6.607,2.551-6.607,6.609c0,1.885,0.756,3.586,2.357,5.471l11.799,13.592    L86.647,115.67c-1.227,1.416-1.98,2.926-1.98,4.908c0,3.589,2.926,6.229,6.699,6.229c2.549,0,4.53-1.604,6.229-3.682l10.19-13.4    l10.193,13.4C119.872,125.488,121.854,126.809,124.685,126.809z"/></svg>
            <svg className='h-5 fill-white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H392.6c-5.4-9.4-8.6-20.3-8.6-32V352c0-2.1 .1-4.2 .3-6.3c-31-26-71-41.7-114.6-41.7H178.3zM528 240c17.7 0 32 14.3 32 32v48H496V272c0-17.7 14.3-32 32-32zm-80 32v48c-17.7 0-32 14.3-32 32V480c0 17.7 14.3 32 32 32H608c17.7 0 32-14.3 32-32V352c0-17.7-14.3-32-32-32V272c0-44.2-35.8-80-80-80s-80 35.8-80 80z"/></svg>
        </div>
    )
}

export default MainSidebar