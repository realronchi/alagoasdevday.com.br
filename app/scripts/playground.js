/*global $:false */
'use strict';

$(document).ready(function($){
  var timelineBlock = $('.cd-timeline-block, .cd-timeline-block-custom');
  //hide timeline blocks which are outside the viewport
  timelineBlock.each(function(){
    if($(this).offset().top > $(window).scrollTop()+$(window).height()*0.75) {
      $(this).find('.cd-timeline-img, .cd-timeline-content, .cd-timeline-time').addClass('is-hidden');
    }
  });
  //on scolling, show/animate timeline blocks when enter the viewport
  $(window).on('scroll', function(){
    timelineBlock.each(function(){
      if( $(this).offset().top <= $(window).scrollTop()+$(window).height()*0.75 && $(this).find('.cd-timeline-img').hasClass('is-hidden') ) {
        $(this).find('.cd-timeline-img, .cd-timeline-content, .cd-timeline-time').removeClass('is-hidden').addClass('bounce-in');
      }
    });
  });
});






  var $ovini = $(".ovini");
  var $light = $(".ovini .light");
  var $addLogo = $(".add-logo");
  var $eventDateLocal = $(".event-date-local");
  var $rocket1 = $(".rocket1");
  var $rocket2 = $(".rocket2");
  var $rocket3 = $(".rocket3");


  // var tl = new TimelineMax({delay:0.5, repeat:0});
  var tl = new TimelineMax({delay:0.5, repeat:0, onComplete:oviniFloat});


  tl.set($ovini, {top: -80});
  tl.to($ovini, 3, {top: 130});
  tl.to($light, 1, {opacity: 1});
  tl.to($addLogo, 1, {opacity: 1, top: 350, width: "182px", marginLeft: "-91px", ease: Power3.easeInOut});
  tl.to($eventDateLocal, 1, {opacity: 1});




  var tlRocket = new TimelineMax({delay:1.5, repeat:50, onComplete:oviniFloat});

  tlRocket.to($rocket1, 3, {top: -1000, left: 600,  ease: Power3.easeInOut}, "+=1.0");
  tlRocket.to($rocket2, 3, {top: -1000, left: -950,  ease: Power3.easeInOut}, "+=1.0");
  tlRocket.to($rocket3, 3, {top: -1000, left: 750,  ease: Power3.easeInOut}, "+=1.0");





  function  oviniFloat() {
    var $ovini = $(".ovini");
    var $registerHeader = $(".register-header");
    var $light = $(".ovini .light");

    var tlOvini = new TimelineMax({delay:0, repeat:500, repeatDelay:0});
    var tlRegister = new TimelineMax({delay:0, repeat:500, repeatDelay:0});
    var tlLight = new TimelineMax({delay:0, repeat:500, repeatDelay:0});

    // tlOvini.to($ovini, 3, {y: 5});
    // tlOvini.to($ovini, 2, {y: -5});

    tlRegister.to($registerHeader, 1.5, {opacity: 1});
    tlRegister.to($registerHeader, 0.5, {opacity: 0});

    tlLight.to($light, 2.5, {opacity: 0.8});
    tlLight.to($light, 2.5, {opacity: 1});
  }








// // Paralax SCroll Magic

// // init controller
// var controller = new ScrollMagic();

// // scene #home
// // new ScrollScene({triggerElement: "#home"})
// //         .setTween(TweenMax.from("#for-whom div.cloud", 1, {top: "-3%", ease: Linear.easeNone}))
// //         .addTo(controller);
// // scene #organizers
// new ScrollScene({triggerElement: "#organizers"})
//         .setTween(TweenMax.from("#organizers div.top-cloud", 1, {top: "-2%", ease: Linear.easeNone}))
//         .addTo(controller);

// // scene #scheduler
// new ScrollScene({triggerElement: "#schedule"})
//         .setTween(TweenMax.from("#schedule div.top-cloud", 1, {top: "-2%", ease: Linear.easeNone}))
//         .addTo(controller);
// // scene #location
// new ScrollScene({triggerElement: "#location"})
//         .setTween(TweenMax.from("#schedule div.bottom-cloud", 1, {bottom: "-2%", ease: Linear.easeNone}))
//         .addTo(controller);
