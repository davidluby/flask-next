import { useEffect, useState } from 'react'

export default function Home() {
    const [playerData, setPlayerData] = useState("");
    const [playerData2, setPlayerData2] = useState("");
    const [name, setName] = useState()
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('/api/get_data/')
            .then(res => res.json())
            .then(data => {
                setPlayerData(JSON.parse(data.player_data));
                console.log(playerData)
                setLoading(false);
            })
    }, [])


    useEffect(() => {
        fetch('/api/get_data2/')
            .then(res => res.json())
            .then(data => {
                setPlayerData2(JSON.parse(data.player_data));
                console.log(playerData2)
                setLoading(false);
            })
    }, [])

    useEffect(() => {
        fetch('/api/hello/')
            .then(res => res.json())
            .then(data => {
                setName(data.name);
                console.log(name)
                setLoading(false);
            })
    }, [])

    return (
        <div>
            <p> {!loading ? playerData.pic : "Loading.."}</p>
            <p> {!loading ? playerData2.name : "Loading.."}</p>
            <p> {!loading ? name : "Loading.."}</p>
        </div>
    )
}