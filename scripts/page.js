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

function animateWave() {
	var animation = new Animation(function (t) {
		wave.waves[1].amplitude = 40*(1-t);
		console.log(wave.waves[1]);
		wave.options.top = 2*H/3 - t*(H/6);
	}, EasingFunctions.easeOutCubic, 1000);
}

var canvas = $id("canvas");
var W = document.body.clientWidth;
var H = document.body.clientHeight;
var total = (400 / 1400) * W;
total = total < 450 ? 450 : total;
var t;
canvas.width = W;
canvas.height = H;

console.log(W,H);


var pjs = new ParticleJS(canvas, null,{drawCanvasBackground: true, canvasBGColor: "#2F5168"});

// var d = `M 0 0 L 0 105 M 0 61.5 L 61.5 0 M 17 44 L 61.5 105 M 81.38697428310476 34.7150396039779 A 32 32 0 0 1 128.0184936160645 42.85354256067211 M 97.0767174181432 63.31228973972378 A 365 365 0 0 1 128.00000000000003 62 M 97 102 A 19 19 0 0 1 97 64 M 127.61833855844927 75.84946841624716 A 31 31 0 0 1 97 102 M 128 42 L 128 105 M 160.5 27 L 160.5 105 M 161.6318519781126 47.291267499687024 A 32 32 0 0 1 196.9962020667432 28.566807976681964 M 263 42 L 263 105 M 216.38697428310476 34.7150396039779 A 32 32 0 0 1 263.01849361606446 42.85354256067211 M 232.0767174181432 63.31228973972378 A 365 365 0 0 1 263 62 M 232 102 A 19 19 0 0 1 232 64 M 262.6183385584493 75.84946841624716 A 31 31 0 0 1 232 102 M 294 27 L 294 105 M 295.1911894296917 50.63026681882313 A 30 30 0 0 1 348.8124172282369 42.13749866443608 M 349 42 L 349 105 `;
// var svg = new ParticleJSAnimations.SVGAnimation(d, {lineDensity: 1, scale: 1});

// pjs.addDrawObject(svg);

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

setTimeout(animateWave, 1000);