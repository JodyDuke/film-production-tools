import React, { Component } from 'react';

class DateResult extends Component {
    render() {
        return (
            <div className="date-results"> 
                <div className="result"><h2>{this.props.total}</h2></div>
            </div>
        )
    }
}

export default DateResult;