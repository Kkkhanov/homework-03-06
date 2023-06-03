let but1 = document.getElementById('but-1');
let out1 = document.getElementById('out-1');
let out2 = document.getElementById('out-2');
let buttonPlus = document.getElementById('next');
let buttonMinus = document.getElementById('previous');
let but = document.querySelector('.but');
let img = document.getElementById('image');
let carName = document.getElementById('outer-1');
let carPower = document.getElementById('outer-2');
let carSize = document.getElementById('outer-3');
let carPrice = document.getElementById('outer-4');



function random(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return counter = Math.floor(Math.random() * (max - min + 1)) + min;
}


function f1(){
    const students = [
        {name: 'Khanov' , score: random(2, 5)},
        {name: 'Abramov' , score: random(2, 5)},
        {name: 'Kuznetsov' , score: random(2, 5)},
        {name: 'Akhmetov' , score: random(2, 5)},
        {name: 'Vasilyev' , score: random(2, 5)},
        {name: 'Kharchenko' , score: random(2, 5)},
        {name: 'Andreev' , score: random(2, 5)},
        {name: 'Kennedy' , score: random(2, 5)},
        {name: 'Batullin' , score: random(2, 5)},
        {name: 'Kovin' , score: random(2, 5)}
    ]
    
    let string = '<tr><td>Фамилия</td><td>Оценка</td></tr>'
    
    students.forEach(el=> {
        string += '<tr><td>' + el.name + '</td><td>' + el.score + '</td></tr>' 
    })

    const test2 = students.filter(function(el){
        if(el.score == 2){
            return el
        }
    })

    console.log(test2)

    const result = test2.map(x => x.name);
    
    out2.textContent = result;
    out1.innerHTML = string;
}




const images = ['bmw.png', 'niva.jpg', 'lamba.jpg'];
const names = ['BMW M5(F90)', 'Lada Niva', 'Lamborgini Aventador'];
const power = ['600 л.с.', '80 л.с.', '780 л.с.'];
const size = ['4965 x 1903 x 1473', '4056 х 1800 х 1690', '4780 х 2030 х 1136'];
const price = ['11 450 000 р.', '821 900 р.', '20 660 125 р.']
let s = 0;

    buttonPlus.onclick = function(){
        if(s < 2){
            s++
            f2()
        }
    }
    buttonMinus.onclick = function(){
        if(s > 0){
            s--
            f2()
        }
    }

function f2(){
    
    if(s == 0){
        img.setAttribute('src', images[0]);
        carName.textContent = 'Название: ' + names[0];
        carPower.textContent = 'Мощность: ' + power[0];
        carSize.textContent = 'Габариты: ' + size[0];
        carPrice.textContent = 'Цена: ' + price[0];
    }
    else if(s == 1){
        img.setAttribute('src', images[1]);
        carName.textContent = 'Название: ' + names[1];
        carPower.textContent = 'Мощность: ' + power[1];
        carSize.textContent = 'Габариты: ' + size[1];
        carPrice.textContent = 'Цена: ' + price[1];
    }
    else if(s == 2){
        img.setAttribute('src', images[2]);
        carName.textContent = 'Название: ' + names[2];
        carPower.textContent = 'Мощность: ' + power[2];
        carSize.textContent = 'Габариты: ' + size[2];
        carPrice.textContent = 'Цена: ' + price[2];
    }
    console.log(s)
}


but1.onclick = f1;



