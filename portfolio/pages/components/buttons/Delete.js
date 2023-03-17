import React from 'react'

export default function Delete({ deck }) {
  return (
    <div>
        <button className="w-max py-2 px-3 rounded-full bg-green-700 hover:bg-green-900 text-white font-bold transition all duration-500">
            Delete Deck
        </button>
    </div>
  )
}