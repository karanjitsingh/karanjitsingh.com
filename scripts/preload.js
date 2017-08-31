function $id(src) {
    return document.getElementById(src);
}

var EasingFunctions = {
    // no easing, no acceleration
    linear: function (t) { return t },
    // accelerating from zero velocity
    easeInQuad: function (t) { return t*t },
    // decelerating to zero velocity
    easeOutQuad: function (t) { return t*(2-t) },
    // acceleration until halfway, then deceleration
    easeInOutQuad: function (t) { return t<.5 ? 2*t*t : -1+(4-2*t)*t },
    // accelerating from zero velocity
    easeInCubic: function (t) { return t*t*t },
    // decelerating to zero velocity
    easeOutCubic: function (t) { return (--t)*t*t+1 },
    // acceleration until halfway, then deceleration
    easeInOutCubic: function (t) { return t<.5 ? 4*t*t*t : (t-1)*(2*t-2)*(2*t-2)+1 },
    // accelerating from zero velocity
    easeInQuart: function (t) { return t*t*t*t },
    // decelerating to zero velocity
    easeOutQuart: function (t) { return 1-(--t)*t*t*t },
    // acceleration until halfway, then deceleration
    easeInOutQuart: function (t) { return t<.5 ? 8*t*t*t*t : 1-8*(--t)*t*t*t },
    // accelerating from zero velocity
    easeInQuint: function (t) { return t*t*t*t*t },
    // decelerating to zero velocity
    easeOutQuint: function (t) { return 1+(--t)*t*t*t*t },
    // acceleration until halfway, then deceleration
    easeInOutQuint: function (t) { return t<.5 ? 16*t*t*t*t*t : 1+16*(--t)*t*t*t*t }
}


function Animation(step, easing, duration, callback) {
	this.start = null;
	this.easing = easing;
	this.duration = duration;
	this.callback = callback;
	this.step = step;

	this.animate = function(time) {
		if(this.start === null)
			this.start = time;

		if(time >= this.start + duration) {
			this.step(1);
			if(this.callback)
				this.callback();
		}
		else {
            this.step(this.easing((time - this.start)/this.duration));
			window.requestAnimationFrame(this.animate.bind(this));
        }
	};

	window.requestAnimationFrame(this.animate.bind(this));
}

function loadingComplete(callback) {

    function hideWave() {
        new Animation(function (t) {
            wave.alpha = 1-t
        }, EasingFunctions.easeOutCubic, 300, callback);
    }

    new Animation(function (t) {
        wave.waves[1].amplitude = 40*(1-t);
        wave.options.top = 2*H/3 - t*(H/6);
    }, EasingFunctions.easeOutCubic, 1000, hideWave);
}


var canvas = $id("canvas");
var W = document.body.clientWidth;
var H = document.body.clientHeight;
var total = (400 / 1400) * W;
total = total < 450 ? 450 : total;
var t;
canvas.width = W;
canvas.height = H;

var pjs = new ParticleJS(canvas, null,{drawCanvasBackground: true, canvasBGColor: "#2F5168"});

var wave = new ParticleJSAnimations.WaveAnimation(total, [
	{
		time: 0,
		amplitude: 100,
		wavelength: 20,
		phase: 0,
		timePeriod: 10,
		increment: 0.1
	},
	{
		time: 0,
		amplitude: 40,
		wavelength: 1000,
		phase: 0,
		timePeriod: 10,
		increment: 0.1
	}
], {atomOptions: {colorSet: ["#E04836", "#F39D41", "#DDDDDD"],  popProbability:1}, top: 2*H/3, width: W});

pjs.addDrawObject(wave);
pjs.start();

setTimeout(function() {loadingComplete(function() {console.log("yo")})}, 1000);