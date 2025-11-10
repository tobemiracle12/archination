import DashboardHeader from '@/components/Dashboard/DashboardHeader'
import DashboardSidebar from '@/components/Dashboard/Sidebar'

export default function DashboardRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="flex ">
      <DashboardSidebar />

      <div className="flex-1 overflow-y-auto h-[100vh]">
        <DashboardHeader />
        <div className="p-4 rounded">{children} </div>
      </div>
    </div>
  )
}
