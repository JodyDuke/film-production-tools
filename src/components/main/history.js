import React from 'react';
import Collapse from '../helpers/collapse'

function History(props) {
        const data = props.historyData
        const string = data.map((data, i) => {

            let date = <p className="history-node-date">{data.timeStamp.toLocaleString()}</p>

            if(data.name === 'Holiday pay calculator'){
                return (
                    <div key={i} className="history-node green">
                        <h2>{data.name}</h2>
                        {date}
                        <Collapse hidden={true} name="Input" content={
                            <div>
                                <p>Days worked: {data.daysWorked}</p>
                                <p>Weeks employed: {data.weeksEmployed}</p>
                                <p>Pay rate: {data.payRate}</p>
                                <p>Total holiday / year: {data.totalHol}</p>
                                <p>Total holiday taken: {data.holTaken}</p>
                                <p>Holiday rate: {data.rate}</p>
                            </div>
                        }/>
                        <Collapse hidden={false} name="Output" content={
                            <div>
                                <p>Total pay: {data.totalPay}</p>
                                <p>Total holiday for time worked: {data.holDaysOwed}</p>
                                <p>Holiday remaining: {data.holDaysRemaining}</p>
                                <p>Money owed: {data.moneyOwed}</p>
                            </div>
                        } />

                    </div>
                )
            }
            else if(data.name === 'Framerate calculator') {
                let formatElements = data.currentHistory.map((e, i) => <li key={i}>{e.hours} : {e.minutes} : {e.seconds} : {e.frames}</li>)
                return (
                    <div key={i} className="history-node yellow">
                        <h2>{data.name}</h2>
                        {date}
                        <ul>{formatElements}</ul>
                        <p>{data.total}</p>
                    </div>
                )
            }
            else if(data.name === 'Time calculator') {
                let formatElements = data.currentHistory.map((e, i) => <li key={i}>{e.hours} : {e.minutes} : {e.seconds}</li>)
                return (
                    <div key={i} className="history-node purple">
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