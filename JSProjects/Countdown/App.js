const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
const weekdays = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

const deadline = document.querySelector('.deadline');
const giveaway = document.querySelector('.giveaway');
const items = document.querySelectorAll('.deadline-format h4');

let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();

//let futureDate = new Date(2021,3,24,8,0,0);
let futureDate = new Date(tempYear,tempMonth,tempDay + 10,8,0,0)
let month = months[futureDate.getMonth()];

const year = futureDate.getFullYear();
const hours =futureDate.getHours();
const minutes = futureDate.getMinutes();
const date = futureDate.getDate();
const weekday = weekdays[futureDate.getDay()];

giveaway.textContent = `giveaway ends on ${weekday}, ${date} ${month} ${year}
 ${hours}: ${minutes}am`;

const futureTime = futureDate.getTime();

function getRemainingTime() {
  const today = new Date().getTime();
  const timeDifference = futureTime-today;

  const oneDay = 24*60*60*1000;
  const dayRem = Math.floor(timeDifference/oneDay);
  const oneHour= 60*60*1000;
  const hourRem= Math.floor((timeDifference%oneDay)/oneHour);
  const oneMin= 60*1000;
  const minRem= Math.floor((timeDifference%oneHour)/oneMin);
  const secRem=Math.floor((timeDifference%oneMin)/1000);

  const values = [dayRem,hourRem,minRem,secRem];

  function format(item){
    if(item<10){
      return item =`0${item}`;
    }
    return item
  }
  items.forEach((item,index) => {
    item.innerHTML=format(values[index]);
  });
  if(timeDifference<=0){
    clearInterval(countdown);
    deadline.innerHTML= `<h4 class="expired">Sorry, this giveaway has
    expired</h4>`
  }
}

let countdown = setInterval(getRemainingTime,1000);
getRemainingTime();
