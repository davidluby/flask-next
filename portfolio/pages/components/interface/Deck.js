import React from 'react'
import Card from "../card/Card"
import ExpandCards from "../buttons/ExpandCards"

const zoomCard = (idx) => {
    const zoom = document.querySelector("#zoomCard-"+idx);
    if (zoom != null) {
        zoom.classList.toggle("z-50");
        zoom.classList.toggle("scale-50");
        zoom.classList.toggle("scale-75");
    };
};

export default function Deck({ cards }) {
  return (
    <div className="flex flex-col">
        <div className="flex flex-row justify-center -space-x-72 border-4 border-red-500"
            id="expand">
                {cards.map(function(item, idx) {
                    return <div className="scale-50 transition-all ease-in duration-500"
                                id={"zoomCard-"+idx}
                                key={idx}
                                onClick={() => zoomCard(idx)}>
                                <Card data={item} />
                            </div>
                        })
                }
        </div>
        <ExpandCards />
    </div>
  )
}