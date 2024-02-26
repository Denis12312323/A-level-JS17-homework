//Person Constructor
{
    function Person(name, surname) {
        this.name = name
        this.surname = surname

        this.getFullName = function () {
            return `${this.name} ${this.fatherName || ''} ${this.surname}`
        }
    }


    const a = new Person("Вася", "Пупкин")
    const b = new Person("Анна", "Иванова")
    const c = new Person("Елизавета", "Петрова")

    console.log(a.getFullName()) //Вася Пупкин
    a.fatherName = 'Иванович'    //Вася Иванович Пупкин
    console.log(a.getFullName())
    console.log(b.getFullName()) //Анна Иванова
}
//Person Prototype
{
    function Person(name, surname) {
        this.name = name
        this.surname = surname

    }
    Person.prototype.getFullName = function () {
        return `${this.name} ${this.fatherName || ''} ${this.surname}`
    }
    const a = new Person("Вася", "Пупкін")
    const b = new Person("Ганна", "Іванова")
    const c = new Person("Єлизавета", "Петрова")

    console.log(a.getFullName()) // Василь Пупкін
    a.fatherName = 'Іванович' // Василь Іванович Пупкін
    console.log(a.getFullName())
    console.log(b.getFullName()) // Ганна Іванова
}

//Store
{
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
    function Store(reducer) {
        let state = reducer(undefined, {}) //стартова ініціалізація стану, запуск редьюсера зі state === undefined
        let cbs = []

        this.getState = function () {
            return state
        }

        this.subscribe = function (cb) {
            cbs.push(cb)
            return function () {
                cbs = cbs.filter(c => c !== cb)
            }
        }
        this.dispatch = function (action) {
            const newState = reducer(state, action) //пробуємо запустити редьюсер
            if (newState !== state) { //перевіряємо, чи зміг ред'юсер обробити action
                state = newState //якщо зміг, то оновлюємо state 
                for (let cb of cbs) cb() //та запускаємо пiдписникiв
            }
        }
    }

    const store = new Store(reducer);
    console.log(store);
    store.getState()
}
//Password
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
            let isPasswordVar = !isOpen
            if (isPasswordVar) {
                input.type = 'password'
            } else {
                input.type = 'text'
            }
        }

        input.oninput = () => {
            if (onChange) onChange(input.value)
        }
        if (this.onOpenChange) {
            this.onOpenChange(open);
        }

        this.setStyle = function (style) {
            Object.assign(input.style, style);
        };
    }

    let p = new Password(document.body, true)

    p.onChange = data => console.log(data)  //буде корисно при виконаннi LoginForm та Password Verify
    p.onOpenChange = open => console.log(open)

    p.setValue('qwerty')
    console.log(p.getValue())

    p.setOpen(false)
    console.log(p.getOpen())
}

//LoginForm
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




    let form = document.createElement('form')


    let loginLabel = document.createElement('label');
    loginLabel.textContent = 'Login:';
    form.appendChild(loginLabel);



    let loginInput = document.createElement('input')
    loginInput.type = 'text'
    form.appendChild(loginInput);



    let passwordContainer = document.createElement('div');
    form.appendChild(passwordContainer);

    let passwordLbl = document.createElement('label')
    passwordLbl.innerText = 'Password'
    passwordContainer.appendChild(passwordLbl)

    let p = new Password(passwordContainer, true)


    let btn = document.createElement('button')
    btn.innerText = 'Button'
    btn.disabled = true
    form.appendChild(btn);


    loginInput.oninput = () => {
        p.onChange(p.getValue())
        validateForm()
    }
    p.onChange = (value) => {
        validateForm()
    }

    function validateForm() {
        if (loginInput.value !== "" && p.getValue() !== '') {
            btn.disabled = false
        } else {
            btn.disabled = true
        }
    }


    document.body.append(form);
}
//LoginForm Constructor
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

    function LoginForm() {
        let form = document.createElement('form')

        let loginLabel = document.createElement('label');
        loginLabel.textContent = 'Login:';
        form.appendChild(loginLabel);



        let loginInput = document.createElement('input')
        loginInput.type = 'text'
        form.appendChild(loginInput);



        let passwordContainer = document.createElement('div');
        form.appendChild(passwordContainer);

        let passwordLbl = document.createElement('label')
        passwordLbl.innerText = 'Password'
        passwordContainer.appendChild(passwordLbl)

        let p = new Password(passwordContainer, true)


        let btn = document.createElement('button')
        btn.innerText = 'Button'
        form.appendChild(btn);


        document.body.append(form);



        this.getLogin = function () {
            return loginInput.value
        }
        this.setLogin = function (value) {
            loginInput.value = value
        }


        this.getPassword = function () {
            return p.getValue()
        }
        this.setPassword = function (value) {
            p.setValue(value)
        }



        this.getOpen = function () {
            return p.getOpen()
        }
        this.setOpen = function (isOpen) {
            p.setOpen(isOpen)
        }



        this.onChange = function (value) {
            p.onChange = value
        }
        this.onOpenChange = function (value) {
            p.onOpenChange = value
        };




        loginInput.oninput = () => {
            p.onChange(p.getValue())
            validateForm()
        }

        p.onChange = () => {
            validateForm()
        }

        function validateForm() {
            if (loginInput.value !== "" && p.getValue() !== '') {
                btn.disabled = false
            } else {
                btn.disabled = true
            }
        }
    }


    const loginForm = new LoginForm();



    loginForm.setLogin('qwerty')
    loginForm.setPassword('12345')


}

//Password Verify
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


        this.onChange = function (n) {
            input.onChange  = n
        }
    
        this.onOpenChange = function (n) {
            input.onOpenChange = n;
        };
    }




    function PasswordVerify(parent, open) {
        let p1Container = document.createElement('div');
        let p2Container = document.createElement('div');
    
        parent.appendChild(p1Container);
        parent.appendChild(p2Container);
    
        let p1 = new Password(p1Container, open);
        let p2 = new Password(p2Container, false); 
    
        this.verifyPasswords = function () {
            let value1 = p1.getValue();
            let value2 = p2.getValue();
    
            if (value1 !== value2) {
                p1.setStyle({ border: '2px solid red' });
                p2.setStyle({ border: '2px solid red' });
            } else {
                p1.setStyle({ border: '2px solid black' });
                p2.setStyle({ border: '2px solid black' });
            }
        };
    
        p1.onChange = () => {
            p2.setValue(p1.getValue());
            this.verifyPasswords();
        };
    
        p2.onChange = () => {
            this.verifyPasswords();
        };
    
        p1.onOpenChange = open => {
            if (open) {
                p2Container.style.display = 'none';
            } else {
                p2Container.style.display = 'block';
            }
        };
    
        p2.onOpenChange = open => {
            if (open) {
                p2Container.style.display = 'none';
            } else {
                p2Container.style.display = 'block';
            }
        };
    }
    
    const passwordVerify = new PasswordVerify(document.body, true);

}
