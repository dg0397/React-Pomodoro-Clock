export function setTimeFormat(num){
    const mins = Number.parseInt(num / 60);
    const seconds = num % 60;

    const resultMins = mins >= 10 ? 
                        `${mins}` : 
            (mins > 0 && mins < 10 ) ? 
                        `0${mins}` : 
                        `00`;
    const resultSeconds = (seconds >= 0 && seconds < 10 ) ? `0${seconds}` : `${seconds}`;

    return `${resultMins}:${resultSeconds}` 
}

export function setTimeMin(num){
    const mins = Number.parseInt(num / 60);

    return mins
}