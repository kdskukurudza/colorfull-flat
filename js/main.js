$('.testimonials__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    appendDots: $('.testimonials__nav')
})
$('.slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    mobileFirst: true,
    responsive: [
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            }
        },
        {
            breakpoint: 1023,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 2,
            } 
        }
    ]
})
// -------------------------------- NAV WITH BURGER -------------------
$(document).ready(function() { 
    
    $('header__burger').click(function(e){
      $('.header__menu').slideToggle(7000);
  }) 
    $(".header__burger").click(function() {      
        $(".header__burger").toggleClass("active");
        $(".header__menu").toggleClass("active col-sm-12");
    });  
  });
//---------------------------------BUTTON UP----------------------------
  $(document).ready(function(){
    $('body').append('<a href="#" class="button-top" title="Вверх"><span class="material-icons">arrow_drop_up</span></a>');
  });
  
  $(function() {
   $.fn.scrollToTop = function() {
    $(this).hide().removeAttr("href");
    if ($(window).scrollTop() >= "300") $(this).fadeIn("slow")
    var scrollDiv = $(this);
    $(window).scroll(function() {
     if ($(window).scrollTop() <= "300") $(scrollDiv).fadeOut("slow")
     else $(scrollDiv).fadeIn("slow")
    });
    $(this).click(function() {
     $("html, body").animate({scrollTop: 0}, "slow")
    })
   }
  });
  
  $(function() {
   $(".button-top").scrollToTop();
  });
  //---------------------------------SMOUTH SCROLLING----------------------------
$(document).ready(function(){
  $(".header__menu").on("click","a", function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
        top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 1500);
  });
  });