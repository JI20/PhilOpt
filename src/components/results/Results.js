import React from 'react'
import { firestore } from '../../firebase'
import { collection, query } from '@firebase/firestore'
import Result from './Result'
import {useCollectionData} from 'react-firebase9-hooks/firestore'

export default function Results() {
    const resultsRef= collection(firestore, 'projects')
    const q = query(resultsRef);

    const [results] = useCollectionData(q, {idField: 'id'});
    
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
