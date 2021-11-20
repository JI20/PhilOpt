import React from 'react'

export default function Result({props}) {
    const {id, name, location, description, category, search, website} = props
    
    function link(website) {
        return website !== "" ? website : "No Website"
    }
    
    return (
        <li>
            <div className="ResultContainer">
                <div id={id} className="Result">
                    <a className="Names" target="_blank" href={link(website)}>{name}</a>
                    <div className="Seperator"></div>
                    <p>{description}</p>
                    <p>{location}</p>
                </div>
            </div> 
        </li>

    )
}
