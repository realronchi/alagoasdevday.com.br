(function(i){var e=/iPhone/i,n=/iPod/i,o=/iPad/i,t=/(?=.*\bAndroid\b)(?=.*\bMobile\b)/i,r=/Android/i,d=/BlackBerry/i,s=/Opera Mini/i,a=/IEMobile/i,b=/(?=.*\bFirefox\b)(?=.*\bMobile\b)/i,h=RegExp("(?:Nexus 7|BNTV250|Kindle Fire|Silk|GT-P1000)","i"),c=function(i,e){return i.test(e)},l=function(i){var l=i||navigator.userAgent;this.apple={phone:c(e,l),ipod:c(n,l),tablet:c(o,l),device:c(e,l)||c(n,l)||c(o,l)},this.android={phone:c(t,l),tablet:!c(t,l)&&c(r,l),device:c(t,l)||c(r,l)},this.other={blackberry:c(d,l),opera:c(s,l),windows:c(a,l),firefox:c(b,l),device:c(d,l)||c(s,l)||c(a,l)||c(b,l)},this.seven_inch=c(h,l),this.any=this.apple.device||this.android.device||this.other.device||this.seven_inch},v=i.isMobile=new l;v.Class=l})(window);

(function () {
   'use strict';

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

  function StarCanvas () {

      WIDTH = window.innerWidth;
      HEIGHT = window.innerHeight;
      canvas = document.getElementById('pixie');
      con = null;
      g = null;
      pxs = [];
      rint = 60;


      this.startDrawScreen = function() {
        $(canvas).attr('width', WIDTH).attr('height',HEIGHT);
        con = canvas.getContext('2d');
        for(var i = 0; i < 100; i++) {
          pxs[i] = new Circle();
          pxs[i].reset();
        }
        setInterval(draw,rint);
      };

  }

  $(document).ready(function(){
    if (!isMobile.any) {
      var starcanvas = new StarCanvas();
      starcanvas.startDrawScreen();
    }
  });
}());





