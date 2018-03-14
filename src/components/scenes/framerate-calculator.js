import React,{ Component } from "react";
import FormItem from '../main/form.js';
import { frameCalc } from '../logic/framerate-calc-logic.js';

class FramerateCalculator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name : "Framerate calculator",
            currentHistory : [],
            framerate : 25,
            hours : 0,
            minutes : 0,
            seconds : 0,
            frames : 0
        }

        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleSubmit(e) {
        e.preventDefault();
        let newHistory = this.state.currentHistory;
        newHistory.push({
            hours : parseInt(this.state.hours, 10),
            minutes : parseInt(this.state.minutes, 10),
            seconds : parseInt(this.state.seconds, 10),
            frames : parseInt(this.state.frames, 10)
        })

        let frameTotal = frameCalc(newHistory, this.state.framerate);

        this.setState({
            currentHistory : newHistory,
            total : frameTotal
        }, () => console.log(this.state))
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });

    }

    render() {
        const timeMap = this.state.currentHistory.map((data, i) => {
            return (
                <p key={i}>{data.hours} : {data.minutes} : {data.seconds} : {data.frames}</p>
            )
    })
        return (
            <div>
            <h1>Framerate Calculator</h1>
            <form onSubmit={this.handleSubmit}>
                    <FormItem className="form-element" type="number" name="framerate" text="Framerate: " value={this.state.framerate} onChange={this.handleChange.bind(this)} />
                        <FormItem className="form-element" type="number" name="hours" text="Hours: " value={this.state.hours} onChange={this.handleChange.bind(this)} />
                        <FormItem className="form-element" type="number" name="minutes" text="Minutes: " value={this.state.minutes} onChange={this.handleChange.bind(this)} />
                        <FormItem className="form-element" type="number" name="seconds" text="Seconds: " value={this.state.seconds} onChange={this.handleChange.bind(this)} />
                        <FormItem className="form-element" type="number" name="frames" text="Frames: " value={this.state.frames} onChange={this.handleChange.bind(this)} />
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

export default FramerateCalculator;