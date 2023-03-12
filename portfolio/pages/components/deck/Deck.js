import React, { useState } from 'react'
import Card from "../card/Card";

export default function Deck({data}) {
    const expand = () => {
        const stack = document.querySelector("#expand");
        stack.classList.toggle("-space-x-[22rem]")

    }
    const slideOut = (index) => {
        const slide = document.querySelector("#slide"+index);
        console.log("right-["+(20-5*index).toString()+"rem")
        slide.classList.toggle("absolute")
        slide.classList.toggle("inset-y-0")
        slide.classList.toggle("right-0")
    }
    //const renderCards = (data) => {
        //const cards = [];
        //for (let i = 0; i < data.length; i++) {
            //cards.push(<Card key={i} data={data[i]} />)
        //}
        //return <div className="flex flex-row items-center justify-center -space-x-72"
        //id="expand"
        //onClick={expand}>{cards}</div>
    //}
  return (
    <div className="flex flex-col items-center w-full border-4 border-slate-400">
        <div className="relative flex flex-row items-center justify-center w-full h-full -space-x-72 border-4 border-red-500"
            id="expand">
            {
                //renderCards(data)
            data.map(function(item, i){
                return <div className="transition-all duration-500"
                            id={"slide"+i}
                            onClick={() => slideOut(i)}
                            key={i}>
                                <Card data={item} />
                        </div>
                })
            }
        </div>
        <button className="mt-5 w-max py-2 px-3 rounded-full bg-green-700 hover:bg-green-900 text-white font-bold transition all duration-500"
                onClick={expand}>
            Fan Deck
        </button>
    </div>
  )
}