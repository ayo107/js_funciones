
const rapid = (myString) => {
    let consonants = [];
    let arr =myString.split ('')
    for(let letter in arr){
        if (arr[letter].toUpperCase() != 'A'&& arr[letter].toUpperCase() != 'E' &&arr[letter].toUpperCase() != 'I' &&arr[letter].toUpperCase() != 'O' &&arr[letter].toUpperCase() != 'U') {
            consonants.push(arr[letter].toUpperCase())
        }
    }
    str = consonants.join('');
    return str
    };

// Work above this line; do not change code below
let str = "Jhon";
console.log(rapid(str));

