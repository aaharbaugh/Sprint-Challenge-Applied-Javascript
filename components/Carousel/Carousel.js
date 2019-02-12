class Carousel {
    constructor(carouselElement){

        this.carousel = carouselElement;
        this.leftButton = this.carousel.querySelector('.left-button');
        this.rightButton = this.carousel.querySelector('.right-button');
        this.images = this.carousel.querySelectorAll('img')

        this.counter = 0;

        this.images[this.counter].style.display = "flex"


        //add event listeners to left and right button. 
        this.rightButton.addEventListener('click', (e) => {
            this.rightClick()
        })
        this.leftButton.addEventListener('click', (e) => {
            this.leftClick()
        })
    }

    rightClick(){
        this.counter++
        if(this.counter === 4){
            this.counter = 0;
        }
        this.images.forEach(image => {
            image.style.display = "none";
        })
        this.images[this.counter].style.display = "flex"
    }

    leftClick(){
        this.counter--
        if(this.counter < 0){
            this.counter = 3;
        }
        this.images.forEach(image => {
            image.style.display = "none";
        })
        this.images[this.counter].style.display = "flex"
    }
}

let carousel = document.querySelector('.carousel');

let newCarousel = new Carousel(carousel);

setInterval(newCarousel.rightClick.bind(newCarousel), 5000);

