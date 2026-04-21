let slides = document.querySelectorAll(".slide");
let index = 0;

function changeSlide(){

    slides.forEach(slide =>
        slide.classList.remove("active")
    );

    index++;

    if(index >= slides.length){
        index = 0;
    }

    slides[index].classList.add("active");
}

setInterval(changeSlide, 4000);
