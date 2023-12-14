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

let user = {
    name: 'Denys',
    age: 21,
    showInfo() {
        console.log(`${this.name} крутой мужик`);
    }
}

user.showInfo();


const arr = new Array(100).fill(0).map((e, i) => i);

console.log(arr);

const doReduce = (arr) => {
    var j = 0;
    var res = 0;

    for (j = 0; j < 10000000; j++) {
        res = res + arr.reduce((p, c) => (p + c));

    }

    return res;
}

doReduce(arr);


{
    const obj = {
        a: 50,
        b: 100,
        c: 150,
    }

    for (const pair of Object.entries(obj)) {
        console.log(item[1]);
    }
}