var a = prompt('Укажите первое число');
var b = prompt('Укажите второе число');
var summ = 0;

if( a > b ) alert('Первое число больше второго');
if( a < b ) alert('Второе число больше первого');
if( a == b ) alert('Числа равны');

var yearStart = prompt('Укажите первый год');
var yearFinish = prompt('Укажите последний год');

if(yearStart <= yearFinish){
for( var i = yearStart; i <= yearFinish; i++)
  if(i%4 == 0) console.log(i)
}
else{
  for( var i = yearFinish; i <= yearStart; i++)
    if(i%4 == 0) console.log(i)
}

do{
  var c = prompt('Укажите число');
  summ = summ + Number(c);
  if(c===null) break;
}while(c != 3)

alert(summ);
