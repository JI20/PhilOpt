import React from 'react'
import './Home.css'
import Logo from "../../ressources/Logo_Blau.png"
import { buttons, contributionWays} from './_config'
import $ from 'jquery'

export default function Home() {

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
                <div className="Slogan">
                    
                </div>
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
