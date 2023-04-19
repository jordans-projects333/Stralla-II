import AddCategoryModel from "./pageComponents/AddCategoryModel"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
        {children}
        <AddCategoryModel/>
    </>
  )
}