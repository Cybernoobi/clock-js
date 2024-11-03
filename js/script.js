const hour = document.querySelector('.h'),
      sec  = document.querySelector('.s'),      
      min  = document.querySelector('.m'),
      hNum = document.querySelector('.hours'),
      mNum = document.querySelector('.minutes')
      
function clocks() {
   let time   = new Date(),
       seconds = time.getSeconds(),
       minutes = time.getMinutes(),
       hours   = time.getHours()
    
    sec.style  = `transform: rotate(${seconds*6}deg);` 
    min.style  = `transform: rotate(${minutes*6}deg);` 
    hour.style = `transform: rotate(${hours*30}deg);` 
    
    hNum.innerHTML = hours < 10 ? `0${hours}` : hours
    mNum.innerHTML = minutes < 10 ? `0${minutes}` : minutes 
    
    setTimeout(() => clocks(), 1000);
}

clocks()

const links = document.querySelectorAll('.tabsItem'),
      tabs  = document.querySelectorAll('.tabsContentItem');

for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function (event) {
        event.preventDefault();
        for (let x = 0; x < tabs.length; x++) {
            links[x].classList.remove('active');
            tabs[x].classList.remove('active');
        };
        changeTab(links[i], tabs[i])
    });
}

function changeTab(link, tab) {
    link.classList.add('active');
    tab.classList.add('active');
};