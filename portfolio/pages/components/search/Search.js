import { useState } from 'react'
import Card from "../card/Card";
import Deck from "../deck/Deck"

export default function Search() {
    const [playerName, setPlayerName] = useState("");
    const [playerData, setPlayerData] = useState("");
    const [loading, setLoading] = useState(true);
    const [cards, setCards] = useState([]);
    const [empty, setEmpty] = useState(true);

    const getData = (event) => {
        if (event.key ===  "Enter") {
            fetch('/api/get_data/', {
            method: "POST",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify(playerName)
        }).then(
            response => response.json()
        .then(
            data => {
                setPlayerData(JSON.parse(data.player_data));
                setPlayerName("");
                setLoading(false);
                }
            )
        )
        }
    }

    const handleSubmit = event => {
        setPlayerName(event.target.value);
    };

    const add = () => {
        if (cards.length < 5) {
            setCards([...cards, playerData]);
            setEmpty(false);
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
    const expand = () => {
        const stack = document.querySelector("#expand");
        stack.classList.toggle("-space-x-[22rem]")

    };

    return (
        <div className="flex flex-col items-center border-4 border-green-400">
            <div className="flex flex-col items-center w-1/2 relative mb-5 border-4 border-yellow-400">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                </div>
                <input className="w-full py-2 px-10 border-2 border-gray-300 rounded-full transition all duration-500 hover:border-yellow-500 focus:outline-none focus:border-yellow-500"
                    placeholder="Search"
                    onChange={handleSubmit}
                    value={playerName}
                    onKeyPress={getData}>
                </input>
            </div>
            <div className="flex flex-col brk:flex-row items-center justify-evenly w-full border-4 border-green-400">
                <div className="flex flex-col items-center justify-evenly card-window border-4 border-orange-300">
                    <div className="border-4 border-green-700">
                        {!loading ? <Card data={playerData} /> : <p className="text-center border-4">Enter an active NBA player's name above</p>}
                    </div>
                    <div className="flex flex-row space-x-4 border-4 border-yellow-400">
                        {!loading ? <button className="w-max py-2 px-3 rounded-full bg-green-700 hover:bg-green-900 text-white font-bold transition all duration-500"
                                            onClick={add}>
                                        Add to Deck
                                    </button> : null}
                        {!loading ? <button className="w-max py-2 px-3 rounded-full bg-green-700 hover:bg-green-900 text-white font-bold transition all duration-500"
                                            onClick={remove}>
                                        Remove Card
                                    </button> : null}
                    </div>
                </div>
                { !empty ?  <div className="flex flex-col items-center justify-evenly card-window h-full border-4 border-slate-400">
                                <div className="relative flex flex-row -space-x-72 border-4 border-red-500"
                                    id="expand">
                                    {
                                        cards.map(function(item, i){
                                            return <div className="hover:z-50 transition-all duration-500"
                                                        key={i}>
                                                        <Card data={item} />
                                                    </div>
                                                    })
                                    }
                                </div>
                                <div className="flex flex-row justify-evenly space-x-4 border-4 border-yellow-300">
                                    <button className="w-max py-2 px-3 rounded-full bg-green-700 hover:bg-green-900 text-white font-bold transition all duration-500"
                                        onClick={expand}>
                                        Fan Deck
                                    </button>
                                    <button className="w-max py-2 px-3 rounded-full bg-green-700 hover:bg-green-900 text-white font-bold transition all duration-500"
                                        onClick={expand}>
                                        Save Deck
                                    </button>
                                    <button className="w-max py-2 px-3 rounded-full bg-green-700 hover:bg-green-900 text-white font-bold transition all duration-500"
                                        onClick={expand}>
                                        Delete Deck
                                    </button>
                                </div>
                                </div> : null}
                            </div>
                        </div>    
    )
}