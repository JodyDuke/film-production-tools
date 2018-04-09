import React,{ Component } from "react";
import FormItem from '../main/form.js';
import TimeAndFrameResults from './results/time_calculator_results.js'
import { frameCalc } from '../logic/framerate_calc_logic.js';
import { minTwoDigits } from '../helpers/two-digits.js';

class FramerateCalculator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name : "Framerate calculator",
            currentHistory : [],
            framerate : 25,
            hours : '',
            minutes : '',
            seconds : '',
            frames : '',
            total : ''
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
            hours : this.state.hours ? parseInt(this.state.hours, 10) : 0,
            minutes : this.state.minutes ? parseInt(this.state.minutes, 10) : 0,
            seconds : this.state.seconds ? parseInt(this.state.seconds, 10) : 0,
            frames : this.state.frames ? parseInt(this.state.frames, 10) : 0
        })

        let frameTotal = frameCalc(newHistory, this.state.framerate);

        this.setState({
            currentHistory : newHistory,
            total : frameTotal
        })
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    clear() {
        if(this.state.currentHistory.length > 0) {
        this.setState({ timeStamp: new Date() }, () => {
            this.props.onSubmit(this.state)
        
            this.setState({
                currentHistory : [],
                hours : '',
                minutes : '',
                seconds : '',
                frames : '',
                total : ''
            })
        })
        }
    }

    undo() {
        let history = this.state.currentHistory;
        history.pop()
        let frameTotal = frameCalc(history, this.state.framerate);
        this.setState({
            currentHistory: history,
            total: frameTotal
        })
    }

    render() {
        const timeMap = this.state.currentHistory.map((data, i) => {
            let hours = minTwoDigits(data.hours)
            let minutes = minTwoDigits(data.minutes)
            let seconds = minTwoDigits(data.seconds)
            let frames = minTwoDigits(data.frames)
            return (
                <p key={i}>{hours} : {minutes} : {seconds} : {frames}</p>
            )
    })
        return (
            <div className="calc-format">
                <div className="header">
                    <h1><FormItem className="header-form-element" type="number" name="framerate" value={this.state.framerate} onChange={this.handleChange.bind(this)} /> Framerate Calculator</h1>
                    <div className="buttons">
                        <button className="undo" onClick={this.undo}>Undo</button>
                        <button className="clear" onClick={this.clear}>Clear</button>
                    </div>
                </div> 
            <div className="framerate-input">
                <form onSubmit={this.handleSubmit}>
                    <FormItem className="form-element" type="number" name="hours" text="Hours" placeHolder='0' value={this.state.hours} onChange={this.handleChange.bind(this)} />
                    <FormItem className="form-element" type="number" name="minutes" text="Minutes" placeHolder='0' value={this.state.minutes} onChange={this.handleChange.bind(this)} />
                    <FormItem className="form-element" type="number" name="seconds" text="Seconds" placeHolder='0' value={this.state.seconds} onChange={this.handleChange.bind(this)} />
                    <FormItem className="form-element" type="number" name="frames" text="Frames" placeHolder='0' value={this.state.frames} onChange={this.handleChange.bind(this)} />
                    <input type="submit" value="Calculate" />
                </form>
            </div>

            {this.state.total ? <TimeAndFrameResults times={timeMap} result={this.state.total} /> : ''}

            </div>
        )
    }
}

export default FramerateCalculator;