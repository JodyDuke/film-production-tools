import React, { Component } from 'react';
import NavItem from './nav_item.js';


class Menu extends Component {
    render() {
        return(
            <div className="menu">
                <div className="logo">
                    <i className="fa fa-film fa-5x"></i>
                </div>
                <div>
                    <h1>Film Production<br/>Tools</h1>
                    <h4>beta v2.0</h4>
                </div>
                    <NavItem nav="/" linkName="Home" faIcon="fa fa-home fa-3x" className="navLink blue" />
                    <NavItem nav="/holiday_pay_calculator" linkName="Holiday Pay Calculator" faIcon="fa fa-plane fa-3x" className="navLink green" />
                    <NavItem nav="/time_calculator" linkName="Time Calculator" faIcon="fa fa-clock-o fa-3x" className="navLink purple" />
                    <NavItem nav="/framerate_calculator" linkName="Framerate Calculator" faIcon="fa fa-film fa-3x" className="navLink yellow" />
                    <NavItem nav="/date_difference_calculator" linkName="Date Difference Calculator" faIcon="fa fa-calendar-o fa-3x" className="navLink red"/>
                    
            </div>
        )
    }

}

export default Menu;
