//=require ../blocks/**/*.js
$(document).ready(function () {
    var rellax = new Rellax('.rellax');
    new WOW().init();
});



const CANVAS = document.getElementsByClassName("canvasSpace")[0],
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




//canvasNeuron

// (function () {
// 	'use strict';
	
// 	var canvas,
//       	ctx,
//       	mousePos,
//       	points = [],
//       	maxDist = 200,
//       	colour = "2,96,155";

// 	function init () {
// 		//Add on load scripts
// 		canvas = document.getElementById("canvas");
// 		ctx = canvas.getContext("2d");
// 		canvas.addEventListener("mousemove",function(evt){
// 			mousePos = getMousePos(canvas,evt);
// 		});
// 		resizeCanvas();
// 		generatePoints(150);
// 		pointFun();
// 		setInterval(pointFun,6);
// 		window.addEventListener('resize', resizeCanvas, false);
// 	}
// 	//Particle constructor
// 	function point () {
// 		this.x = (Math.random()*(canvas.width+maxDist))-(maxDist/2);
// 		this.y = (Math.random()*(canvas.height+maxDist))-(maxDist/2);
// 		this.vx = (Math.random()*1)-.5;
// 		this.vy = (Math.random()*1)-.5;
//     this.dia = Math.random()*3+1;
// 		points.push(this);
// 	}
// 	//Point generator
// 	function generatePoints (amount) {
// 		var temp;
// 		for (var i = 0; i < amount; i++) {
// 			temp = new point();
// 		};
// 		console.log(points);
// 	}
// 	//Point drawer
// 	function draw (obj) {
// 		ctx.beginPath();
// 		ctx.fillStyle = "rgb("+colour+")";
// 		if(obj.dia){
//       ctx.arc(obj.x,obj.y,obj.dia,0,2*Math.PI);
//     }else{
//       ctx.arc(obj.x,obj.y,2,0,2*Math.PI);
//     }
// 		ctx.closePath();
// 		ctx.fill();
// 		//ctx.stroke();
// 	}
// 	//Updates point position values
// 	function update (obj) {
// 		obj.x += obj.vx;
// 		obj.y += obj.vy;
// 		if (obj.x > canvas.width+(maxDist/2)) {
// 			obj.x = -(maxDist/2);
// 		}
// 		else if (obj.xpos < -(maxDist/2)) {
// 			obj.x = canvas.width+(maxDist/2);
// 		}
// 		if (obj.y > canvas.height+(maxDist/2)) {
// 			obj.y = -(maxDist/2);
// 		}
// 		else if (obj.y < -(maxDist/2)) {
// 			obj.y = canvas.height+(maxDist/2);
// 		}
// 	}
// 	//
// 	function pointFun () {
// 		ctx.clearRect(0, 0, canvas.width, canvas.height);
// 		if (mousePos) {
// 			collision(mousePos,maxDist*2);
// 			draw(mousePos);
// 		}
// 		for (var i = 0; i < points.length; i++) {
// 			collision(points[i],maxDist);
//       draw(points[i]);
// 			update(points[i]);
// 		};
// 	}

// 	function collision (obj,dist) {
// 		var temp;
// 		for (var i = 0; i < points.length; i++) {
// 			//Don't interact with self
// 			if (obj !== points[i]) {
// 				temp = Math.sqrt(Math.pow((obj.x - points[i].x),2) + Math.pow((obj.y - points[i].y),2));
// 				if (temp<dist) {
// 					ctx.beginPath();
// 					ctx.moveTo(obj.x, obj.y);
// 					ctx.strokeStyle = "rgba("+colour+","+.8*Math.pow((dist-temp)/dist,5)+")";
//           ctx.moveTo(obj.x, obj.y);
// 					ctx.lineTo(points[i].x, points[i].y);
// 					ctx.closePath();
// 					ctx.stroke();
// 				};
// 			}
// 		};
// 	}

// 	function resizeCanvas() {
// 		canvas.width = window.innerWidth;
// 	canvas.height = window.innerHeight;
// 		pointFun();
// 	}

// 	function getMousePos(cvs, evt1) {
// 		var rect = cvs.getBoundingClientRect();
// 		return {
// 			x: evt1.clientX - rect.left,
// 			y: evt1.clientY - rect.top
// 		};
// 	}

// 	//Execute when DOM has loaded
// 	document.addEventListener('DOMContentLoaded',init,false);
// })();