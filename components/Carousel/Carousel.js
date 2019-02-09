class Carousel {
    constructor(carouselElement){
        this.carousel = carouselElement;
        this.leftButton = this.carousel.querySelector('.left-button');
        this.rightButton = this.carousel.querySelector('.right-button');
        this.images = this.carousel.querySelectorAll('img')

        this.counter = 0;

        this.images[this.counter].style.display = "flex"
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



/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/