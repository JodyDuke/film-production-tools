import React, { Component } from 'react';



class History extends Component {
    render(){
        const data = this.props.historyData
        const string = data.map((data, i) => {
            console.log(i, data)
            return <p key={i}>{data.moneyOwed}</p>
        })

        return (
           <div className="history">
           {string}
           </div> 
        )
    }
}

export default History;