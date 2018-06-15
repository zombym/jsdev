var rnd = Math.round(Math.random() * 1000);
console.log(rnd);
do{
  var answer = prompt('укажите число');
  if(+answer > rnd) alert ('больше');
  if(+answer < rnd) alert('меньше');
}while (+answer !== rnd);
alert('congrats');
