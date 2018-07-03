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
var minutes = allDate.getMinutes();
var seconds = allDate.getSeconds();
console.log(`Сегодня ${date} ${month} ${year} года, ${day}, ${hour} часов ${minutes} минут ${seconds} секунды».`)
