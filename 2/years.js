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
