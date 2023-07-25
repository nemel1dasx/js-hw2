let firstName = prompt("Введите ваше имя:");
let lastName = prompt("Введите вашу фамилию:");
let nickname = prompt("Введите ваш никнэйм:");

let hello = "Привет, ";

if (firstName || lastName || nickname) {
  hello += firstName || "";
  hello += lastName ? " " + lastName : "";
  hello += nickname ? " (" + nickname + ")" : "";
} else {
  hello += "noname";
}

alert(hello);



let userInput = prompt("Введите число:");

if (isNaN(userInput)) {
  alert("Вы ввели не число!");
} else {
  let number = parseFloat(userInput);
  let message = "";

  message += number % 2 === 0 ? "Четное" : "Нечетное";
  message += Number.isInteger(number) ? " и целое" : " и дробное";
  message += number > 100 ? ", больше 100" : "";
  message += number < 100 ? ", меньше 100" : "";

  alert(message);
}


let num1 = parseFloat(prompt("Введите первое число:"));
let num2 = parseFloat(prompt("Введите второе число:"));

let sum = num1 + num2;
alert("Сумма чисел: " + sum);


let age = parseInt(prompt("Введите ваш возраст:"));
let acsess = age > 17 ? "Доступ разрешен" : "Доступ закрыт";
alert(access);


let userNumber = prompt("Введите число или строку:");
let number = parseFloat(userInput);

if (isNaN(number)) {
  alert("Вы ввели не число: " + userNumber);
} else {
  switch (true) {
    case number > 10:
      alert("Число больше 10");
      break;
    case number <= 10:
      alert("Число меньше или равно 10");
      break;
  }
}



