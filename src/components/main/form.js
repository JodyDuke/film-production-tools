import React,{ Component } from 'react';

class FormItem extends Component {
    render() {
        return(
            <label className={this.props.className}>
                {this.props.text}
                <input name={this.props.name} type={this.props.type} value={this.props.value} onChange={this.props.onChange} />
            </label>
        )
    }
}

export default FormItem;