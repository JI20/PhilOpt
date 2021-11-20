import React, {useState} from 'react'
import './Home.css'
import Logo from "../../ressources/Logo_Blau.png"
import { buttons, contributionWays} from './_config'
import $ from 'jquery'
import Results from '../results/Results'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { animationFade, animationTransition } from '../animations/Animation'
import { firestore } from '../../firebase'
import { collection, query, where } from '@firebase/firestore'
//import { useCollectionData } from 'react-firebase9-hooks/firestore'
var enabled = "all"

export default function Home() {
    
    // Changing topics
    const resultsRef= collection(firestore, 'projects')
    const [q, setQuery] = useState(query(resultsRef))
    
    function handleTopicChange(id, text, type) {
        console.log("ID "+id)
        console.log("EN: "+ enabled)
        if(enabled === id) {
           // Self clicked enabled button
            enabled = "all"
           $('#'+id+"Button").toggleClass("TopicButtonsEnabled")
           setQuery(query(resultsRef))
           return
        }
        
        if(enabled === "all") {
            // Clicked button when no other button is clicked
            enabled = id
            console.log("Changed to: " + enabled)
            $('#'+id+"Button").toggleClass("TopicButtonsEnabled")
            setQuery(query(resultsRef, where(type, "==", text)))
            return
        }
        else {
            // Switch the color of the one before to be grey
            $('#'+enabled+"Button").toggleClass("TopicButtonsEnabled")
            // Switch the color of the new one to be on
            $('#'+id+"Button").toggleClass("TopicButtonsEnabled")
            enabled = id
            // set the specific query
            setQuery(query(resultsRef, where(type, "==", text)))
        }
    }
    
    const topics = buttons.map(name => {
        return <li><input id={name.id+"Button"} className="TopicButtonsDisabled" type="button" value={name.text} onClick={e => handleTopicChange(name.id, name.text, "category")}/></li>
    })

    const contribution = contributionWays.map(name => {
        return <li><input id={name.id+"Button"} className="TopicButtonsDisabled" type="button" value={name.text} onClick={ e => handleTopicChange(name.id, name.text, "search")} /></li>
    })

    return (
        <motion.div exit="out" animate="in" initial="out" variants={animationFade} transition={animationTransition}>
            <div className= "HomeContainer">
                <div className="Results">
                    <Results query={q}></Results>
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
                    <div id="AboutLinkContainer">
                        <Link id="AboutLink" to="/about">About us</Link>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
