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
    }, EasingFunctions.easeOutCubic, 1000, callback);
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

window.addEventListener('load', function() {
	setTimeout(function() {loadingComplete(initPage);}, 2000);
});

function initPage() {

	var name = "M 0 0 L 0 105 M 0 61.5 L 61.5 0 M 17 44 L 61.5 105 M 81.38697428310476 34.7150396039779 A 32 32 0 0 1 128.0184936160645 42.85354256067211 M 97.0767174181432 63.31228973972378 A 365 365 0 0 1 128.00000000000003 62 M 97 102 A 19 19 0 0 1 97 64 M 127.61833855844927 75.84946841624716 A 31 31 0 0 1 97 102 M 128 42 L 128 105 M 160.5 27 L 160.5 105 M 161.6318519781126 47.291267499687024 A 32 32 0 0 1 196.9962020667432 28.566807976681964 M 263 42 L 263 105 M 216.38697428310476 34.7150396039779 A 32 32 0 0 1 263.01849361606446 42.85354256067211 M 232.0767174181432 63.31228973972378 A 365 365 0 0 1 263 62 M 232 102 A 19 19 0 0 1 232 64 M 262.6183385584493 75.84946841624716 A 31 31 0 0 1 232 102 M 294 27 L 294 105 M 295.1911894296917 50.63026681882313 A 30 30 0 0 1 348.8124172282369 42.13749866443608 M 349 42 L 349 105 ";
	var icons = {
		code: "M24 10.935v2.131l-8 3.947v-2.23l5.64-2.783-5.64-2.79v-2.223l8 3.948zm-16 3.848l-5.64-2.783 5.64-2.79v-2.223l-8 3.948v2.131l8 3.947v-2.23zm7.047-10.783h-2.078l-4.011 16h2.073l4.016-16z",
		// code: "M34.784,29.594c-0.603-0.567-1.552-0.54-2.121,0.061L14.429,48.965c-0.546,0.578-0.546,1.481,0,2.06l18.234,19.32  c0.295,0.313,0.692,0.471,1.091,0.471c0.369,0,0.74-0.136,1.029-0.409c0.603-0.568,0.63-1.518,0.062-2.12L17.582,49.995  l17.263-18.28C35.413,31.112,35.386,30.163,34.784,29.594z M85.571,48.978L67.337,29.655c-0.568-0.602-1.517-0.631-2.12-0.062  c-0.603,0.568-0.63,1.518-0.062,2.12l17.263,18.293L65.155,68.285c-0.568,0.603-0.541,1.552,0.061,2.121  c0.29,0.273,0.66,0.409,1.03,0.409c0.398,0,0.796-0.157,1.091-0.47l18.234-19.309C86.117,50.459,86.117,49.556,85.571,48.978z   M57.854,29.538c-0.771-0.294-1.642,0.09-1.938,0.863L41.283,68.526c-0.297,0.773,0.09,1.641,0.863,1.938  c0.177,0.067,0.358,0.1,0.537,0.1c0.603,0,1.172-0.366,1.4-0.963l14.633-38.125C59.014,30.702,58.627,29.835,57.854,29.538z",
		email: "M12.042 23.648c-7.813 0-12.042-4.876-12.042-11.171 0-6.727 4.762-12.125 13.276-12.125 6.214 0 10.724 4.038 10.724 9.601 0 8.712-10.33 11.012-9.812 6.042-.71 1.108-1.854 2.354-4.053 2.354-2.516 0-4.08-1.842-4.08-4.807 0-4.444 2.921-8.199 6.379-8.199 1.659 0 2.8.876 3.277 2.221l.464-1.632h2.338c-.244.832-2.321 8.527-2.321 8.527-.648 2.666 1.35 2.713 3.122 1.297 3.329-2.58 3.501-9.327-.998-12.141-4.821-2.891-15.795-1.102-15.795 8.693 0 5.611 3.95 9.381 9.829 9.381 3.436 0 5.542-.93 7.295-1.948l1.177 1.698c-1.711.966-4.461 2.209-8.78 2.209zm-2.344-14.305c-.715 1.34-1.177 3.076-1.177 4.424 0 3.61 3.522 3.633 5.252.239.712-1.394 1.171-3.171 1.171-4.529 0-2.917-3.495-3.434-5.246-.134z",
		user: "M20.822 18.096c-3.439-.794-6.641-1.49-5.09-4.418 4.719-8.912 1.251-13.678-3.732-13.678-5.082 0-8.465 4.949-3.732 13.678 1.598 2.945-1.725 3.641-5.09 4.418-2.979.688-3.178 2.143-3.178 4.663l.005 1.241h1.995c0-3.134-.125-3.55 1.838-4.003 2.851-.657 5.543-1.278 6.525-3.456.359-.795.592-2.103-.338-3.815-2.058-3.799-2.578-7.089-1.423-9.026 1.354-2.275 5.426-2.264 6.767-.034 1.15 1.911.639 5.219-1.403 9.076-.91 1.719-.671 3.023-.31 3.814.99 2.167 3.707 2.794 6.584 3.458 1.879.436 1.76.882 1.76 3.986h1.995l.005-1.241c0-2.52-.199-3.975-3.178-4.663z"
	}

	var svgOptions = {
		atomOptions: {
			pop: true,
			popRadius: 4,
			popProbability: 0.001,
			radius: 2,
			colorSet: ["#E04836", "#F39D41", "#DDDDDD"],
			particleRadius: 2,
			radiusVariation: 4,
			blur: true
		},
		pathVariation: 2,
		lineDensity: 0.25,
		scale: 1,
		blur: true,
		mouseRepel: true,
		forceFactor: 1,
		maxRepelDistance: 100,
		minBlurDistance: 50,
		maxBlurDistance: 200,
		marginBlurDistance: 75,
		gravity: 1000,
		frictionFactor: 0.9
	};


	var total = pjs.removeDrawObject(wave);

	console.log(total);

	var svg = new ParticleJSAnimations.SVGAnimation(name,svgOptions,total);
	var random = new ParticleJSAnimations.FadeExplode(null, total);

	console.log(total);

	svg.offset = {x: W/2 - 175, y: H/2-253};
	svg.alpha = 1;
	pjs.addDrawObject(svg);
	pjs.addDrawObject(random);


	svgOptions.mouseRepel = true;
	svgOptions.scale = 3;
	svgOptions.pathVariation = 1;
	svgOptions.lineDensity = 0.15;
	svgOptions.atomOptions.colorSet= ["#FFFFFF"];
	svgOptions.atomOptions.radius = 1;
	svgOptions.connectingLines = true;
	svgOptions.connectingLineMaxLength = 30;


	svgOptions.maxRepelDistance = 20
	svgOptions.forceFactor = 10
	svgOptions  .frictionFactor = 0.6

	var codeSVG = new ParticleJSAnimations.SVGAnimation(icons.code, svgOptions);
	codeSVG.offset = {x: W/2 - 3*12 - 200, y: H/2+200};
	codeSVG.alpha = 0;

	pjs.addDrawObject(codeSVG);

	var emailSVG = new ParticleJSAnimations.SVGAnimation(icons.email, svgOptions);
	emailSVG.offset = {x: W/2 - 3*12, y: H/2+200};
	emailSVG.alpha = 0;

	pjs.addDrawObject(emailSVG);

	var userSVG = new ParticleJSAnimations.SVGAnimation(icons.user, svgOptions);
	userSVG.offset = {x: W/2 - 3*12 + 200, y: H/2+200};
	userSVG.alpha = 0;

	pjs.addDrawObject(userSVG);

		new Animation(function (t) {
			codeSVG.alpha = emailSVG.alpha = userSVG.alpha = t * 0.5;
		}, EasingFunctions.easeOutCubic, 2000);

	
}
