// $(document).ready(function() {
//   var navpos = $(".navbar").offset();
//     $(window).bind("scroll", function() {
//       if ($(window).scrollTop() > navpos.top) {
//         $(".navbar").addClass("navbar-fixed-top");
//        }
//        else {
//          $(".navbar").removeClass("navbar-fixed-top");
//        }
//     });

//     //  $(window).on("contextmenu",function(e){
//     //    return false;
//     // }); 
// }); //fixes navbar at top

//  $(document).on("scroll", onScroll);
    
//     //smoothscroll
//     $(".navbar a[href^='#'], #back-top a[href^='#'], .more-info a[href^='#']").on("click", function (e) {
//         e.preventDefault();
//         $(document).off("scroll");
        
//         var target = this.hash;
//         $target = $(target);
//         $("html, body").stop().animate({
//             "scrollTop": $target.offset().top
//         }, 900, "swing", function () {
//             window.location.hash = target;
//             $(document).on("scroll", onScroll);
//         });
//     });
function onScroll(e){
    e.preventDefault();
    var scrollPos = $(document).scrollTop();
    $(".nav li a").each(function () {        
        var refElement = $($(this).attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $(".nav li").removeClass("active");
            $(this).addClass("active");
        }
        else{
            $(this).removeClass("active");
        }
    });
}

$(".arrow-contain").mouseenter(function () {
  $(".hover-display").css("display","block");
} ).mouseleave( function () {
  $(".hover-display").css("display","none");
});// shows the "click to explore" text on landing page.


$("#myCarousel, #product-carousel").carousel({
  interval: 4000,
  cycle: true
});

$("#back-top").click(function () {
  $(".nav li").removeClass("active");
}); // resets navbar for active class
