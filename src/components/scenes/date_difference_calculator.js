import React, { Component } from "react";
import FormItem from '../main/form.js';
import { dateDiff } from '../logic/date_difference_logic';
import DateResult from './results/date_calculator_results';

class DateDifferenceCalculator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Date difference calculator',
            start: '',
            end: '',
            total: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.clear = this.clear.bind(this)
    }

    clear() {
        this.setState({
            start : '',
            end : '',
            total : ''
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        let result = dateDiff(this.state.start, this.state.end)
        this.setState({
            total : result
        })
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
                <div className="infoBox">
                    <p>blah blah blah</p>
                </div>
                <div className="date-input">
                    <form onSubmit={this.handleSubmit}>
                        <FormItem className="form-element" type="date" name="start" text="start" value={this.state.start} onChange={this.handleChange.bind(this)} />
                        <FormItem className="form-element" type="date" name="end" text="end" value={this.state.end} onChange={this.handleChange.bind(this)} />
                        <input type="submit" value="Calculate" />
                    </form>
                </div>

                {this.state.total ? <DateResult total={this.state.total} /> : ''}
            </div>
        )
    }

}

export default DateDifferenceCalculator;