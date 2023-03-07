let inputNum = +prompt("Введите число:");

function getNum (number) {
    if (number > 1000) return "Данные неверны.";
    if (number === 0) return  "0 - не является ни простым, ни составным";
    if (number === 1) return "1 — не является ни простым, ни составным";

    let value = 0;
    for (let i = 1; i <= number; i++) {
        if (number % i === 0) value++;
    }

    if (value === 2)
       return "Простое";
    else
        return "Составное";
}

console.log(getNum(inputNum));