var rnd = Math.round(Math.random() * 1000);
console.log(rnd);

var i = 0;
for(var i = 0; i < 5; i++)
{
  var answer = prompt('Укажите число');
  if(answer===null) break;
  if(!+answer) alert('Введи число!');
  if(+answer == rnd) alert('Правильно!');
  if(+answer > rnd) alert ('Меньше!');
  if(+answer < rnd) alert('Больше!');
  alert('Осталось попыток ' + (4 - i));
}
