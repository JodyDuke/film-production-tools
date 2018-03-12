import React,{ Component } from "react";
import { Route } from "react-router-dom";
import HolidayPayCalculator from '../scenes/holiday-calculator.js';
import DateDifferenceCalculator from '../scenes/date-difference-calculator.js';
import FramerateCalculator from '../scenes/framerate-calculator.js';
import TimeCalculator from '../scenes/time-calculator.js';
import Home from '../scenes/home.js';
import History from './history.js';


class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            history : []
        }

        this.updateHistory = this.updateHistory.bind(this)
    }

    updateHistory(props) {
        let currentHistory = this.state.history
        currentHistory.push(props)
        this.setState({history : currentHistory})
    }


    render() {
        return (
            <div className="main">
                <div>
                    <Route path="/" component={Home} />
                    <Route path="/holiday-pay-calculator" render={() => <HolidayPayCalculator onSubmit={this.updateHistory.bind(this)}/>} />
                    <Route path="/date-difference-calculator" component={DateDifferenceCalculator} />
                    <Route path="/framerate-calculator" component={FramerateCalculator} />
                    <Route path="/time-calculator" component={TimeCalculator} />
                </div>
                <History historyData={this.state.history} />
            </div>
 
        )
    }
}

export default Main;