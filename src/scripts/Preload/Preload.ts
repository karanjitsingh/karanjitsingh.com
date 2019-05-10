/// <reference path="Components/Canvas.ts" />

Globals.PageHeight = document.body.clientHeight;
Globals.PageWidth = document.body.clientWidth;
Globals.ParticleJS = null;

module Preload {
    
    let {PageHeight, PageWidth} = Globals;

    function loadingComplete(callback) {
        
        function hideWave() {
            Utils.Animate(function (t) {
                LoadingWave.alpha = 1-t
            }, Utils.EasingFunctions.easeOutCubic, 300, callback);
        }
        
        Utils.Animate(function (t) {
            LoadingWave.waves[1].amplitude = 40*(1-t);
            LoadingWave.options.top = 2*PageHeight/3 - t*(PageHeight/6);
        }, Utils.EasingFunctions.easeOutCubic, 1000, function() {
            Page.openPage(document.location.href.match(/http:\/\/.*\/([^/]+)\/?/));
            callback()
        });
    }
    
    const pjs = Globals.ParticleJS = new ParticleJS(Components.Canvas.Element, null,{drawCanvasBackground: true, canvasBGColor: "#2F5168"});
    Components.Canvas.init();

    const particlesCount = (400 / 1400) * PageWidth;
    const totalParticales = particlesCount < 450 ? 450 : particlesCount;

    export const LoadingWave = new ParticleJSAnimations.WaveAnimation(totalParticales, [
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
    ], {atomOptions: {colorSet: ["#E04836", "#F39D41", "#DDDDDD"],  popProbability:1 }, top: 2*PageHeight/3, width: PageWidth});

    pjs.addDrawObject(LoadingWave);
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

    PageData.loadPageData(() => {
        responseComplete();
    });
}