import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

class NavItem extends Component {
    render() {
        return (
            <div className={this.props.className}>
                <NavLink exact to={this.props.nav}>
                    <i className={this.props.faIcon} />
                    {this.props.linkName}
                </NavLink>
            </div>
            // <li className="navLink">
            //     <NavLink exact to={this.props.nav}>{this.props.linkName}</NavLink>
            // </li>
        )
    }
}

export default NavItem;