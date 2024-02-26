//while confirm
{
    while (!confirm()) {
        console.log('=^.^=')
    }
}
//rray fill
{
    let arr = [];
    let inputUser;
    while (inputUser !== null) {
        inputUser = prompt();
        if (inputUser !== null && inputUser !== '') {
            arr.push(inputUser)
        }
    }
    console.log(arr);
}

//array fill nopush

{
    let arr = [];
    let inputUser;
    let i = 0;
    while (inputUser !== null) {
        inputUser = prompt();
        if (inputUser !== null && inputUser !== '') {
            arr[i] = inputUser;
            i++
        }
    }
    console.log(arr);
}

//infinite probability

{
    let i = 0;
    while (true) {
        i++;
        if (Math.random() > 0.9) {
            alert(i)
            break;
        }
    }
}

//empty loop


while (true) {
    let userInput = prompt();

    if (!(userInput === null)) {
        break;
    }
}

//progression sum
{
    let n = 100;

    let sum = 0;

    for (let i = 0; i < n; i += 3) {
        sum += i;
    }
    console.log(sum);
}

//chess one line
{
    let index = prompt('Введіть число');
    let res = ''
    for (let i = 0; i < index; i++) {
        if (i % 2 === 0) {
            res += '#'
        } else {
            res += ' '
        }
    }
    console.log(res);
}

//numbers
{
    let row = '';

    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            row += j;
        }
        row += '\n'
    }
    console.log(row);
}

//chess

{
    let row = '';

    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 6; j++) {
            if (i % 2 === 0) {
                row += '.#';
            } else {
                row += '#.';
            }
        }
        row += '\n'
    }
    console.log(row);
}

//cubes

{
    let n = prompt('Введите длину массива');
    let arr = [];

    if (!(isNaN(n)) && n !== null) {
        for (let i = 0; i < n; i++) {

            arr.push(i ** 3);
        }
    }
    console.log(arr);
}

//multiply table

{
    let arr = [];
    for (let i = 0; i < 10; i++) {
        let row = [];
        for (let j = 0; j < 10; j++) {
            row[j] = i * j;
            // row.push(i * j);
            console.log(row);
        }
        arr[i] = row;
    }
    console.log(arr);
    console.log(arr[5][6]);
    console.log(arr[7][2]);
}

//read array of objects

{
    let arr = [];
    let i = 0;
    let inputUser;
    while (inputUser !== null) {
        inputUser = prompt('Ведите ключ')
        arr[i]({
            inputUser
        })
        i++
    }
    console.log(arr);
}

//read array of objects

{
    let readArrayOfObjects = () => {
        let arr = [];
        let continueOjb = true;

        while (continueOjb) {
            let obj = {};
            let continueKeys = true;
            while (continueKeys) {
                let key = prompt('Ведите ключ');

                if (key === null) {
                    continueKeys = false;
                    continueOjb = false;
                } else {
                    let value = prompt('Ведите значение');
                    obj[key] = value;
                }
            }

            arr.push(obj);

            continueOjb = confirm('Новый объект?');
        }

        return arr;
    }

    readArrayOfObjects();
}

//Ромбік

{
    let size = 7;
    let str;
    for (let i = 0; i < size; i++) {
        str = '';
        for (let j = 0; j < size - i - 1; j++) {
            str += '.'
        }
        for (let y = 0; y < 2 * i + 1; y++) {
            str += '#'
        }
        for (let j = 0; j < size - i - 1; j++) {
            str += '.'
        }
        console.log(str);
    }



    for (let i = 5; i >= 0; i--) {
        let str = '';
        for (let j = 0; j < size - i - 1; j++) {
            str += '.'
        }
        for (let y = 0; y < 2 * i + 1; y++) {
            str += '#'
        }
        for (let j = 0; j < size - i - 1; j++) {
            str += '.'
        }
        console.log(str);
    }
}

//DOM: multiply table

{
    let arr = [];
    for (let i = 1; i < 10; i++) {
        let row = [];
        let div = document.createElement('div');
        for (let j = 1; j < 10; j++) {
            row[j] = i * j;
            let btn = document.createElement('button');
            btn.innerText = row[j]
            div.appendChild(btn)
        }
        document.body.append(div)
    }
    console.log(arr);
}

//DOM: highlight cell

{
    let table = document.createElement('table');

    for (let i = 1; i < 10; i++) {
        let row = [];
        let rowTr = document.createElement('tr');
        for (let j = 1; j < 10; j++) {
            row[j] = i * j;
            let cell = document.createElement('td');
            cell.style.border = '1px solid black';
            cell.style.width = '20px';
            cell.style.height = '20px';
            cell.innerText = row[j]


            cell.addEventListener('mouseover', red)

            function red() {
                cell.style.backgroundColor = '#b5818c';
            }

            cell.addEventListener('mouseout', clearFun)

            function clearFun() {
                cell.style.backgroundColor = '';
            }

            rowTr.appendChild(cell)
        }
        table.appendChild(rowTr);
    }

    document.body.appendChild(table);

}


//DOM: Highlight cross

{
    let table = document.createElement('table');

    let lightedRow;
    let lightedColumn;

    for (let i = 1; i < 10; i++) {
        let row = [];
        let rowTr = document.createElement('tr');


        for (let j = 1; j < 10; j++) {
            row[j] = i * j;
            let cell = document.createElement('td');
            cell.style.border = '1px solid black';
            cell.style.width = '20px';
            cell.style.height = '20px';
            cell.innerText = row[j]


            cell.addEventListener('mouseover', function () {
                red(cell, i, j)
            })

            function red(cell, row, column) {
                cell.style.backgroundColor = '#b5818c';
                lightedRow = row;
                lightedColumn = column;

                for (let i = 0; i < 9; i++) {

                    table.children[i].children[lightedColumn - 1].style.backgroundColor = '#b5818c';
                }

                for (let j = 0; j < 9; j++) {
                    table.children[lightedRow - 1].children[j].style.backgroundColor = '#b5818c';
                }
            }

            cell.addEventListener('mouseout', clearFun)

            function clearFun() {
                if (lightedRow) {
                    for (let i = 0; i < 9; i++) {
                        table.children[i].children[lightedColumn - 1].style.backgroundColor = '';
                    }
                }

                if (lightedColumn) {
                    for (let j = 0; j < 9; j++) {
                        table.children[lightedRow - 1].children[j].style.backgroundColor = '';
                    }
                }
            }

            rowTr.appendChild(cell)
        }
        table.appendChild(rowTr);
    }

    document.body.appendChild(table);

}
