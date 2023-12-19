// Literals

{
    const cat = {
        name: 'Ketty',
        age: 11,
        weight: 4.3,
        alwaysSleeping: true,
        alwaysHungry: true,

    }
    const car = {
        brand: "Toyota",
        model: 'Camry',
        color: 'black',
    }
    console.log(cat.name);
    console.log(car.brand);
}
//Literals expand
{
    let srt = prompt('Введіть потрібний ключ');
    let keyName = prompt('Введіть потрібний ключ');
    const cat = {
        [srt]: false,
        [keyName]: 2016,
        name: 'Ketty',
        age: 11,
        weight: 4.3,
        alwaysSleeping: true,
        alwaysHungry: true,
    }
    console.log(Object.keys(cat));
}
//Literals copy
{
    let srt = prompt('Введіть ключ');
    const cat = {
        name: 'Ketty',
        age: 11,
        weight: 4.3,
        alwaysSleeping: true,
        alwaysHungry: true,
    }

    const copy = Object.assign({}, cat);
    copy[srt] = false;
    console.log(copy);
}

//Html tree
{
    const body = {
        tagName: 'body',
        children: [
            {
                tagName: 'div',
                children: [
                    {
                        tagName: 'span',
                        children: ['Enter a date please:'],
                    },
                    {
                        tagName: 'br',
                    },
                    {
                        tagName: 'input',
                        attrs: {
                            type: 'text',
                            id: 'name',
                        }
                    },
                    {
                        tagName: 'input',
                        attrs: {
                            type: 'text',
                            id: 'surname',
                        }
                    }
                ]

            },
            {
                tagName: 'div',
                children: [
                    {
                        tagName: 'button',
                        children: ['OK'],
                        attrs: {
                            id: 'ok',
                        }
                    },
                    {
                        tagName: 'button',
                        children: ['Cancel'],
                        attrs: {
                            id: 'cancel'
                        }

                    }
                ]
            },
        ]
    }
    console.log(body.children[1].children[1].children);
    console.log(body.children[0].children[3].attrs.id);
}

//Parent
{
    const body = {
        tagName: 'body',
        children: [
            {
                tagName: 'div',
                children: [
                    {
                        tagName: 'span',
                        children: ['Enter a date please:'],
                    },
                    {
                        tagName: 'br',
                    },
                    {
                        tagName: 'input',
                        attrs: {
                            type: 'text',
                            id: 'name',
                        }
                    },
                    {
                        tagName: 'input',
                        attrs: {
                            type: 'text',
                            id: 'surname',
                        }
                    }
                ]

            },
            {
                tagName: 'div',
                children: [
                    {
                        tagName: 'button',
                        children: ['OK'],
                        attrs: {
                            id: 'ok',
                        }
                    },
                    {
                        tagName: 'button',
                        children: ['Cancel'],
                        attrs: {
                            id: 'cancel'
                        }

                    }
                ]
            },
        ]
    }
    body.children[0].parent = 'body';
    body.children[1].parent = 'body';

    body.children[0].children[0].parent = 'div';
    body.children[0].children[1].parent = 'div';
    body.children[0].children[2].parent = 'div';
    body.children[0].children[3].parent = 'div';

    body.children[1].children[0].parent = 'div';
    body.children[1].children[1].parent = 'div';

}

//Change OK

{
    const body = {
        tagName: 'body',
        children: [
            {
                tagName: 'div',
                children: [
                    {
                        tagName: 'span',
                        children: ['Enter a date please:'],
                    },
                    {
                        tagName: 'br',
                    },
                    {
                        tagName: 'input',
                        attrs: {
                            type: 'text',
                            id: 'name',
                        }
                    },
                    {
                        tagName: 'input',
                        attrs: {
                            type: 'text',
                            id: 'surname',
                        }
                    }
                ]

            },
            {
                tagName: 'div',
                children: [
                    {
                        tagName: 'button',
                        children: ['OK'],
                        attrs: {
                            id: 'ok',
                        }
                    },
                    {
                        tagName: 'button',
                        children: ['Cancel'],
                        attrs: {
                            id: 'cancel'
                        }

                    }
                ]
            },
        ]
    }

    let str = prompt('Введіть ключ');
    body.children[1].children[0].attrs[str] = prompt('Введіть значення');
}


//Destructure


{
    const body = {
        tagName: 'body',
        children: [
            {
                tagName: 'div',
                children: [
                    {
                        tagName: 'span',
                        children: ['Enter a date please:'],
                    },
                    {
                        tagName: 'br',
                    },
                    {
                        tagName: 'input',
                        attrs: {
                            type: 'text',
                            id: 'name',
                        }
                    },
                    {
                        tagName: 'input',
                        attrs: {
                            type: 'text',
                            id: 'surname',
                        }
                    }
                ]

            },
            {
                tagName: 'div',
                children: [
                    {
                        tagName: 'button',
                        children: ['OK'],
                        attrs: {
                            id: 'ok',
                        }
                    },
                    {
                        tagName: 'button',
                        childrenSecond: ['Cancel'],
                        attrs: {
                            id: 'cancel'
                        }

                    }
                ]
            },
        ]
    }
    const { children } = body.children[0].children[0];
    console.log(children);
    const { childrenSecond } = body.children[1].children[1];
    console.log(childrenSecond);
    const { id } = body.children[0].children[3].attrs;
    console.log(id);
}
//Destruct array
{
    let arr = [1, 2, 3, 4, 5, "a", "b", "c"];

    let [odd1, even1, odd2, even2, odd3, ...arrStr] = arr;

    console.log(arrStr);
    console.log(`${odd1} ${odd2} ${odd3} \n${even1} ${even2}`);
}
//Destruct string

{
    let arr = [1, "abc"];

    let [number, ...arrStr] = arr;

    console.log(number);
    console.log(arrStr);

    let [s1, s2, s3] = arrStr.toString();

    console.log(`${s1}\n${s2}\n${s3}`);
}

//Destruct 2

{
    let obj = {
        name: 'Ivan',
        surname: 'Petrov',
        children: [
            {
                name: 'Maria'
            },
            {
                name: 'Nikolay'
            }
        ]
    };
    let { children: [{ name: name1 }, { name: name2 }] } = obj;

    console.log(`${name1}\n${name2}`);


}

const { 10: item, length } = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

// Destruct 3
{
    let arr = [1, 2, 3, 4, 5, 6, 7, 10];

    const { 0: a, 1: b, length } = arr;

    console.log(`${a}\n${b}\n${length}`);
}

//Copy delete
{
    let srt = prompt('Введіть потрібний ключ');
    const cat = {
        [srt]: false,
        name: 'Ketty',
        age: 11,
        weight: 4.3,
        alwaysSleeping: true,
        alwaysHungry: true,
    }

    const { [srt]: removeKey, ...copyObj } = cat;


    console.log(cat);
    console.log(copyObj);

}
//Currency real rate
{
    fetch('https://open.er-api.com/v6/latest/USD').then(res => res.json())
        .then(data => {
            let input = prompt('Введіть вхідну валюту (наприклад, USD)');
            if (input === "" || input === null) {
                alert('Ви ввели некоректні данні');
            } else {
                input = input.toUpperCase();

                let output = prompt('Введіть вхідну, валюту, в яку відбувається конвертація (наприклад, EUR)');
                if (output === '' || output === null) {
                    alert('Ви ввели некоректні данні');
                } else {
                    output = output.toUpperCase();

                    let inputMoney = JSON.parse(prompt('Введіть суму у вхідній валюті'));

                    let inputExchangeRate = data.rates[input];
                    let outputExchangeRate = data.rates[output];
                    console.log(inputExchangeRate);
                    console.log(outputExchangeRate);

                    const res = inputMoney * outputExchangeRate;

                    console.log(`${inputMoney} ${input} = ${res.toFixed(2)} ${output}`);
                    console.log(data) // Вивчіть структуру, що отримується з сервера в консолі
                }

            }
        })
}
// Currency drop down
{
    fetch('https://open.er-api.com/v6/latest/USD').then(res => res.json())
        .then(data => {
            console.log(data)

            let str = "<select>"

            for (const key in data.rates) {
                str += `<option >${key}</option>`;
            }
            str += "</select>"
            document.write(str)
        })
}
//Currency table

{
    fetch('https://open.er-api.com/v6/latest/USD').then(res => res.json())
        .then(data => {
            console.log(data)

            let str = ` <table border="1">`
            str += '<tr>';
            for (const num of Object.keys(data.rates)) {
                str += `<td>${num}</td>`;
            }
            str += '</tr>';
            str += '<tr>';
            for (const iterator of Object.keys(data.rates)) {
                str += `<tr><td><b>${iterator}</b></td>`;
                for (const toCurrency of Object.keys(data.rates)) {
                    const exchangeRate = data.rates[toCurrency] / data.rates[iterator];
                    str += `<td>${exchangeRate.toFixed(2)}</td>`;
                }
            }
            str += '</tr>';
            str += "</table>";
            document.write(str)
        })

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

    let form = `<form >`;

    for (const key in car) {
        form += `<label style = 'display:block;'>${key}<input value="${car[key]}" type = ${typeof car[key] === 'number' ? 'number' : (typeof car[key] === 'boolean' ? 'checkbox' : 'text')}></label>`

    }

    form += `</form >`;

    document.write(form);
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

    let arr = [];
    for (const item of persons) {
        for (const key of Object.keys(item)) {
            arr.push(key);
            console.log(arr);
        }
    }
    const copy = arr.filter((value, index, self) => self.indexOf(value) === index)
    console.log(copy);

    let str = `<table border="1">`;
    str += '<tr>';
    for (const iterator of copy) {
        str += `<td><b>${iterator}</b></td>`;
    }
    str += '</tr>';









    for (const person of persons) {
        str += '</tr>';
        for (const iterator of copy) {
            str += `<td>${person[iterator] === undefined ? person[iterator] = '' : person[iterator]}</td>`;
        }
    }

    str += `</table>`;
    document.write(str);
}