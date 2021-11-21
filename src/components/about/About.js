import React from 'react'
import './About.css'
import { animationFade, animationTransition } from '../animations/Animation'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function About() {
    return (
        <motion.div className="AboutContainerContainer"exit="out" animate="in" initial="out" variants={animationFade} transition={animationTransition}>
            <div className="HomeLinkContainer">
                <Link id="HomeLink" to="/">Back</Link>
            </div>
            <div className="AboutContainer">
                <ul className="About">
                    <li><h1> What is the project about?</h1></li>
                    <li><p>We provide a more efficient to make the world a better place - we optimize philantrophy (Yes, that's the reason for our name :)).</p></li>
                    <li><p>We lower the barrier for supporting charitable projects and make it more personal. We match your genuine interests, talents and skill with specific needs of certified organisations around the world.</p></li>
                    <li><p>Helping others is not an easy task, well, where shall one start? How can one discover projects she / he is passionate 
                        about and such that at the same time it makes a positive impact in the area they want to support? Our tool helps 
                        you discover highly relevant projects you feel passionate about and can support with your specific talents, skills, resources.</p></li>
                    <li><div className="Seperator"></div></li>
                    <li><h1> Who are we?</h1></li>
                    <li><p>We are a team of 4 students of computer science and mathematics from the Technical University of Munich and
                        with this project we don't only want to participate in the HackaTUM 2021, but contribute to making the world a better place.
                    </p></li>
                </ul>
            </div>
        </motion.div>
    )
}
