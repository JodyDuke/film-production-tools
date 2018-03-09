import React,{ Component } from "react";
import HolidayPayCalculator from '../scenes/holiday-calculator.js';
import DateDifferenceCalculator from '../scenes/date-difference-calculator.js';
import FramerateCalculator from '../scenes/framerate-calculator.js';
import TimeCalculator from '../scenes/time-calculator.js';
import Home from '../scenes/home.js';
import { Route } from "react-router-dom";

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            history: []
        }
    }

    updateHistory(props) {
        let currentHistory = this.state.history
        currentHistory.push(props)
        this.setState({ history: currentHistory })
        console.log(this.state)
    }

    render() {
        return (
                <div className="main">
                    <Route path="/" component={Home} />
                    <Route path="/holiday-pay-calculator" render={() => <HolidayPayCalculator history={this.updateHistory.bind(this)}/>} />
                    <Route path="/date-difference-calculator" component={DateDifferenceCalculator} />
                    <Route path="/framerate-calculator" component={FramerateCalculator} />
                    <Route path="/time-calculator" component={TimeCalculator} />
                </div>
                
        )
    }
}

export default Main;