import React, { Component } from 'react';

class TimeAndFrameResults extends Component {
    render() {
    return (
        <div className="time-frame-results">
            <div className="data">
                {this.props.times}
            </div>
            <div className="result">
                <h2>{this.props.result}</h2>
                <h3>Time total</h3>
            </div>
        </div>
    )
    }
}

export default TimeAndFrameResults