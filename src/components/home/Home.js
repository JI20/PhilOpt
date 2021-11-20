import React, {useState} from 'react'
import './Home.css'
import Logo from "../../ressources/Logo_Blau.png"
import { buttons, contributionWays} from './_config'
import $ from 'jquery'
import { firestore } from '../../firebase'

import {collection, addDoc} from 'firebase/firestore';
//import { useCollectionData } from 'react-firebase9-hooks/firestore'

export default function Home() {
    
    // Temporary for sending!
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
    
    
    
    // Changing topics

    function handleTopicChange(props) {
        const topic = props
        
        console.log(topic+"Button")
        $('#'+topic+"Button").toggleClass("TopicButtonsEnabled")


        
        // Coloring the Buttons
        
        // Changing the actual topcis

    }
    
    const topics = buttons.map(name => {
        return <li><input id={name.id+"Button"} className="TopicButtonsDisabled" type="button" value={name.text} onClick={e => handleTopicChange(name.id)}/></li>
    })

    const contribution = contributionWays.map(name => {
        return <li><input id={name.id+"Button"} className="TopicButtonsDisabled" type="button" value={name.text} onClick={ e => handleTopicChange(name.id)} /></li>
    })

    return (
        <>
        <div className= "HomeContainer">
            <div className="WorldMap">
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
            <div className="InfoPanel">
                <div className="LogoContainer">
                    <img alt="Logo"id="Logo" src={Logo} width="100" height="100"/>
                    <p id="LogoName">PhilOpt</p>
                </div>
                <div className="InfoContent">
                    <div id="Seperator1" className="Seperator"></div>
                    <h1 className="Question">Where do you want to help?</h1>
                    <div className="Buttons">
                        <ul>
                            {topics}
                        </ul>
                    </div>
                    <div className="Seperator"></div>
                    <h1 className="Question">Already know how to help?</h1>
                    <div className="Buttons">
                        <ul>
                            {contribution}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
