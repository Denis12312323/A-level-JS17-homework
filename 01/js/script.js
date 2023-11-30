



{
    let secondsInMinute = prompt('Сколько секунд в минуте?');

    let minuteInHour = prompt('Сколько минут в часе?');

    let HourInDay = prompt('Сколько часов в дне?');

    let dayInYear = prompt('Сколько дней в году?');

    let secondsInYear = secondsInMinute * minuteInHour * HourInDay * dayInYear;

    alert("Секунд в году: " + secondsInYear);

    alert("Секунд в месяце: " + secondsInMinute * minuteInHour * HourInDay * 30);
}


{
    const credentials = {
        login: 'admin',
        password: 'qwerty',
    };
    const login = document.querySelector('.login');
    const btn = document.querySelector('.btnLog');

    const btnPassword = document.querySelector('.btnPass');
    const password = document.querySelector('.password');

    btn.addEventListener('click', () => {
        if (login.value === credentials.login) {
            btn.classList.toggle('true');
        } else {
            btn.classList.toggle('false');
        }
    });

    btnPassword.addEventListener('click', () => {
        if (password.value === credentials.password) {
            btnPassword.classList.toggle('true');
        } else {
            btnPassword.classList.toggle('false')
        }
    })
}