import Image from 'next/image'
import ExampleImage from '@/Images/ImageManagerExample.jpg'

const page = () => {
  return (
    <div className='flex-1 bg-slate-100 flex flex-col md:flex-row'>
        {/* <h3 className='ml-2 text-gray-700 text-sm mt-1'>Transform, Optimize, Next.js ready</h3> */}
        <div className='md:w-[30%] md:h-full'>
            <div className='relative w-[80%] md:w-[50%] aspect-[3/4] object-cover mx-auto mt-4'>
                <Image src={ExampleImage} fill alt='An example'/>
            </div>
            <div className='w-full flex'>
                <label className='mx-auto'>
                    <input type='file' multiple accept=".jpg, .jpeg, .png, .webp, .avif" className='hidden'/>
                    <div className='text-4xl'>+</div>
                </label>
            </div>
            <div className='flex relative w-full pb-2 border-b border-gray-500'>
                <button className='absolute left-0 bottom-0 ml-2 mb-2'><svg className='h-5' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z"/></svg></button>
                <h3 className='text-center w-full text-2xl mb-2'>Add image</h3>
            </div>
        </div>
        <div className='grid grid-cols-[35%,_20%,_20%,_20%,_20%] col max-w-full md:w-[70%] overflow-x-auto mt-1 pl-1 font-semibold'>
            <div className='flex-shrink-0 w-[35%]'>Name</div>
            <div className='flex-shrink-0 w-[20%]'>Space</div>
            <div className='flex-shrink-0 w-[20%]'>Size</div>
            <div className='flex-shrink-0 w-[20%]'>FileType</div>
            <div className='flex-shrink-0 w-[20%]'>Alt</div>
            <div className='flex-shrink-0 w-[35%]'>--</div>
            <div className='flex-shrink-0 w-[20%]'>--</div>
            <div className='flex-shrink-0 w-[20%]'>--</div>
            <div className='flex-shrink-0 w-[20%]'>--</div>
            <div className='flex-shrink-0 w-[20%]'>--</div>
            <div className='flex-shrink-0 w-[35%]'>--</div>
            <div className='flex-shrink-0 w-[20%]'>--</div>
            <div className='flex-shrink-0 w-[20%]'>--</div>
            <div className='flex-shrink-0 w-[20%]'>--</div>
            <div className='flex-shrink-0 w-[20%]'>--</div>
            <div className='flex-shrink-0 w-[35%]'>--</div>
            <div className='flex-shrink-0 w-[20%]'>--</div>
            <div className='flex-shrink-0 w-[20%]'>--</div>
            <div className='flex-shrink-0 w-[20%]'>--</div>
            <div className='flex-shrink-0 w-[20%]'>--</div>
        </div>
    </div>
  )
}

export default page