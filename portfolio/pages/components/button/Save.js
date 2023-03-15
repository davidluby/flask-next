import React from 'react'

export default function Save({data}) {
    const saveData = () => {
        fetch('/api/intake_deck', {
            method: "POST",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify(data)
        }
        )
    }
    
  return (
    <button className="bg-green-700 hover:bg-green-900 transition all duration-500 text-white font-bold py-2 px-4 rounded-full"
        onClick={saveData}>
        Save Deck
    </button>
  )
}