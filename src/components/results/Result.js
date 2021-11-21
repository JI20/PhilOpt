import React from 'react'
import { motion } from 'framer-motion'
import { animationFade, animationTransition } from '../animations/Animation'

export default function Result({props}) {
    const {id, name, location, description, category, search, website} = props
    
    function link(website) {
        return website !== "" ? website : "No Website"
    }
    
    return (
        <li>
            <motion.div exit="out" animate="in" initial="out" variants={animationFade} transition={animationTransition} className="ResultContainer" category={category} search={search}>
                <div id={id} className="Result">
                    <a className="Names" target="_blank" rel="noopener noreferrer" href={link(website)}>{name}</a>
                    <div className="Seperator"></div>
                    <p>{description}</p>
                    <div className="WhereFind"><p>Location: {location}</p><a target="_blank" rel="noopener noreferrer" href={link(website)}>Learn more</a></div>
                </div>
            </motion.div> 
        </li>

    )
}
