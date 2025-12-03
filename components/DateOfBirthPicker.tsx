'use client'

import { useState } from 'react'
import { Calendar } from 'lucide-react'

export default function DateOfBirthPicker() {
  const [isOpen, setIsOpen] = useState(false)
  const [day, setDay] = useState('')
  const [month, setMonth] = useState('')
  const [year, setYear] = useState('')

  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]

  const currentYear = new Date().getFullYear()
  const years = Array.from({ length: 120 }, (_, i) => currentYear - i)

  // Calculate days in selected month/year
  const getDaysInMonth = () => {
    if (!month || !year) return 31
    const monthIndex = months.indexOf(month)
    return new Date(parseInt(year), monthIndex + 1, 0).getDate()
  }

  const days = Array.from({ length: getDaysInMonth() }, (_, i) => i + 1)

  const formattedDate =
    day && month && year ? `${day} ${month} ${year}` : 'Select Date of Birth'

  return (
    <div className="relative">
      {/* Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center gap-3 border border-gray-300 bg-white px-4 py-3 text-left transition hover:bg-gray-50"
      >
        <Calendar className="h-5 w-5 text-gray-500" />
        <span
          className={day && month && year ? 'text-gray-900' : 'text-gray-500'}
        >
          {formattedDate}
        </span>
      </button>

      {/* Popup Calendar */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-40 bg-black/20"
            onClick={() => setIsOpen(false)}
          />

          {/* Calendar Card */}
          <div className="absolute left-0 top-full z-50 mt-2 w-80 rounded-2xl border border-gray-200 bg-white p-6 shadow-2xl">
            <h3 className="mb-5 text-center text-lg font-semibold text-gray-800">
              Select Date of Birth
            </h3>

            <div className="grid grid-cols-3 gap-3 mb-2">
              {/* Month */}
              <select
                value={month}
                onChange={(e) => {
                  setMonth(e.target.value)
                  if (day) {
                    const maxDays = new Date(
                      parseInt(year || '2000'),
                      months.indexOf(e.target.value) + 1,
                      0
                    ).getDate()
                    if (parseInt(day) > maxDays) setDay('')
                  }
                }}
                className="rounded-lg border border-gray-300 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Month</option>
                {months.map((m) => (
                  <option key={m} value={m}>
                    {m}
                  </option>
                ))}
              </select>

              {/* Day */}
              <select
                value={day}
                onChange={(e) => setDay(e.target.value)}
                className="rounded-lg border border-gray-300 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Day</option>
                {days.map((d) => (
                  <option key={d} value={d}>
                    {d}
                  </option>
                ))}
              </select>

              {/* Year */}
              <select
                value={year}
                onChange={(e) => {
                  setYear(e.target.value)
                  if (day && month) {
                    const maxDays = new Date(
                      parseInt(e.target.value),
                      months.indexOf(month) + 1,
                      0
                    ).getDate()
                    if (parseInt(day) > maxDays) setDay('')
                  }
                }}
                className="rounded-lg border border-gray-300 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Year</option>
                {years.map((y) => (
                  <option key={y} value={y}>
                    {y}
                  </option>
                ))}
              </select>
            </div>

            {/* Done Button */}
            <button onClick={() => setIsOpen(false)} className="homeButton">
              Done
            </button>
          </div>
        </>
      )}
    </div>
  )
}
