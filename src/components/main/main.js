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
            history : [],
            sideBar : false
        }

        this.updateHistory = this.updateHistory.bind(this)
        this.sideBarToggle = this.sideBarToggle.bind(this)
        this.clearHistory = this.clearHistory.bind(this)
    }

    updateHistory(props) {
        let currentHistory = this.state.history
        currentHistory.unshift(props)
        this.setState({history : currentHistory})
    }

    clearHistory(props) {
        this.setState({history : []});
    }

    sideBarToggle(e) {
        this.setState({sideBar : !this.state.sideBar})
    }


    render() {
        const sideBarClass = this.state.sideBar ? 'sidebar open' : 'sidebar';
        const sideBarToggleText = this.state.sideBar ? 'Hide >' : '< History';
        const mainClass = this.state.sideBar ? 'main' : 'main-full';
        return (
            <div className={mainClass}>
                <div>
                    <Route path="/" component={Home} />
                    <Route path="/holiday-pay-calculator" render={() => <HolidayPayCalculator onSubmit={this.updateHistory}/>} />
                    <Route path="/date-difference-calculator" component={DateDifferenceCalculator} />
                    <Route path="/framerate-calculator" render={() => <FramerateCalculator onSubmit={this.updateHistory} />} />
                    <Route path="/time-calculator" component={TimeCalculator} />
                </div>
                <div className={sideBarClass}>
                    <div className="sidebar-button-container">
                        <button className="sidebar-button" onClick={this.sideBarToggle}>{sideBarToggleText}</button>
                    </div>
                    <History historyData={this.state.history} isOpen={this.state.sideBar} historyWipe={this.clearHistory} />
                </div>
            </div>
 
        )
    }
}

export default Main;