$(document).ready(function(){
  let slides = $('.slide');
  let slideIndex = 0;

  $(slides[slideIndex]).show();
    
  $(".next").click(function(){
    $(slides[slideIndex]).show();
    $(slides[slideIndex]).hide();
    slideIndex = (slideIndex + 1) % slides.length;
    console.log(slideIndex);
    $(slides[slideIndex]).show();
  });

  $(".prev").click(function () {
    $(slides[slideIndex]).show();
    $(slides[slideIndex]).hide();
    slideIndex = (slideIndex - 1) % slides.length;
    console.log(slideIndex);
    $(slides[slideIndex]).show();

});
});