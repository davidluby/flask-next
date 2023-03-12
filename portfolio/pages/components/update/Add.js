import React from 'react'

export default function Add({data}) {
    const saveData = () => {
        fetch('/api/add_player', {
            method: "POST",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify(data)
        }
        )
    }
    console.log(data)
    
  return (
    <button className="bg-green-700 hover:bg-green-900 transition all duration-500 text-white font-bold py-2 px-4 rounded-full"
        onClick={saveData}>
        Add to Deck
    </button>
  )
}