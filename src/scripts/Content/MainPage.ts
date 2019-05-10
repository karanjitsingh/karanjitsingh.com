/// <reference path="../Models/Models.d.ts" />

module MainPage {
	var currentPage = "";
	let {PageHeight, PageWidth, ParticleJS} = Globals;
	const canvasElement = Components.Canvas.Element as HTMLCanvasElement;

	export function initPage() {

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


		var total = ParticleJS.removeDrawObject(Preload.LoadingWave);

		console.log(total);

		var svg = new ParticleJSAnimations.SVGAnimation(Resources.VectorPaths.NameText,svgOptions,total);
		var random = new ParticleJSAnimations.FadeExplode(null, total);

		console.log(total);

		svg.move({x: PageWidth/2 - 175, y: PageHeight/2-253})
		svg.alpha = 1;
		ParticleJS.addDrawObject(svg);
		ParticleJS.addDrawObject(random);


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
		svgOptions  .frictionFactor = 0.6

		var codeSVG = new ParticleJSAnimations.SVGAnimation(Resources.VectorPaths.CodeIcon, svgOptions);
		codeSVG.move({x: PageWidth/2 - 36 - 200, y: PageHeight/2+200})
		codeSVG.alpha = 0;
		ParticleJS.addDrawObject(codeSVG);

		var userSVG = new ParticleJSAnimations.SVGAnimation(Resources.VectorPaths.UserIcon, svgOptions);
		userSVG.move({x: PageWidth/2 - 36, y: PageHeight/2+200})
		userSVG.alpha = 0;
		ParticleJS.addDrawObject(userSVG);

		var emailSVG = new ParticleJSAnimations.SVGAnimation(Resources.VectorPaths.EmailIcon, svgOptions);
		emailSVG.move({x: PageWidth/2 - 36 + 200, y: PageHeight/2+200})
		emailSVG.alpha = 0;
		ParticleJS.addDrawObject(emailSVG);

		var menu = $id("menu-container");
		var banner = $id("github-banner")
		menu.style.display = "block";
		banner.style.display = "block";

		Utils.Animate(function (t) {
			codeSVG.alpha = emailSVG.alpha = userSVG.alpha = t * 0.5;
			menu.style.opacity = banner.style.opacity = t.toString();
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

		Components.GithubBanner.init();
	}

	export function openPage(page) {
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

		timeout = setTimeout(ParticleJS.stop, 400);
		
		currentPage = page;
		
		$id(page + "-page").className = "visible";
		$id("page-close").className = "visible";
		
		window.history.pushState(null, "", "/" + page + "/");
	}

	function headerClick(e) {
		e.preventDefault();
		var page = e.target.href.match(/.*\/(.*)\//);
		
		openPage(page);
	}

	var links = document.querySelectorAll(".menu a");
	for(var i=0;i<links.length;i++) {
		links[i].onclick = headerClick;
	}

	$id("page-close").onclick = function() {
		window.history.pushState(null, "", "/");
		onPopState();
	}

	var timeout;

	function onPopState() {
		var page = document.location.href.match(/http:\/\/.*\/([^/]+)\/?/);
		clearTimeout(timeout);

		if(!page) {
			$id(currentPage + "-page").className = "";
			$id("page-close").className = "";
			currentPage = "";
			Components.GithubBanner.setGithubLinkTimer();
			ParticleJS.start();
		}
		else if(currentPage != page) {
			openPage(page);
		}
	}

	window.onpopstate = onPopState;

	export function loadPages() {
		Pages.CodePage.initPage(PageData.CodePageData);
		Pages.CodePage.initPage(PageData.AboutPageData);
	}
}