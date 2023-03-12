import { useState } from 'react'
import Card from "../card/Card";

export default function Search() {
    const [playerName, setPlayerName] = useState("");
    const [playerData, setPlayerData] = useState("");
    const [loading, setLoading] = useState(true);
    const [cards, setCards] = useState([]);

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

    return (
        <div className="flex flex-row justify-evenly items-center">
            <div className="flex flex-col items-center">
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                    </div>
                    <input className="py-2 px-10 border-2 border-gray-300 rounded-full transition all duration-500 hover:border-yellow-500 focus:outline-none focus:border-yellow-500"
                        placeholder="Search"
                        onChange={e => setPlayerName(e.target.value)}
                        value={playerName}
                        onKeyPress={getData}>
                    </input>
                </div>
            
                <div className="flex flex-col items-center">
                    <div>
                        {!loading ? <Card data={playerData}/> : "Enter an active NBA player's name above"}
                    </div>
                    <button className="bg-green-700 hover:bg-green-900 transition all duration-500 text-white font-bold py-2 px-4 rounded-full"
                        onClick={playerData}>
                        Add to Deck
                    </button>
                </div>
            </div>
        </div>    
    )
}