import React from "react";

const Controls = ({turnOn,switchedOn, handleClick}) => {
    const icon = !switchedOn ? '►' : "▌▌";

    return(
        <div className = "controls" >
            <label htmlFor="play" id= "start_stop" onClick = {turnOn}>{icon}</label>
            <label htmlFor="restar" id ="reset" onClick = {handleClick}>⟳</label>
        </div>
    )
}

export default Controls