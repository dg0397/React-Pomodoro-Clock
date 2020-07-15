import React from "react";
import Header from "./Header";
import InputBlock from "./InputBlock";
import Display from "./Display";
import Controls from "./Controls";
import Footer from "./Footer";


const Main = ({currentTime , handleClick , breakTime , sessionTime,ids , turnOn ,switchedOn , handleReset, blockTime }) => {
    return(
        <div className = "container" >
            <Header />
            <InputBlock handleClick = {handleClick} currentTime = {breakTime} dataBlock = "Break" ids = {ids.breakIds} / >
            <InputBlock handleClick = {handleClick} currentTime = {sessionTime} dataBlock = "Session" ids = {ids.sessionIds}/ >
            <Display timeLeft= {currentTime} blockTime = {blockTime}/>
            <Controls turnOn = {turnOn} switchedOn = {switchedOn} handleClick = {handleReset} />
            <Footer />
            <audio id="beep" preload="auto"
            src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"
        />
        </div>
    )
}

export default Main;


