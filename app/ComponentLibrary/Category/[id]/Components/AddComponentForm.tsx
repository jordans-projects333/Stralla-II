'use client'

import optimizeImage from "@/Utils/ClientImageOptimiszation"
import Image from "next/image"
import { ChangeEvent, Key, useState } from "react"

const AddComponentForm = () => {
    const [imagesInputs, setImagesInputs] = useState([{ title: "", file : ""}])
    const [imagesInputsSrc, setImagesInputsSrc] = useState<any>([])
    const onChangeHandler = async (index: number, e: ChangeEvent<HTMLInputElement>) => {
        if(e.target!.files![0] === undefined )return
        const inputOptimizedImage:any = await optimizeImage(e.target!.files![0], 1)
        let newImagesArr = [...imagesInputsSrc]
        newImagesArr[index] = URL.createObjectURL(inputOptimizedImage)
        setImagesInputsSrc([...newImagesArr])
        // let newFormValues:any = [...imagesInputs];
        // newFormValues[index][e.target.name] = e.target.value;
        
        
        // setFormImage(URL.createObjectURL(inputOptimizedImage))
        // setImagesInputs(newFormValues);
    }
    const addImageFields = () => {
        setImagesInputs([...imagesInputs, { title: "", file : ""}])
    }
    const removeFormFields = (index: number) => {
        ////////////////////////////////////////////////////////////////////////////////////hwerddddddddddddddddddddddddddddddddddddddddd
        let newFormValues = [...imagesInputs];
        newFormValues.splice(index, 1);
        setImagesInputs(newFormValues)
    }
    return (
        <>
        <div className="flex-[4] overflow-y-auto bg-gray-100 h-full">
            <form className='flex w-full flex-col px-2 pt-3 relative items-start border-x border-gray-300 h-full overflow-x-hidden pb-16'>
                <div className="w-full mt-2 mb-4 flex items-center">
                    <div className="flex-1 h-[2px] bg-gray-600"></div>
                    <h2 className="mx-2 font-semibold text-sm text-gray-600">Component Title</h2>
                    <div className="flex-1 h-[2px] bg-gray-600"></div>
                </div>
                <label className='text-sm font-medium text-gray-900 text-center'>Title:</label>
                <input type='text' className='border-2 mt-1 border-gray-300 w-[100%] text-sm rounded bg-transparent px-4 py-1 text-gray-900 placeholder:text-gray-400 focus:ring-0'/>
                {/* Image Titles and Files */}
                {imagesInputs.map((element, index) => (
                    <div key={index} className="flex flex-col w-full">
                        <div className="w-full mt-2 mb-4 flex items-center">
                            <div className="flex-1 h-[2px] bg-gray-600"></div>
                            <h2 className="mx-2 font-semibold text-sm text-gray-600">{`Component Image ${index ? index + 1 : ''}`}</h2>
                            <div className="flex-1 h-[2px] bg-gray-600"></div>
                        </div>
                        <label className='text-sm font-medium text-gray-900'>Image Title:</label>
                        <input  type='text' className='border-2 mt-1 border-gray-300 w-[100%] text-sm rounded bg-transparent px-4 py-1 text-gray-900 
                              placeholder:text-gray-400 focus:ring-0' value={element.title || ""} onChange={(e) => onChangeHandler(index, e)} />
                        <div className="flex items-end">
                            <label className="mt-6 flex-1">
                                <input type='file' accept=".jpg, .jpeg, .png, .webp, .avif" value={element.file || ""} className='hidden' onChange={(e) => onChangeHandler(index, e)}/>
                                <div className='text-sm font-medium text-gray-900 mt-2'>Image:</div>
                                <h2 className="bg-gray-200 text-sm font-medium py-1 ml-1 px-3 rounded cursor-pointer w-fit mt-1">Choose image</h2>
                            </label>
                            {/* Remove Image Button */}
                            {
                                index ? 
                                <button type="button"  className="h-fit mr-2 w-fit text-sm font-medium text-white bg-gray-700 mx-auto py-1 px-3 rounded-md" onClick={() => removeFormFields(index)}>Remove</button> 
                                : null
                            }
                        </div>
                    </div>
                ))}
                {/* Add Image Button */}
                
                <button type='button' className='w-fit text-sm font-medium mt-12 text-gray-900 bg-gray-300 mx-auto py-1 px-3 rounded-md' onClick={() => addImageFields()}>+ Another Image</button>
                {/* ------------------------------------------------------------------------------------------------------------------------ */}
                <div className="w-full mt-2 mb-4 flex items-center">
                    <div className="flex-1 h-[2px] bg-gray-600"></div>
                    <h2 className="mx-2 font-semibold text-sm text-gray-600">Component Notes</h2>
                    <div className="flex-1 h-[2px] bg-gray-600"></div>
                </div>
                <label className='text-sm font-medium text-gray-900 mt-2'>Notes</label>
                <textarea className='w-[100%] pl-2 ml-1 h-[100px] border-gray-300 border-2 text-sm rounded bg-transparent'/>
                <div className="w-full mt-2 mb-4 flex items-center">
                    <div className="flex-1 h-[2px] bg-gray-600"></div>
                    <h2 className="mx-2 font-semibold text-sm text-gray-600">Component Code</h2>
                    <div className="flex-1 h-[2px] bg-gray-600"></div>
                </div>
                <label className='text-sm font-medium text-gray-900'>Code Title</label>
                <input type='text' className='border-2 ml-1 mt-1 border-gray-300 w-[200px] text-sm rounded bg-transparent pl-2 py-1 text-gray-900 placeholder:text-gray-400 focus:ring-0'/>
                <label className='text-sm font-medium text-gray-900 mt-2'>Code:</label>
                <textarea className='w-[100%] pl-2 ml-1 border-gray-300 border-2 text-sm rounded bg-transparent'/>
                <div className="h-[2px] w-[100%] bg-gray-300 mt-2 mb-4"></div>
                <button type='button' className='w-fit text-sm font-medium text-gray-900 bg-gray-300 py-1 px-3 rounded-md'>+ Another Component</button>
                <button type='submit' className="fixed bottom-0 right-0 m-4 py-1 px-3 font-medium text-gray-300 bg-gray-900 rounded-md">Submit</button>
            </form>
            </div>
            <div className="flex-[6] overflow-y-auto bg-gray-100 h-full">
                {imagesInputsSrc.map((element: any, index: Key | null | undefined) => (
                    <div key={index} className="w-[90%] h-[400px] border border-black relative">
                        <Image alt="gg" src={element} fill/>
                    </div>
                ))}

            </div>
        </>
    )
}

export default AddComponentForm