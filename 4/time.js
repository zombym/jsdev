//Сегодня 6 декабря 2016 года, вторник, 20 часов 6 минут 54 секунды».
var allDate = new Date();
var date = allDate.getDate();
var month = allDate.getMonth();
switch (month) {
  case 0: month = 'январь';
    break;
  case 1: month = 'февраль';
    break;
  case 2: month = 'март';
    break;
  case 3: month = 'апрель';
    break;
  case 4: month = 'май';
    break;
  case 5: month = 'июнь';
    break;
  case 6: month = 'июль';
    break;
  case 7: month = 'август';
    break;
  case 8: month = 'сентябрь';
    break;
  case 9: month = 'октябрь';
    break;
  case 10: month = 'ноябрь';
    break;

  default: month = 'декабрь';
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
