var rnd = Math.round(Math.random() * 1000);
console.log(rnd);

function chkRnd(rnd) {
  var answer = prompt('укажите число');
  if(+answer == rnd) return;
  else chkRnd(rnd);
}

chkRnd(rnd);

alert('congrats');
