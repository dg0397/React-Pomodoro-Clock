import React from "react";
const style = {
    fontSize : '1rem'
}
const Controls = ({turnOn,switchedOn, handleClick}) => {
    const icon = !switchedOn ? '►' : "▌▌";
    const labelIcon = icon === "▌▌" ? 
                                <label htmlFor="play" id= "start_stop" onClick = {turnOn} style = {style}>{icon}</label>:
                                <label htmlFor="play" id= "start_stop" onClick = {turnOn} >{icon}</label>;

    return(
        <div className = "controls" >
            {labelIcon}
            <label htmlFor="restar" id ="reset" onClick = {handleClick}>⟳</label>
        </div>
    )
}

export default Controls