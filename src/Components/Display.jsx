import React from 'react';

const Display = ({timeLeft,blockTime, isEnding}) => {
    return (
        <div className = {isEnding ? 'display active' : 'display' }>
            <h4 id = "timer-label" >{blockTime}</h4>
            <p id = "time-left" >{timeLeft}</p>
        </div>
    )
}

export default Display;