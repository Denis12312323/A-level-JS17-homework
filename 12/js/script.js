function reducer(state, { type, ЩО, СКОКА, ГРОШІ }) { //об'єкт action деструктуризується на три змінні
    if (!state) { //початкове прибирання в кіоску:
        return {
            пиво: {
                price: 100,
                count: 100,
            },
            чіпси: {
                price: 50,
                count: 100,
            },
            сіги: {
                price: 30,
                count: 100,
            },
            каса: 0
        }
    }
    if (type === 'КУПИТИ') { //якщо тип action - КУПИТИ, то:
        let product = state[ЩО];
        let purchaseOfGoods = product.price * СКОКА
        if (product.count >= СКОКА && ГРОШІ >= purchaseOfGoods) {
            return {
                ...state, //беремо все що було з асортименту
                [ЩО]: {
                    ...product,
                    count: product.count - СКОКА
                }, //і зменшуємо те, що купується на кількість
                каса: state.каса + purchaseOfGoods
            }
        } else {
            console.log(`${ЩО} закончилось`);
            return state;
        }
    }
    return state //якщо ми не зрозуміли, що від нас просять в `action` - залишаємо все як є
}

function createStore(reducer) {
    let state = reducer(undefined, {}) //стартова ініціалізація стану, запуск редьюсера зі state === undefined
    let cbs = []                     //масив пiдписникiв

    const getState = () => state            //функція, що повертає змінну із замикання
    const subscribe = cb => (cbs.push(cb),   //запам'ятовуємо пiдписника у масиві
        () => cbs = cbs.filter(c => c !== cb)) //повертаємо функцію unsubscribe, яка видаляє пiдписника зі списку

    const dispatch = action => {
        const newState = reducer(state, action) //пробуємо запустити редьюсер
        if (newState !== state) { //перевіряємо, чи зміг ред'юсер обробити action
            state = newState //якщо зміг, то оновлюємо state 
            for (let cb of cbs) cb() //та запускаємо пiдписникiв
        }
    }

    return {
        getState, //додавання функції getState в результуючий об'єкт
        dispatch,
        subscribe //додавання subscribe в об'єкт
    }
}
let state = reducer(undefined, {}) //перший виклик
console.log(state)

const store = createStore(reducer)


let sub = store.subscribe(() => console.log(store.getState()))

let div = document.createElement('div')
let divMoney = document.createElement('div')
divMoney.innerText = 'Кол-во денег'
let select = document.createElement('select')


let inputHowMuch = document.createElement('input')
inputHowMuch.type = 'number'


let inputMoney = document.createElement('input')
inputHowMuch.type = 'number'

let spanElements = {}

for (const [key, value] of Object.entries(store.getState())) {
    let keyDiv = document.createElement('div')



    keyDiv.innerText = key
    if (key === 'каса') {
        continue;
    }
    document.body.append(keyDiv)

    let spanValue = document.createElement('span')
    spanValue.innerText = `Ціна ${value.price}, Кол-во ${value.count}`
    document.body.append(spanValue)

    spanElements[key] = spanValue

    let option = document.createElement('option')
    option.innerText = key
    select.appendChild(option)

}

let button = document.createElement('button')
button.innerText = 'купити'

let divCash = document.createElement('div')
document.body.append(divCash)

button.onclick = () => {
    store.dispatch({ type: 'КУПИТИ', ЩО: select.value, СКОКА: inputHowMuch.value, ГРОШІ: inputMoney.value })
}
store.subscribe(() => {
    for (const [key, value] of Object.entries(store.getState())) {
        if (key === 'каса') {
            divCash.innerText = `Гроші в касі: ${value}`
            document.title = `Гроші в касі: ${value}`
        } else {
            spanElements[key].innerText = `Ціна ${value.price}, Кол-во ${value.count}`
        }
    }
})

document.body.append(div);
div.appendChild(select);
div.appendChild(inputHowMuch);

document.body.append(button);

document.body.append(divMoney)
divMoney.appendChild(inputMoney)



function createBtn(i = 0) {
    const btn = document.createElement('button')
    btn.innerText = i
    document.body.append(btn)
    btn.onclick = () => {
        btn.disabled = true
        createBtn(i + 1)
    }
}

createBtn()


