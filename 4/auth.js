var users = [
  {name : 'Петр',
  login : 'petr',
  password : '123'
  },
  {name : 'Игорь',
  login : 'boom',
  password : '111'
  },
  {name : 'Всеволд',
  login : 'devil',
  password : '666'
  }
];

var login = prompt('Введите логин');
var password = prompt('Введите пароль');

for(var i = 0 ; i < users.length ; i++){
  if(users[i].login == login && users[i].password == password)
  {
    alert(`Привет ${users[i].name}`);
    break;
  }
  if(i == users.length - 1) alert('Ошибка авторизации')
};
