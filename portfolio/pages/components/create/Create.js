import React from 'react'

export default function Create() {
    const createDeck = () => {
        fetch('/api/create_deck', {
            method: "POST",
            headers: {
                "Content-Type":"application/json"
            }
        }
        )
    }
    
  return (
    <button className="mt-10 bg-green-700 hover:bg-green-900 transition all duration-500 text-white font-bold py-2 px-4 rounded-full"
        onClick={createDeck}>
        Start a Deck
    </button>
  )
}