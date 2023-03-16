import React, { useState } from 'react'
import Search from "./components/search/Search"
import Show from "./components/button/Show"

export default function decks() {

  const [cards, setCards] = useState([]);

  return (
    <div className="flex flex-col -mt-5 px-10 border-4">
      <Search cards={cards} setCards={setCards}/>
      <Show />
    </div>
  )
}