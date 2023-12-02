
// String: greeting
{
    let name = prompt("Enter your name");
    alert(`Привет, ${name}!`);
}


// String: gopni4ek
{
    let str = prompt("Введите любое предложение");
    let arr = str.split(',').join(", блін,");
    console.log(arr);
}


// String: capitalize
{
    let str = prompt("Введите cANBerRa");
    let line = str.slice(0, 1).toUpperCase() + str.slice(1).toLowerCase();
    console.log(line);
}


// String: word count
{
    let str = "Було жарко. Василь пив пиво вприкуску з креветками.";
    let arr = str.split(" ");
    console.log(arr.length);
}


// String: credentials
{
    let surname = prompt("Введите вашу фамилию").trim();
    let name = prompt("Введите ваше имя").trim();
    let patronymic = prompt("Введите ваше отчество").trim();
    
    let space = ' ';
    let line = surname.slice(0, 1).toUpperCase() + surname.slice(1).toLowerCase() + space + name.slice(0, 1).toUpperCase() + name.slice(1).toLowerCase()+ space + patronymic.slice(0, 1).toUpperCase() + patronymic.slice(1).toLowerCase();

    console.log(line);
}


// String: beer
{
    let str = "Було жарко. Василь пив пиво вприкуску з креветками.";
    let result = str.split(" ");
    console.log(result);
    result[4] = 'чай';
    result[result.length - 1] = 'пряниками.';
    console.log(result.join(" "));
}

// String: no tag
{
    let str = "якийсь текст, в якому є один тег <br /> і всяке інше";

    let start = str.indexOf("<");
    let end = str.indexOf(">");
    console.log(start, end);
    console.log(str.slice(0, 33) + str.slice(39));
}

// String: no tag
{
    let str = "якийсь текст, в якому є один тег <br /> і всяке інше";

    let start = str.indexOf("<");
    let end = str.indexOf(">");
    console.log(start, end);
    console.log(str.slice(0, 33) + str.slice(33, 39).toUpperCase() + str.slice(39));
}

// String: new line
{
    let str = prompt("Введите любое предложение");

    let arr = str.split(" ");

    console.log(arr.join("\n"));
}

// String: new line
{
    let str = prompt("Введіть посилання на YouTube");
    const youtube = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;

    let arr = str.match(youtube);

    console.log(arr, arr[1]);

    let video = `<iframe width="560" height="315" src="https://www.youtube.com/embed/${arr[1]}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;

    document.write(video);
    
}

