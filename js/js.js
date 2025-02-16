let age = parseInt(prompt("Введите ваш возраст:"));

if (age >= 65) {
    console.log("Поздравляем с пенсионным возрастом!");
} else {
    console.log("Вам ещё рано на пенсию");
}
//2
let num1 = parseInt(prompt("Введите первое число:"));
let num2 = parseInt(prompt("Введите второе число:"));

if (num1 > num2) {
    console.log("Первое число больше");
} else if (num1 < num2) {
    console.log("Второе число больше");
} else {
    console.log("Числа равны");
}
//3
let num = parseInt(prompt("Введите число:"));

if (num % 2 == 0) {
    console.log("Это чётное число");
} else {
    console.log("Это нечётное число");
}