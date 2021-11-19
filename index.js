const calendar = document.querySelector('#calendar');
const hour = document.querySelector("#hour")
const timeStamp = document.querySelector("#timestamp")
const resetDay = document.querySelector("#resetDay")
const day = document.querySelector('#day');
const month = document.querySelector('#month');
const year = document.querySelector('#year');
const formBtn = document.querySelector('#formbtn');

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

        resetValue = dateObject().sec + dateObject().min * minInSec + dateObject().hour * hourInSec;
    })
})

resetDay.addEventListener('click', () => {
    if(resetValue <= dayInSec) {
        advanceDate(-resetValue)
        resetValue = 0;
        calendar.innerText = dateFormated();
        hour.innerText = hoursFormated();
        timeStamp.innerText = `timestamp: ${timeStampTotal}`; 
    } else {
        alert('não é possível resetar o dia')
        console.log({resetValue, timeStampTotal})
    }
})


formBtn.addEventListener('click', (event) => {
    event.preventDefault();

    let dayVal = +day.value;
    let monthVal = +month.value;
    let yearVal = +year.value;

    timeStampTotal = 0;

    if(dayVal >= 1 && dayVal <= 30) {
        initDate.day = dayVal;
    } else {
        alert('O dia digitado está fora do alcance')
        day.value = ''
    }
    if(monthVal >= 1 && monthVal <= 12) {
        initDate.month = monthVal;
    } else {
        alert('O mês digitado está fora do alcance')
        month.value = ''
    }
    if(yearVal >= 1) {
        initDate.year = yearVal;
    } else {
        alert('O ano digitado está fora do alcance')
        year.value = ''
    }

    calendar.innerText = dateFormated();
    hour.innerText = hoursFormated();
    timeStamp.innerText = `timestamp: ${timeStampTotal}`; 
})