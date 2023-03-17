import React, { useState } from 'react'


import Search from "./components/search/Search"
import Show from "./components/buttons/Show"


export default function decks() {

  const [cards, setCards] = useState([]);
  const [deck, setDeck] = useState({'id': 'null', 'saved': 'null', 'bias': 'null'});

  return (
    <div className="flex flex-col items-center -mt-5 px-10 border-4 border-red-300">

      <Search cards={cards} setCards={setCards} deck={deck} setDeck={setDeck} />

      <Show />
    </div>
  )
}