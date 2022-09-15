// Slider
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav__links');
    const navLinks = document.querySelectorAll('.nav__links li');

    burger.addEventListener('click', () => {
        // Toggle Nav
        nav.classList.toggle('nav__active');

        // Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = "";
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });

        // Burger Animation
        burger.classList.toggle('toggle');
    });

}

navSlide();

// Gallery Filter
let list = document.querySelectorAll(".list");
let itemBox = document.querySelectorAll(".itemBox");

for(let i = 0; i < list.length; i++) {
    list[i].addEventListener("click", function() {
        for(let j = 0; j < list.length; j++) {
            list[j].classList.remove("active");
        }
        this.classList.add("active");
        
        let dataFilter = this.getAttribute("data-filter");
        
        for(let k = 0; k < itemBox.length; k++) {
            itemBox[k].classList.remove("active");
            itemBox[k].classList.add("hide");
            
            if(itemBox[k].getAttribute("data-item") == dataFilter || dataFilter == "all") {
                itemBox[k].classList.remove("hide");
                itemBox[k].classList.add("active");
            }
        }
    })
}
