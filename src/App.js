import React , {useState,useEffect} from 'react';
import Main from './Components/Main';
import {setTimeFormat,setTimeMin} from './Util/SetTimeFormat';
import ids from './Util/ids';
import "./Styles/styles.scss";

function App() {
  const [sessionTime,setSessionTime] = useState(1500);
  const [breakTime,setBreakTime] = useState(300);
  const [currentTime , setCurrentTime ] = useState(1500);
  const [switchedOn,setSwitchedOn] = useState(false);
  const [blockTimeRunnig,setBlockTimeRunnig] = useState('Session');
  const [isEnding,setIsEnding] = useState(false);
  const audio = React.createRef();

  useEffect(() => {

    if(switchedOn){
      const interval = setInterval(() => {
        //console.log('This will run every second!');
        
        currentTime <= 60 ? 
        setIsEnding(true):
        setIsEnding(false);

        currentTime === 1 && audio.current.play()
        
        setCurrentTime(currentTime => {
          if(currentTime === 0 && blockTimeRunnig === 'Session'){

            setBlockTimeRunnig('Break');
            
            return currentTime + breakTime;
          
          }else if(currentTime === 0 && blockTimeRunnig === 'Break'){

            setBlockTimeRunnig('Session');

            return currentTime + sessionTime;
            
          }else{
            return currentTime - 1;
          }
        });
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [switchedOn,blockTimeRunnig,breakTime,sessionTime,currentTime,audio]);
  
  const updateLengthTime = (e) => {
    setSwitchedOn(false);
    const {block} = e.target.dataset;
    const {direction} = e.target.dataset;

    let newTime = block === "Session" ? sessionTime : breakTime;
    
    newTime = direction === 'up'?
                                  newTime + 60 :
                                  newTime - 60;

    if(newTime < 60) newTime = 60; 
    if(newTime > 3600) newTime = 3600; 
    if(block === "Session" && blockTimeRunnig === 'Session'){
      setSessionTime(newTime);
      setCurrentTime(newTime);
    }else if(block === "Session" && blockTimeRunnig === 'Break'){
      setSessionTime(newTime);
    }else if(block === "Break" && blockTimeRunnig === 'Break'){
      setBreakTime(newTime);
      setCurrentTime(newTime)
    }else{
      setBreakTime(newTime);
    }

  }

  const turnOnApp = e => {
    setSwitchedOn(!switchedOn);
  }

  const resetApp = e => {
    setBreakTime(300);
    setSessionTime(1500);
    setCurrentTime(1500);
    setSwitchedOn(false);
    setBlockTimeRunnig('Session');
    setIsEnding(false);
    audio.current.pause();
    audio.current.currentTime = 0;
  }

  return (
    <Main 
    sessionTime = {setTimeMin(sessionTime)}
    breakTime = {setTimeMin(breakTime)}
    currentTime = {setTimeFormat(currentTime)}
    handleClick = {updateLengthTime}
    turnOn = {turnOnApp} 
    ids = {ids}
    switchedOn = {switchedOn}
    handleReset = {resetApp}
    blockTime = {blockTimeRunnig}
    isEnding = {isEnding}
    audioElement = {audio}
    />
  );
}

export default App;
