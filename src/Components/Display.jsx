import React from 'react';

const Display = ({timeLeft,blockTime}) => {
    return (
        <div className = "display">
            <h4 id = "timer-label" >{blockTime}</h4>
            <p id = "time-left" >{timeLeft}</p>
        </div>
    )
}

export default Display;