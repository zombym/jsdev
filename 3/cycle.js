var rnd = Math.round(Math.random() * 1000);
console.log(rnd);
do{
  var answer = prompt('Укажите число');
  if(answer===null) break;
  if(!+answer) alert('Введи число!');
  if(+answer == rnd) alert('Правильно!');
  if(+answer > rnd) alert ('Меньше!');
  if(+answer < rnd) alert('Больше!');
}while (+answer !== rnd);
