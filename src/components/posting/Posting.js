import React from 'react'
import { firestore } from '../../firebase'
import {collection, addDoc} from 'firebase/firestore';

export default function Posting() {
        // For sending to our Database (is disabled per default)
        const articlesRef = collection(firestore, 'projects')

        const [nam, setName] = useState('');
        const [cat, setCat] = useState('');
        const [desc, setDesc] = useState('');
        const [ids, setID] = useState('');
        const [loc, setLocation] = useState('');
        const [sea, setSearch] = useState('');
        const [web, setWebsite] = useState('');
    
        const send = async(e) => {
            e.preventDefault();
    
            await addDoc(articlesRef, {
                category: cat,
                description: desc,
                id: ids,
                location: loc,
                name: nam,
                search: sea,
                website: web,
            })
            
            setID('')
            setName('')
            setSearch('')
            setWebsite('')
            setCat('')
            setDesc('')
            setLocation('')
        }
    
    
    return (
        <div>
            <form className="Inputs" onSubmit={e => send(e)}>
                <input value={nam}  className="inputd" id="name" type="text" placeholder="name" onChange={e => setName(e.target.value)}></input>
                <input value={cat} className="inputd" id="category" type="text" placeholder="category" onChange={e => setCat(e.target.value)}></input>
                <input value={sea} className="inputd" id="search" type="text" placeholder="Search"onChange={e => setSearch(e.target.value)}></input>
                <input value={loc} className="inputd" id="location" type="text" placeholder="location" onChange={e => setLocation(e.target.value)}></input>
                <input value={web} className="inputd" id="website" type="text" placeholder="website" onChange={e => setWebsite(e.target.value)}></input>
                <input value={desc} className="inputd" id="descripition" type="text" placeholder="description" onChange={e => setDesc(e.target.value)}></input>
                <input value={ids} className="inputd" id="id" type="text" placeholder="id" onChange={e => setID(e.target.value)}></input>
                <input className="inputd" id="send" type="submit" onClick={send}></input>
            </form>
        </div>
    )
}
