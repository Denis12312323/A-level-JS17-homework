//Confirms

let arr = [
    confirm('Пиво будеш?'),
    confirm('Ти прибрав у кімнаті?'),
    confirm('Київ столиця України?'),
];

// Prompts
{
    const arr = [];

    arr[0] = prompt('Сколько вам лет?');
    arr[1] = prompt('Год вашего рождения?');
    arr[2] = prompt('Номер вашей школы?');
    console.log(arr);
}

//Item access
{
    let str = prompt('Введите индекс массива(число от 0 до 3)');

    let arr = ['Вася', 'Петя', 'Коля', 'Игорь'];

    if (str === "" || str === null) {
        alert('Ви ввели некоректні данні');
    } else {
        console.log(`Ваш елемент це ${arr[str]}, а довжина масиву ${arr.length}`);
    }
}
//Item change
{
    let index = prompt('Введите индекс массива(число от 0 до 3)');
    let str = prompt('Введите имя вашего друга');

    let arr = ['Вася', 'Петя', 'Коля', 'Игорь'];
    if (str === "" || str === null || index === '' || index === null) {
        alert('Ви ввели некоректні данні');
    } else {
        arr[+index] = str;
        console.log(arr);
    }
}

// //Multiply table
// {
//     const arr = [];
//     for (let i = 0; i < 5; i++) {
//         let rowArr = [];
//         for (let y = 0; y < 5; y++) {
//             rowArr.push((i + 1) * (y + 1));
//             console.log(rowArr);
//         }
//         arr.push(rowArr);
//     }
//     console.log(arr);
//     console.log(arr[2][3]);
// }

//Multiply table
{
    const arr = [];
    for (let i = 0; i < 5; i++) {
        let rowArr = [];
        for (let y = 0; y < 5; y++) {
            rowArr.push(i * y);
            console.log(rowArr);
        }
        arr.push(rowArr);
    }
    console.log(arr);
    console.log(arr[2][3]);
}
//Multiply table slice
{
    const arr = [];
    for (let i = 0; i <= 5; i++) {
        let rowArr = [];
        for (let y = 0; y <= 5; y++) {
            rowArr.push(i * y);
            console.log(rowArr);
        }
        arr.push(rowArr);
    }
    const result = arr.map(rowArr => rowArr.slice(1));
    console.log(result.slice(1));
}
//IndexOf Word
{
    let str = prompt('Введите строку из нескольки слов');
    let mairStr = prompt('Введите главное слово');

    let arr = str.split(' ');
    console.log(arr);
    let variable = arr.indexOf(mairStr);
    if (variable !== -1) {
        console.log(`Индекс вашего слова ${arr.indexOf(mairStr)}`);
    } else if (variable === -1) {
        console.log(`Этого слова в предложение нет`);
    }

}
//Reverse
{
    let arr = [];
    let str = prompt('Введите строку из нескольки слов');
    let variable = str.split(' ');

    arr.push(...variable);
    console.log(arr, arr.length);

    const reversedArr = [];

    while (arr.length > 0) {
        reversedArr.push(arr.pop());
    }
    console.log(reversedArr);
}

//Reverse 2
{
    let arr = [];
    let str = prompt('Введите строку из 5 слов');
    let variable = str.split(' ');

    arr.push(...variable);
    console.log(arr);

    const reversedArr = [];
    let i = 5;
    while (i > 0) {
        reversedArr.push(arr.pop());
        i--;
    }



    const againReversedArr = [];
    let y = 5;
    console.log(reversedArr);
    while (y > 0) {
        againReversedArr.unshift(reversedArr.shift());
        y--;
    }
    console.log(againReversedArr);
}
//Copy
{
    const arr = [];
    for (let i = 0; i < 5; i++) {
        let rowArr = [];
        for (let y = 0; y < 5; y++) {
            rowArr.push(i * y);
            console.log(rowArr);
        }
        arr.push(rowArr);
    }
    console.log(arr);

    const copiedArr = [...arr];

    console.log(copiedArr);
}
//Deep Copy
{
    const arr = [];
    for (let i = 0; i < 5; i++) {
        let rowArr = [];
        for (let y = 0; y < 5; y++) {
            rowArr.push((i + 1) * (y + 1));
            console.log(rowArr);
        }
        arr.push(rowArr);
    }
    console.log(arr);

    const copiedArr = [arr[0], arr[1], arr[2], arr[3], arr[4]];

    console.log(copiedArr);
}

//Array Equals
{
    const arr = [1, 22, 33];
    const arr2 = arr.concat();
    if (arr.toString() === arr2.toString()) {
        console.log('Масиви рівні');
    }
}
//Flat
{
    const arr = [];
    for (let i = 0; i < 5; i++) {
        let rowArr = [];
        for (let y = 0; y < 5; y++) {
            rowArr.push((i * y));
            console.log(rowArr);
        }
        arr.push(rowArr);
    }
    console.log(arr);

    const copiedArr = [].concat(...arr);

    console.log(copiedArr, copiedArr.length);
}
//Destruct
{
    let str = prompt('Введите слово из 10 букв');
    const [a, b, c, d, e, f, g, h, i, j] = str;
    console.log(a, e, i);
}

//Destruct default
{
    let str = prompt('Введите слово из 10 букв');
    const [a, b = '!', c, d = '!', e = '!', f, g, h, i, j] = str;
    console.log(a, b, c, d, e, f, g, h, i, j);
}

// For Alert

{
    let arr = ["John", "Paul", "George", "Ringo"];
    for (const iterator of arr) {
        alert(iterator);
    }
}
// For Select Option
{
    const currencies = ["USD", "EUR", "GBP", "UAH"]
    let str = "<select>"
    for (const currency of currencies) {
        str += `<option >${currency}</option>`;
    }
    str += "</select>"
    document.write(str)
}

//For Table Horizontal

{
    const names = ["John", "Paul", "George", "Ringo"]
    let str = "<table>"
    for (const name of names) {
        str += `<tr> <th>${name}</th> </tr>`;
    }
    str += "</table>"
    document.write(str)
}
//For Table Letters
{
    const currencies = ["USD", "EUR", "GBP", "UAH"]
    let str = "<table>"
    for (const currency of currencies) {
        console.log(currency)
        str += `<tr>`;
        for (const letter of currency) {
            console.log(letter)
            str += `  <th>${letter}</th>`
        }
        str += `</tr>`;
    }
    str += "</table>"
    document.write(str)
}
//For Multiply Table

{
    const arr = [];
    for (let i = 0; i < 5; i++) {
        let rowArr = [];
        for (let y = 0; y < 5; y++) {
            rowArr.push((i * y));
        }
        arr.push(rowArr);
    }
    console.log(arr);

    let str = "<table>"
    for (const currency of arr) {
        console.log(currency);
        str += `<tr>`;
        for (const num of currency) {
            if (num % 2 === 0) {
                str += `  <th style="background-color: #f2f2f2;">${num}</th>`
            } else {
                str += `  <th style="background-color: #ff0000;">${num}</th>`
            }
        }
        str += `</tr>`;
    }
    str += "</table>"
    document.write(str)
}
//Function Capitalize
{
    const capitalize = (str) => {
        let result = str.slice(0, 1).toUpperCase() + str.slice(1).toLowerCase();
        return result;
    }
    console.log(capitalize("cANBerRa"));//Canberra
}

//Map Capitalize
{
    let str = prompt("Введите любое предложение");
    let arr = str.split(' ');
    let result = arr.map(item => item.slice(0, 1).toUpperCase() + item.slice(1).toLowerCase());

    console.log(result.join(' '));
}
//Filter Lexics
{
    let str = prompt("Введите любое предложение");
    let badArr = ['пиво', 'виски', 'коньяк'];

    let arr = str.split(' ');
    let filterArr = arr.filter(word => !badArr.includes(word));
    let res = filterArr.join(' ');
    console.log(res);
}
// {
//     let str = prompt("Введите любое предложение");
//     let badArr = ['пиво', 'виски', 'коньяк'];

//     let filterWords = (stringWords, badWord) => {

//         let arr = stringWords.split(' ');

//         let filterArr = arr.filter(word => !badWord.includes(word))
//         let res = filterArr.join(' ');

//         return res;
//     }
//     let resultStr = filterWords(str, badArr);
//     console.log(resultStr);
// }

// Beep Lexics
{
    let str = prompt("Введите любое предложение");
    let badArr = ['пиво', 'виски', 'коньяк'];

    let arr = str.split(' ');
    let doMupArr = arr.map(item => badArr.includes(item) ? 'BEEP' : item);
    let res = doMupArr.join(' ');
    console.log(res);
}
// {
//     let str = prompt("Введите любое предложение");
//     let badArr = ['пиво', 'виски', 'коньяк'];

//     let filterWords = (stringWords, badWord) => {

//         let arr = stringWords.split(' ');

//         let doMupArr = arr.map(item => badWord.includes(item) ? 'BEEP' : item);

//         let res = doMupArr.join(' ');
//         return res;


//     }
//     let resultStr = filterWords(str, badArr);
//     console.log(resultStr);
// }



//  Reduce HTML
{
    const currencies = ["USD", "EUR", "GBP", "UAH"]
    let str = "<select>"

    str += currencies.reduce((a, b) => {
        return a + `<option>${b}</option>`;
    }, '')
    str += "</select>"
    document.write(str);
}
//For Brackets Hell Check
// {
//     let line = prompt("Введите [(}], [(()()()], {() () [()()}]{{{}}}");
//     const bracketsStack = [];
//     let i = 0;
//     const bracketPairs = {
//         "(": ")",
//         "{": "}",
//         "[": "]",
//     };
//     for (const character of line) {
//         if (bracketPairs[character]) {
//             bracketsStack.push({ char: character, position: i + 1 });
//         } else if (Object.values(bracketPairs).includes(character)) {
//             const lastOpenBracket = bracketsStack.pop();

//             if (bracketPairs[lastOpenBracket.char] !== character) {
//                 console.log(`Помилка: Неправильна відповідність для ${character} на позиції ${i + 1}. Очікувалося ${bracketPairs[lastOpenBracket.char]} на позиції ${lastOpenBracket.position}`);
//                 break;
//             }
//         }
//         i++;
//     }
// }

{
    let str =  prompt("Введите [(}], [(()()()], {() () [()()}]{{{}}}");


    const stack = [];

    let i = 0;

    for (const character of str){
        if (character === "("  || character === "[" || character === "{") {
            stack.push({character, index: 1});
        }
        else if (character === ')' || character === "}" || character === "}") {
            if (stack.length === 0) {
                console.log(`Помилка: Закриваюча дужка без відповідної відкриваючої на позиції ${i}`);
                break;
            }

            const lastOpenBracket  = stack.pop();

            if (
                (character === ')' && lastOpenBracket.character !== '(') ||
                (character === '}' && lastOpenBracket.character !== '{') ||
                (character === ']' && lastOpenBracket.character !== '[')
            ) {
                console.log(`Помилка: Невідповідні дужки на позиціях ${lastOpenBracket.index} та ${i}`);
            break;
            }
        }

        i++;
    }
    if (stack.length === 0) {
        console.log('Всі дужки вірні.');
    }else{
        console.log(`Помилка: Не всі дужки закриті. Відкриваюча дужка на позиції ${stack[0].index}`);
    }

}
