var rnd = Math.round(Math.random() * 1000);
console.log(rnd);

var i = 0;

function chkRnd(rnd) {
  var answer = prompt('Укажите число');
  if(answer === null) return;
  if(!+answer) alert('Введи число!');
  if(+answer > rnd) alert ('Меньше!');
  if(+answer < rnd) alert('Больше!');
  if(+answer == rnd) alert('Правильно!');
  i++;
  alert('Осталось попыток ' + (5 - i));
  if(i == 5) return;
  if(+answer !== rnd) chkRnd(rnd);
}

chkRnd(rnd);
