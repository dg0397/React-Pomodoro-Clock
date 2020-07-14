import React from "react";
import TimeInput from "./TimeInput";

const InputBlock = ({handleClick , currentTime, dataBlock, ids}) => {
    return(
        <div className = "update_container" >
            <h4 id= {ids.mainLabel} > {dataBlock} Length</h4>
            <TimeInput handleClick = {handleClick} currentTime = {currentTime} dataBlock = {dataBlock} ids = {ids}/>
        </div>
    )
}

export default InputBlock;