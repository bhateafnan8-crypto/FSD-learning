const slides = document.querySelectorAll(".slide");
console.log(typeof(slides))
var counter = 0;

slides.forEach(
    (slide,index) => {
        slide.style.left = `${index * 100}%`
    }
)

const goPrev = () => {
    counter--
    if(counter < 0){
        counter = slides.length - 1
    }
    slideimage()
} 

const goNext = () => {
    counter++
    if(counter >= slides.length){
        counter =0
    }
    slideimage()
}

const slideimage = () => {
    slides.forEach(
        (slide) => {
            slide.style.transform = `translateX(-${counter * 100}%)`
        }
    )
}

const arr =[1,2,3,4,5,6,7,8,9,0];
console.log(arr [3])