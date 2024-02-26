//makeProfileTimer

{
    const timer = makeProfileTimer();

    alert('Вимiрюємо час роботи цього alert')
    alert(timer())


    const timer2 = makeProfileTimer()

    prompt('')


    alert(`Час роботи двух аlert та одного prompt ${timer()}`)
    alert(`Час роботи двух аlert та одного prompt ${timer2()}`)



    function makeProfileTimer() {
        let start = performance.now();


        return function () {
            let end = performance.now();
            return (start - end).toFixed(2)
        }
    }
}

//makeSaver

{
    let saver = makeSaver(Math.random) //створює функцію-сховище результату переданої як параметр функції (Math.random 
    // у прикладі). На цьому етапі Math.random НЕ ВИКЛИКАЄТЬСЯ
    let value1 = saver()              //saver викликає передану в makeSaver функцію, запам'ятовує результат і повертає його
    let value2 = saver()              //saver надалі просто зберігає результат функції, і більше НЕ викликає передану 
    //в makeSaver функцію;
    alert(`Random: ${value1} === ${value2}`)

    let saver2 = makeSaver(() => {
        console.log('saved function called');
        return [null, undefined, false, '', 0, Math.random()][Math.floor(Math.random() * 6)]
    })
    let value3 = saver2()
    let value4 = saver2()

    console.log(value3 === value4); // теж має бути true



    let namePrompt = prompt.bind(window, 'Як тебе звуть?')
    let nameSaver = makeSaver(namePrompt)
    alert(`Привіт! Prompt ще не було!`)
    alert(`Привіт ${nameSaver()}. Щойно запустився prompt, перший та останній раз`)
    alert(`Слухай, ${nameSaver()}, го пити пиво. Адже prompt був лише один раз`)



    function makeSaver(rnd) {
        let res;
        let called = false
        return function () {
            if (!called) {
                res = rnd()
                called = true
            }
            return res;
        }
    }
}

{
    let pow5 = myBind(Math.pow, Math, [, 5]) // перший параметр - функція для біндингу значень за замовчуванням, 
    // другий - this для цієї функції, третій - масив, в якому undefined означає
    // параметри, які мають передаватися під час виклику,
    // інші значення є значеннями за замовчуванням:
    let cube = myBind(Math.pow, Math, [, 3]) // cube зводить число в куб

    console.log(pow5(2));// => 32, викликає Math.pow(2,5), співвіднесіть з [undefined, 5]
    console.log(pow5(4)); // => 1024, викликає Math.pow(4,5), співвіднесіть з [undefined, 5]
    console.log(cube(3)); // => 27


    let chessMin = myBind(Math.min, Math, [, 4, , 5, , 8, , 9])
    console.log(chessMin(-1, -5, 3, 15)); // викликає Math.min(-1, 4, -5, 5, 3, 8, 15, 9), результат -5



    let zeroPrompt = myBind(prompt, window, [undefined, "0"]) // аналогічно, тільки тепер задається "0" як текст за замовчанням в prompt,
    // а текст запрошення користувача задається під час виклику zeroPrompt
    let someNumber = zeroPrompt("Введіть число") // викликає prompt("Введіть число","0")
    console.log(someNumber);
    const bindedJoiner = myBind((...params) => params.join(''), null, [, 'b', , , 'e', 'f'])//('a','c','d') === 'abcdef'
    bindedJoiner('a', 'c', 'd') === 'abcdef'
    bindedJoiner('1', '2', '3') === '1b23ef'



    function myBind(f, context, defaults) {
        return function (...args) {
            const params = []

            for (let i = 0; i < defaults.length; i++) {
                params[i] = defaults[i] === undefined ? args.shift() : defaults[i]
            }
            params.push(...args)
            return f.apply(context, params)
        }
    }
}


{

    function checkResult(original, validator) {
        function wrapper(...params) {
            let res;
            do {
                res = original.apply(this, params)
            } while (!validator(res));
        }

        return wrapper
    }


    //numberPrompt - це функція, яка буде запускати prompt до тих пір, поки користувач не введе число
    const numberPrompt = checkResult(prompt, x => !isNaN(+x))
    let number = +numberPrompt("Введіть число", "0")  //параметри передаються наскрізь до оригіналу. Не забудьте передати це, використовуючи call або apply

    //gamePrompt - це функція, яка буде запускати prompt доти, доки користувач не введе одне зі слів 'камінь', 'ножиці', 'папір'
    const gamePrompt = checkResult(prompt, x => ['камень', 'ножиці', 'папір'].includes(x.toLowerCase()))
    const turn = gamePrompt("Введіть щось зі списку: 'камень', 'ножиці', 'папір'")



    const randomHigh = checkResult(() => Math.random(), x => x >= 0.5 && x <= 1)
    const randomValue = randomHigh()
    console.log(randomValue);



    const alwaysSayYes = checkResult(() => confirm('OK'), (result) => result)
    const agreed = alwaysSayYes();
    console.log(agreed);



    let str = () => {
        let surname = prompt("Введите вашу фамилию").trim();
        let name = prompt("Введите ваше имя").trim();
        let patronymic = prompt("Введите ваше отчество").trim();
        let space = ' ';
        return {
            name: name.slice(0, 1).toUpperCase() + name.slice(1).toLowerCase(),
            surname: surname.slice(0, 1).toUpperCase() + surname.slice(1).toLowerCase(),
            fatherName: patronymic.slice(0, 1).toUpperCase() + patronymic.slice(1).toLowerCase(),
            fullName: surname.slice(0, 1).toUpperCase() + surname.slice(1).toLowerCase() + space + name.slice(0, 1).toUpperCase() + name.slice(1).toLowerCase() + space + patronymic.slice(0, 1).toUpperCase() + patronymic.slice(1).toLowerCase()
        };
    };

    const respectMe = checkResult(str, (result) => Object.values(result).every(value => value))

    const userData = respectMe();
    console.log(userData);
}
