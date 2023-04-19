'use client'

import { useStore } from "@/Zustand/store"

type Props = {
    categoryType: string
}

const AddCategoryButton = ({categoryType}:Props) => {
    const activeModel = () => {
        useStore.setState(() => ({addCategoryModel : true, categoryType : categoryType}))
    }
    return (
        <div className='bg-black h-12 w-12 rounded-full fixed flex items-center justify-center bottom-0 right-0 m-4'>
            <button onClick={() => activeModel()}><svg className='h-5 fill-white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/></svg></button>
        </div>
    )
}

export default AddCategoryButton