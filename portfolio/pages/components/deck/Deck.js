import React, { useState } from 'react'
import Card from "../card/Card";

export default function Deck({data}) {
    const expand = () => {
        const stack = document.querySelector("#expand");
        stack.classList.toggle("-space-x-[22rem]")

    }
  return (
    <div className="flex flex-col items-center justify-evenly h-full border-4 border-slate-400">
        <div className="relative flex flex-row -space-x-72 border-4 border-red-500"
            id="expand">
            {
            data.map(function(item, i){
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
    </div>
  )
}