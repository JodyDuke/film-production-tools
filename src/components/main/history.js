import React from 'react';

function History(props) {
        const data = props.historyData
        const string = data.map((data, i) => {

            let date = <p className="history-node-date">{data.timeStamp.toLocaleString()}</p>

            if(data.name === 'Holiday pay calculator'){
                return (
                    <div key={i} className="history-node green">
                        <h2>{data.name}</h2>
                        {date}
                        <p className="collapsed">Input &#9658;</p>

                        <p className="collapsed" onClick="">Output &#9660;</p>
                        <div className={collapsible}>
                            <p>Total pay: {data.totalPay}</p>
                            <p>Total holiday for time worked: {data.holDaysOwed}</p>
                            <p>Holiday remaining: {data.holDaysRemaining}</p>
                            <p>Money owed: {data.moneyOwed}</p>
                        </div>
                    </div>
                )
            }
            else if(data.name === 'Framerate calculator') {
                let formatElements = data.currentHistory.map((e, i) => <li key={i}>{e.hours} : {e.minutes} : {e.seconds} : {e.frames}</li>)
                return (
                    <div key={i} className="history-node red">
                        <h2>{data.name}</h2>
                        {date}
                        <ul>{formatElements}</ul>
                        <p>{data.total}</p>
                    </div>
                )
            }

            return null
        })

        return (
            <div className="history">
                <div className="clear-history">
                    <button onClick={props.historyWipe}>Clear all</button>
                </div>
                {string}
            </div> 

        )
}


export default History