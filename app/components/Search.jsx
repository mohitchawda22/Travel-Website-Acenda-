import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Search = () => {
  return (
    <div>
      <main>
        <div className="relative">
          <div className="relative container mx-auto text-center text-black bg-opacity-75 p-10 shadow-lg">
            <div className="grid grid-cols-4 gap-4">
              <div className="flex flex-col items-center">
                <span className="font-semibold">Location</span>
                <input
                  type="text"
                  placeholder="Add destination"
                  className="mt-2 p-2 border rounded"
                />
              </div>
              <div className="flex flex-col items-center">
                <span className="font-semibold">Check in</span>
                <input
                  type="date"
                  placeholder="Add dates"
                  className="mt-2 p-2 border rounded"
                />
              </div>
              <div className="flex flex-col items-center">
                <span className="font-semibold">Check out</span>
                <input
                  type="date"
                  placeholder="Add dates"
                  className="mt-2 p-2 border rounded"
                />
              </div>
              <div className="flex flex-col items-center">
                <span className="font-semibold">Guests</span>
                <input
                  type="number"
                  placeholder="Add guests"
                  className="mt-2 p-2 border rounded"
                />
              </div>
            </div>
            <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded">
              Search
            </button>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Search
