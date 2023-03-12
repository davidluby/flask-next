import React from 'react'
import Card from "../card/Card";

export default function Deck({data}) {
    //const moveCards = "flex items-center justify-center card-size z-";
    const stack = document.querySelector("#expand");
    //const slide = document.querySelector("#slide");

    const expand = () => {
        stack.classList.toggle("-space-x-[22rem]")

    }
    //const slideOut = () => {
    //}
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
    <div className="">
        <div className="flex flex-row items-center justify-center -space-x-72"
            id="expand"
            onClick={expand}>
            {
                //renderCards(data)
            data.map(function(item, i){
                return <div className="transition-all duration-500"
                            key={i}>
                                <Card data={item} />
                        </div>
                })
            }
        </div>
    </div>
  )
}