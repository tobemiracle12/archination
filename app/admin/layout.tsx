import AdminSidebar from '@/components/Admin/AdminSidebar'

export default function AdminRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="flex bg-[#1a1a1c] min-h-screen">
      <AdminSidebar />

      <div className="flex-1 overflow-y-auto">{children}</div>
    </div>
  )
}
