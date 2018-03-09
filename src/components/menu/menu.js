import React, { Component } from 'react';
import NavItem from './nav-item.js';


class Menu extends Component {
    render() {
        return(
            <div className="menu">
                <div className="logo">
                    <i className="fa fa-film fa-5x"></i>
                </div>
                <h1>Film Production<br/>Tools</h1>
                    <NavItem nav="/" linkName="Home" faIcon="fa fa-home fa-3x" className="navLink blue" />
                    <NavItem nav="/holiday-pay-calculator" linkName="Holiday Pay Calculator" faIcon="fa fa-plane fa-3x" className="navLink green" />
                    <NavItem nav="/date-difference-calculator" linkName="Date Difference Calculator" faIcon="fa fa-calendar-o fa-3x" className="navLink yellow"/>
                    <NavItem nav="/framerate-calculator" linkName="Framerate Calculator" faIcon="fa fa-film fa-3x" className="navLink red"/>
                    <NavItem nav="/time-calculator" linkName="Time Calculator" faIcon="fa fa-clock-o fa-3x" className="navLink orange"/>

            </div>
        )
    }

}

export default Menu;
