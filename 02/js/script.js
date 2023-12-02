

//assign: evaluation
{
    var a = 5;
    var b, c;

    b = (a) * (5);
    console.log(b);
    b = (c = (b) / (2));
    console.log(b, c);
}
//вирази обчислюються справа наліво, спочатку (b = 25), b/2 = 12.5, потім 12.5 присвоюеться в змінну с, а потім перезаписується значення b.

// Number: age
{
    let age = prompt('Сколько вам лет?');

    let month = prompt('Ваш месяц рождения в цифрах?');

    if (month >= 11) {
        let year = 2022 - age;
        alert('Ваш рік народження ' + year);
    } else {
        let year = 2023 - age;
        alert('Ваш рік народження ' + year);
    };
}
// Number: temperature
{
    let weather = prompt('Температура в градусах цельсия?');

    let fahrenheit = (weather * 1.8) + 32;

    alert(weather + ' °С' + ' = ' + fahrenheit + ' °F по фаренгейту');
}

//Number: divide

{
    let firstNumber = prompt('Первое число: ');

    let secondNumber = prompt('Второе число: ');

    let res = firstNumber / secondNumber;

    alert(Math.floor(res));
}

//Number: currency
{
    let hryvnia = prompt('Ваше кол-во гривен:')
    const rate = 36.04;

    alert("У вас " + (hryvnia / rate).toFixed(2) + " долларов");
}

//Number: RGB

{
    const red = Number(prompt('Количество красного цвета'));
    const green = Number(prompt('Количество зеленого цвета'));
    const blue = Number(prompt('Количество синего цвета'));

    let colorResult = red.toString(16).padStart(2, "0") + green.toString(16).padStart(2, "0") + blue.toString(16).padStart(2, "0");


    let hexRes = `#${colorResult}`;
    document.body.style.backgroundColor = hexRes;
}


//Number: flats

const targetApartment = Number(prompt("Введіть номер квартири:"));

let entranceNumber = Math.ceil(targetApartment / (4 * 9));
let floorNumber = Math.ceil((targetApartment % 36) / 4);

console.log(`Під'їзд: ${entranceNumber} Поверх: ${floorNumber}`);
