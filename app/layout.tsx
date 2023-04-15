import '@/styles/globals.css'
import Header from './components/Header/Header'
import MainSidebar from './components/Sidebar/MainSidebar'
import AdminModel from './components/Admin/AdminModel'

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='h-[100svh] flex flex-col overflow-x-hidden md:overflow-x-auto'>
          <Header/>
          <div className='flex flex-1 overflow-hidden'>
            <MainSidebar/>
            {children}
          </div>
          <AdminModel/>
      </body>
    </html>
  )
}
