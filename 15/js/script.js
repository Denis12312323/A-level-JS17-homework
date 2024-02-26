//fetch basic
{
    function swapiTable(element, jsonData) {
        const table = document.createElement('table')
        table.border = '1'


        const tableRow = document.createElement('tr')
        for (const key in jsonData) {
            const th = document.createElement('th')
            th.textContent = key
            tableRow.appendChild(th)
        }

        table.appendChild(tableRow)

        const dataRow = document.createElement('tr')
        for (const key in jsonData) {
            const td = document.createElement('td')
            const value = jsonData[key];


            if (typeof value === 'string' && value.startsWith('http') || Array.isArray(value)) {
                if (Array.isArray(value)) {
                    value.forEach(item => {
                        if (typeof item === 'string' && item.startsWith('http')) {
                            const btn = document.createElement('button');
                            btn.textContent = 'Link';
                            btn.onclick = () => window.open(item);
                            td.appendChild(btn);
                        }
                    })
                } else {
                    const btn = document.createElement('button')
                    btn.textContent = 'Link'
                    btn.onclick = () => window.open(value);
                    td.appendChild(btn)
                }
            } else {
                td.textContent = value;
            }

            dataRow.appendChild(td)
        }
        table.appendChild(dataRow)
        element.appendChild(table)
    }


    fetch('https://swapi.dev/api/people/1/')
        .then(res => res.json())
        .then(luke => swapiTable(document.body, luke))
}
//fetch improved
{
    function swapiTable(element, jsonData) {
        const table = document.createElement('table')
        const tbody = document.createElement('tbody')




        for (const key in jsonData) {
            const row = document.createElement('tr')
            const cell = document.createElement('td')
            cell.textContent = key

            const valueCell = document.createElement('td')

            if (typeof jsonData[key] === 'object') {
                if (Array.isArray(jsonData[key])) {
                    const arrayTable = document.createElement('table');
                    const arrayTbody = document.createElement('tbody');

                    jsonData[key].forEach(item => {
                        const arrayRow = document.createElement('tr')
                        const arrayCell = document.createElement('td')
                        if (typeof item === 'string' && item.startsWith('https://swapi.dev/api/')) {
                            const btn = document.createElement('button')
                            btn.textContent = 'Data'
                            btn.onclick = () => {
                                fetch(item)
                                    .then(res => res.json())
                                    .then(newData => {
                                        swapiTable(arrayCell, newData)
                                    })
                            }
                            arrayCell.appendChild(btn)
                        } else {
                            arrayCell.textContent = item
                        }

                        arrayRow.appendChild(arrayCell)
                        arrayTbody.appendChild(arrayRow)
                    })
                    arrayTable.appendChild(arrayTbody)
                    valueCell.appendChild(arrayTable)
                } else {
                    swapiTable(valueCell, jsonData[key])
                }

            } else {
                if (typeof jsonData[key] === 'string' && jsonData[key].startsWith('https://swapi.dev/api/')) {
                    const btn = document.createElement('button')
                    btn.textContent = 'Data'
                    btn.onclick = () => {
                        fetch(jsonData[key])
                            .then(res => res.json())
                            .then(newData => {
                                swapiTable(valueCell, newData)
                            })
                    }
                    valueCell.appendChild(btn)
                } else {
                    valueCell.textContent = jsonData[key]
                }
            }
            row.appendChild(cell)
            row.appendChild(valueCell)
            tbody.appendChild(row)
        }
        table.appendChild(tbody);
        element.appendChild(table)
    }
    fetch('https://swapi.dev/api/people/1/')
        .then(res => res.json())
        .then(luke => {
            swapiTable(document.body, luke);
        })
}

//race
{
    const delay = ms => new Promise(ok => setTimeout(() => ok(ms), ms));


    const data = fetch('https://swapi.dev/api/people/1/')
        .then(res => res.json())


    Promise.race([data, delay(2000)])
        .then(result => {
            if (typeof result === 'number') {
                alert('delay перший')
            } else {
                alert('Запит до API перший')
                console.log(result);
            }
        })
}

//Promisify: confirm
{
    function confirmPromise(text) {
        return new Promise((resolve, reject) => {
            let result = confirm(text)
            if (result) {
                resolve()
            } else {
                reject()
            }
        })
    }

    confirmPromise('Проміси це складно?').then(
        () => console.log('не так вже й складно'),
        () => console.log('respect за посидючість і уважність'))
}

//Promisify: prompt
{
    function promptPromise(text) {
        return new Promise((resolve, reject) => {
            let result = prompt(text)
            if (result === null || result === '') {
                reject()
            } else {
                resolve(result)
            }
        })
    }
    promptPromise("Як тебе звуть?").then(
        name => console.log(`Тебе звуть ${name}`),
        () => console.log('Ну навіщо морозитися, нормально ж спілкувалися'))
}


//Promisify: LoginForm
{
    function Password(parent, open) {
        let input = document.createElement('input')
        input.type = 'password'
        parent.appendChild(input)

        let inputCheckbox = document.createElement('input')
        inputCheckbox.type = 'checkbox'
        inputCheckbox.checked = open
        parent.appendChild(inputCheckbox)


        inputCheckbox.onclick = () => {
            open = !open
            if (open) {
                input.type = 'password'
            } else {
                input.type = 'text'
            }
        }


        this.getValue = function () {
            return input.value
        }

        this.setValue = function (value) {
            input.value = value
        }





        this.getOpen = function () {
            return open
        }

        this.setOpen = function (isOpen) {
            open = !isOpen;
            if (isOpen) {
                input.type = 'password'
            } else {
                input.type = 'text'
            }
        }

        input.oninput = () => {
            if (this.onChange) this.onChange(input.value)
        }
        if (this.onOpenChange) {
            this.onOpenChange(open);
        }

        this.setStyle = function (style) {
            Object.assign(input.style, style);
        };
    }

    function LoginForm(parent) {
        let loginInput = new Password(parent)
        let passwordInput = new Password(parent)

        let btn = document.createElement('button');
        btn.innerText = 'Log in'
        parent.appendChild(btn)

        let resolve, reject;
        const promise = new Promise((res, rej) => {
            resolve = res
            reject = rej
        })

        btn.onclick = () => {
            resolve({ login: loginInput.getValue(), password: passwordInput.getValue() })
        }


        this.promise = promise
    }

    function loginPromise(parent) {
        return new Promise((resolve, reject) => {
            const form = new LoginForm(parent);
            form.promise.then(resolve).catch(reject);
        });
    }

    loginPromise(document.body).then(({ login, password }) => console.log(`Ви ввели ${login} та ${password}`))
}