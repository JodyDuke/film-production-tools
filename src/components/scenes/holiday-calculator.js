import React, { Component } from "react";
import FormItem from '../main/form.js';
import { holPay } from '../logic/holiday-calc-logic.js'

class HolidayPayCalculator extends Component {
    constructor(props){
        super(props);
        this.state = {
            name : 'Holiday pay calculator',
            daysWorked : 5,
            weeksEmployed: 10,
            payRate : 500,
            totalHol : 28,
            holTaken : 3,
            rate : 10.77

        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
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


    render(){
        return(
            <div>
                <h1>Holiday Pay Calculator</h1>
                <form onSubmit={this.handleSubmit}>
                    <FormItem className="form-element" type="number" name="daysWorked" text="Days worked:" value={this.state.daysWorked} onChange={this.handleChange.bind(this)} />
                    <FormItem className="form-element" type="number" name="weeksEmployed" text="Weeks employed:" value={this.state.weeksEmployed} onChange={this.handleChange.bind(this)} />
                    <FormItem className="form-element" type="number" name="payRate" text="Pay rate:" value={this.state.payRate} onChange={this.handleChange.bind(this)} />
                    <FormItem className="form-element" type="number" name="totalHol" text="Total holiday:" value={this.state.totalHol} onChange={this.handleChange.bind(this)} />
                    <FormItem className="form-element" type="number" name="holTaken" text="Holiday taken:" value={this.state.holTaken} onChange={this.handleChange.bind(this)} />
                    <FormItem className="form-element" type="number" name="rate" text="Holiday rate:" value={this.state.rate} onChange={this.handleChange.bind(this)}/>
                    <input type="submit" value="submit" />
                </form>

                <div>
                    <h3>Money owed: {this.state.moneyOwed}</h3>
                    <h3>Total holiday for time worked: {this.state.holDaysOwed}</h3>
                    <h3>Holiday remaining: {this.state.holDaysRemaining}</h3>
                    <h3>Total pay: {this.state.totalPay}</h3>
                </div>
            </div>
        )
    }

}

export default HolidayPayCalculator;