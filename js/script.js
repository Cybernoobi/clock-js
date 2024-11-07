const hour = document.querySelector('.h'),
    sec = document.querySelector('.s'),
    min = document.querySelector('.m'),
    hNum = document.querySelector('.hours'),
    mNum = document.querySelector('.minutes')

function clocks() {
    let time = new Date(),
        seconds = time.getSeconds(),
        minutes = time.getMinutes(),
        hours = time.getHours(),

        // Источник: https://codepen.io/Maan-Fadel/pen/eYwpQYV
        hRotation = 30*hours + minutes/2 + seconds/120,
        mRotation = 6 * minutes + seconds/10,
        sRotation = 6 * seconds;

    sec.style = `transform: rotate(${sRotation}deg); transition: 300ms;`
    min.style = `transform: rotate(${mRotation}deg);`
    hour.style = `transform: rotate(${hRotation}deg);`

    hNum.innerHTML = hours < 10 ? `0${hours}` : hours
    mNum.innerHTML = minutes < 10 ? `0${minutes}` : minutes

    setTimeout(() => clocks(), 1000);
}

clocks()

const links = document.querySelectorAll('.tabsItem'),
    tabs = document.querySelectorAll('.tabsContentItem');

for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function (event) {
        event.preventDefault()
        for (let x = 0; x < tabs.length; x++) {
            links[x].classList.remove('active')
            tabs[x].classList.remove('active')
        }
        changeTab(links[i], tabs[i])
    })
}

function changeTab(link, tab) {
    link.classList.add('active')
    tab.classList.add('active')
}

const startBtn = document.querySelector('.stopwatch__btn'),
    indicator = document.querySelector('.tabsLink__span'),

    hSecond = document.querySelector('.stopwatch__seconds'),
    hMinut = document.querySelector('.stopwatch__minutes'),
    hHour = document.querySelector('.stopwatch__hours');

let sSeconds = 0,
    sMinuts = 0,
    sHours = 0;

startBtn.addEventListener('click', function () {
    if (startBtn.innerHTML === 'start') {
        indicator.classList.add('active');
        startBtn.innerHTML = 'stop';

        secundomer();
    } else if (startBtn.innerHTML === 'stop') {
        indicator.classList.remove('active');
        indicator.classList.add('active_clear');
        startBtn.innerHTML = 'clear';


        clearInterval(secundomer)
    } else {
        indicator.classList.remove('active_clear');
        startBtn.innerHTML = 'start';

        sSeconds = 0;
        sMinuts = 0;
        sHours = 0;

        hSecond.innerHTML = 0;
        hMinut.innerHTML = 0;
        hHour.innerHTML = 0;
    };

})

function secundomer() {
    if (startBtn.innerHTML === 'clear') {
        return;
    };

    sSeconds++;
    console.log(sSeconds);

    if (sSeconds === 60) {
        sMinuts++;
        sSeconds = 0;
    };

    if (sMinuts === 60) {
        sHours++;
        sMinuts = 0;
    };

    hSecond.innerHTML = sSeconds;
    hMinut.innerHTML = sMinuts;
    hHour.innerHTML = sHours;

    setTimeout(() => secundomer(), 1000);
}