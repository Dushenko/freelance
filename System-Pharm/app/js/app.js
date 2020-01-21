//=require ../blocks/**/*.js
$(document).ready(function () {
    var rellax = new Rellax('.rellax');
    new WOW().init();
});



const CANVAS = document.getElementsByTagName("canvas")[0],
	CTX = CANVAS.getContext("2d"),
	W = window.innerWidth,
	H = window.innerHeight,
	XO = W / 2,
	YO = H / 2,
	NUM_PARTICLES = 500,
	MAX_Z = 2,
	MAX_R = 2,
	Z_SPD = .2,
	PARTICLES = [];

class Particle {
	constructor(x, y, z) {
		this.pos = new Vector(x, y, z);
		const X_VEL = 0, Y_VEL = 0, Z_VEL = -Z_SPD;
		this.vel = new Vector(X_VEL, Y_VEL, Z_VEL);
		this.vel.scale(0.005);
		this.fill = "rgba(255,255,255,0.3)";
		this.stroke = this.fill;
	}

	update() {
		this.pos.add(this.vel);
	}

	render() {
		const PIXEL = to2d(this.pos),
			X = PIXEL[0],
			Y = PIXEL[1],
			R = (MAX_Z - this.pos.z) / MAX_Z * MAX_R;

		if (X < 0 || X > W || Y < 0 || Y > H) this.pos.z = MAX_Z;

		this.update();
		CTX.beginPath();
		CTX.fillStyle = this.fill;
		CTX.strokeStyle = this.stroke;
		CTX.arc(X, PIXEL[1], R, 0, Math.PI * 2);
		CTX.fill();
		CTX.stroke();
		CTX.closePath();
	}
}

class Vector {
	constructor(x, y, z) {
		this.x = x;
		this.y = y;
		this.z = z;
	}

	add(v) {
		this.x += v.x;
		this.y += v.y;
		this.z += v.z;
	}
	
	scale(n) {
		this.x *= n;
		this.y *= n;
		this.z *= n;
	}
}

function to2d(v) {
	const X_COORD = v.x - XO,
		Y_COORD = v.y - YO,
		PX = X_COORD / v.z,
		PY = Y_COORD / v.z;
	return [PX + XO, PY + YO];
}

function render() {
	for (let i = 0; i < PARTICLES.length; i++) {
		PARTICLES[i].render();
	}
}

function loop() {
	requestAnimationFrame(loop);
	CTX.fillStyle = "rgba(0,0,0,0.15)";
	CTX.fillRect(0, 0, W, H);
	render();
}

function createParticles() {
	for (let i = 0; i < NUM_PARTICLES; i++) {
		const X = Math.random() * W, Y = Math.random() * H, Z = Math.random() * MAX_Z;
		PARTICLES.push(new Particle(X, Y, Z));
	}
}

function init() {
	CANVAS.width = W;
	CANVAS.height = H;
	createParticles();
	loop();
}
init();






// "use strict";

// var canvas = document.getElementById('canvas'),
//   ctx = canvas.getContext('2d'),
//   w = canvas.width = window.innerWidth,
//   h = canvas.height = window.innerHeight,
    
//   hue = 217,
//   stars = [],
//   count = 0,
//   maxStars = 600;

// var canvas2 = document.createElement('canvas'),
//     ctx2 = canvas2.getContext('2d');
//     canvas2.width = 2000;
//     canvas2.height = 2000;
// var half = canvas2.width/2,
//     gradient2 = ctx2.createRadialGradient(half, half, 0, half, half, half);
//     gradient2.addColorStop(0.025, '#fff');
//     gradient2.addColorStop(0.1, 'hsl(' + hue + ', 61%, 33%)');
//     gradient2.addColorStop(0.35, 'hsl(' + hue + ', 64%, 6%)');
//     gradient2.addColorStop(1, 'transparent');

//     ctx2.fillStyle = gradient2;
//     ctx2.beginPath();
//     ctx2.arc(half, half, half, 0, Math.PI * 2);
//     ctx2.fill();

// // End cache

// function random(min, max) {
//   if (arguments.length < 2) {
//     max = min;
//     min = 0;
//   }
  
//   if (min > max) {
//     var hold = max;
//     max = min;
//     min = hold;
//   }

//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// function maxOrbit(x,y) {
//   var max = Math.max(x,y),
//       diameter = Math.round(Math.sqrt(max*max + max*max));
//   return diameter/1;
// }

// var Star = function() {

//   this.orbitRadius = random(maxOrbit(w,h));
//   this.radius = random(60, this.orbitRadius) / 12;
//   this.orbitX = w / 2;
//   this.orbitY = h / 2;
//   this.timePassed = random(0, maxStars);
//   this.speed = random(this.orbitRadius) / 200000;
//   this.alpha = random(2, 10) / 8;

//   count++;
//   stars[count] = this;
// }

// Star.prototype.draw = function() {
//   var x = Math.sin(this.timePassed) * this.orbitRadius + this.orbitX,
//       y = Math.cos(this.timePassed) * this.orbitRadius + this.orbitY,
//       twinkle = random(10);

//   if (twinkle === 1 && this.alpha > 0) {
//     this.alpha -= 0.05;
//   } else if (twinkle === 2 && this.alpha < 1) {
//     this.alpha += 0.05;
//   }

//   ctx.globalAlpha = this.alpha;
//     ctx.drawImage(canvas2, x - this.radius / 2, y - this.radius / 2, this.radius, this.radius);
//   this.timePassed += this.speed;
// }

// for (var i = 0; i < maxStars; i++) {
//   new Star();
// }

// function animation() {
//     ctx.globalCompositeOperation = 'source-over';
//     ctx.globalAlpha = 0.8;
//     ctx.fillStyle = 'hsla(' + hue + ', 64%, 6%, 1)';
//     ctx.fillRect(0, 0, w, h)
  
//   ctx.globalCompositeOperation = 'lighter';
//   for (var i = 1, l = stars.length; i < l; i++) {
//     stars[i].draw();
//   };  
  
//   window.requestAnimationFrame(animation);
// }

// animation();






