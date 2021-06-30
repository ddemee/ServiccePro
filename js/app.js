
$(window).on("scroll", function() {
    if($(window).scrollTop() > 90) {
        $(".header").addClass("scrolled");
    } else {
        //remove the background property so it comes transparent again (defined in your css)
       $(".header").removeClass("scrolled");
    }
});

var offcanvasElementList = [].slice.call(document.querySelectorAll('.offcanvas'))
var offcanvasList = offcanvasElementList.map(function (offcanvasEl) {
  return new bootstrap.Offcanvas(offcanvasEl)
})


const faders = document.querySelectorAll('.fade-in');

const appearOptions ={
    threshold:1,
    rootMargin: "0px 0px -200px 0px"
};

const appearOnScroll = new IntersectionObserver 
(function(
    enteries,
    appearOnScroll
    ) {
        enteries.forEach(entry => {
            if(!entry.isIntersecting){
                return;
            }else {
                entry.target.classList.add("appear");
                appearOnScroll.unobserve(entry.target);
            }
        });
    },
appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});

