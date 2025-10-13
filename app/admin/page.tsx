import DashboardHeader from '@/components/Dashboard/DashboardHeader'
import PlayersLineChart from '@/components/Dashboard/LineChart'

export default function DashboardPage() {
  return (
    <>
      <DashboardHeader />

      <div className="grid grid-cols-2 gap-4 px-6 pb-6">
        <PlayersLineChart />
        <PlayersLineChart />
      </div>
    </>
  )
}
