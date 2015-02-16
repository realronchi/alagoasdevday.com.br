/*global $:false */
'use strict';

(function(i){var e=/iPhone/i,n=/iPod/i,o=/iPad/i,t=/(?=.*\bAndroid\b)(?=.*\bMobile\b)/i,r=/Android/i,d=/BlackBerry/i,s=/Opera Mini/i,a=/IEMobile/i,b=/(?=.*\bFirefox\b)(?=.*\bMobile\b)/i,h=RegExp("(?:Nexus 7|BNTV250|Kindle Fire|Silk|GT-P1000)","i"),c=function(i,e){return i.test(e)},l=function(i){var l=i||navigator.userAgent;this.apple={phone:c(e,l),ipod:c(n,l),tablet:c(o,l),device:c(e,l)||c(n,l)||c(o,l)},this.android={phone:c(t,l),tablet:!c(t,l)&&c(r,l),device:c(t,l)||c(r,l)},this.other={blackberry:c(d,l),opera:c(s,l),windows:c(a,l),firefox:c(b,l),device:c(d,l)||c(s,l)||c(a,l)||c(b,l)},this.seven_inch=c(h,l),this.any=this.apple.device||this.android.device||this.other.device||this.seven_inch},v=i.isMobile=new l;v.Class=l})(window);


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


var WIDTH;
var HEIGHT;
var canvas;
var con;
var g;
var pxs = [];
var rint = 60;

function draw() {
  con.clearRect(0,0,WIDTH,HEIGHT);
  for(var i = 0; i < pxs.length; i++) {
    pxs[i].fade();
    pxs[i].move();
    pxs[i].draw();
  }
}

function Circle() {
  this.s = {ttl:8000, xmax:5, ymax:2, rmax:10, rt:1, xdef:960, ydef:540, xdrift:4, ydrift: 4, random:true, blink:true};

  this.reset = function() {
    this.x = (this.s.random ? WIDTH*Math.random() : this.s.xdef);
    this.y = (this.s.random ? HEIGHT*Math.random() : this.s.ydef);
    this.r = ((this.s.rmax-1)*Math.random()) + 1;
    this.dx = (Math.random()*this.s.xmax) * (Math.random() < 0.5 ? -1 : 1);
    this.dy = (Math.random()*this.s.ymax) * (Math.random() < 0.5 ? -1 : 1);
    this.hl = (this.s.ttl/rint)*(this.r/this.s.rmax);
    this.rt = Math.random()*this.hl;
    this.s.rt = Math.random()+1;
    this.stop = Math.random()*0.2+0.4;
    this.s.xdrift *= Math.random() * (Math.random() < 0.5 ? -1 : 1);
    this.s.ydrift *= Math.random() * (Math.random() < 0.5 ? -1 : 1);
  };

  this.fade = function() {
    this.rt += this.s.rt;
  };

  this.draw = function() {
    if(this.s.blink && (this.rt <= 0 || this.rt >= this.hl)) this.s.rt = this.s.rt*-1;
    else if(this.rt >= this.hl) this.reset();
    var newo = 1-(this.rt/this.hl);
    con.beginPath();
    con.arc(this.x,this.y,this.r,0,Math.PI*2,true);
    con.closePath();
    var cr = this.r*newo;
    g = con.createRadialGradient(this.x,this.y,0,this.x,this.y,(cr <= 0 ? 1 : cr));
    g.addColorStop(0.0, 'rgba(255,255,255,'+newo+')');
    g.addColorStop(this.stop, 'rgba(77,101,181,'+(newo*0.6)+')');
    g.addColorStop(1.0, 'rgba(77,101,181,0)');
    con.fillStyle = g;
    con.fill();
  };

  this.move = function() {
    this.x += (this.rt/this.hl)*this.dx;
    this.y += (this.rt/this.hl)*this.dy;
    if(this.x > WIDTH || this.x < 0) this.dx *= -1;
    if(this.y > HEIGHT || this.y < 0) this.dy *= -1;
  };

  this.getX = function() { return this.x; };
  this.getY = function() { return this.y; };
}

$(document).ready(function(){
if (!isMobile.any) {
  WIDTH = window.innerWidth;
  HEIGHT = window.innerHeight;
  canvas = document.getElementById('pixie');
  $(canvas).attr('width', WIDTH).attr('height',HEIGHT);
  con = canvas.getContext('2d');
  for(var i = 0; i < 100; i++) {
    pxs[i] = new Circle();
    pxs[i].reset();
  }
  setInterval(draw,rint);
}
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

  tlRocket.to($rocket1, 3, {top: -1000, left: 750,  ease: Power3.easeInOut}, "+=1.0");
  tlRocket.to($rocket2, 3, {top: -1000, left: 750,  ease: Power3.easeInOut}, "+=1.0");
  tlRocket.to($rocket3, 3, {top: -1000, left: 750,  ease: Power3.easeInOut}, "+=1.0");





  function  oviniFloat() {
    var $ovini = $(".ovini");
    var $registerHeader = $(".register-header");
    var $light = $(".ovini .light");

    var tlOvini = new TimelineMax({delay:0, repeat:500, repeatDelay:0});
    var tlRegister = new TimelineMax({delay:0, repeat:500, repeatDelay:0});
    var tlLight = new TimelineMax({delay:0, repeat:500, repeatDelay:0});

    tlOvini.to($ovini, 3, {y: 5});
    tlOvini.to($ovini, 2, {y: -5});

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
