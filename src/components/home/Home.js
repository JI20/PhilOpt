import React, {useEffect} from 'react'
import { useDencrypt } from "use-dencrypt-effect"
import './Home.css'
import Logo from "../../ressources/Logo_Blau.png"
import { buttons, contributionWays} from './_config'
import $ from 'jquery'

const options = {
    chars: ["_"],
    interval: 20
};


export default function Home() {
    // Use the effect of changing text
    const { result, dencrypt } = useDencrypt(options);

    useEffect(() => {
        dencrypt("We help you to help")
    }, [])

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
                    <p id="ChangingText">{result}</p>
                </div>
            </div> 
            <div className="InfoPanel">
                <div className="LogoContainer">
                    <img id="Logo" src={Logo} width="100" height="100"/>
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
