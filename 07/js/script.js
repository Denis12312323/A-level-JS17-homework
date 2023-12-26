//Temperature
{
    let temperature = (e) => (e * 1.8) + 32;

    temperature(prompt('Температура в градусах цельсия?'));
}

//RGB
{
    let color = (r, g, b) => `#${r.toString(16).padStart(2, '00')}${g.toString(16).padStart(2, '00')}${b.toString(16).padStart(2, '00')}`;
    let hexRes = color(Number(prompt('Количество красного цвета')), Number(prompt('Количество зеленого цвета')), Number(prompt('Количество синего цвета')));
    document.body.style.backgroundColor = hexRes;

}
//Flats
{
    let apartment = (item) => {
        return {
            entrance: Math.ceil(item / (4 * 9)),
            floor: Math.ceil((item % 36) / 4),
        }
    };

    console.log(apartment(prompt("Введіть номер квартири:")));
}
//Credentials
{
    let str = () => {
        let surname = prompt("Введите вашу фамилию").trim();
        let name = prompt("Введите ваше имя").trim();
        let patronymic = prompt("Введите ваше отчество").trim();
        let space = ' ';
        return {
            name: name.slice(0, 1).toUpperCase() + name.slice(1).toLowerCase(),
            surname: surname.slice(0, 1).toUpperCase() + surname.slice(1).toLowerCase(),
            fatherName: patronymic.slice(0, 1).toUpperCase() + patronymic.slice(1).toLowerCase(),
            fullName: surname.slice(0, 1).toUpperCase() + surname.slice(1).toLowerCase() + space + name.slice(0, 1).toUpperCase() + name.slice(1).toLowerCase() + space + patronymic.slice(0, 1).toUpperCase() + patronymic.slice(1).toLowerCase()
        }
    }
    console.log(str());
}
//New line
{
    let line = (str) => {
        let lines = str.split("\\n");
        let multiLineString = lines.join('\n');
        return multiLineString;
    }
    let userInput = prompt("Введіть рядок (використовуйте \\n для нового рядка):");
    let result = line(userInput);
    console.log(result);
}

//Prompt OR
{
    let str = (age, year = 2023) => age === '' || age === null ? alert('Ви ввели некоректні данні') : console.log(year - age);
    console.log(str(prompt('Скільки вам років?')));
}
//Login And Password
{
    let str = (login = 'admin', password = 'qwerty') => {
        let yourLogin = prompt("Ваш логін:");
        if (yourLogin === login) {
            let YourPassword = prompt("Ваш пароль:");
            if (YourPassword === password) {
                alert('Ураа, все вірно!')
            }
            else {
                console.log('невірний пароль');
            }
        } else {
            console.log('невірний логін');
        }
    }
    console.log(str());
}

//For Table
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



    let table = (array) => {
        let str = "<table border = '1'>";
        for (const item of array) {
            str += `<tr>`
            for (const iterator of item) {
                str += `<td>${iterator}</td>`
            }
            str += `</tr>`
        }
        str += "</table>";
        return document.write(str);

    }
    table(arr);
}

//Filter Lexics

{
    let str = (array, badArray) => {
        badArray = ['бляха', 'муха', "пляшка", "шабля"];
        array = array.split(' ');
        array = array.filter((word) => !badArray.includes(word));
        return array = array.join(' ');
    }
    str(prompt("Введите любое предложение"));
}

//Currency Table
{
    let curs = () => {
        fetch('https://open.er-api.com/v6/latest/USD').then(res => res.json())
            .then(data => {
                console.log(data);
                let arr = [];
                let currencies = Object.keys(data.rates);

                arr.push(['', ...currencies]);
                for (const iterator of Object.keys(data.rates)) {
                    let row = [iterator];
                    for (const item of Object.keys(data.rates)) {
                        const exchangeRate = data.rates[item] / data.rates[iterator];
                        row.push(exchangeRate.toFixed(2));

                    }
                    arr.push(row);
                }
                console.log(arr);


                let table = (array) => {
                    let str = "<table border = '1'>";
                    for (const item of array) {
                        str += `<tr>`
                        for (const iterator of item) {
                            str += `<td>${iterator}</td>`
                        }
                        str += `</tr>`
                    }
                    str += "</table>";
                    document.write(str);

                }
                table(arr);
            })
    }
    curs();
}

//Form
{
    const car = {
        "Name": "chevrolet chevelle malibu",
        "Cylinders": 8,
        "Displacement": 307,
        "Horsepower": 130,
        "Weight_in_lbs": 3504,
        "Origin": "USA",
        "in_production": false
    };
    let showForm = (obj) => {
        let form = `<form >`;
        for (const key in obj) {
            form += `<label style = 'display:block;'>${key}<input value="${obj[key]}" type = ${typeof obj[key] === 'number' ? 'number' : (typeof obj[key] === 'boolean' ? 'checkbox' : 'text')}></label>`
        }
        form += `</form >`;
        document.write(form);
    }
    showForm(car);
}

//Array of objects sort
{
    var persons = [
        { name: "Іван", age: 17 },
        { name: "Марія", age: 35 },
        { name: "Олексій", age: 73 },
        { name: "Яків", age: 12 },
    ];



    let showSort = (array, fieldName, ascending = true) => {


        array.sort((a, b) => {
            if (a[fieldName] < b[fieldName]) {
                return ascending ? -1 : 1;
            } else if (a[fieldName] > b[fieldName]) {
                return ascending ? 1 : -1;
            } else {
                return 0;
            }
        });
    }

    showSort(persons, "age");
    console.log(persons);
    sort(persons, "name", false);
    console.log(persons);
}
//Table
{
    const persons = [
        {
            name: 'Марія',
            fatherName: 'Іванівна',
            surname: 'Іванова',
            sex: 'female'
        },
        {
            name: 'Миколай',
            fatherName: 'Іванович',
            surname: 'Іванов',
            age: 15
        },
        {
            name: 'Петро',
            fatherName: 'Іванович',
            surname: 'Іванов',
            married: true
        },
    ]




    let showTable = (data, sortBy, sortOrder = 'asc') => {
        const copy = [...data];

        copy.sort((a, b) => {

            if (typeof a[sortBy] === 'string' && typeof b[sortBy] === 'string') {
                return sortOrder === 'asc' ? (a[sortBy] < b[sortBy] ? -1 : a[sortBy] > b[sortBy] ? 1 : 0) : (b[sortBy] < a[sortBy] ? -1 : b[sortBy] > a[sortBy] ? 1 : 0);
            } else if (typeof a[sortBy] === 'number' && typeof b[sortBy] === 'number') {
                return sortOrder === 'asc' ? a[sortBy] - b[sortBy] : b[sortBy] - a[sortBy];
            } else {
                return 0;
            }
        });

        const headers = copy.reduce((acc, item) => acc.concat(Object.keys(item)), []).filter((value, index, self) => self.indexOf(value) === index);

        console.log(headers);




        let str = `<table border="1">`;
        str += '<tr>';
        for (const iterator of headers) {
            str += `<td><b>${iterator}</b></td>`;
        }
        str += '</tr>';


        for (const person of copy) {
            str += '</tr>';
            for (const iterator of headers) {
                str += `<td>${person[iterator] === undefined ? person[iterator] = '' : person[iterator]}</td>`;
            }
        }

        str += `</table>`;
        document.write(str);
    }
    showTable(persons, 'name', 'asc');

}
//Divide
{
    const str = `<input type='number' id="firstNumber" />
<input type='number' id="secondNumber" />
<div id="divisionResult">`

    document.write(str);
    const firstNumber = document.querySelector('#firstNumber');
    const secondNumber = document.querySelector('#secondNumber');
    const divisionResult = document.getElementById('divisionResult');

    const calcResult = () => {

        const num1 = Number(firstNumber.value);
        const num2 = Number(secondNumber.value);

        if (!isNaN(num1) && !isNaN(num2)) {
            const res = num1 / num2;
            divisionResult.innerHTML = `Результат ${Math.floor(res)}`
        } else {
            divisionResult.innerHTML = "Помилка";
        }
    }

    firstNumber.oninput = secondNumber.oninput = calcResult
}


//Calc Func

{
    let showSecond = (secondsInMinute, minuteInHour, HourInDay, dayInYear) => {
        secondsInMinute = 60;
        minuteInHour = 60;
        HourInDay = 24;
        dayInYear = 365;
        return secondsInMinute * minuteInHour * HourInDay * dayInYear;
    }
    console.log("Секунд в году: " + showSecond());

}
{
    const str = `<input type='number' id="firstNumber" placeholder="Секунд в минуте" style = 'display:block;'/>
    <input type='number' id="secondNumber" placeholder="Минуты в часе" style = 'display:block;'/>
    <input type='number' id="thirdNumber" placeholder="Часов в дне" style = 'display:block;'/>
    <input type='number' id="fourthNumber" placeholder="Дней в году" style = 'display:block;'/>
    <div id="divisionResult">`

    document.write(str);
    const firstNumber = document.querySelector('#firstNumber');
    const secondNumber = document.querySelector('#secondNumber');
    const thirdNumber = document.querySelector('#thirdNumber');
    const fourthNumber = document.querySelector('#fourthNumber');
    const divisionResult = document.getElementById('divisionResult');

    let showSecond = (secondsInMinute, minuteInHour, HourInDay, dayInYear) => {
        secondsInMinute = firstNumber.value;
        minuteInHour = secondNumber.value;
        HourInDay = thirdNumber.value;
        dayInYear = fourthNumber.value;
        return secondsInMinute * minuteInHour * HourInDay * dayInYear;
    }
    console.log("Секунд в году: " + showSecond());





    const calcResult = () => {

        const num1 = Number(firstNumber.value);
        const num2 = Number(secondNumber.value);
        const num3 = Number(thirdNumber.value);
        const num4 = Number(fourthNumber.value);

        if (!isNaN(num1) && !isNaN(num2) && !isNaN(num3) && !isNaN(num4)) {
            showSecond();
            divisionResult.innerHTML = `Результат ${Math.floor(showSecond())}`
        } else {
            divisionResult.innerHTML = "Помилка";
        }
    }

    firstNumber.oninput = secondNumber.oninput = thirdNumber.oninput = fourthNumber.oninput = calcResult;


}