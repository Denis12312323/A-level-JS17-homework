//Arrow to Functions

{

    function temperature(e) {
        return (e * 1.8) + 32
    }
    temperature(prompt('Температура в градусах цельсия?'));

    //==============
    function color(r, g, b) {
        return `#${r.toString(16).padStart(2, '00')}${g.toString(16).padStart(2, '00')}${b.toString(16).padStart(2, '00')}`;
    }
    let hexRes = color(Number(prompt('Количество красного цвета')), Number(prompt('Количество зеленого цвета')), Number(prompt('Количество синего цвета')));
    document.body.style.backgroundColor = hexRes;

    //==============


    function apartment(item) {
        return {
            entrance: Math.ceil(item / (4 * 9)),
            floor: Math.ceil((item % 36) / 4),
        }
    }
    console.log(apartment(prompt("Введіть номер квартири:")));

    //==============

    function str() {
        let surname = prompt("Введите вашу фамилию").trim();
        let name = prompt("Введите ваше имя").trim();
        let patronymic = prompt("Введите ваше отчество").trim();
        let space = ' ';

        return {
            name: name.slice(0, 1).toUpperCase() + name.slice(1).toLowerCase(),
            surname: surname.slice(0, 1).toUpperCase() + surname.slice(1).toLowerCase(),
            fatherName: patronymic.slice(0, 1).toUpperCase() + patronymic.slice(1).toLowerCase(),
            fullName: surname.slice(0, 1).toUpperCase() + surname.slice(1).toLowerCase() + space + name.slice(0, 1).toUpperCase() + name.slice(1).toLowerCase() + space + patronymic.slice(0, 1).toUpperCase() + patronymic.slice(1).toLowerCase()
        }
    }
    console.log(str());

    //==============

    function line(str) {
        let lines = str.split("\\n");
        let multiLineString = lines.join('\n');
        return multiLineString;
    }
    let userInput = prompt("Введіть рядок (використовуйте \\n для нового рядка):");
    let result = line(userInput);
    console.log(result);
}
//createPerson
{
    function createPerson(name, surname) {
        let person = {
            name,
            surname,
            getFullName: function () {
                return `${this.name} ${this.fatherName || ""} ${this.surname}`

                // if (this.fatherName) {
                //     return `${this.name} ${this.surname} ${this.fatherName}`
                // }else{
                //     return `${this.name} ${this.surname}`
                // }
            }
        }

        return person;

    }
    const a = createPerson("Вася", "Пупкін")
    const b = createPerson("Ганна", "Іванова")
    const c = createPerson("Єлизавета", "Петрова")

    console.log(a.getFullName()) //Вася Пупкін
    a.fatherName = 'Іванович'
    console.log(a.getFullName()) //Вася Іванович Пупкін

    console.log(b.getFullName()) //Ганна Іванова
}

//createPersonClosure

{
    function createPersonClosure(name, surname) {
        let age;
        let fatherName;

        function getName() {
            return name;
        }

        function getSurname() {
            return surname;
        }

        function getFatherName() {
            if (fatherName) {
                return fatherName;
            }
        }
        function getAge() {
            return age;
        }
        function getFullName() {
            return `${name} ${fatherName || ""} ${surname}`
        }

        function setName(newName) {
            if (validateString(newName)) {
                name = newName
            }
            return name;
        }

        function setSurname(newSurname) {
            if (validateString(newSurname)) {
                surname = newSurname
            }
            return surname;
        }
        function setFatherName(newFatherName) {
            if (validateString(newFatherName)) {
                fatherName = newFatherName
            }
            return fatherName
        }
        function setAge(newAge) {
            if (validateNumber(newAge)) {
                age = newAge
            }
            return age;
        }
        function setFullName(fullName) {
            const arr = fullName.split(' ');
            if (arr.length >= 2) {
                setSurname(arr[0]);
                setName(arr[1]);
                if (arr.length === 3) {
                    setFatherName(arr[2]);
                }
            }
            return getFullName();
        }

        //validate

        function validateNumber(num) {
            return typeof num === 'number' && num >= 0 && num <= 100
        }
        function validateString(str) {
            return typeof str === 'string' && str.length > 0 && /^[A-ZА-ЯІЇЄ][a-zа-яіїє']+$/.test(str)
        }

        return {
            setName,
            setSurname,
            setFatherName,
            setAge,
            setFullName,
            getName,
            getSurname,
            getFatherName,
            getAge,
            getFullName
        }
    }

    const a = createPersonClosure("Вася", "Пупкін")
    const b = createPersonClosure("Ганна", "Іванова")
    console.log(a.getName())
    a.setAge(15)


    console.log(a.getAge());
    a.setAge(150) //не працює

    b.setFullName("Петрова Ганна Миколаївна")
    console.log(b.getFatherName()) //Миколаївна
}

//createPersonClosureDestruct

{
    function createPersonClosureDestruct({ name = 'Anon', surname = 'Ananov', fatherName = 'Anonovich', age = 'xz' } = {}) {
        function getName() {
            return name;
        }

        function getSurname() {
            return surname;
        }

        function getFatherName() {
            if (fatherName) {
                return fatherName;
            }
        }
        function getAge() {
            return age;
        }
        function getFullName() {
            return `${name} ${fatherName || ""} ${surname}`
        }

        function setName(newName) {
            if (validateString(newName)) {
                name = newName
            }
            return name;
        }

        function setSurname(newSurname) {
            if (validateString(newSurname)) {
                surname = newSurname
            }
            return surname;
        }
        function setFatherName(newFatherName) {
            if (validateString(newFatherName)) {
                fatherName = newFatherName
            }
            return fatherName
        }
        function setAge(newAge) {
            if (validateNumber(newAge)) {
                age = newAge
            }
            return age;
        }
        function setFullName(fullName) {
            const arr = fullName.split(' ');
            if (arr.length >= 2) {
                setSurname(arr[0]);
                setName(arr[1]);
                if (arr.length === 3) {
                    setFatherName(arr[2]);
                }
            }
            return getFullName();
        }

        //validate

        function validateNumber(num) {
            return typeof num === 'number' && num >= 0 && num <= 100
        }
        function validateString(str) {
            return typeof str === 'string' && str.length > 0 && /^[A-ZА-ЯІЇЄ][a-zа-яіїє']+$/.test(str)
        }

        return {
            setName,
            setSurname,
            setFatherName,
            setAge,
            setFullName,
            getName,
            getSurname,
            getFatherName,
            getAge,
            getFullName
        }
    }
    const b = createPersonClosureDestruct({ name: 'Миколай', age: 75 })
}
//isSorted

{
    function isSorted(...args) {
        for (let i = 0; i < args.length; i++) {
            if (typeof args[i] !== 'number') {
                return false;
            }
            if (args[i] <= args[i - 1]) {
                return false
            }
        }
        return true;
    }
    isSorted(1, 2, 3, 4, 5)
}

//Test isSorted
{
    function isSorted(...args) {
        for (let i = 0; i < args.length; i++) {
            if (typeof args[i] !== 'number') {
                return false;
            }
            if (args[i] <= args[i - 1]) {
                return false
            }

        }
        return true
    }
    let arr = [];
    let userInput;

    while (true) {
        userInput = prompt();
        if (userInput === null || userInput === '') {
            break;
        }
        if (!isNaN(userInput)) {
            arr.push(+userInput)
        } else {
            console.log("Будь ласка, введіть коректне число.");
        }
    }
    isSorted(...arr);
}

//personForm

{
    function personForm(parent, person) {
        const nameInput = document.createElement('input');
        const surnameInput = document.createElement('input');
        const fatherNameInput = document.createElement('input');
        const ageInput = document.createElement('input');
        const fullNameInput = document.createElement('input');


        parent.appendChild(nameInput);
        parent.appendChild(surnameInput);
        parent.appendChild(fatherNameInput);
        parent.appendChild(ageInput);
        parent.appendChild(fullNameInput);


        nameInput.value = person.getName();
        surnameInput.value = person.getSurname();
        fatherNameInput.value = person.getFatherName() || '';
        ageInput.value = person.getAge();
        fullNameInput.value = person.getFullName();

        nameInput.oninput = () => {
            const newName = person.setName(nameInput.value)
            nameInput.value = newName;
            fullNameInput.value = person.getFullName();
        }

        surnameInput.oninput = () => {
            const newSurname = person.setSurname(surnameInput.value)
            nameInput.value = newSurname
            fullNameInput.value = person.getFullName();
        }

        fatherNameInput.oninput = () => {

            const newFatherName = person.setFatherName(fatherNameInput.value)
            fatherNameInput.value = newFatherName
            fullNameInput.value = person.getFullName()
        }

        ageInput.oninput = () => {

            const newAge = person.setAge(parseInt(ageInput.value, 10));
            ageInput.value = newAge;
        }

        fullNameInput.oninput = () => {
            const newFullName = person.setFullName(fullNameInput.value);
            fullNameInput.value = newFullName
            nameInput.value = person.getName()
            surnameInput.value = person.getSurname()
            fatherNameInput.value = person.getFatherName() || ''
            ageInput.value = person.getAge();
        }
    }
    const b = createPersonClosure("Ганна", "Іванова")
    b.setAge(15)
    b.setFullName("Петрова Ганна Миколаївна")

    const parentElement = document.body;

    personForm(parentElement, b)



    function createPersonClosure(name, surname) {
        let age;
        let fatherName;

        function getName() {
            return name;
        }

        function getSurname() {
            return surname;
        }

        function getFatherName() {
            if (fatherName) {
                return fatherName;
            }
        }
        function getAge() {
            return age;
        }
        function getFullName() {
            return `${name} ${fatherName || ""} ${surname}`
        }

        function setName(newName) {
            if (validateString(newName)) {
                name = newName
            }
            return name;
        }

        function setSurname(newSurname) {
            if (validateString(newSurname)) {
                surname = newSurname
            }
            return surname;
        }
        function setFatherName(newFatherName) {
            if (validateString(newFatherName)) {
                fatherName = newFatherName
            }
            return fatherName
        }
        function setAge(newAge) {
            if (validateNumber(newAge)) {
                age = newAge
            }
            return age;
        }
        function setFullName(fullName) {
            const arr = fullName.split(' ');
            if (arr.length >= 2) {
                setSurname(arr[0]);
                setName(arr[1]);
                if (arr.length === 3) {
                    setFatherName(arr[2]);
                }
            }
            return getFullName();
        }

        //validate

        function validateNumber(num) {
            return typeof num === 'number' && num >= 0 && num <= 100
        }
        function validateString(str) {
            return typeof str === 'string' && str.length > 0 && /^[A-ZА-ЯІЇЄ][a-zа-яіїє']+$/.test(str)
        }

        return {
            setName,
            setSurname,
            setFatherName,
            setAge,
            setFullName,
            getName,
            getSurname,
            getFatherName,
            getAge,
            getFullName
        }
    }
}

//getSetForm

{
    function getSetForm(parent, getSet) {
        const inputs = {}


        const updateInputs = () => {
            for (const key in inputs) {
                const input = inputs[key]
                const getKey = `get${key}`

                if (getKey in getSet) {
                    input.value = getSet[getKey]()
                }
            }
        }


        for (const key in getSet) {
            const getOrSet = key.slice(0, 3)
            const fieldName = key.slice(3)
            const setKey = `set${fieldName}`
            const getKey = `get${fieldName}`


            if (getOrSet === 'get') {

                const input = document.createElement('input')
                input.placeholder = fieldName

                input.disabled = !(setKey in getSet)

                parent.appendChild(input)

                input.oninput = () => {
                    const value = getSet[setKey](input.value)
                    input.value = value
                    updateInputs()
                }
                inputs[fieldName] = input
            }
        }
        updateInputs()
    }
    let brand = 'BMW', model = 'X5', volume = 2.4
    const car = {
        getBrand() {
            return brand
        },
        setBrand(newBrand) {
            if (newBrand && typeof newBrand === 'string') {
                return newBrand;
            }
            return this.getBrand();
        },
        getModel() {
            return model
        }
        ,
        setModel(newModel) {
            if (newModel && typeof newModel === 'string') {
                model = newModel
            }
            return this.setModel()
        },
        getVolume() {
            return volume
        },
        setVolume(newVolume) {
            newVolume = Number(newVolume)
            if (newVolume && typeof newVolume >= 0 && newVolume < 20) {
                volume = newVolume
            }
            return this.getVolume()
        },
        getTax() {
            return this.getVolume() * 100;
        }
    }

    getSetForm(document.body, car)
}




{
    

    for (let i = 0; i < 5; i++) {
        let counter = 0
        const btn = document.createElement('button')
        document.body.append(btn)
        btn.innerText = counter
        btn.onclick = () => {
            btn.innerHTML = counter++
        }
    }
}


























let obj = {
    f1() {
        console.log(this)
        this.f3 = () => console.log(this);
    },
    f2: () => console.log(this)
}

let obj2 = {
    f1: obj.f1,
    f2: obj.f1,
    f3: obj.f3,
}

obj2.f1()
obj2.f2()






let arr = ['a', 'b', 'c', 'd', 'e', 'f'];

for (const iterator of arr) {
    let res = []
    res.push(iterator.toUpperCase())

}
console.log(res);