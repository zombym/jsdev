var summ = 0;

do{
  var c = prompt('Укажите число');
  if(Number(c) !== NaN) summ = summ + Number(c);
  console.log(summ);
  if(c===null) break;
}while(c != 3)

alert(summ);
