
function reveal() {
    var reveals = document.querySelectorAll(".reveal", ".revealright", ".revealleft");
   
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}

window.addEventListener("scroll", reveal);

window.onload = function () {
    document.body.classList.add('animation_hiding');
    
    window.setTimeout(function () {
        document.body.classList.add('animation');
        document.body.classList.remove('animation_hiding');
    }, 600);
}
$('body').on('click touchstart', function () {
    const videoElement = document.getElementById('videoElement');
    if (!videoElement.playing) {
        videoElement.play();
    }
});

let prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector("header").classList.add("scroll-up");
  } else {
    document.querySelector("header").classList.remove("scroll-up");
  }
  prevScrollpos = currentScrollPos;
};

window.addEventListener("scroll", upBtn);
function upBtn() {
var btn = $('#upbutton');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

window.addEventListener('scroll', function() {
  var scrollTop = window.scrollY;
  var scrollHeight = document.documentElement.scrollHeight;
  var gradientOpacity = scrollTop / scrollHeight;

  document.querySelector('.bg-gradient-animated').style.opacity = gradientOpacity;
});
btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});
}
