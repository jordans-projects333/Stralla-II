import Image from 'next/image'
import NextAuthImage from '@/Images/NextAuth.jpg'
import FirebaseAuthImage from '@/Images/FirebaseAuth.jpg'
import PassportAuthImage from '@/Images/PassportAuth.jpg'
import CustomAuthImage from '@/Images/customAuth.jpg'

const page = () => {
  return (
    <main className='flex-1 flex flex-col pt-12 pb-4 gap-2 pl-2 md:flex-row overflow-y-auto'>

      <div className='h-full flex justify-center items-center'>
        <div className='w-[100%] aspect-[2/1] flex relative overflow-hidden'>
          <Image alt={'placeholder'} fill src={CustomAuthImage} className='object-cover -z-10'/>
          <div className='bg-black/60 h-full w-full backdrop-blur-[2px] flex justify-center items-center'>
            <h3 className='text-white text-2xl'>Custom</h3>
          </div>
        </div>
      </div>
      <div className='h-full flex justify-center items-center'>
        <div className='w-[100%] aspect-[2/1] flex relative overflow-hidden'>
          <Image alt={'placeholder'} fill src={FirebaseAuthImage} className='object-cover -z-10'/>
          <div className='bg-black/60 h-full w-full backdrop-blur-[2px] flex justify-center items-center'>
            <h3 className='text-white text-2xl'>Firebase Auth</h3>
          </div>
        </div>
      </div>
      <div className='h-full flex justify-center items-center'>
        <div className='w-[100%] aspect-[2/1] flex relative overflow-hidden'>
          <Image alt={'placeholder'} fill src={PassportAuthImage} className='object-cover -z-10'/>
          <div className='bg-black/60 h-full w-full backdrop-blur-[2px] flex justify-center items-center'>
            <h3 className='text-white text-2xl'>Passport JS</h3>
          </div>
        </div>
      </div>
      <div className='h-full flex justify-center items-center'>
        <div className='w-[100%] aspect-[2/1] flex relative overflow-hidden'>
          <Image alt={'placeholder'} fill src={NextAuthImage} className='object-cover -z-10'/>
          <div className='bg-black/60 h-full w-full backdrop-blur-[2px] flex justify-center items-center'>
            <h3 className='text-white text-2xl'>Next Auth</h3>
          </div>
        </div>
      </div>
      <div className='h-full flex justify-center items-center'>
        <div className='w-[100%] aspect-[2/1] flex relative overflow-hidden'>
          <Image alt={'placeholder'} fill src={NextAuthImage} className='object-cover -z-10'/>
          <div className='bg-black/60 h-full w-full backdrop-blur-[2px] flex justify-center items-center'>
            <h3 className='text-white text-2xl'>Next Auth</h3>
          </div>
        </div>
      </div>
      <div className='h-full flex justify-center items-center'>
        <div className='w-[100%] aspect-[2/1] flex relative overflow-hidden'>
          <Image alt={'placeholder'} fill src={NextAuthImage} className='object-cover -z-10'/>
          <div className='bg-black/60 h-full w-full backdrop-blur-[2px] flex justify-center items-center'>
            <h3 className='text-white text-2xl'>Next Auth</h3>
          </div>
        </div>
      </div>
      <div className='h-full flex justify-center items-center'>
        <div className='w-[100%] aspect-[2/1] flex relative overflow-hidden'>
          <Image alt={'placeholder'} fill src={NextAuthImage} className='object-cover -z-10'/>
          <div className='bg-black/60 h-full w-full backdrop-blur-[2px] flex justify-center items-center'>
            <h3 className='text-white text-2xl'>Next Auth</h3>
          </div>
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
        <div className='bg-black h-12 w-12 rounded-full fixed flex items-center justify-center bottom-0 right-0 m-4'>
            <svg className='h-5 fill-white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/></svg>
        </div>
    </main>
  )
}

export default page