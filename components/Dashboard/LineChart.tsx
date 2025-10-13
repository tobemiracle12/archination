'use client'

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'

const data = [
  { month: 'Jan', players: 500 },
  { month: 'Feb', players: 1200 },
  { month: 'Mar', players: 800 },
  { month: 'Apr', players: 1600 },
  { month: 'May', players: 2000 },
  { month: 'Jun', players: 900 },
  { month: 'Jul', players: 1400 },
  { month: 'Aug', players: 1000 },
]

export default function PlayersLineChart() {
  return (
    <div className="bg-[var(--cardBackground)] p-4 rounded">
      <h3 className="text-lg text-[var(--secondaryTextColor)] font-semibold mb-4">
        Number of players by month
      </h3>
      <ResponsiveContainer width="100%" height={200}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#444" />
          <XAxis dataKey="month" stroke="#ccc" />
          <YAxis stroke="#ccc" />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="players"
            stroke="#f5ff00"
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
