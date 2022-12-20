let scroolY;
    
window.addEventListener("scroll", function() {
    
    const topheading = document.querySelector('.topvideotitle')

    if(window.scrollY < 931){
        topheading.style.top = '220px'
        topheading.style.position = 'fixed'
    }
    if(window.scrollY > 931){
        topheading.style.top = '932px'
        topheading.style.position = 'absolute'
    }

    scroolY = window.scrollY;

})

const swiper = new Swiper('.swiper', {
    // slidesPerView: 5,
    spaceBetween: 15,
    // direction: 'horizontal',
    // centeredSlides : true,
    // freeModeSticky: true,
    // grabCursor: true,

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
});


const menubtn = document.querySelector('.menubtn')
menubtn.addEventListener('click', function() {
    menubtn.classList.toggle('menubtnclick')
    document.querySelector('.nav').classList.toggle('open')
})




const showelement = document.querySelectorAll('.topmessage, .seed, .news, .specialwrap .head, .special01, .special02, .special03,.peopleworkswave,.peopleworkstexts,.peopleworks01,.peopleworks02,peopleworks03,.scrollbg,.peopleworkswave,.recruittext,.recruitbody,.recruitbody .link');

window.addEventListener('scroll', function() {

    for (let i = 0; i < showelement.length; i++) {
        const getElementDistance = showelement[i].getBoundingClientRect().top  + showelement[i].clientHeight * 0.5;;

        if (window.innerHeight > getElementDistance) {
            
            showelement[i].classList.add('showbottom');
        }
    }
});



