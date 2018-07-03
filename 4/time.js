//Сегодня 6 декабря 2016 года, вторник, 20 часов 6 минут 54 секунды».
var allDate = new Date();
var date = allDate.getDate();
var month = allDate.getMonth();
switch (month) {
  case 0: month = 'января';
    break;
  case 1: month = 'февраля';
    break;
  case 2: month = 'марта';
    break;
  case 3: month = 'апреля';
    break;
  case 4: month = 'майя';
    break;
  case 5: month = 'июня';
    break;
  case 6: month = 'июля';
    break;
  case 7: month = 'августа';
    break;
  case 8: month = 'сентября';
    break;
  case 9: month = 'октября';
    break;
  case 10: month = 'ноября';
    break;

  default: month = 'декабря';
}
var year = allDate.getFullYear();
var day = allDate.getDay();
switch (day) {
  case 0: day = 'понедельник';
    break;
  case 1: day = 'вторник';
    break;
  case 2: day = 'среда';
    break;
  case 3: day = 'четверг';
    break;
  case 4: day = 'пятница';
    break;
  case 5: day = 'суббота';
    break;

  default: day = 'воскресенье';
}

var hour = allDate.getHours();
var hourEnd;
if(hour == 1 || hour == 21) hourEnd = 'час';
  else if (1 < hour && hour < 5) hourEnd = 'часа';
  else if (21 < hour && hour < 24) hourEnd = 'часа';
  else hourEnd = 'часов';

var minutes = allDate.getMinutes();
var minutesEnd;
if(minutes == 1 || minutes == 21 || minutes == 31 || minutes == 41 || minutes == 51) minutesEnd = 'минута';
  else if (1 < minutes && minutes < 5) minutesEnd = 'минуты';
  else if (21 < minutes && minutes < 25) minutesEnd = 'минуты';
  else if (31 < minutes && minutes < 35) minutesEnd = 'минуты';
  else if (41 < minutes && minutes < 45) minutesEnd = 'минуты';
  else if (51 < minutes && minutes < 55) minutesEnd = 'минуты';
  else minutesEnd = 'минут';

var seconds = allDate.getSeconds();
var secondsEnd;
if(seconds == 1 || seconds == 21 || seconds == 31 || seconds == 41 || seconds == 51) secondsEnd = 'секунда';
  else if (1 < seconds && seconds < 5) secondsEnd = 'секунды';
  else if (21 < seconds && seconds < 25) secondsEnd = 'секунды';
  else if (31 < seconds && seconds < 35) secondsEnd = 'секунды';
  else if (41 < seconds && seconds < 45) secondsEnd = 'секунды';
  else if (51 < seconds && seconds < 55) secondsEnd = 'секунды';
  else secondsEnd = 'секунд';
console.log(`Сегодня ${date} ${month} ${year} года, ${day}, ${hour} ${hourEnd} ${minutes} ${minutesEnd} ${seconds} ${secondsEnd}.`)
