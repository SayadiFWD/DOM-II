// Your code goes here


// used mouseover for header image

const busInTheSand = document.querySelector('.intro img');

busInTheSand.addEventListener('mouseover',()=>{
    busInTheSand.src = 'https://media.wired.com/photos/5d4dc145b8d30b00081f6eb8/master/pass/Transpo_UTA-541063240.jpg'

})
busInTheSand.addEventListener('mouseleave',()=>{
    busInTheSand.src = "img/fun-bus.jpg"
}
)


// used mouseenter and mouseleave for navigation

const links = document.querySelectorAll('.nav a');
links.forEach(link=>{
    link.addEventListener('mouseenter',()=>{
        link.style.transform = 'scale(1.9)'
        link.style.color = "#a83232"
        link.style.transition = "transform 0.7s"
    })
})

links.forEach(link=>{
    link.addEventListener('mouseleave',()=>{
        link.style.transform = 'scale(1)'
        link.style.color = "#91a832"
    })
})


