import React from 'react'
import Result from './Result'
import {useCollectionData} from 'react-firebase9-hooks/firestore'

export default function Results({query}) {

    const [results] = useCollectionData(query, {idField: 'id'});
    
    return (
        <div className="ResultListContainer">
            <ul className="ResultList">
                {results && results.map(result => {
                    return <Result props={result}></Result>
                })}
            </ul> 
        </div>

    )
}
