var rnd = Math.round(Math.random() * 1000);
console.log(rnd);

function chkRnd(rnd) {
  var answer = prompt('Укажите число');
  if(answer === null) return;
  if(!+answer) alert('Введи число!');
  if(+answer > rnd) alert ('Меньше!');
  if(+answer < rnd) alert('Больше!');
  if(+answer == rnd) alert('Правильно!');

  if(+answer !== rnd) chkRnd(rnd);
}

chkRnd(rnd);
