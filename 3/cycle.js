var rnd = Math.round(Math.random() * 1000);
console.log(rnd);

function checkInput(input) {
  if(input===null) return 0;
  if(!+input) return 1;
}

do{
  var answer = prompt('Укажите число');
  if(checkInput(answer) == 0) break;
  else if (checkInput(answer) != 1){
  if(+answer > rnd) alert ('Меньше!');
  if(+answer < rnd) alert('Больше!');
} else alert('Введи число!')
}while (+answer !== rnd);

alert('Правильно!');
