/// <reference path="../../Models/Models.d.ts" />


module Pages {

	let currentPage = "";
	let {PageHeight, PageWidth, ParticleJS} = Globals;
    let particleJSTimeout;
    const canvasElement = Components.Canvas.Element as HTMLCanvasElement;
    const PageCloseButton = $id("page-close");
    const PageLinks = document.querySelectorAll(".menu a") as NodeListOf<HTMLAnchorElement>;
    const MenuContainer = $id("menu-container");


    interface IMainPage extends IContentPage {
        openPage: (page) => void;
        windowStateChange: () => void;
    }

    export const MainPage: IMainPage = {

        Container: null,

        showPage: () => {
            var svgOptions: ParticleJSAnimations.SVGAnimationOptions = {
                atomOptions: {
                    pop: true,
                    popRadius: 4,
                    popProbability: 0.002,
                    radius: 2,
                    colorSet: ["#E04836", "#F39D41", "#DDDDDD"],
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
    
            const total = ParticleJS.removeDrawObject(Preload.LoadingWave);
            
            const random = new ParticleJSAnimations.FadeExplode(null, total);
            ParticleJS.addDrawObject(random);
            
            const svg = new ParticleJSAnimations.SVGAnimation(Resources.VectorPaths.NameText,svgOptions,total);
            svg.move({x: PageWidth/2 - 175, y: PageHeight/2-253})
            svg.alpha = 1;
            ParticleJS.addDrawObject(svg);

            svgOptions.mouseRepel = true;
            svgOptions.scale = 3;
            svgOptions.pathVariation = 0;
            svgOptions.lineDensity = 0.28;
            svgOptions.atomOptions.colorSet= ["#FFFFFF"];
            svgOptions.atomOptions.radius = 1;
            svgOptions.atomOptions.popRadius = 3;
            svgOptions.atomOptions.popProbability = 0.001;
            svgOptions.connectingLines = true;
            svgOptions.connectingLineMaxLength = 30;
            svgOptions.blur = false;
            svgOptions.maxRepelDistance = 20
            svgOptions.forceFactor = 10
            svgOptions.frictionFactor = 0.6
    
            const codeSVG = new ParticleJSAnimations.SVGAnimation(Resources.VectorPaths.CodeIcon, svgOptions);
            codeSVG.move({x: PageWidth/2 - 36 - 200, y: PageHeight/2+200})
            codeSVG.alpha = 0;
            ParticleJS.addDrawObject(codeSVG);
    
            const userSVG = new ParticleJSAnimations.SVGAnimation(Resources.VectorPaths.UserIcon, svgOptions);
            userSVG.move({x: PageWidth/2 - 36, y: PageHeight/2+200})
            userSVG.alpha = 0;
            ParticleJS.addDrawObject(userSVG);
    
            const emailSVG = new ParticleJSAnimations.SVGAnimation(Resources.VectorPaths.EmailIcon, svgOptions);
            emailSVG.move({x: PageWidth/2 - 36 + 200, y: PageHeight/2+200})
            emailSVG.alpha = 0;
            ParticleJS.addDrawObject(emailSVG);

            Components.GithubBanner.init();
   
            Utils.Animate((t) => {
                codeSVG.alpha = emailSVG.alpha = userSVG.alpha = t * 0.5;
                MenuContainer.style.opacity = Components.GithubBanner.Element.style.opacity = t.toString();
            }, Utils.EasingFunctions.easeOutCubic, 2000);
    
            window.addEventListener("resize", function() {
                PageWidth = Globals.PageWidth = document.body.clientWidth;
                PageHeight = Globals.PageHeight = document.body.clientHeight;
                canvasElement.width = PageWidth;
                canvasElement.height = PageHeight;

                svg.move({x: PageWidth/2 - 175, y: PageHeight/2-253});
                codeSVG.move({x: PageWidth/2 - 36 - 200, y: PageHeight/2+200});
                userSVG.move({x: PageWidth/2 - 36, y: PageHeight/2+200});
                emailSVG.move({x: PageWidth/2 - 36 + 200, y: PageHeight/2+200});

                ParticleJS.didResize(canvasElement);
            });
    
        },

        openPage: (page) => {
            if(!page || currentPage.toLowerCase() === page[1].toLowerCase())
                return;
    
            page = page[1];
            switch(page) {
                case "code":
                    Pages.CodePage.showPage();
                    break;
                case "about":
                case "contact":
                    break;
                default:
                return;
            }
    
            Components.GithubBanner.blurGithubBanner();
    
            particleJSTimeout = setTimeout(ParticleJS.stop, 400);
            
            currentPage = page[1];
            
            PageCloseButton.className = "visible";
            
            window.history.pushState(null, "", "/" + page + "/");
        },

        initPage: () => {
            Pages.CodePage.initPage(PageData.CodePageData);
            Pages.CodePage.initPage(PageData.AboutPageData);

            for (var i=0;i<PageLinks.length;i++) {
                PageLinks[i].onclick = (e) => {
                    e.preventDefault();
                    var page = (e.target as HTMLAnchorElement).href.match(/.*\/(.*)\//);
                    
                    MainPage.openPage(page);
                };
            }

            PageCloseButton.onclick = function() {
                window.history.pushState(null, "", "/");
                MainPage.windowStateChange;
            }
            
            window.onpopstate = MainPage.windowStateChange;
        },

        windowStateChange: () =>{
            var page = document.location.href.match(/http:\/\/.*\/([^/]+)\/?/)[1];
            clearTimeout(particleJSTimeout);
    
            if(!page) {
                $id(currentPage + "-page").className = "";
                PageCloseButton.className = "";
                currentPage = "";
                Components.GithubBanner.setGithubLinkTimer();
                ParticleJS.start();
            }
            else if(currentPage != page) {
                MainPage.openPage(page);
            }
        }
    }
    

}

