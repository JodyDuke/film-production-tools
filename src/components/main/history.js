import React from 'react';


function History(props) {
        const data = props.historyData
        const string = data.map((data, i) => {
            return (
                <div key={i} className="history-node">
                    <p>{data.name}</p>
                    <p>{data.time.toString()}</p>
                    <p>{data.holTaken}</p>
                </div>
            )
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