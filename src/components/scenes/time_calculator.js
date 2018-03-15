import React, { Component } from "react";
import FormItem from '../main/form.js';
import { timeCalc } from '../logic/time_calc_logic.js'

class TimeCalculator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Time calculator",
            currentHistory: [],
            hours: 0,
            minutes: 0,
            seconds: 0,
            total: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.clear = this.clear.bind(this)
    }

    handleSubmit(e) {
        e.preventDefault();
        let newHistory = this.state.currentHistory;
        newHistory.push({
            hours: parseInt(this.state.hours, 10),
            minutes: parseInt(this.state.minutes, 10),
            seconds: parseInt(this.state.seconds, 10),
        })

        let timeTotal = timeCalc(newHistory);

        this.setState({
            currentHistory: newHistory,
            total: timeTotal
        })
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    clear() {
        if (this.state.currentHistory.length > 1) {
            this.setState({ timeStamp: new Date() }, () => {
                this.props.onSubmit(this.state)

                this.setState({
                    currentHistory: [],
                    hours: 0,
                    minutes: 0,
                    seconds: 0,
                    frames: 0,
                    total: ''
                })
            })
        }
    }

    render() {
        const timeMap = this.state.currentHistory.map((data, i) => {
            return (
                <p key={i}>{data.hours} : {data.minutes} : {data.seconds}</p>
            )
        })
        return (
            <div>
                <h1>Time Calculator</h1>
                <button onClick={this.clear}>Clear</button>
                <form onSubmit={this.handleSubmit}>
                    <FormItem className="form-element" type="number" name="hours" text="Hours: " value={this.state.hours} onChange={this.handleChange.bind(this)} />
                    <FormItem className="form-element" type="number" name="minutes" text="Minutes: " value={this.state.minutes} onChange={this.handleChange.bind(this)} />
                    <FormItem className="form-element" type="number" name="seconds" text="Seconds: " value={this.state.seconds} onChange={this.handleChange.bind(this)} />
                    <input type="submit" value="submit" />
                </form>
                <div>
                    {timeMap}
                    {this.state.total}
                </div>
            </div>
        )
    }
}

export default TimeCalculator;