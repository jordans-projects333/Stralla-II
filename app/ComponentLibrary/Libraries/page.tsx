import { prisma } from '@/lib/prisma'
import ChooseCategory from '../pageComponents/ChooseCategory'
import AddCategoryButton from '../pageComponents/AddCategoryButton'

const page = async () => {
  const getAuthCategories = async () => {
    try { 
      const response = await prisma.componentCategory.findFirst({where: {name: 'Libraries'}, select: {subCategories: true}})
      return response!.subCategories
    } catch (error) {
      return []
    }
  }
  let data:any = await getAuthCategories()
  return (
    <main className='flex-1 grid grid-cols-1 md:grid-cols-6 flex-col pt-2 md:pb-2 md:pr-2 pb-4 gap-2 pl-2 overflow-y-auto'>
      {data.map((item: any) => (
           <ChooseCategory key={item.name} title={item.name} imageSrc={item.imageUrl} imageAlt={`${item.name} example link`}/>
      ))}
      <AddCategoryButton categoryType={'Libraries'}/>
    </main>
  )
}

export default page as any