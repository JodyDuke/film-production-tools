import React from 'react';
import Collapse from '../helpers/collapse'
import { minTwoDigits } from '../helpers/two-digits';

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
                let formatElements = data.currentHistory.map((e, i) => {
                    let hours = minTwoDigits(e.hours)
                    let minutes = minTwoDigits(e.minutes)
                    let seconds = minTwoDigits(e.seconds)
                    let frames = minTwoDigits(e.frames)
                    return <li key={i}>{hours} : {minutes} : {seconds} : {frames}</li>
                })
                return (
                    <div key={i} className="history-node history-framerate yellow">
                        <h2>{data.name}</h2>
                        {date}
                        <ul>{formatElements}</ul>
                        <div>
                            <p><b>{data.total}</b></p>
                        </div>            
                    </div>
                )
            }
            else if(data.name === 'Time calculator') {
                let formatElements = data.currentHistory.map((e, i) => {
                let hours = minTwoDigits(e.hours)
                let minutes = minTwoDigits(e.minutes)
                let seconds = minTwoDigits(e.seconds)
                return <li key={i}>{hours} : {minutes} : {seconds}</li>
                })
                return (
                    <div key={i} className="history-node history-time purple">
                        <h2>{data.name}</h2>
                        {date}
                        <ul>{formatElements}</ul>
                        <div>
                            <p><b>{data.total}</b></p>
                        </div>       
                    </div>
                )
            }
            else if(data.name === 'Date difference calculator') {
               return (
                    <div key={i} className="history-node history-time red">
                        <h2>{data.name}</h2>
                        {date}
                        <ul>Start date: {data.start}</ul>
                        <ul>End date: {data.end}</ul>
                        <div>
                            <p><b>{data.total}</b></p>
                        </div>       
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
                <div>{string}</div>
            </div> 

        )
}


export default History