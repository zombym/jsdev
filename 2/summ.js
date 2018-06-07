var summ = 0;

do{
  var c = prompt('Укажите число');
  if(c===null) break;
  if(+c) summ = summ + Number(c);
    else alert('неверное значение');

}while(true)

alert(summ);
