const yearInSec = 31104000;
const monthInSec = 2592000;
const dayInSec = 86400;
const hourInSec = 3600;
const minInSec = 60;

let timeStampTotal = 0;
let resetValue = 0;

let initDate = {
    year: 0,
    month: 1,
    day: 1,
    hour: 0,
    min: 0,
    sec: 0
}

const timeFoward = {
    '6s': 6,
    '1min': minInSec,
    '5min': minInSec * 5,
    '10min': minInSec * 10,
    '30min': minInSec * 30,
    '1h': hourInSec,
    '4h': hourInSec * 4,
    '12h': dayInSec /2,
    'day': dayInSec,
    'week': dayInSec*7,
    'month': monthInSec,
    'halfyear': monthInSec*6,
    'year': yearInSec,
}

function timeCalc(timestamp, timeInSec){
    let result = 0;
    let rest = 0;

    if(timestamp < timeInSec){
        rest = timestamp;
    }

    if(timestamp >= timeInSec){
        result = Math.trunc(timestamp / timeInSec);
        rest = timestamp % timeInSec;
    }

    return {result, rest};
}

function advanceDate(increment){
    timeStampTotal += increment;

    let timestamp = timeStampTotal;
   
    return {timestamp}
}

const dateObject = () => {
    let timestamp = timeStampTotal; 

    let rest = 0;
    let year = initDate.year;
    let month = initDate.month;
    let day = initDate.day;
    let hour = initDate.hour;
    let min = initDate.min;
    let sec = initDate.sec;

    year += timeCalc(timestamp, yearInSec).result;
    rest = timeCalc(timestamp, yearInSec).rest;

    month += timeCalc(rest, monthInSec).result;
    rest = timeCalc(rest, monthInSec).rest;

    day += timeCalc(rest, dayInSec).result;
    rest = timeCalc(rest, dayInSec).rest;

    hour += timeCalc(rest, hourInSec).result;
    rest = timeCalc(rest, hourInSec).rest;

    min += timeCalc(rest, minInSec).result;
    sec = timeCalc(rest, minInSec).rest;

    const yearFormated = String(year).padStart(2, '0');
    const monthFormated = String(month).padStart(2, '0');
    const dayFormated = String(day).padStart(2, '0');
    const hourFormated = String(hour).padStart(2, '0');
    const minFormated = String(min).padStart(2, '0');
    const secFormated = String(sec).padStart(2, '0');

    return {
        year, 
        yearFormated, 
        month, 
        monthFormated, 
        day, 
        dayFormated, 
        hour, 
        hourFormated, 
        min,
        minFormated, 
        sec, 
        secFormated
    }
}

const dateFormated = () => {
    const {dayFormated, monthFormated, yearFormated} = dateObject()
    return `${dayFormated}/${monthFormated}/${yearFormated}`
}

const hoursFormated = () => {
    const {hourFormated, minFormated, secFormated} = dateObject()
    return `${hourFormated}:${minFormated}:${secFormated}`
}

