import React, { Component } from 'react';

class InfoBox extends Component {
    render() {
        return (
            <p className="info-container">
                <i className="fa fa-info-circle fa-1x" />
                <span className="info-box">{this.props.text}</span>
            </p>
        )
    }
}

export default InfoBox