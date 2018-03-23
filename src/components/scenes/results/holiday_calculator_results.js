import React, { Component } from 'react';

class HolidayResult extends Component {
    render() {
        return (
            <div className="holiday-results">
                <div className="data">
                    {this.props.data[2]}
                </div>
                <div className="result">{this.props.result}</div>
            </div>
        )
    }
}

export default HolidayResult