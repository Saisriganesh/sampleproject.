import React from 'react'
import AndhraBank from './AndhraBank'
import CorporationBank from './CorporationBank'

export default function UnionBank() {
    let data={
        firstname:'ganesh',
        lastname:'gani'
    }
    return (
        <div>
            <CorporationBank info={data}/>
            <AndhraBank info={data}/>
        </div>
    )
}
