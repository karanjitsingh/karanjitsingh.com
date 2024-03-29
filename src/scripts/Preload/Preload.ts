/// <reference path="Components/Canvas.ts" />
/// <reference path="Utils/HttpGet.ts"/>
/// <reference path="../Models/Particle.d.ts"/>

const Globals = {
    PageHeight: document.body.clientHeight,
    PageWidth: document.body.clientWidth,
    ParticleJS: null
}

Globals.PageHeight = document.body.clientHeight;
Globals.PageWidth = document.body.clientWidth;
Globals.ParticleJS = null;

function $id (src) {
    return document.getElementById(src);
}

module Preload {

    let {PageHeight, PageWidth} = Globals;

    function getCurrentPage() {
        const match = document.location.pathname.split("/");
        let page;

        if ((match.length == 3 && !match[2]) || match.length == 2) {
            page = match[1];
        }

        return page || null;
    }

    function loadingComplete(callback) {

        function hideWave() {
            Utils.Animate(function (t) {
                LoadingWave.alpha = 1-t
            }, Utils.EasingFunctions.easeOutCubic, 300, callback);
        }

        Utils.Animate(function (t) {
            LoadingWave.waves[1].amplitude = 40*(1-t);
            LoadingWave.options.top = 2*PageHeight/3 - t*(PageHeight/6);
        }, Utils.EasingFunctions.easeOutCubic, 1000, () => {
            Pages.MainPage.openPage(getCurrentPage());
            callback();
        });
    }

    Components.Canvas.init();

    // tslint:disable-next-line: max-line-length
    const pjs = Globals.ParticleJS = new ParticleJS(Components.Canvas.Element as HTMLCanvasElement, null,{drawCanvasBackground: true, canvasBGColor: "#2F5168"});

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
            Pages.MainPage.initPage();        
            setTimeout(function() {
                loadingComplete(() => {
                    Pages.MainPage.showPage();
                });
            }, 100);
        }
    }

    const script = document.createElement("script");
    script.onload = () => {
        responseComplete();
    };
    script.src = "./scripts/page.js";
    document.body.appendChild(script);
    
    PageData.loadPageData(() => {
        responseComplete();
    });
}