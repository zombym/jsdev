var rnd = Math.round(Math.random() * 1000);
console.log(rnd);

function checkInput(input) {
  if(input===null) return 0;
  if(!+input) return 1;
}

function chkRnd(rnd) {
  var answer = prompt('Укажите число');
  if(checkInput(answer) == 0) answer = rnd;

  if(+answer == rnd) return;
  else if (checkInput(answer) != 1){
    if(+answer > rnd) alert ('Меньше!');
    if(+answer < rnd) alert('Больше!');
    chkRnd(rnd);
  } else {alert('Введи число!');
          chkRnd(rnd);
        };
}

chkRnd(rnd);
alert('Правильно!');
