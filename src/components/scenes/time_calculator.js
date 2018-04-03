import React, { Component } from "react";
import FormItem from '../main/form.js';
import TimeAndFrameResults from './results/time_calculator_results.js';
import { timeCalc } from '../logic/time_calc_logic.js'
import { minTwoDigits } from "../helpers/two-digits.js";

class TimeCalculator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Time calculator",
            currentHistory: [],
            hours: '',
            minutes: '',
            seconds: '',
            total: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.clear = this.clear.bind(this)
        this.undo = this.undo.bind(this)
    }

    handleSubmit(e) {
        e.preventDefault();     
        let newHistory = this.state.currentHistory;

        newHistory.push({
            hours: this.state.hours ? parseInt(this.state.hours, 10) : 0,
            minutes: this.state.minutes ? parseInt(this.state.minutes, 10) : 0,
            seconds: this.state.seconds ? parseInt(this.state.seconds, 10) : 0
        })

        let timeTotal = timeCalc(newHistory);

        this.setState({
            currentHistory: newHistory,
            total: timeTotal,
            hours: '',
            minutes: '',
            seconds: ''
        })
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    clear() {
        if (this.state.currentHistory.length >= 1) {
            this.setState({ timeStamp: new Date() }, () => {
                this.props.onSubmit(this.state)

                this.setState({
                    currentHistory: [],
                    hours: '',
                    minutes: '',
                    seconds: '',
                    total: ''
                })
            })
        }
    }

    undo() {
        let history = this.state.currentHistory;
        history.pop()
        let timeTotal = timeCalc(history);
        this.setState({
            currentHistory: history,
            total: timeTotal
        })
    }

    render() {
        const timeMap = this.state.currentHistory.map((data, i) => {
            let hours = minTwoDigits(data.hours)
            let minutes = minTwoDigits(data.minutes)
            let seconds = minTwoDigits(data.seconds)
            return (
                <p key={i}>{hours} : {minutes} : {seconds}</p>
            )
        })
        return (
            <div className="calc-format">
                <div className="header">
                    <h1>Time Calculator</h1>
                    <div className="buttons">
                        <button className="undo" onClick={this.undo}>Undo</button>
                        <button className="clear" onClick={this.clear}>Clear</button>
                    </div>
                </div> 
                <div className="time-input">
                    <form onSubmit={this.handleSubmit}>
                        <FormItem className="form-element" type="number" name="hours" text="Hours" placeHolder="0" value={this.state.hours} onChange={this.handleChange.bind(this)} />
                        <FormItem className="form-element" type="number" name="minutes" text="Minutes" placeHolder="0" value={this.state.minutes} onChange={this.handleChange.bind(this)} />
                        <FormItem className="form-element" type="number" name="seconds" text="Seconds" placeHolder="0" value={this.state.seconds} onChange={this.handleChange.bind(this)} />
                        <input type="submit" value="Calculate" />
                    </form>
                </div>

                {this.state.total ? <TimeAndFrameResults times={timeMap} result={this.state.total} /> : ''}
                
            </div>
        )
    }
}

export default TimeCalculator;