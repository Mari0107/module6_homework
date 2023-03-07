let arr = [1, 15, 12, 10, 3, -6, 0, 2];
let nullNum = 0;
let quantityNum = 0;
let evenNum = 0;
let oddNum = 0;
function getElements () {
for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number" || !isNaN(arr[i])) {
        quantityNum += 1;
        if (arr[i] === 0) {
            nullNum += 1;
        } else if (arr[i] % 2 === 0) {
            evenNum += 1;
        } else {
            oddNum += 1;
        }
    }
} 



console.log(`Итог: ${quantityNum} цифр, ${evenNum} чётных, ${oddNum} нечётных.`);
console.log (`${nullNum} ноль.`); }

getElements ()