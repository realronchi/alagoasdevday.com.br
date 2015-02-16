"use strict";function draw(){con.clearRect(0,0,WIDTH,HEIGHT);for(var a=0;a<pxs.length;a++)pxs[a].fade(),pxs[a].move(),pxs[a].draw()}function Circle(){this.s={ttl:8e3,xmax:5,ymax:2,rmax:10,rt:1,xdef:960,ydef:540,xdrift:4,ydrift:4,random:!0,blink:!0},this.reset=function(){this.x=this.s.random?WIDTH*Math.random():this.s.xdef,this.y=this.s.random?HEIGHT*Math.random():this.s.ydef,this.r=(this.s.rmax-1)*Math.random()+1,this.dx=Math.random()*this.s.xmax*(Math.random()<.5?-1:1),this.dy=Math.random()*this.s.ymax*(Math.random()<.5?-1:1),this.hl=this.s.ttl/rint*(this.r/this.s.rmax),this.rt=Math.random()*this.hl,this.s.rt=Math.random()+1,this.stop=.2*Math.random()+.4,this.s.xdrift*=Math.random()*(Math.random()<.5?-1:1),this.s.ydrift*=Math.random()*(Math.random()<.5?-1:1)},this.fade=function(){this.rt+=this.s.rt},this.draw=function(){this.s.blink&&(this.rt<=0||this.rt>=this.hl)?this.s.rt=-1*this.s.rt:this.rt>=this.hl&&this.reset();var a=1-this.rt/this.hl;con.beginPath(),con.arc(this.x,this.y,this.r,0,2*Math.PI,!0),con.closePath();var b=this.r*a;g=con.createRadialGradient(this.x,this.y,0,this.x,this.y,0>=b?1:b),g.addColorStop(0,"rgba(255,255,255,"+a+")"),g.addColorStop(this.stop,"rgba(77,101,181,"+.6*a+")"),g.addColorStop(1,"rgba(77,101,181,0)"),con.fillStyle=g,con.fill()},this.move=function(){this.x+=this.rt/this.hl*this.dx,this.y+=this.rt/this.hl*this.dy,(this.x>WIDTH||this.x<0)&&(this.dx*=-1),(this.y>HEIGHT||this.y<0)&&(this.dy*=-1)},this.getX=function(){return this.x},this.getY=function(){return this.y}}function oviniFloat(){var a=$(".ovini"),b=$(".register-header"),c=$(".ovini .light"),d=new TimelineMax({delay:0,repeat:500,repeatDelay:0}),e=new TimelineMax({delay:0,repeat:500,repeatDelay:0}),f=new TimelineMax({delay:0,repeat:500,repeatDelay:0});d.to(a,3,{y:5}),d.to(a,2,{y:-5}),e.to(b,1.5,{opacity:1}),e.to(b,.5,{opacity:0}),f.to(c,2.5,{opacity:.8}),f.to(c,2.5,{opacity:1})}angular.module("alagoasdevdaycombrApp",["ngAnimate","ngAria","ngCookies","ngMessages","ngResource","ngRoute","ngSanitize","ngTouch","duScroll"]).value("duScrollDuration",2e3).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl"}).otherwise({redirectTo:"/"})}]),angular.module("alagoasdevdaycombrApp").controller("MainCtrl",function(){}),function(a){var b=/iPhone/i,c=/iPod/i,d=/iPad/i,e=/(?=.*\bAndroid\b)(?=.*\bMobile\b)/i,f=/Android/i,g=/BlackBerry/i,h=/Opera Mini/i,i=/IEMobile/i,j=/(?=.*\bFirefox\b)(?=.*\bMobile\b)/i,k=RegExp("(?:Nexus 7|BNTV250|Kindle Fire|Silk|GT-P1000)","i"),l=function(a,b){return a.test(b)},m=function(a){var m=a||navigator.userAgent;this.apple={phone:l(b,m),ipod:l(c,m),tablet:l(d,m),device:l(b,m)||l(c,m)||l(d,m)},this.android={phone:l(e,m),tablet:!l(e,m)&&l(f,m),device:l(e,m)||l(f,m)},this.other={blackberry:l(g,m),opera:l(h,m),windows:l(i,m),firefox:l(j,m),device:l(g,m)||l(h,m)||l(i,m)||l(j,m)},this.seven_inch=l(k,m),this.any=this.apple.device||this.android.device||this.other.device||this.seven_inch},n=a.isMobile=new m;n.Class=m}(window),$(document).ready(function(a){var b=a(".cd-timeline-block, .cd-timeline-block-custom");b.each(function(){a(this).offset().top>a(window).scrollTop()+.75*a(window).height()&&a(this).find(".cd-timeline-img, .cd-timeline-content, .cd-timeline-time").addClass("is-hidden")}),a(window).on("scroll",function(){b.each(function(){a(this).offset().top<=a(window).scrollTop()+.75*a(window).height()&&a(this).find(".cd-timeline-img").hasClass("is-hidden")&&a(this).find(".cd-timeline-img, .cd-timeline-content, .cd-timeline-time").removeClass("is-hidden").addClass("bounce-in")})})});var WIDTH,HEIGHT,canvas,con,g,pxs=[],rint=60;$(document).ready(function(){if(!isMobile.any){WIDTH=window.innerWidth,HEIGHT=window.innerHeight,canvas=document.getElementById("pixie"),$(canvas).attr("width",WIDTH).attr("height",HEIGHT),con=canvas.getContext("2d");for(var a=0;100>a;a++)pxs[a]=new Circle,pxs[a].reset();setInterval(draw,rint)}});var $ovini=$(".ovini"),$light=$(".ovini .light"),$addLogo=$(".add-logo"),$eventDateLocal=$(".event-date-local"),$rocket1=$(".rocket1"),$rocket2=$(".rocket2"),$rocket3=$(".rocket3"),tl=new TimelineMax({delay:.5,repeat:0,onComplete:oviniFloat});tl.set($ovini,{top:-80}),tl.to($ovini,3,{top:130}),tl.to($light,1,{opacity:1}),tl.to($addLogo,1,{opacity:1,top:350,width:"182px",marginLeft:"-91px",ease:Power3.easeInOut}),tl.to($eventDateLocal,1,{opacity:1});var tlRocket=new TimelineMax({delay:1.5,repeat:50,onComplete:oviniFloat});tlRocket.to($rocket1,3,{top:-1e3,left:750,ease:Power3.easeInOut},"+=1.0"),tlRocket.to($rocket2,3,{top:-1e3,left:750,ease:Power3.easeInOut},"+=1.0"),tlRocket.to($rocket3,3,{top:-1e3,left:750,ease:Power3.easeInOut},"+=1.0");