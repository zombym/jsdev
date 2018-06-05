var summ = 0;

do{
  var c = prompt('Укажите число');
  if(+c) summ = summ + Number(c);
  if(c===null) break;
}while(true)

alert(summ);
