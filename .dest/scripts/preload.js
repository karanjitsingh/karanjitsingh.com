var PageData = (function () {
    function PageData() {
    }
    PageData.loadPageData = function (callback) {
        this.AboutPageData = "";
        Utils.HttpGet("./data/projects.json", function (content) {
            var json = JSON.parse(content);
            PageData.CodePageData = json["code"];
            PageData.AboutPageData = json["about"];
            callback();
        });
    };
    return PageData;
}());
var Components;
(function (Components) {
    Components.Canvas = {
        Element: $id("canvas"),
        init: function () {
            Components.Canvas.Element.width = Globals.PageWidth;
            Components.Canvas.Element.height = Globals.PageHeight;
        }
    };
})(Components || (Components = {}));
var Utils;
(function (Utils) {
    Utils.HttpGet = function (url, callback) {
        var xhttp;
        if (window.XMLHttpRequest) {
            xhttp = new XMLHttpRequest();
        }
        else {
            xhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                callback(this.responseText);
            }
        };
        xhttp.open("GET", url, true);
        xhttp.send();
    };
})(Utils || (Utils = {}));
var Globals = {
    PageHeight: document.body.clientHeight,
    PageWidth: document.body.clientWidth,
    ParticleJS: null
};
Globals.PageHeight = document.body.clientHeight;
Globals.PageWidth = document.body.clientWidth;
Globals.ParticleJS = null;
function $id(src) {
    return document.getElementById(src);
}
var Preload;
(function (Preload) {
    var PageHeight = Globals.PageHeight, PageWidth = Globals.PageWidth;
    function getCurrentPage() {
        var match = document.location.pathname.split("/");
        var page;
        if ((match.length == 3 && !match[2]) || match.length == 2) {
            page = match[1];
        }
        return page || null;
    }
    function loadingComplete(callback) {
        function hideWave() {
            Utils.Animate(function (t) {
                Preload.LoadingWave.alpha = 1 - t;
            }, Utils.EasingFunctions.easeOutCubic, 300, callback);
        }
        Utils.Animate(function (t) {
            Preload.LoadingWave.waves[1].amplitude = 40 * (1 - t);
            Preload.LoadingWave.options.top = 2 * PageHeight / 3 - t * (PageHeight / 6);
        }, Utils.EasingFunctions.easeOutCubic, 1000, function () {
            Pages.MainPage.openPage(getCurrentPage());
            callback();
        });
    }
    Components.Canvas.init();
    var pjs = Globals.ParticleJS = new ParticleJS(Components.Canvas.Element, null, { drawCanvasBackground: true, canvasBGColor: "#2F5168" });
    var particlesCount = (400 / 1400) * PageWidth;
    var totalParticales = particlesCount < 450 ? 450 : particlesCount;
    Preload.LoadingWave = new ParticleJSAnimations.WaveAnimation(totalParticales, [
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
    ], { atomOptions: { colorSet: ["#E04836", "#F39D41", "#DDDDDD"], popProbability: 1 }, top: 2 * PageHeight / 3, width: PageWidth });
    pjs.addDrawObject(Preload.LoadingWave);
    pjs.start();
    window.addEventListener('load', function () {
        responseComplete();
    });
    function responseComplete() {
        if (!this.replyCount) {
            this.replyCount = 1;
            return;
        }
        else {
            this.replyCount++;
        }
        if (this.replyCount >= 3) {
            Pages.MainPage.initPage();
            setTimeout(function () {
                loadingComplete(function () {
                    Pages.MainPage.showPage();
                });
            }, 100);
        }
    }
    var script = document.createElement("script");
    script.onload = function () {
        responseComplete();
    };
    script.src = "./scripts/page.js";
    document.body.appendChild(script);
    PageData.loadPageData(function () {
        responseComplete();
    });
})(Preload || (Preload = {}));
var Utils;
(function (Utils) {
    function Animate(step, easing, duration, callback) {
        new Animation(step, easing, duration, callback);
    }
    Utils.Animate = Animate;
    function Animation(step, easing, duration, callback) {
        this.start = null;
        this.easing = easing;
        this.duration = duration;
        this.callback = callback;
        this.step = step;
        this.animate = function (time) {
            if (this.start === null)
                this.start = time;
            if (time >= this.start + duration) {
                this.step(1);
                if (this.callback)
                    this.callback();
            }
            else {
                this.step(this.easing((time - this.start) / this.duration));
                window.requestAnimationFrame(this.animate.bind(this));
            }
        };
        window.requestAnimationFrame(this.animate.bind(this));
    }
})(Utils || (Utils = {}));
var Utils;
(function (Utils) {
    Utils.EasingFunctions = {
        linear: function (t) { return t; },
        easeInQuad: function (t) { return t * t; },
        easeOutQuad: function (t) { return t * (2 - t); },
        easeInOutQuad: function (t) { return t < .5 ? 2 * t * t : -1 + (4 - 2 * t) * t; },
        easeInCubic: function (t) { return t * t * t; },
        easeOutCubic: function (t) { return (--t) * t * t + 1; },
        easeInOutCubic: function (t) { return t < .5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1; },
        easeInQuart: function (t) { return t * t * t * t; },
        easeOutQuart: function (t) { return 1 - (--t) * t * t * t; },
        easeInOutQuart: function (t) { return t < .5 ? 8 * t * t * t * t : 1 - 8 * (--t) * t * t * t; },
        easeInQuint: function (t) { return t * t * t * t * t; },
        easeOutQuint: function (t) { return 1 + (--t) * t * t * t * t; },
        easeInOutQuint: function (t) { return t < .5 ? 16 * t * t * t * t * t : 1 + 16 * (--t) * t * t * t * t; }
    };
})(Utils || (Utils = {}));
