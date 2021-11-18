const calendar = document.querySelector('#calendar');
const hour = document.querySelector("#hour")
const timeStamp = document.querySelector("#timestamp")
const resetDay = document.querySelector("#resetDay")

calendar.innerText = dateFormated();
hour.innerText = hoursFormated();
timeStamp.innerText = `timestamp: ${timeStampTotal}`; 

const actionButtons = [
    {dom: document.querySelector("#buttonSixSec"), value: () => advanceDate(timeFoward['6s'])},
    {dom: document.querySelector("#buttonOneMin"), value: () => advanceDate(timeFoward['1min'])},
    {dom: document.querySelector("#buttonTenMin"), value: () => advanceDate(timeFoward['10min'])},
    {dom: document.querySelector("#buttonHour"), value: () => advanceDate(timeFoward['1h'])},
    {dom: document.querySelector("#buttonHalfDay"), value:() => advanceDate(timeFoward['12h'])},
    {dom: document.querySelector("#buttonDay"), value:() => advanceDate(timeFoward['day'])},
    {dom: document.querySelector("#buttonWeek"), value: () => advanceDate(timeFoward['week'])},
    {dom: document.querySelector("#buttonMonth"), value: () => advanceDate(timeFoward['month'])},
    {dom: document.querySelector("#buttonHalfYear"), value:() =>  advanceDate(timeFoward['halfyear'])},
    {dom: document.querySelector("#buttonYear"), value: () => advanceDate(timeFoward['year'])},
];


actionButtons.forEach(({dom, value}) => {
    dom.addEventListener('click', () => {
       value();
        calendar.innerText = dateFormated();
        hour.innerText = hoursFormated();
        timeStamp.innerText = `timestamp: ${timeStampTotal}`; 

        console.log({
            sec: dateObject().sec,
            min: dateObject().min,
            hour: dateObject().hour,
        })

        resetValue = dateObject().sec + dateObject().min * minInSec + dateObject().hour * hourInSec;
    })
})

resetDay.addEventListener('click', () => {
    advanceDate(-resetValue)
    resetValue = 0;
    calendar.innerText = dateFormated();
    hour.innerText = hoursFormated();
    timeStamp.innerText = `timestamp: ${timeStampTotal}`; 
})