//DOM element
const time = document.getElementById('time'),
    day = document.getElementById('day'),
    greeting = document.getElementById('greeting'),
    name = document.getElementById('name'),
    focus = document.getElementById('focus');

//show time
function showTime(){
    let today = new Date(),
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds();
    d = today.getDay(),
    m = today.getMonth(),
    y = today.getUTCFullYear();
    
    //set AM or PM
    const amPm = hour >12? 'PM': 'AM';

    //12hour format
    hour = hour%12 || 12;

    //output time
    time.innerHTML = `${addZeros(hour)}<span>:</span>${addZeros(min)}<span>:</span>${addZeros(sec)}<span> ${amPm}</span>`;
    day.innerHTML = `${d}<span>/<span>${m}<span>/<span>${y}`;
    setTimeout(showTime, 1000);
}

//add zeros
function addZeros(n){
    return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

//set background
function setBgGreet(){
    let today = new Date(),
    hour = today.getHours();
    if(hour < 12 && hour > 6){
        //morning
        document.body.style.backgroundImage = "url('./img/morning.jpg)";
        greeting.textContent = 'Good Morning';
    }
    else if(hour < 18){
        //afternoon
        document.body.style.backgroundImage = "url('./img/afternoon.jpg)";
        greeting.textContent = 'Good Afternoon';
    }
    else{
        //evening
        document.body.style.backgroundImage = "url('./img/evening.jpg";
        greeting.textContent = 'Good Evening';
    }
}

//get name
function getName() {
    if(localStorage.getItem('name') === null){
        name.textContent = '[Enter Name]';
    }else{
        name.textContent = localStorage.getItem('name');
    }
}

//set name
function setName(e){
    if(e.type === 'keypress'){
        //make sure enter is press
        if(e.which == 13 || e.keyCode == 13){
            localStorage.setItem('name', e.target.innerText);
            name.blur();
        }
    }else{
        localStorage.setItem('name', e.target.innerText);
    }
}

//get focus
function getFocus() {
    if(localStorage.getItem('focus') === null){
        focus.textContent = '[Enter Focus]';
    }else{
        focus.textContent = localStorage.getItem('focus');
    }
}

//set focus
function setFocus(e){
    if(e.type === 'keypress'){
        //make sure enter is press
        if(e.which == 13 || e.keyCode == 13){
            localStorage.setItem('focus', e.target.innerText);
            focus.blur();
        }
    }else{
        localStorage.setItem('focus', e.target.innerText);
    }
}

name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);
focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);

//run
showTime();
setBgGreet();
getName();
getFocus();
