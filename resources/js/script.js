
$(document).ready(function(){

/* for the sticky navigation */
$(window).scroll(function(){
  if($(this).scrollTop()>550){
    $("nav").addClass("sticky")
  }else {
    $("nav").removeClass("sticky")
  }
})

/* scroll on buttons */
$(".hngplan").click(function() {
    $('html,body').animate({
        scrollTop: $(".section-signup").offset().top},
        1000);
      });

/* navigation scroll */

$(function() {
     $('.smoothScroll').click(function() {
       if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
         var target = $(this.hash);
         target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
         if (target.length) {
           $('html,body').animate({
             scrollTop: target.offset().top
           }, 1000);
           return false;
         }
       }
     });
   });

/* Animation on scroll */

// $(window).scroll(function () {
//
//        /* Check the location of each desired element */
//        $('.animate1').each(function (i) {
//
//            var bottom_of_object = $(this).position().top + $(this).outerHeight();
//            var bottom_of_window = $(window).scrollTop() + $(window).height()+170;
//            /* If the object is completely visible in the window, fade it it */
//            if (bottom_of_window > bottom_of_object) {
//                $(this).animate({
//                    'opacity': '1'
//                }, 500);
//            }
//        });
//    });
// });

/* Animation on scroll */

$(".animate1").waypoint(function(direction){
  $(".animate1").addClass("animated fadeIn");
},{
  offset:'50%'
})

$(".animate2").waypoint(function(direction){
  $(".animate2").addClass("animated fadeIn");
},{
  offset:'50%'
})

$(".animate3").waypoint(function(direction){
  $(".animate3").addClass("animated fadeInUp");
},{
  offset:'50%'
})

$(".animate4").waypoint(function(direction){
  $(".animate4").addClass("animated pulse");
},{
  offset:'50%'
})



/* Mobile nav */

$(".mobile-nav-icon").click(function(){
  $(".main-nav").slideToggle(200)
  var icon = $(".mobile-nav-icon i")
  if (icon.hasClass("ion-navicon-round")) {
    icon.addClass("ion-close-round")
    icon.removeClass("ion-navicon-round")
  }else {
    icon.removeClass("ion-close-round")
    icon.addClass("ion-navicon-round")
  }
})


/* Maps */

var myMap = new L.Map('map', {
    key: 'web.yjlf61jF0tU7Ip0UIMuGivnuUdORhdgPxB5DCpjD',
    center: [31.757, 90.454943],
    zoom: 6
});
myMap.setMapType('osm-bright');

var planes=[
  ["غذای آمین",38.066171, 46.323218],
  ["غذای آمین",29.604634, 52.558288],
  ["غذای آمین",32.646490, 51.670723],
  ["غذای آمین",35.757690, 51.318559]
]
planes.forEach(function(point){
  L.marker([point[1], point[2]]).addTo(myMap)
      .bindPopup(point[0])
      .openPopup();
})


});
