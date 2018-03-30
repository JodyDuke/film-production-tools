import React, { Component } from "react";
import FormItem from '../main/form.js';
import { dateDiff } from '../logic/date_difference_logic';

class DateDifferenceCalculator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Date difference calculator',
            start: '',
            end: '',
            total: ''
        }

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        return (
            <div className="calc-format">
                <div className="header">
                    <h1>Date Difference Calculator</h1>
                    <div className="buttons">
                        <button className="clear" onClick={this.clear}>Clear</button>
                    </div>
                </div>
                <div className="date-input">
                    <form onSubmit={this.handleSubmit}>
                        <FormItem className="form-element" type="date" name="start" text="start" placeHolder='0' value={this.state.start} onChange={this.handleChange.bind(this)} />
                        <FormItem className="form-element" type="date" name="end" text="end" placeHolder='0' value={this.state.end} onChange={this.handleChange.bind(this)} />
                        <input type="submit" value="submit" />
                    </form>
                </div>
            </div>
        )
    }

}

export default DateDifferenceCalculator;