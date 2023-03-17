import React, { useState, useEffect } from 'react'

import Card from "../card/Card"

export default function Show() {
    const [decks, setDecks] = useState("");
    const [empty, setEmpty] = useState(true);

    const Show = () => {
        fetch('/api/show_decks', {
            method: "GET"
        }
        ).then(
            response => response.json()
            .then(
                data => {
                    setDecks(JSON.parse(data))
                    setEmpty(false)
                    console.log(decks)
                }
            )
        )
    }

  return (
    <div>
        <button className="bg-green-700 hover:bg-green-900 transition all duration-500 text-white font-bold py-2 px-4 rounded-full"
                onClick={Show}>
            Show Saved Decks
        </button>
        { !empty ? decks.map(function(deck, idx) {
                    const cards = deck.slice(1);
                    const data = deck[0];

                    return <div key={idx}>
                                Deck {data.id} -- Bias: {data.bias} -- Time saved: {data.saved}
                                <div className="flex flex-row justify-center">
                                    {cards.map(function(card, jdx) {
                                        return <div key={jdx}>
                                                    <Card data={card} />
                                                </div>
                                        })
                                    }
                                </div>
                            </div>
                }) : null
        }
    </div>
  )
}