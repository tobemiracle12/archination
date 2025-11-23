import DashboardHeader from '@/components/Dashboard/DashboardHeader'
import UserResponse from '@/components/Dashboard/Messages/UserResponse'
import MobileFooter from '@/components/Dashboard/MobileFooter'
import DashboardSidebar from '@/components/Dashboard/Sidebar'

export default function DashboardRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="flex ">
      <DashboardSidebar />

      <UserResponse />

      <div className="flex-1">
        <DashboardHeader />
        <div className="md:p-4 rounded mb-[50px]">{children} </div>
      </div>
      <MobileFooter />
    </div>
  )
}
