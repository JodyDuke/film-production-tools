import React, { Component } from "react";

class Collapse extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isHidden : props.hidden
        }
    }

    toggleHidden(){
        this.setState({
            isHidden : !this.state.isHidden
        })
    }


    render(){
        let title = this.state.isHidden ? this.props.name + ' ►' : this.props.name + ' ▼'
        return(
            <div>
                <p className="collapse-header" onClick={this.toggleHidden.bind(this)}>{title}</p>
                {!this.state.isHidden && this.props.content}
            </div>
        )
    }
}

export default Collapse