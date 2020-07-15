import React from "react";

const TimeInput = ({currentTime , handleClick,dataBlock,ids}) => {
    return(
        <div className = "updating_block" >
            <label htmlFor="arrow" id = {ids.arrowDown}  onClick = {handleClick} data-direction = "down" data-block = {dataBlock}>↓</label>
            <p id = {ids.time} >{currentTime}</p>
            <label htmlFor="arrow" id = {ids.arrowUp}  onClick = {handleClick} data-direction = "up" data-block = {dataBlock}>↑</label>
        </div>
    )
}

export default TimeInput;