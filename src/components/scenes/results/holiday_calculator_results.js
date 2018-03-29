import React, { Component } from 'react';

class HolidayResult extends Component {
    render() {
        return (
            <div className="holiday-results">
                <div className="data">
                    <h3>Total pay: £{this.props.data[0]}</h3>
                    <h3>Total holiday owed: {this.props.data[1]} days</h3>
                    <h3>Holiday remaining: {this.props.data[2]} days</h3>
                </div>
                <div className="result">
                    <h3>Total owed: £{this.props.result}</h3>
                </div>
            </div>
        )
    }
}

export default HolidayResult