import styles from '../styles/Home.module.css'
import { useEffect, useState } from 'react'

export default function Home() {
    const [message, setMessage] = useState("");
    const [name, setName] = useState("")
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('/api/flask/')
            .then(res => res.json())
            .then(data => {
                setMessage(data.message);
                console.log(data)
                setLoading(false);
            })
    }, [])

    useEffect(() => {
        fetch('/api/hello/')
            .then(res => res.json())
            .then(data => {
                setName(data.name);
                console.log(data)
                setLoading(false);
            })
    }, [])

    return (
        <div className={styles.container}>
            <p> {!loading ? message : "Loading.."}</p>
            <p> {!loading ? name : "Loading.."}</p>
        </div>
    )
}