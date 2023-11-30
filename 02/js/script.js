

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

let apartments = parseInt(prompt("Номер вашей квартиры?"));

let entrance = apartments % 36 / 4;


if (apartments <= 36) {
    alert('Квартира находится в первом подъезде.' + ' На ' + Math.ceil(entrance) + ' этаже');
} else if (apartments > 36 && apartments <= 72) {
    alert('Квартира находится в втором подъезде.' + ' На ' + Math.ceil(entrance) + ' этаже');
} else if (apartments > 72 && apartments <= 108) {
    alert('Квартира находится в третьем подъезде.' + ' На ' + Math.ceil(entrance) + ' этаже');
} else if (apartments > 108 && apartments <= 144) {
    alert('Квартира находится в четвертом подъезде.' + ' На ' + Math.ceil(entrance) + ' этаже');
} else if (apartments > 144 && apartments <= 180) {
    alert('Квартира находится в пятом подъезде.' + ' На ' + Math.ceil(entrance) + ' этаже');
} else {
    alert('Квартира находится в шестом подъезде.' + ' На ' + Math.ceil(entrance) + ' этаже');
}