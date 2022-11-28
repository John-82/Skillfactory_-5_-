// Задание 1
let number = +prompt('Введите число');
if (typeof number === 'number'){
  if(isNaN(number)){
    console.log('Ошибка! Введите число');
} else if(number % 2 == 0){
    console.log('Вы ввели четное число');
} else {
    console.log('Вы ввели нечетное число');
}
}

