// Number: odd
{
    let age = prompt("Введите число");


    if (Number(age) % 2 === 0) {
        console.log("Вы ввели четное число");
    } else if (isNaN(age)) {
        console.log("Вы не ввели число");
    } else {
        console.log("Вы ввели нечётное число");
    }
}

// String: lexics
{

    let age = prompt("Введите лююое предложение");

    const badWord1 = 'пиво';
    const badWord2 = 'виски';


    if (age.includes(badWord1) || age.includes(badWord2)) {
        console.log("Ваше предложение не прошло проверку");
    } else {
        console.log("Ваше предложение прошло проверку");
    }
}
//Boolean

let beer = confirm('Пиво будеш?');
let city = confirm('Київ столиця України?');
let room = confirm('Ти прибрав у кімнаті?');


//Boolean: if

if (beer) {
    console.log("Тримайте ваше пиво");
} else {
    console.log("Тримайте ваш чай");
}


if (city) {
    console.log("Ви маєте рацію");
} else {
    console.log("Ви помиляєтеся");
}


if (room) {
    console.log("Молодець");
} else {
    console.log("Бігом у куток");
}
// Comparison: sizes
{
    let size = prompt('Введите ваш размер верхней одежды \nнапример: \nS \nM \n L \n XL \n XXL').toUpperCase();

    if (size === 'S') {
        console.log('В США вам бы подошел 6 размер верхней одежды');
    } else if (size === 'M') {
        console.log('В США вам бы подошел 8-10 размер верхней одежды');
    } else if (size === 'L') {
        console.log('В США вам бы подошел 12-14 размер верхней одежды');
    } else if (size === 'XL') {
        console.log('В США вам бы подошел 16-18 размер верхней одежды');
    } else if (size === 'XXL') {
        console.log('В США вам бы подошел 20 размер верхней одежды');
    }
}
{
    let size = prompt('Введите ваш размер белья \nнапример:\nXXS \nXS \nS \nM \nL \nXL \nXXL \nXXXL').toUpperCase();
    if (size === 'XXS') {
        console.log('В США вам бы подошел 8 размер белья');
    } else if (size === 'XS') {
        console.log('В США вам бы подошел 10 размер белья');
    } else if (size === 'S') {
        console.log('В США вам бы подошел 12 размер белья');
    } else if (size === 'M') {
        console.log('В США вам бы подошел 14 размер белья');
    } else if (size === 'L') {
        console.log('В США вам бы подошел 16 размер белья');
    } else if (size === 'XL') {
        console.log('В США вам бы подошел 18 размер белья');
    } else if (size === 'XXL') {
        console.log('В США вам бы подошел 20 размер белья');
    } else if (size === 'XXXL') {
        console.log('В США вам бы подошел 22 размер белья');
    }
}
// Ternary

{ confirm('Ви чоловік?') ? alert("Ви чоловік") : alert("Ви жінка"); }

{
    !!2 //true
    !!0 //false
    !!1 // true
    2 || 1 // 2
    2 || 0 // 2
    2 && 1 // 1
    1 && 2 // 2
    0 && 2 // 0
    0 || 1 || 2 // 1
    0 && 1 && 2 // 0
    2 || 1 || 0 // 2
    2 && 1 && 0 // 0
    confirm('left') || confirm('right') // если хоть раз нажать Ок результат true
    confirm('left') && confirm('right') // только два Ок дадут true
    null || 2 // 2
    undefined && 1 // undefined
    alert("Hello") && confirm('Are you sexy?'); // undefined
    alert("Hello") || confirm('Are you drunk?'); // Ok = true Отмана = false
    (undefined || 2) && (3 || 0) // 3
        (2 && 1) || (null && 0) // 1
            (2 > 1) && "greater" // greater
            (2 < 1) && null // fasle
    1 ? "one" : "not one" // one
    0 ? "zero" : "not zero" // not zero
    "0" ? "\"zero\"" : "not `zero`" // "\"zero\""
    parseInt("0") ? 'true' : 'false' // 'false'
        ("" || 2) && (3 || "3.5") || (4 && 5) // 3
            (-1 + 1) && "zero" // 0
    "-1" + 1 && "oups" // "oups"
        (typeof null === 'object') ? "null is object" : "null is null" // "null is object"
    Math.random() < 0.5 && 'less' || 'more' // 50% что Math.random() выдаст true результат 
        (a = Math.random()) < 0.5 && 'less: ' + a || 'more: ' + a // 50% что Math.random() выдаст true результат
        [2, 3, 5, 7, 11].indexOf(7) > -1 ? 'prime' : 'not found' // 'prime'
}
//Prompt: or
{
    let age = prompt('Скільки вам років?');

    if (age === "" || age === null) {
        alert('Ви ввели некоректні данні');
    } else {
        let year = 2023 - age;
        console.log(year);
    };

    age === "" || age === null ? alert('Ви ввели некоректні данні') : console.log(2023 - age);
}
//Confirm: or this days
{
    confirm("Шопінг?") ? console.log('Пішли') : console.log("Ти - бяка.");

}
// Confirm: if this days

{
    let question = confirm("Шопінг?");
    if (question == false) {
        console.log("Ти - бяка.");
    } else {
        console.log('Пішли');
    }
}
// Default: or
{
    let surname = prompt("Введите вашу фамилию");
    let name = prompt("Введите ваше имя");
    let patronymic = prompt("Введите ваше отчество");

    surname === '' || surname === null ? surname = "Іванов" : surname;
    name === '' || name === null ? name = "Іван" : name;
    patronymic === '' || patronymic === null ? patronymic = 'Іванович' : patronymic;

    console.log(surname + ' ' + name + ' ' + patronymic);
}

// Default: if

{
    let surname = prompt("Введите вашу фамилию");
    let name = prompt("Введите ваше имя");
    let patronymic = prompt("Введите ваше отчество");
    if (surname === '' || surname === null) {
        surname = "Іванов";
    }
    else {
        surname
    }
    if (name === '' || name === null) {
        name = "Іван";
    } else {
        surname;
    }
    if (patronymic === '' || patronymic === null) {
        patronymic = 'Іванович'
    }
    else {
        patronymic;
    }


    console.log(surname + ' ' + name + ' ' + patronymic);
}
// Login and password
{
    const credentials = {
        login: 'admin',
        password: 'qwerty',
    };
    let login = prompt("Ваш логін:");

    if (login === credentials.login) {
        let password = prompt("Ваш пароль:");
        if (password === credentials.password) {
            alert('Ураа, все вірно!')
        } else {
            console.log('невірний пароль');
        }
    } else {
        console.log('невірний логін');
    }

}
// Currency exchange

{
    let money = prompt('Введіть валюту (наприклад usd або eur)').toLowerCase();

    let question = confirm("купити?");

    let rate;
    if (money === "usd") {
        rate = question ? 37.4 : 36.43;
    };
    if (money === "eur") {
        rate = question ? 40.9 : 39.6;
    };
    let someMoney = Number(prompt("Введіть вашу сумму"));

    alert(question ? someMoney / rate : someMoney * rate);
}
//Scissors
{
    let string = prompt("Ваш хід, введіть камінь або ножиці або папір");
    if (string === "" || string === null || string !== 'камінь' || string !== 'ножиці' || string !== 'папір') {
        alert('Ви ввели некоректні данні');
    }


    let bot = Math.random();


    let computer;
    if (bot < 0.33) {
        computer = 'камінь';
    } else if (bot > 0.33 && bot < 0.66) {
        computer = 'ножиці';
    } else {
        computer = 'папір';
    }
    console.log(computer);

    if (computer === string) {
        console.log('Нічия');
    } else if ((computer === 'камінь' && string === 'ножиці') || (computer === 'ножиці' && string === 'папір') || (computer === 'папір' && string === 'камінь')) {
        console.log('Комп\'ютер переміг');
    }
    else if ((computer === 'папір' && string === 'ножиці') || (computer === 'камінь' && string === 'папір') || (computer === 'ножиці' && string === 'камінь')) {
        console.log('Ви перемогли!!!');
    }
}







// Додаткове завдання

let string = prompt("Выбери что-то из списка: \nNumber: odd \nString: lexics \nBoolean \nBoolean: if \nComparison: sizes \nTernary \nTraining \nPrompt: or \nConfirm: or this days \nConfirm: if this days \nDefault: or \nDefault: if \nLogin and password \nCurrency exchange \nScissors");
if (string === '' || string === null) {
    alert('Ви ввели некоректні данні');
}
if (string === "Number: odd") {
    let age = prompt("Введите число");


    if (Number(age) % 2 === 0) {
        console.log("Вы ввели четное число");
    } else if (isNaN(age)) {
        console.log("Вы не ввели число");
    } else {
        console.log("Вы ввели нечётное число");
    }
} else if (string === "String: lexics") {
    let age = prompt("Введите лююое предложение");

    const badWord1 = 'пиво';
    const badWord2 = 'виски';


    if (age.includes(badWord1) || age.includes(badWord2)) {
        console.log("Ваше предложение не прошло проверку");
    } else {
        console.log("Ваше предложение прошло проверку");
    }
} else if (string === "Boolean") {
    let beer = confirm('Пиво будеш?');
let city = confirm('Київ столиця України?');
let room = confirm('Ти прибрав у кімнаті?');


} else if (string === "Boolean: if") {
    if (beer) {
        console.log("Тримайте ваше пиво");
    } else {
        console.log("Тримайте ваш чай");
    }
    
    
    if (city) {
        console.log("Ви маєте рацію");
    } else {
        console.log("Ви помиляєтеся");
    }
    
    
    if (room) {
        console.log("Молодець");
    } else {
        console.log("Бігом у куток");
    }
}else if (string === "Comparison: sizes") {
    {
        let size = prompt('Введите ваш размер верхней одежды \nнапример: \nS \nM \n L \n XL \n XXL').toUpperCase();
    
        if (size === 'S') {
            console.log('В США вам бы подошел 6 размер верхней одежды');
        } else if (size === 'M') {
            console.log('В США вам бы подошел 8-10 размер верхней одежды');
        } else if (size === 'L') {
            console.log('В США вам бы подошел 12-14 размер верхней одежды');
        } else if (size === 'XL') {
            console.log('В США вам бы подошел 16-18 размер верхней одежды');
        } else if (size === 'XXL') {
            console.log('В США вам бы подошел 20 размер верхней одежды');
        }
    }
    {
        let size = prompt('Введите ваш размер белья \nнапример:\nXXS \nXS \nS \nM \nL \nXL \nXXL \nXXXL').toUpperCase();
        if (size === 'XXS') {
            console.log('В США вам бы подошел 8 размер белья');
        } else if (size === 'XS') {
            console.log('В США вам бы подошел 10 размер белья');
        } else if (size === 'S') {
            console.log('В США вам бы подошел 12 размер белья');
        } else if (size === 'M') {
            console.log('В США вам бы подошел 14 размер белья');
        } else if (size === 'L') {
            console.log('В США вам бы подошел 16 размер белья');
        } else if (size === 'XL') {
            console.log('В США вам бы подошел 18 размер белья');
        } else if (size === 'XXL') {
            console.log('В США вам бы подошел 20 размер белья');
        } else if (size === 'XXXL') {
            console.log('В США вам бы подошел 22 размер белья');
        }
    }
}else if (string === "Ternary") {
    confirm('Ви чоловік?') ? alert("Ви чоловік") : alert("Ви жінка");
}else if (string === "Training") {
    !!2 //true
    !!0 //false
    !!1 // true
    2 || 1 // 2
    2 || 0 // 2
    2 && 1 // 1
    1 && 2 // 2
    0 && 2 // 0
    0 || 1 || 2 // 1
    0 && 1 && 2 // 0
    2 || 1 || 0 // 2
    2 && 1 && 0 // 0
    confirm('left') || confirm('right') // если хоть раз нажать Ок результат true
    confirm('left') && confirm('right') // только два Ок дадут true
    null || 2 // 2
    undefined && 1 // undefined
    alert("Hello") && confirm('Are you sexy?'); // undefined
    alert("Hello") || confirm('Are you drunk?'); // Ok = true Отмана = false
    (undefined || 2) && (3 || 0) // 3
        (2 && 1) || (null && 0) // 1
            (2 > 1) && "greater" // greater
            (2 < 1) && null // fasle
    1 ? "one" : "not one" // one
    0 ? "zero" : "not zero" // not zero
    "0" ? "\"zero\"" : "not `zero`" // "\"zero\""
    parseInt("0") ? 'true' : 'false' // 'false'
        ("" || 2) && (3 || "3.5") || (4 && 5) // 3
            (-1 + 1) && "zero" // 0
    "-1" + 1 && "oups" // "oups"
        (typeof null === 'object') ? "null is object" : "null is null" // "null is object"
    Math.random() < 0.5 && 'less' || 'more' // 50% что Math.random() выдаст true результат 
        (a = Math.random()) < 0.5 && 'less: ' + a || 'more: ' + a // 50% что Math.random() выдаст true результат
        [2, 3, 5, 7, 11].indexOf(7) > -1 ? 'prime' : 'not found' // 'prime'


}else if (string === "Prompt: or") {
    let age = prompt('Скільки вам років?');

    if (age === "" || age === null) {
        alert('Ви ввели некоректні данні');
    } else {
        let year = 2023 - age;
        console.log(year);
    };

    age === "" || age === null ? alert('Ви ввели некоректні данні') : console.log(2023 - age);

}else if (string === "Confirm: or this days") {
    confirm("Шопінг?") ? console.log('Пішли') : console.log("Ти - бяка.");

}else if (string === "Confirm: if this days") {
    let question = confirm("Шопінг?");
    if (question == false) {
        console.log("Ти - бяка.");
    } else {
        console.log('Пішли');
    }
}else if (string === "Default: or") {
    let surname = prompt("Введите вашу фамилию");
    let name = prompt("Введите ваше имя");
    let patronymic = prompt("Введите ваше отчество");

    surname === '' || surname === null ? surname = "Іванов" : surname;
    name === '' || name === null ? name = "Іван" : name;
    patronymic === '' || patronymic === null ? patronymic = 'Іванович' : patronymic;

    console.log(surname + ' ' + name + ' ' + patronymic);
}else if (string === "Default: if") {
    let surname = prompt("Введите вашу фамилию");
    let name = prompt("Введите ваше имя");
    let patronymic = prompt("Введите ваше отчество");
    if (surname === '' || surname === null) {
        surname = "Іванов";
    }
    else {
        surname
    }
    if (name === '' || name === null) {
        name = "Іван";
    } else {
        surname;
    }
    if (patronymic === '' || patronymic === null) {
        patronymic = 'Іванович'
    }
    else {
        patronymic;
    }


    console.log(surname + ' ' + name + ' ' + patronymic);
}else if (string === "Login and password") {
    const credentials = {
        login: 'admin',
        password: 'qwerty',
    };
    let login = prompt("Ваш логін:");

    if (login === credentials.login) {
        let password = prompt("Ваш пароль:");
        if (password === credentials.password) {
            alert('Ураа, все вірно!')
        } else {
            console.log('невірний пароль');
        }
    } else {
        console.log('невірний логін');
    }
}else if (string === "Currency exchange") {
    let money = prompt('Введіть валюту (наприклад usd або eur)').toLowerCase();

    let question = confirm("купити?");

    let rate;
    if (money === "usd") {
        rate = question ? 37.4 : 36.43;
    };
    if (money === "eur") {
        rate = question ? 40.9 : 39.6;
    };
    let someMoney = Number(prompt("Введіть вашу сумму"));

    alert(question ? someMoney / rate : someMoney * rate);
}else if (string === "Scissors") {
    let string = prompt("Ваш хід, введіть камінь або ножиці або папір");
    if (string === "" || string === null || string !== 'камінь' || string !== 'ножиці' || string !== 'папір') {
        alert('Ви ввели некоректні данні');
    }


    let bot = Math.random();


    let computer;
    if (bot < 0.33) {
        computer = 'камінь';
    } else if (bot > 0.33 && bot < 0.66) {
        computer = 'ножиці';
    } else {
        computer = 'папір';
    }
    console.log(computer);

    if (computer === string) {
        console.log('Нічия');
    } else if ((computer === 'камінь' && string === 'ножиці') || (computer === 'ножиці' && string === 'папір') || (computer === 'папір' && string === 'камінь')) {
        console.log('Комп\'ютер переміг');
    }
    else if ((computer === 'папір' && string === 'ножиці') || (computer === 'камінь' && string === 'папір') || (computer === 'ножиці' && string === 'камінь')) {
        console.log('Ви перемогли!!!');
    }
}