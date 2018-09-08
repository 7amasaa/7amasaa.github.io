$(function () {
	"use strict";
  $('[data-toggle="tooltip"]').tooltip();
	
	
});


var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
	"use strict";
  showSlides(slideIndex += n);
}

function currentSlide(n) {
	"use strict";
  showSlides(slideIndex = n);
}

function showSlides(n) {
	"use strict";
  var i;
  var slides = document.getElementsByClassName("carousel-item");
 var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1;}    
  if (n < 1) {slideIndex = slides.length;}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

$(function () {
	"use strict";
    $(".load").slice(0, 2).show();
    $("#loadMore").on('click', function (e) {
        e.preventDefault();
        $(".load:hidden").slice(0, 2).slideDown();
        if ($(".load:hidden").length === 0) {
            $("#loadMore").fadeOut('slow');
        }
        $('html,body').animate({
            scrollTop: $(this).offset().top
        }, 1500);
    });
});






