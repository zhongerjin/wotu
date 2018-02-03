// function Dotline(option) {
//     this.opt = this.extend({
//         dom: 'J_dotLine', //画布id
//         cw: 1000, //画布宽
//         ch: 500, //画布高
//         ds: 100, //点的个数
//         r: 0.5, //圆点半径
//         dis: 100 //触发连线的距离
//     }, option);
//     this.c = document.getElementById(this.opt.dom); //canvas元素id
//     this.ctx = this.c.getContext('2d');
//     this.c.width = this.opt.cw; //canvas宽
//     this.c.height = this.opt.ch; //canvas高
//     this.dotSum = this.opt.ds; //点的数量
//     this.radius = this.opt.r; //圆点的半径
//     this.disMax = this.opt.dis * this.opt.dis; //点与点触发连线的间距		
//     this.dots = [];
//     //requestAnimationFrame控制canvas动画
//     var RAF = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (callback) {
//         window.setTimeout(callback, 1000 / 60);
//     };
//     var _self = this;
//     //增加鼠标效果
//     var mousedot = {
//         x: null,
//         y: null,
//         label: 'mouse'
//     };
//     this.c.onmousemove = function (e) {
//         var e = e || window.event;
//         mousedot.x = e.clientX - _self.c.offsetLeft;
//         mousedot.y = e.clientY - _self.c.offsetTop;
//     };
//     this.c.onmouseout = function (e) {
//         mousedot.x = null;
//         mousedot.y = null;
//     }
//     //控制动画
//     this.animate = function () {
//         _self.ctx.clearRect(0, 0, _self.c.width, _self.c.height);
//         _self.drawLine([mousedot].concat(_self.dots));
//         RAF(_self.animate);
//     };
// }
// //合并配置项，es6直接使用obj.assign();
// Dotline.prototype.extend = function (o, e) {
//     for (var key in e) {
//         if (e[key]) {
//             o[key] = e[key]
//         }
//     }
//     return o;
// };
// //画点
// Dotline.prototype.addDots = function () {
//     var dot;
//     for (var i = 0; i < this.dotSum; i++) { //参数
//         dot = {
//             x: Math.floor(Math.random() * this.c.width) - this.radius,
//             y: Math.floor(Math.random() * this.c.height) - this.radius,
//             ax: (Math.random() * 2 - 1) / 1.5,
//             ay: (Math.random() * 2 - 1) / 1.5
//         }
//         this.dots.push(dot);
//     }
// };
// //点运动
// Dotline.prototype.move = function (dot) {
//     dot.x += dot.ax;
//     dot.y += dot.ay;
//     //点碰到边缘返回
//     dot.ax *= (dot.x > (this.c.width - this.radius) || dot.x < this.radius) ? -1 : 1;
//     dot.ay *= (dot.y > (this.c.height - this.radius) || dot.y < this.radius) ? -1 : 1;
//     //绘制点
//     this.ctx.beginPath();
//     this.ctx.arc(dot.x, dot.y, this.radius, 0, Math.PI * 2, true);
//     this.ctx.stroke();
// };
// //点之间画线
// Dotline.prototype.drawLine = function (dots) {
//     var nowDot;
//     var _that = this;
//     //自己的思路：遍历两次所有的点，比较点之间的距离，函数的触发放在animate里
//     this.dots.forEach(function (dot) {

//         _that.move(dot);
//         for (var j = 0; j < dots.length; j++) {
//             nowDot = dots[j];
//             if (nowDot === dot || nowDot.x === null || nowDot.y === null) continue; //continue跳出当前循环开始新的循环
//             var dx = dot.x - nowDot.x, //别的点坐标减当前点坐标
//                 dy = dot.y - nowDot.y;
//             var dc = dx * dx + dy * dy;
//             if (Math.sqrt(dc) > Math.sqrt(_that.disMax)) continue;
//             // 如果是鼠标，则让粒子向鼠标的位置移动
//             if (nowDot.label && Math.sqrt(dc) > Math.sqrt(_that.disMax) / 2) {
//                 dot.x -= dx * 0.02;
//                 dot.y -= dy * 0.02;
//             }
//             var ratio;
//             ratio = (_that.disMax - dc) / _that.disMax;

//             _that.ctx.beginPath();
//             _that.ctx.lineWidth = ratio / 2;
//             _that.ctx.strokeStyle = 'rgba(255,255,255,' + (ratio + 0.2) + ')';
//             _that.ctx.moveTo(dot.x, dot.y);
//             _that.ctx.lineTo(nowDot.x, nowDot.y);
//             _that.ctx.stroke(); //不描边看不出效果

//             //dots.splice(dots.indexOf(dot), 1);
//         }
//     });
// };
// //开始动画
// Dotline.prototype.start = function () {
//     var _that = this;
//     this.addDots();
//     setTimeout(function () {
//         _that.animate();
//     }, 100);
// }
function project3D(x,y,z,vars){

	var p,d;
	x-=vars.camX;
	y-=vars.camY-8;
	z-=vars.camZ;
	p=Math.atan2(x,z);
	d=Math.sqrt(x*x+z*z);
	x=Math.sin(p-vars.yaw)*d;
	z=Math.cos(p-vars.yaw)*d;
	p=Math.atan2(y,z);
	d=Math.sqrt(y*y+z*z);
	y=Math.sin(p-vars.pitch)*d;
	z=Math.cos(p-vars.pitch)*d;
	var rx1=-1000;
	var ry1=1;
	var rx2=1000;
	var ry2=1;
	var rx3=0;
	var ry3=0;
	var rx4=x;
	var ry4=z;
	var uc=(ry4-ry3)*(rx2-rx1)-(rx4-rx3)*(ry2-ry1);
	var ua=((rx4-rx3)*(ry1-ry3)-(ry4-ry3)*(rx1-rx3))/uc;
	var ub=((rx2-rx1)*(ry1-ry3)-(ry2-ry1)*(rx1-rx3))/uc;
	if(!z)z=0.000000001;
	if(ua>0&&ua<1&&ub>0&&ub<1){
		return {
			x:vars.cx+(rx1+ua*(rx2-rx1))*vars.scale,
			y:vars.cy+y/z*vars.scale,
			d:(x*x+y*y+z*z)
		};
	}else{
		return { d:-1 };
	}
}


function elevation(x,y,z){

	var dist = Math.sqrt(x*x+y*y+z*z);
	if(dist && z/dist>=-1 && z/dist <=1) return Math.acos(z / dist);
	return 0.00000001;
}


function rgb(col){

	col += 0.000001;
	var r = parseInt((0.5+Math.sin(col)*0.5)*16);
	var g = parseInt((0.5+Math.cos(col)*0.5)*16);
	var b = parseInt((0.5-Math.sin(col)*0.5)*16);
	return "#"+r.toString(16)+g.toString(16)+b.toString(16);
}


function interpolateColors(RGB1,RGB2,degree){
	
	var w2=degree;
	var w1=1-w2;
	return [w1*RGB1[0]+w2*RGB2[0],w1*RGB1[1]+w2*RGB2[1],w1*RGB1[2]+w2*RGB2[2]];
}


function rgbArray(col){

	col += 0.000001;
	var r = parseInt((0.5+Math.sin(col)*0.5)*256);
	var g = parseInt((0.5+Math.cos(col)*0.5)*256);
	var b = parseInt((0.5-Math.sin(col)*0.5)*256);
	return [r, g, b];
}


function colorString(arr){

	var r = parseInt(arr[0]);
	var g = parseInt(arr[1]);
	var b = parseInt(arr[2]);
	return "#"+("0" + r.toString(16) ).slice (-2)+("0" + g.toString(16) ).slice (-2)+("0" + b.toString(16) ).slice (-2);
}


function process(vars){


	if(vars.points.length<vars.initParticles) for(var i=0;i<5;++i) spawnParticle(vars);
	var p,d,t;
	
	p = Math.atan2(vars.camX, vars.camZ);
	d = Math.sqrt(vars.camX * vars.camX + vars.camZ * vars.camZ);
	d -= Math.sin(vars.frameNo / 80) / 25;
	t = Math.cos(vars.frameNo / 300) / 165;
	vars.camX = Math.sin(p + t) * d;
	vars.camZ = Math.cos(p + t) * d;
	vars.camY = -Math.sin(vars.frameNo / 220) * 15;
	vars.yaw = Math.PI + p + t;
	vars.pitch = elevation(vars.camX, vars.camZ, vars.camY) - Math.PI / 2;
	
	var t;
	for(var i=0;i<vars.points.length;++i){
		
		x=vars.points[i].x;
		y=vars.points[i].y;
		z=vars.points[i].z;
		d=Math.sqrt(x*x+z*z)/1.0075;
		t=.1/(1+d*d/5);
		p=Math.atan2(x,z)+t;
		vars.points[i].x=Math.sin(p)*d;
		vars.points[i].z=Math.cos(p)*d;
		vars.points[i].y+=vars.points[i].vy*t*((Math.sqrt(vars.distributionRadius)-d)*2);
		if(vars.points[i].y>vars.vortexHeight/2 || d<.25){
			vars.points.splice(i,1);
			spawnParticle(vars);
		}
	}
}

function drawFloor(vars){
	
	var x,y,z,d,point,a;
	for (var i = -25; i <= 25; i += 1) {
		for (var j = -25; j <= 25; j += 1) {
			x = i*2;
			z = j*2;
			y = vars.floor;
			d = Math.sqrt(x * x + z * z);
			point = project3D(x, y-d*d/85, z, vars);
			if (point.d != -1) {
				size = 1 + 15000 / (1 + point.d);
				a = 0.15 - Math.pow(d / 50, 4) * 0.15;
				if (a > 0) {
					vars.ctx.fillStyle = colorString(interpolateColors(rgbArray(d/26-vars.frameNo/40),[0,128,32],.5+Math.sin(d/6-vars.frameNo/8)/2));
					vars.ctx.globalAlpha = a;
					vars.ctx.fillRect(point.x-size/2,point.y-size/2,size,size);
				}
			}
		}
	}		
	vars.ctx.fillStyle = "#82f";
	for (var i = -25; i <= 25; i += 1) {
		for (var j = -25; j <= 25; j += 1) {
			x = i*2;
			z = j*2;
			y = -vars.floor;
			d = Math.sqrt(x * x + z * z);
			point = project3D(x, y+d*d/85, z, vars);
			if (point.d != -1) {
				size = 1 + 15000 / (1 + point.d);
				a = 0.15 - Math.pow(d / 50, 4) * 0.15;
				if (a > 0) {
					vars.ctx.fillStyle = colorString(interpolateColors(rgbArray(-d/26-vars.frameNo/40),[32,0,128],.5+Math.sin(-d/6-vars.frameNo/8)/2));
					vars.ctx.globalAlpha = a;
					vars.ctx.fillRect(point.x-size/2,point.y-size/2,size,size);
				}
			}
		}
	}		
}

function sortFunction(a,b){
	return b.dist-a.dist;
}

function draw(vars){

	vars.ctx.globalAlpha=.15;
	vars.ctx.fillStyle="#000";
	vars.ctx.fillRect(0, 0, vars.canvas.width, vars.canvas.height);
	
	drawFloor(vars);
	
	var point,x,y,z,a;
	for(var i=0;i<vars.points.length;++i){
		x=vars.points[i].x;
		y=vars.points[i].y;
		z=vars.points[i].z;
		point=project3D(x,y,z,vars);
		if(point.d != -1){
			vars.points[i].dist=point.d;
			size=1+vars.points[i].radius/(1+point.d);
			d=Math.abs(vars.points[i].y);
			a = .8 - Math.pow(d / (vars.vortexHeight/2), 1000) * .8;
			vars.ctx.globalAlpha=a>=0&&a<=1?a:0;
			vars.ctx.fillStyle=rgb(vars.points[i].color);
			if(point.x>-1&&point.x<vars.canvas.width&&point.y>-1&&point.y<vars.canvas.height)vars.ctx.fillRect(point.x-size/2,point.y-size/2,size,size);
		}
	}
	vars.points.sort(sortFunction);
}


function spawnParticle(vars){

	var p,ls;
	pt={};
	p=Math.PI*2*Math.random();
	ls=Math.sqrt(Math.random()*vars.distributionRadius);
	pt.x=Math.sin(p)*ls;
	pt.y=-vars.vortexHeight/2;
	pt.vy=vars.initV/20+Math.random()*vars.initV;
	pt.z=Math.cos(p)*ls;
	pt.radius=200+800*Math.random();
	pt.color=pt.radius/1000+vars.frameNo/250;
	vars.points.push(pt);	
}

function frame(vars) {

	if(vars === undefined){
		var vars={};
		vars.canvas = document.querySelector(".J_dotLine");
		vars.ctx = vars.canvas.getContext("2d");
		vars.canvas.width = document.body.clientWidth;
		vars.canvas.height = document.body.clientHeight;
		window.addEventListener("resize", function(){
			vars.canvas.width = document.body.clientWidth;
			vars.canvas.height = document.body.clientHeight;
			vars.cx=vars.canvas.width/2;
			vars.cy=vars.canvas.height/2;
		}, true);
		vars.frameNo=0;

		vars.camX = 0;
		vars.camY = 0;
		vars.camZ = -14;
		vars.pitch = elevation(vars.camX, vars.camZ, vars.camY) - Math.PI / 2;
		vars.yaw = 0;
		vars.cx=vars.canvas.width/2;
		vars.cy=vars.canvas.height/2;
		vars.bounding=10;
		vars.scale=500;
		vars.floor=26.5;

		vars.points=[];
		vars.initParticles=700;
		vars.initV=.01;
		vars.distributionRadius=800;
		vars.vortexHeight=25;
	}

	vars.frameNo++;
	requestAnimationFrame(function() {
		frame(vars);
	});

	process(vars);
	draw(vars);
}
frame();