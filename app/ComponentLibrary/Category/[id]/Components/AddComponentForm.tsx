'use client'

import { ChangeEvent } from "react"

const AddComponentForm = () => {
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        
    }
    return (
        <div className="flex">
            <form className='flex flex-col bg-gray-100 pl-2 pt-2 relative w-[50%] items-start border-x border-gray-300'>
                <label className='text-sm font-medium text-gray-900 text-center'>Title</label>
                <input type='text' className='border-2 ml-1 mt-1 border-gray-300 w-[40%] text-sm rounded bg-transparent pl-2 py-1 text-gray-900 placeholder:text-gray-400 focus:ring-0'/>
                <div className="h-[2px] w-[100%] bg-gray-300 mt-2 mb-4"></div>
                <label className='text-sm font-medium text-gray-900'>Image Title</label>
                <input type='text' className='border-2 ml-1 mt-1 border-gray-300 w-[40%] text-sm rounded bg-transparent pl-2 py-1 text-gray-900 placeholder:text-gray-400 focus:ring-0'/>
                <label>
                    <input type='file' accept=".jpg, .jpeg, .png, .webp, .avif" className='hidden' onChange={(e) => onChangeHandler(e)}/>
                    <div className='text-sm font-medium text-gray-900 mt-2'>+ Image</div>
                    <h2 className="bg-gray-300 py-1 ml-1 px-3 rounded cursor-pointer w-fit mt-1">Choose image</h2>
                </label>
                <div className="h-[2px] w-[100%] bg-gray-300 mt-2 mb-4"></div>
                <button type='button' className='w-fit text-sm font-medium text-gray-900'>+ Another Image</button>
                <div className="h-[2px] w-[100%] bg-gray-300 mt-2 mb-4"></div>
                <label className='text-sm font-medium text-gray-900 mt-2'>Notes</label>
                <textarea className='w-[100%] pl-2 ml-1 border-gray-300 border-2 text-sm rounded bg-transparent'/>
                <div className="h-[2px] w-[100%] bg-gray-300 mt-2 mb-4"></div>
                <label className='text-sm font-medium text-gray-900'>Component Title</label>
                <input type='text' className='border-2 ml-1 mt-1 border-gray-300 w-[200px] text-sm rounded bg-transparent pl-2 py-1 text-gray-900 placeholder:text-gray-400 focus:ring-0'/>
                <label className='text-sm font-medium text-gray-900 mt-2'>Component Code:</label>
                <textarea className='w-[100%] pl-2 ml-1 border-gray-300 border-2 text-sm rounded bg-transparent'/>
                <div className="h-[2px] w-[100%] bg-gray-300 mt-2 mb-4"></div>
                <button type='button' className='w-fit text-sm font-medium text-gray-900'>+ Another Component</button>
                <button type='submit' className="fixed bottom-0 right-0 m-4 py-1 px-3 font-medium text-gray-300 bg-gray-900 rounded-md">Submit</button>
            </form>
            <div className="w-[65%] flex justify-center">
                <div className="w-[90%] h-[400px] border border-black"></div>

            </div>
        </div>
    )
}

export default AddComponentForm