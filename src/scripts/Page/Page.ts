/// <reference path="../Models/Models.d.ts" />

module Page {
	var currentPage = "";
	let {PageHeight, PageWidth, ParticleJS} = Globals;
	const canvasElement = Components.Canvas.Element;

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
				var codePage = $id("code-page");
				codePage.querySelector(".heading").innerHTML = "";
				codePage.querySelector(".right-pane").className = "right-pane no-content";
				(codePage.querySelector(".github") as HTMLAnchorElement).href = "https://github.com/karanjitsingh/";
				codePage.querySelector(".desc").innerHTML = "";
				(codePage.querySelector(".image") as HTMLImageElement).src = "";
				if(ListItem.selectedIndex != -1)
					ListItem.list[ListItem.selectedIndex].element.className = "";
				ListItem.selectedIndex = -1;
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

	var ListItem = function(elem) {
		this.element = elem;
		this.element.onclick = function(e) {

			var codePage = $id("code-page");
			var heading = codePage.querySelector(".heading");
			var rightPane = codePage.querySelector(".right-pane");
			var github = codePage.querySelector(".github") as HTMLAnchorElement;
			var desc = codePage.querySelector(".desc");
			var image = codePage.querySelector(".image img") as HTMLImageElement;
			var imgContainer = codePage.querySelector(".image") as HTMLImageElement;
			
			if(PageData.CodePageData[this.index].link != "") {
				var win = window.open(PageData.CodePageData[this.index].link, '_blank');
				win.focus();
			}
			else {

				if(ListItem.selectedIndex!=-1)
					ListItem.list[ListItem.selectedIndex].element.className = "";
				this.element.className = "selected";
				ListItem.selectedIndex = this.index;

				rightPane.className = "right-pane";

				if(PageData.CodePageData[this.index].github != "") {
					github.className = "github";
					github.href = PageData.CodePageData[this.index].github;
				}
				else {
					github.href = "";
					github.className = "github hidden";
				}

				heading.innerHTML = PageData.CodePageData[this.index].title;
				desc.innerHTML = PageData.CodePageData[this.index].desc;

				if(PageData.CodePageData[this.index].img != "") {
					imgContainer.className = "image loading";
					image.src = PageData.CodePageData[this.index].img;
				}
				else {
					imgContainer.className = "image hidden";
					image.src = "";
				}
			}
		}.bind(this);
		this.index = ListItem.list.length;
		ListItem.list.push(this);
	}

	ListItem.selectedIndex = -1;
	ListItem.list = [];

	export function loadPages() {
		// Code Page
		var codePage = $id("code-page");
		var list = codePage.querySelector("ul");
		for(var i=0;i<PageData.CodePageData.length;i++) {
			var listItem = document.createElement("li");
			listItem.innerHTML = PageData.CodePageData[i].title;
			list.appendChild(listItem);
			var label = document.createElement("label");
			label.innerHTML = PageData.CodePageData[i].year;
			listItem.appendChild(label);
			new ListItem(listItem);
		}
		(codePage.querySelector(".image img") as HTMLImageElement).onload = function() {
			document.querySelector("#code-page .image").className = "image";
			console.log("load complete");
		}

		// About Page
		var aboutPage = $id("about-page");
		aboutPage.querySelector("p").innerHTML = PageData.AboutPageData;
		PageData.AboutPageData  = null;
	}
}