const instructionBG = document.querySelector('.section-instruction');
const personsBG = document.querySelector('.section-person');
const navHeader = document.querySelector('.nav-header');
const animations = document.querySelectorAll('.animation');
const modalUnete = document.getElementById('modal-unete');
const closeModalUnete = document.getElementById('close-modal-unete');
const uneteButtons = document.querySelectorAll('.unete-button');


window.addEventListener('scroll', function() {
    let value = window.scrollY;
    if(isInViewPort(instructionBG)) {
        if(window.innerWidth > 768){
            instructionBG.style.backgroundSize = value * 0.04 + '%';
        }
        else {
            instructionBG.style.backgroundSize = value * 0.07 + '%';
        }
    }
    if(isInViewPort(personsBG)) {
        if(window.innerWidth > 768){
            personsBG.style.backgroundSize = value * 0.02 + '%';
        }
        else {
            personsBG.style.backgroundSize = value * 0.05 + '%';
        }
    }

    if(value > 100) {
        navHeader.classList.add('bg-active');
    }
    else {
        navHeader.classList.remove('bg-active');
    }
    animations.forEach(el => {
        toggleAnimationOnViewPort(el);
    });
});

function isInViewPort(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top < (window.innerHeight || document.documentElement.clientHeight) && rect.bottom > 0
    );
}
    
function toggleAnimationOnViewPort(el) {
    if(isInViewPort(el)) {
        el.classList.add('show');
    }
    else {
        el.classList.remove('show');
    }
}

uneteButtons.forEach(el => {
    el.addEventListener('click', () => {
        modalUnete.classList.add('show');
    });
});

closeModalUnete.addEventListener('click', () => {
    modalUnete.classList.remove('show');
});
