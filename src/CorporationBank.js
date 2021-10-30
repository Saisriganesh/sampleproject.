import React, { Component } from 'react'

export default class CorporationBank extends Component {
    render(props) {
        return (
            <div>
                <h1>CorportionBank  account for {this.props.info.lastname}</h1>
            </div>
        )
    }
}

