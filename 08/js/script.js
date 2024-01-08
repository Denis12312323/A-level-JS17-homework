//blocks
{
    let a = 10
    {
        let b = 20
        {
            let c = 30
            //a = 10, b = 20, c = 30, d не існує
            b++
            a *= 10
        }
        {
            let c = 50
            //a = 100, b = 21, c = 50, d не існує
            b += 500
        }
        {
            const a = 100500
            const d = "value"
            //a = 100500, b = 521, c не існує, d = "value"
            {
                let a = -50
                b = 1000
                //a = -50, b = 1000, c не існує, d = "value"
            }
            //a = 100500, b = 1000, c не існує, d = "value"
        }
        //a = 100, b = 1000, c не існує, d не існує
    }
    console.log(a, b, c, d);
    //a = 100, b не існує, c не існує, d не існує
}
//comparison if
{
    var age = + prompt("Скільки вам років?", "");

    if (age < 0)
        alert("Помилка");
    else if (age < 18)
        alert("школяр");
    else if (age < 30)
        alert("молодь");
    else if (age < 45)
        alert("зрілість");
    else if (age < 60)
        alert("захід сонця");
    else if (age > 60)
        alert("як пенсія?");
    else
        alert("чи кіборг, чи KERNESS");
}

//switch: sizes

{
    {
        let size = prompt('Введите ваш размер верхней одежды \nнапример: \nS \nM \n L \n XL \n XXL').toUpperCase();
        switch (size) {
            case 'S':
                console.log('В США вам бы подошел 6 размер верхней одежды');
                break;
            case 'M':
                console.log('В США вам бы подошел 8-10 размер верхней одежды');
                break;
            case 'L':
                console.log('В США вам бы подошел 12-14 размер верхней одежды');
                break;
            case 'XL':
                console.log('В США вам бы подошел 16-18 размер верхней одежды');
                break;
            case 'XXL':
                console.log('В США вам бы подошел 20 размер верхней одежды');
                break;
            default:
                console.log('Ви ввели некоректні дані');
                break;
        }
    }
    {
        let size = prompt('Введите ваш размер белья \nнапример:\nXXS \nXS \nS \nM \nL \nXL \nXXL \nXXXL').toUpperCase();

        switch (size) {
            case 'XXS':
                console.log('В США вам бы подошел 8 размер белья');
                break;
            case 'XS':
                console.log('В США вам бы подошел 10 размер белья');
                break;
            case 'S':
                console.log('В США вам бы подошел 12 размер белья');
                break;
            case 'M':
                console.log('В США вам бы подошел 14 размер белья');
                break;
            case 'L':
                console.log('В США вам бы подошел 16 размер белья');
                break;
            case 'XL':
                console.log('В США вам бы подошел 18 размер белья');
                break;
            case 'XXL':
                console.log('В США вам бы подошел 20 размер белья');
                break;
            case 'XXXL':
                console.log('В США вам бы подошел 22 размер белья');
                break;
            default:
                console.log('Ви ввели некоректні дані');
                break;
        }
    }
}
//switch: if

{
    let color = prompt("Введіть колір", "");
    if (color === 'red') {
        document.write("<div style='background-color: red;'>червоний</div>");
        document.write("<div style='background-color: black; color: white;'>чорний</div>");
    } else if (color === 'black') {
        document.write("<div style='background-color: black; color: white;'>чорний</div>");
    }
    else if (color === 'blue') {
        document.write("<div style='background-color: blue;'>синій</div>");
        document.write("<div style='background-color: green;'>зелений</div>");
    } else if (color === 'green') {
        document.write("<div style='background-color: green;'>зелений</div>");
    }
    else {
        document.write("<div style='background-color: gray;'>Я не зрозумів</div>");
    }
}

//noswitch

{
    const noSwitch = (key, cases, defaultKey = 'default') => {
        if (cases[key]) {
            cases[key]();
        } else {
            cases[defaultKey]();
        }
    }



    const drink = prompt("Що ви любите пити")
    noSwitch(drink, {
        воду: () => console.log('Найздоровіший вибір!'),
        чай() {
            console.log('Смачна та корисна штука. Не перестарайтеся з цукром')
        },
        "пиво": () => console.log('Добре влітку, та в міру'),
        віскі: function () {
            console.log('Та ви, батечку, естет! Не забудьте лід і сигару')
        },
        default() {
            console.log('шото я не зрозумів')
        }
    })
}

//closure calc
{
    fetch('https://open.er-api.com/v6/latest/USD').then(res => res.json())
        .then(data => {
            for (const key of Object.keys(data.rates)) {
                const btn = document.createElement('button')
                btn.innerText = key
                document.body.append(btn)

                btn.onclick = () => {
                    let num = prompt('Скільки грошей у вас є?');
                    if (!isNaN(num) && num !== null) {
                        let sum = num / data.rates[key];
                        alert(`${num} ${key} = ${sum.toFixed(2)} usd`)
                    } else {
                        console.log('шото я не зрозумів')
                    }
                }
            }
            console.log(data)
        })
}
//closure calc 2
{
    fetch('https://open.er-api.com/v6/latest/USD').then(res => res.json())
        .then(data => {
            console.log(data)
            let fromStr = document.createElement('select')
            fromStr.id = 'from'

            let toStr = document.createElement('select')
            toStr.id = 'to'
            for (const key of Object.keys(data.rates)) {
                let fromOption = document.createElement('option')
                fromOption.innerText = key
                fromStr.appendChild(fromOption)


                let toOption = document.createElement('option')
                toOption.innerText = key
                toStr.appendChild(toOption)
            }

            document.body.append(fromStr)
            document.body.append(toStr)


            fromStr.onchange = calculateConversion
            toStr.onchange = calculateConversion
            // const btn = document.createElement('button')
            // btn.innerText = 'Calculate'
            // btn.onclick = calculateConversion;
            // document.body.append(btn);


            let input = document.createElement('input');
            input.type = 'number'
            input.id = 'amount'
            document.body.append(input)
            input.oninput = function () {
                const firstRate = document.getElementById('from').value;
                const secondRate = document.getElementById('to').value;



                let amount = (input.value * ((data.rates[firstRate])).toFixed(2)) / (data.rates[secondRate]).toFixed(2)
                let div = document.createElement('div')
                div.id = 'result'
                div.innerText = amount.toFixed(2);
                document.body.append(div);
            }

            function calculateConversion() {
                const firstRate = document.getElementById('from').value;
                const secondRate = document.getElementById('to').value;


                const div = document.createElement('div');
                div.id = 'rate'
                div.innerText = (data.rates[firstRate] / data.rates[secondRate]).toFixed(2);
                document.body.append(div);
            }

        })
}


//countries and cities
{
    fetch('https://raw.githubusercontent.com/russ666/all-countries-and-cities-json/master/countries.min.json').then(res => res.json())
        .then(data => {
            console.log(Object.keys(data)) // Вивчіть структуру, що отримується з сервера в консолі

            let countriesSelect = document.createElement('select')
            countriesSelect.id = 'countries'

            let citiesSelect = document.createElement('select')
            citiesSelect.id = 'cities'

            for (const key of Object.keys(data)) {
                let countriesOption = document.createElement('option')
                countriesOption.innerText = key;
                countriesSelect.appendChild(countriesOption)
            }

            document.body.append(countriesSelect)
            document.body.append(citiesSelect)


            countriesSelect.onchange = () => {
                let countries = document.getElementById('countries').value
                let cities = document.getElementById('cities')

                citiesSelect.innerText = '';
                console.log(countries);
                for (const i of data[countries]) {
                    let citiesOption = document.createElement('option')
                    citiesOption.innerText = i;
                    citiesSelect.appendChild(citiesOption)
                }
            }
        })
}



