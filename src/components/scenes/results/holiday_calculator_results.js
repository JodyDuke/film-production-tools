import React, { Component } from 'react';

class HolidayResult extends Component {
    render() {
        return (
            <div className="holiday-results">
                <div className="data">
                    <h2>£{this.props.data[0]}</h2>
                    <h3>Total pay</h3>
                </div>
                <div className="data">
                    <h2>{this.props.data[1]} days</h2>                    
                    <h3>Total holiday owed</h3>
                </div>
                <div className="data">
                    <h2>{this.props.data[2]} days</h2>
                    <h3>Holiday remaining</h3>
                </div>
                <div className="result">
                    <h2>£{this.props.result}</h2>
                    <h3>Total owed</h3>
                </div>
            </div>
        )
    }
}

export default HolidayResult