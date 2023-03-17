import React, { useState } from 'react'
import Card from "../card/Card"
import Interface from "../interface/Interface"

export default function Search({ cards, setCards, deck, setDeck }) {
    const [name, setName] = useState("");
    const [playerData, setPlayerData] = useState("");
    const [searching, setSearching] = useState(true);

    const [hidden, setHidden] = useState(true);


    const handleSubmit = event => {
        setName(event.target.value);
    };
    
    const searchName = (event) => {
        if (event.key ===  "Enter") {
            fetch('/api/get_data/', {
            method: "POST",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify(name)
        }).then(
            response => response.json()
        .then(
            data => {
                setPlayerData(JSON.parse(data.player_data));
                setName("");
                setSearching(false);
                }
            )
        )
        }
    }

    const add = () => {
        if (cards.length < 5) {
            setCards([...cards, playerData]);
            setHidden(false);
        } else{
            console.log("Too many cards");
        }
    };
    const remove = () => {
        if (cards.length > 0) {
            cards.pop();
            setCards([...cards])
        } else{
            console.log("No cards to remove");
        }
    };

    return (
        <div className="flex flex-col items-center border-4 border-green-400">


            <div className="flex flex-col items-center w-1/2 relative border-4 border-yellow-400">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                </div>
                <input className="w-full py-2 px-10 border-2 border-gray-300 rounded-full transition all duration-500 hover:border-yellow-500 focus:outline-none focus:border-yellow-500"
                    placeholder="Search"
                    onChange={handleSubmit}
                    value={name}
                    onKeyPress={searchName}>
                </input>
            </div>


            <div className="flex flex-col justify-center brk:flex-row brk:justify-evenly w-full border-4 border-red-400">
                <div className="flex flex-col items-center border-4 border-orange-300">
                    <div className="flex items-center justify-center scale-75 border-4 border-green-700">
                        {!searching ? <div style={{animation : "inAnimation 500ms ease-in"}} >
                                        <Card data={playerData} />
                                    </div>
                                     : <p className="text-center border-4">Enter an active NBA player's name above</p>}
                    </div>
                    <div className="flex flex-row space-x-4 border-4 border-yellow-400">
                        {!searching ? <button className="w-max py-2 px-3 rounded-full bg-green-700 hover:bg-green-900 text-white font-bold transition all duration-500"
                                            onClick={add}>
                                        Add to Deck
                                    </button> : null}
                        {!searching ? <button className="w-max py-2 px-3 rounded-full bg-green-700 hover:bg-green-900 text-white font-bold transition all duration-500"
                                            onClick={remove}>
                                        Remove Card
                                    </button> : null}
                    </div>
                </div>
                { !hidden ? <Interface cards={cards} deck={deck} setDeck={setDeck} /> : null }
            </div>
        </div>    
    )
}