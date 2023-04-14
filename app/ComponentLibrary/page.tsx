import Image from 'next/image'
import NextAuthImage from '@/Images/NextAuth.jpg'
import FirebaseAuthImage from '@/Images/FirebaseAuth.jpg'
import PassportAuthImage from '@/Images/PassportAuth.jpg'
import CustomAuthImage from '@/Images/customAuth.jpg'

const page = () => {
  return (
    <div className='flex-1 flex flex-col md:flex-row'>
      <div className='flex-1 relative h-full'>
        <Image alt={'placeholder'} fill src={CustomAuthImage} className='object-cover -z-10'/>
        <div className='bg-black/60 h-full w-full backdrop-blur-sm flex justify-center items-center'>
          <h3 className='text-white text-2xl'>Custom</h3>
        </div>
      </div>
      <div className='flex-1 relative h-full'>
        <Image alt={'placeholder'} fill src={NextAuthImage} className='object-cover -z-10'/>
        <div className='bg-black/60 h-full w-full backdrop-blur-sm flex justify-center items-center'>
          <h3 className='text-white text-2xl'>Next Auth</h3>
        </div>
      </div>
      <div className='flex-1 relative h-full'>
        <Image alt={'placeholder'} fill src={FirebaseAuthImage} className='object-cover -z-10'/>
        <div className='bg-black/60 h-full w-full backdrop-blur-sm flex justify-center items-center'>
          <h3 className='text-white text-2xl'>FireBase Auth</h3>
        </div>
      </div>
      <div className='flex-1 relative h-full'>
        <Image alt={'placeholder'} fill src={PassportAuthImage} className='object-cover -z-10'/>
        <div className='bg-black/60 h-full w-full backdrop-blur-sm flex justify-center items-center'>
          <h3 className='text-white text-2xl'>Passport JS</h3>
        </div>
      </div>
      {/* category, search bar
      Components - headers/footers/models/
      Server - nextJs/Node/Express
      react query - query boiler plate
      zustand
      Auth
      Functions - validation
      -----
      Documentation model? */}
    </div>
  )
}

export default page