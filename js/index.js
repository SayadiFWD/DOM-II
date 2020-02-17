// Your code goes here

const busInTheSand = document.querySelector('.intro img');

busInTheSand.addEventListener('mouseover',()=>{
    busInTheSand.src = 'https://media.wired.com/photos/5d4dc145b8d30b00081f6eb8/master/pass/Transpo_UTA-541063240.jpg'

})
busInTheSand.addEventListener('mouseleave',()=>{
    busInTheSand.src = "img/fun-bus.jpg"
}
)
