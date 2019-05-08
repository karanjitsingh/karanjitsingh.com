namespace Preload {

    function $id(src) {
        return document.getElementById(src);
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
            }, Utils.EasingFunctions.easeOutCubic, 300, callback);
        }

        new Animation(function (t) {
            wave.waves[1].amplitude = 40*(1-t);
            wave.options.top = 2*H/3 - t*(H/6);
        }, Utils.EasingFunctions.easeOutCubic, 1000, function() {
            Page.openPage(document.location.href.match(/http:\/\/.*\/([^/]+)\/?/));
            callback()
        });
    }

    var canvas: HTMLCanvasElement = $id("canvas") as HTMLCanvasElement;
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
    ], {atomOptions: {colorSet: ["#E04836", "#F39D41", "#DDDDDD"],  popProbability:1 }, top: 2*H/3, width: W});

    pjs.addDrawObject(wave);
    pjs.start();

    window.addEventListener('load', function() {
        responseComplete();
    });

    function responseComplete() {
        if(!this.replyCount) {
            this.replyCount = 1;
            return;
        }
        else {
            this.replyCount++;
        }
        if(this.replyCount >= 3) {
            Page.loadPages();        
            setTimeout(function() {
                loadingComplete(Page.initPage);
            }, 100);
        }
    }

    var script = document.createElement("script");
    script.onload = function() {
        responseComplete();   
    };
    script.src = "./scripts/page.js";
    document.body.appendChild(script);

    var xhttp;
    if ((window as any).XMLHttpRequest) {
        xhttp = new XMLHttpRequest();
    } else {
        xhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var json = JSON.parse(this.responseText);
            codePageData = json["code"];
            aboutPageData = json["about"];
            responseComplete();
    }
    };

    xhttp.open("GET", "./data/projects.json", true);
    xhttp.send();

    export var codePageData;
    export var aboutPageData;
}