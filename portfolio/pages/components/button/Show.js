import React from 'react'

export default function Show({data}) {
    const Show = () => {
        fetch('/api/show_decks', {
            method: "GET",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify(data)
        }
        ).then(
            response => response.json()
            .then(
                data => {
                    JSON.parse(data.playerData)
                }
            )
        )
    }
    
  return (
    <button className="bg-green-700 hover:bg-green-900 transition all duration-500 text-white font-bold py-2 px-4 rounded-full"
        onClick={Show}>
        Show Saved Decks
    </button>
  )
}