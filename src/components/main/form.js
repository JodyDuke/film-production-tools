import React,{ Component } from 'react';

class FormItem extends Component {
    render() {
        return(
            <label className={this.props.className}>
                <i className={this.props.faIcon} />
                <input name={this.props.name} type={this.props.type} value={this.props.value} placeholder={this.props.placeHolder} onChange={this.props.onChange} />
                {this.props.text}
            </label>
        )
    }
}

export default FormItem;