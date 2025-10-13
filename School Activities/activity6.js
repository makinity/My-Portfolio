    const name = "Maki";
    const age = 20;
    const isStatus = true;

    alert(`Name: ${name}, Age: ${age}, Status: ${isStatus}`);

    let x = 10;
    let y = 5;
    console.log("Addition       :", x + y);
    console.log("Multiplication :", x * y);
    console.log("Divisiom       :", x / y);
    console.log("Subtraction    :", x - y);

    if(true == a){
        var a = 10;
        let b = 20;
        const c = 30;
    }

    const person = {
        firstname: "Maki",
        lastname: "Juntilla",
        age : 20,
        favourite : ["Tae", "Tubol", "Igit"],
        hobby: {
            games : "codm",
            animes : "sakamoto days",
            doing : "jackstone",
        }

    };
    console.log(person.firstname + " " + person.lastname);
    console.log(person.firstname, person.lastname);
    console.log(person.favourite[1]);
    console.log(person);

    const people = [
        {
            id: 1,
            fullnamee: "Mark Vencent L. Juntilla",
            age: 20,
        },
        {
            id: 2,
            fullnamee: "Maki Liones",
            age: 19,
        },
        {
            id: 3,
            fullnamee: "Xuiie Oxford",
            age: 18,
        }
    ];

    console.log(people)
    for(let i = 0; i < people.length; i++){
         console.log(people[i].fullnamee);
    }

    const arr = [1,2,3,4];
    arr.push(5);
    arr.push(6);
    arr.push(7);
    console.log(arr);
   

    let btn = document.getElementById('btn');
    let text = document.getElementById('text');

    function toggleClick(){
        alert(`Name: ${name}, Age: ${age}, Status: ${isStatus}`);
    }