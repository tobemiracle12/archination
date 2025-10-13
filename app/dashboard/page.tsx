import PlayersLineChart from '@/components/Dashboard/LineChart'

export default function DashboardPage() {
  return (
    <>
      <div className="mb-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-semibold">Dashboard</h1>
          <div className="flex gap-2">
            {['Today', 'Last week', 'Last month'].map((period) => (
              <button
                key={period}
                className="px-4 py-1 bg-[var(--cardBackground)] rounded"
              >
                {period}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-4 gap-4 mt-6">
          <StatCard title="Number of cases" value="16" change="+3.4%" />
          <StatCard
            title="Number of works to review"
            value="2"
            change="-1.2%"
          />
          <StatCard title="Monthly income" value="$3 538" change="+10.5%" />
          <StatCard title="Number of players" value="1 364" change="-2.1%" />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 pb-4">
        <PlayersLineChart />
        <PlayersLineChart />
      </div>
    </>
  )
}
const StatCard = ({
  title,
  value,
  change,
}: {
  title: string
  value: string
  change: string
}) => (
  <div className="bg-[var(--cardBackground)] text-[var(--primaryTextColor)] p-4 rounded">
    <p className="text-sm">{title}</p>
    <h2 className="text-xl font-bold">{value}</h2>
    <p
      className={`text-sm ${
        change.startsWith('+') ? 'text-green-400' : 'text-red-400'
      }`}
    >
      {change}
    </p>
  </div>
)
