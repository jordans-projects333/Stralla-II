'use client'

import RisingFallingModel from '@/Utils/Components/RisingFallingModel'
import { useStore } from '@/Zustand/store'
import { useRef, useState } from 'react'
import DefaultImage from '@/Images/CategoryDefault.jpg'
import Image from 'next/image'
import optimizeImage from '@/Utils/ClientImageOptimiszation'

const AddCategoryModel = () => {
    const { addCategoryModel, categoryType } = useStore()
    const [formImage, setFormImage] = useState<any>(DefaultImage)
    const [imageInputButton, setImageInputButton] = useState('+ Add Image')
    const [imageSpace, setImageSpace] = useState('-- --')
    const [imageTooBig, setImageTooBig] = useState(true)
    let fadedBackgroundRef = useRef<HTMLDivElement>(null)
    let imageRef = useRef<any>(null)
    let inputImage = useRef<any>(null)
    let inputTitle = useRef<any>(null)
    const cancelFunction = (e: any) => {
        if(e.target !== fadedBackgroundRef.current)return
        useStore.setState(() => ({
            addCategoryModel : false,
        }))
        setTimeout(() => {
            inputImage.current = null
            setImageSpace('-- --')
            setImageInputButton('+ Add Image')
            setFormImage(DefaultImage)
        }, 250)
    }
    const cancelbutton = () => {
        useStore.setState(() => ({
            addCategoryModel : false,
        }))
        setTimeout(() => {
            inputImage.current = null
            setImageSpace('-- --')
            setImageInputButton('+ Add Image')
            setFormImage(DefaultImage)
        }, 250)
    }
    const handleSubmit = async (e: any) => {
        e.preventDefault()
        inputImage.current.append("name", inputTitle.current.value )
        inputImage.current.append("type", categoryType)
        fetch('/api/ComponentsLibrary', {
            method: 'POST',
            body: inputImage.current
        })
        useStore.setState(() => ({
            addCategoryModel : false,
        }))
        setTimeout(() => {
            inputImage.current = null
            setImageSpace('-- --')
            setImageInputButton('+ Add Image')
            setFormImage(DefaultImage)
        }, 250)
    }
    const handleRemoveImage = () =>{
        inputImage.current = null
        setImageSpace('-- --')
        setImageInputButton('+ Add Image')
        setFormImage(DefaultImage)
    }
    const onChangeHandler = async (e:any) => {
        if(e.target.files[0] === undefined)return
        imageRef.current! = e.target.files[0]
        const inputOptimizedImage:any = await optimizeImage(e.target.files[0], 1)
        setFormImage(URL.createObjectURL(inputOptimizedImage))
        if(imageInputButton === '+ Add Image')setImageInputButton('Change Image?')
        const formData = new FormData()
        formData.append("image", inputOptimizedImage)
        inputImage.current = formData
        let storage = (inputOptimizedImage.size / (1024 * 1024))
        if(storage > 4.5)setImageTooBig(true)
        if(storage >= 1){
            setImageSpace((inputOptimizedImage.size / (1024 * 1024)).toFixed(2) + 'mb')
        }else{
            setImageSpace((inputOptimizedImage.size / (1024)).toFixed(2) + 'kb')
        }
    }
    const handleOptimize = async () => {
        //not really working atm
        const inputOptimizedImage:any = await optimizeImage(imageRef.current!, 0.75)
        let storage = (inputOptimizedImage.size / (1024 * 1024))
        if(storage >= 1){
            setImageSpace((inputOptimizedImage.size / (1024 * 1024)).toFixed(2) + 'mb')
        }else{
            setImageSpace((inputOptimizedImage.size / (1024)).toFixed(2) + 'kb')
        }
    }
    return (
        <RisingFallingModel active={addCategoryModel} cancelFunction={cancelFunction} fadedBackgroundRef={fadedBackgroundRef}
                            tailwindStyles={'top-[10%] md:top-[5%] bg-white w-[80%] md:w-[30%] p-4 md:aspect-[16/9] flex flex-col rounded-md'}>
            <div className='flex'>
                <h2 className='text-3xl font-semibold mb-4'>Add Category</h2>
                <button onClick={() => cancelbutton()} className='ml-auto h-fit'><svg className='h-6' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg></button>
            </div>
            <form onSubmit={(e) => handleSubmit(e)}>
                <div className='mb-4'>
                    <label className='font-medium text-gray-900'>Name:</label>
                    <input ref={inputTitle} type='text' className=' outline-none text-sm font-medium pl-2'/>
                </div>
                <label className='mx-auto cursor-pointer'>
                    <input type='file' accept=".jpg, .jpeg, .png, .webp, .avif" className='hidden' onChange={(e) => onChangeHandler(e)}/>
                    <div className='relative w-[75%] mx-auto rounded-md aspect-square overflow-hidden'>
                        <Image alt={'Default category'} src={formImage} fill className='object-cover'/>
                        <button type='button' onClick={() => handleRemoveImage()} className={`${imageSpace === '-- --' ? 'pointer-events-none opacity-0' : 'pointer-events-auto opacity-1'} duration-200 absolute top-0 right-0 m-2 bg-gray-900 p-1 rounded-md`}><svg className='h-5 fill-white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg></button>
                    </div>
                    <div className='font-semibold text-gray-900 text-lg mt-4 flex justify-center'>{imageInputButton}</div>
                </label>
                <div className='w-full flex'>
                    <div>
                        <h2 className={`${imageTooBig ? 'text-red-800' : 'text-gray-800'}  ml-1 text-sm font-medium`}>{imageSpace}</h2>
                        <button type='button' onClick={() => handleOptimize()} disabled={!imageTooBig} className={`${imageTooBig ? 'text-white bg-gray-900' : 'text-gray-200 bg-gray-600'} rounded-md py-1 px-3`}>Optimize?</button>
                    </div>
                    <button type='submit' className='ml-auto bg-gray-900 rounded-md mt-auto px-3 h-fit py-3'><svg className='h-5 fill-white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M16.1 260.2c-22.6 12.9-20.5 47.3 3.6 57.3L160 376V479.3c0 18.1 14.6 32.7 32.7 32.7c9.7 0 18.9-4.3 25.1-11.8l62-74.3 123.9 51.6c18.9 7.9 40.8-4.5 43.9-24.7l64-416c1.9-12.1-3.4-24.3-13.5-31.2s-23.3-7.5-34-1.4l-448 256zm52.1 25.5L409.7 90.6 190.1 336l1.2 1L68.2 285.7zM403.3 425.4L236.7 355.9 450.8 116.6 403.3 425.4z"/></svg></button>
                </div>
            </form>
        </RisingFallingModel>
    )
}

export default AddCategoryModel