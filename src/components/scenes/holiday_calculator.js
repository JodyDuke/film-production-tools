import React, { Component } from "react";
import FormItem from '../main/form.js';
import { holPay } from '../logic/holiday_calc_logic.js';
import HolidayResult from './results/holiday_calculator_results.js';

class HolidayPayCalculator extends Component {
    constructor(props){
        super(props);
        this.state = {
            name : 'Holiday pay calculator',
            daysWorked : 5,
            weeksEmployed: 5,
            payRate : 500,
            totalHol : 28,
            holTaken : 2,
            rate : 10.77

        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.clear = this.clear.bind(this)
    }

    handleChange(e){
        this.setState({ [e.target.name]: e.target.value});

    }

    handleSubmit(e){
        e.preventDefault()
        let result = holPay(this.state)

        this.setState({
            moneyOwed : result.moneyOwed,
            holDaysOwed : result.holDaysOwed,
            holDaysRemaining : result.holDaysRemaining,
            totalPay: result.totalPay,
            timeStamp: new Date()
        //This function provides a callback that feeds the data up to main.js state
        }, () => this.props.onSubmit(this.state))          
    }

    clear() {
        this.setState({
            moneyOwed : undefined,
            holDaysOwed : undefined,
            holDaysRemaining : undefined,
            totalPay : undefined,
            weeksEmployed : '',
            payRate : '',
            holTaken : ''
        })
    }

    render(){

        return(
            <div className="calc-format">
                <div className="header">
                    <h1>Holiday Pay Calculator</h1>
                    <div className="buttons">
                        <button className="clear" onClick={this.clear}>Clear</button>
                    </div>                  
                </div>  
                <div className="holiday-input">
                    <form onSubmit={this.handleSubmit}>
                        <FormItem className="form-element" type="number" name="daysWorked" text="Days worked per week" faIcon="fa fa-calendar-check-o" value={this.state.daysWorked} onChange={this.handleChange.bind(this)} />
                        <FormItem className="form-element" type="number" name="weeksEmployed" text="Weeks employed" faIcon="fa fa-calendar" placeHolder="e.g. 5" value={this.state.weeksEmployed} onChange={this.handleChange.bind(this)} />
                        <FormItem className="form-element" type="number" name="payRate" text="Pay rate (£)" faIcon="fa fa-money" placeHolder="e.g. 500" value={this.state.payRate} onChange={this.handleChange.bind(this)} />
                        <FormItem className="form-element" type="number" name="totalHol" text="Total holiday" faIcon="fa fa-pie-chart" value={this.state.totalHol} onChange={this.handleChange.bind(this)} />
                        <FormItem className="form-element" type="number" name="holTaken" text="Holiday taken" faIcon="fa fa-plane" placeHolder="e.g. 1.5" value={this.state.holTaken} onChange={this.handleChange.bind(this)} />
                        <FormItem className="form-element" type="number" name="rate" text="Holiday rate" faIcon="fa fa-percent" value={this.state.rate} onChange={this.handleChange.bind(this)} />
                        <input type="submit" value="Calculate"/>
                    </form>
                </div>

                    {this.state.moneyOwed ? <HolidayResult result={this.state.moneyOwed} data={[this.state.totalPay, this.state.holDaysOwed, this.state.holDaysRemaining]} /> : ''}

            </div>
        )
    }

}

export default HolidayPayCalculator;