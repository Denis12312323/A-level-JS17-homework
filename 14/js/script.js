//Рекурсія: HTML tree

{
    function htmlTree(param) {
        let result = `<${param.tagName}`

        if (param.attrs) {
            for (const [key, value] of Object.entries(param.attrs)) {
                result += ` ${key}="${value}"`;
            }
        }


        result += '>';


        if (param.children) {
            for (const child of param.children) {
                if (typeof child === 'string') {
                    result += child
                } else {
                    result += htmlTree(child)
                }
            }
        }


        result += `</${param.tagName}>`;

        return result;
    }





    const table = {
        tagName: 'table',
        attrs: {
            border: "1",
        },
        children: [
            {
                tagName: 'tr',
                children: [
                    {
                        tagName: "td",
                        children: ["1x1"],
                    },
                    {
                        tagName: "td",
                        children: ["1x2"],
                    },
                ]
            },
            {
                tagName: 'tr',
                children: [
                    {
                        tagName: "td",
                        children: ["2x1"],
                    },
                    {
                        tagName: "td",
                        children: ["2x2"],
                    },
                ]
            }
        ]
    }
    document.write(htmlTree(table));


}

//Рекурсія: DOM tree
{
    function domTree(parent, param) {
        const element = document.createElement(param.tagName);


        if (param.attrs) {
            for (const [key, value] of Object.entries(param.attrs)) {
                element.setAttribute(key, value);
            }
        }



        if (param.children) {
            for (const child of param.children) {
                if (typeof child === 'string') {
                    element.appendChild(document.createTextNode(child));
                } else {
                    domTree(element, child)
                }
            }
        }
        parent.appendChild(element);
    }



    const table = {
        tagName: 'table',
        attrs: {
            border: '1',
        },
        children: [
            {
                tagName: 'tr',
                children: [
                    {
                        tagName: 'td',
                        children: ['1x1'],
                    },
                    {
                        tagName: 'td',
                        children: ['1x2'],
                    },
                ],
            },
            {
                tagName: 'tr',
                children: [
                    {
                        tagName: 'td',
                        children: ['2x1'],
                    },
                    {
                        tagName: 'td',
                        children: ['2x2'],
                    },
                ],
            },
        ],
    };

    domTree(document.body, table);
}

//Рекурсія: Deep Copy
{
    function deepCopy(obj) {
        if (Array.isArray(obj)) {
            return obj.map(item => deepCopy(item))
        } else if (typeof obj === 'object' && obj !== null) {

            let copiedObj = {}

            for (const key in obj) {
                if (obj.hasOwnProperty(key)) {
                    copiedObj[key] = deepCopy(obj[key])
                }
            }
            return copiedObj
        } else {
            return obj;
        }
    }

    const arr = [1, "string", null, undefined, { a: 15, b: 10, c: [1, 2, 3, 4], d: undefined, e: true }, true, false]
    const arr2 = deepCopy(arr)
    console.log(arr2);
}
//Рекурсия: My Stringify
{
    function stringify(obj) {
        if (typeof obj === 'undefined') {
            return 'null';
        } else if (typeof obj === 'function') {
            return undefined
        } else if (obj === null || typeof obj !== 'object') {
            return JSON.stringify(obj)
        } else if (Array.isArray(obj)) {
            return '[' + obj.map(item => stringify(item)).join(',') + ']'
        } else {
            let result = '{'
            let keys = Object.keys(obj)
            for (let i = 0; i < keys.length; i++) {
                const key = keys[i];
                const value = stringify(obj[key])
                if (typeof value !== 'undefined') {
                    result += `"${key}":${value}`
                    if (i < keys.length - 1) {
                        result += ',';
                    }
                }
            }
            result += '}'
            return result
        }
    }

    const arr = [1, "string", null, undefined, { a: 15, b: 10, c: [1, 2, 3, 4], d: undefined, e: true }, true, false];
    const jsonString = stringify(arr);

    console.log(JSON.parse(jsonString)); // не повинно поламатися і повернути структуру, у всьому схожу з оригінальним arr або table
    console.log(jsonString === JSON.stringify(arr)); // повинно бути true
}


//Рекурсія: getElementById throw
{
    let a = document.createElement('div')
    a.id = 'targetElementId'
    document.body.append(a)
    function getElementById(idToFind) {
        function walker(parent) {
            for (const child of parent.children) {
                if (child.id === idToFind) {
                    throw child
                }
                if (child.children.length > 0) {
                    walker(child)
                }
            }
        }

        try {
            walker(document.body)
        } catch (element) {
            return element
        }

        return null
    }

    try {
        const result = getElementById('targetElementId')
        console.log('Знайдено елемент з id: ', result);
    } catch (element){
        console.log('Елемент не знайдено.');
    }
}
