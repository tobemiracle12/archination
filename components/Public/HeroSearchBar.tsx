'use client'

import { useState } from 'react'

export default function HeroSearchBar() {
  const [type, setType] = useState('All')

  return (
    <div className="w-full max-w-5xl rounded-md shadow-lg px-4 py-3">
      <div className="flex justify-center gap-2 mb-3">
        {['All', 'Rent', 'Sale'].map((label) => (
          <button
            key={label}
            onClick={() => setType(label)}
            className={`px-4 py-2 cursor-pointer rounded-md font-medium text-sm ${
              type === label
                ? 'bg-[var(--customTextColor)] text-white'
                : 'bg-gray-100 text-gray-800'
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      <form className="grid grid-cols-2 text-[var(--primaryTextColor)] md:grid-cols-4 gap-2 p-5 rounded-[5px] bg-white">
        <select className="selectList">
          <option value="">Select Country</option>
          <option className="selectOption" value="new-york">
            New York
          </option>
          <option value="miami">Miami</option>
          <option value="texas">Texas</option>
        </select>
        <select className="selectList">
          <option value="">Select State</option>
          <option className="selectOption" value="new-york">
            New York
          </option>
          <option value="miami">Miami</option>
          <option value="texas">Texas</option>
        </select>
        <select className="selectList">
          <option value="">Select Area</option>
          <option className="selectOption" value="new-york">
            New York
          </option>
          <option value="miami">Miami</option>
          <option value="texas">Texas</option>
        </select>

        <button
          type="submit"
          className="bg-[var(--customTextColor)] cursor-pointer text-white rounded px-4 py-2 hover:bg-[var(--customTextDarkColor)]"
        >
          Search
        </button>
      </form>
    </div>
  )
}
