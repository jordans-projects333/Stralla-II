import customLoader from "@/Utils/CustomImageLoader"
import Image, { StaticImageData } from "next/image"
import Link from "next/link"

type Props = {
    imageSrc: StaticImageData,
    imageAlt: string,
    title: string
}

const ChooseCategory = ({imageSrc, imageAlt, title}: Props) => {
  return (
    <Link href={`/ComponentLibrary/Category/${title}`}><div className='h-full flex justify-center items-center'>
        <div className='w-[100%] aspect-[2/1] md:aspect-auto md:h-full flex relative overflow-hidden'>
          <Image alt={imageAlt} fill src={imageSrc} className='object-cover -z-10' sizes="20vw"/>
          <div className='bg-black/60 h-full w-full backdrop-blur-[2px] flex justify-center items-center'>
            <h3 className='text-white text-2xl'>{title}</h3>
          </div>
        </div>
      </div></Link>
  )
}

export default ChooseCategory