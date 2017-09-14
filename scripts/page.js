var currentPage = "";

function initPage() {

	var name = "M 0 0 L 0 105 M 0 61.5 L 61.5 0 M 17 44 L 61.5 105 M 81.38697428310476 34.7150396039779 A 32 32 0 0 1 128.0184936160645 42.85354256067211 M 97.0767174181432 63.31228973972378 A 365 365 0 0 1 128.00000000000003 62 M 97 102 A 19 19 0 0 1 97 64 M 127.61833855844927 75.84946841624716 A 31 31 0 0 1 97 102 M 128 42 L 128 105 M 160.5 27 L 160.5 105 M 161.6318519781126 47.291267499687024 A 32 32 0 0 1 196.9962020667432 28.566807976681964 M 263 42 L 263 105 M 216.38697428310476 34.7150396039779 A 32 32 0 0 1 263.01849361606446 42.85354256067211 M 232.0767174181432 63.31228973972378 A 365 365 0 0 1 263 62 M 232 102 A 19 19 0 0 1 232 64 M 262.6183385584493 75.84946841624716 A 31 31 0 0 1 232 102 M 294 27 L 294 105 M 295.1911894296917 50.63026681882313 A 30 30 0 0 1 348.8124172282369 42.13749866443608 M 349 42 L 349 105 ";
	var icons = {
		code: "M24 10.935v2.131l-8 3.947v-2.23l5.64-2.783-5.64-2.79v-2.223l8 3.948zm-16 3.848l-5.64-2.783 5.64-2.79v-2.223l-8 3.948v2.131l8 3.947v-2.23zm7.047-10.783h-2.078l-4.011 16h2.073l4.016-16z",
		email: "M12.042 23.648c-7.813 0-12.042-4.876-12.042-11.171 0-6.727 4.762-12.125 13.276-12.125 6.214 0 10.724 4.038 10.724 9.601 0 8.712-10.33 11.012-9.812 6.042-.71 1.108-1.854 2.354-4.053 2.354-2.516 0-4.08-1.842-4.08-4.807 0-4.444 2.921-8.199 6.379-8.199 1.659 0 2.8.876 3.277 2.221l.464-1.632h2.338c-.244.832-2.321 8.527-2.321 8.527-.648 2.666 1.35 2.713 3.122 1.297 3.329-2.58 3.501-9.327-.998-12.141-4.821-2.891-15.795-1.102-15.795 8.693 0 5.611 3.95 9.381 9.829 9.381 3.436 0 5.542-.93 7.295-1.948l1.177 1.698c-1.711.966-4.461 2.209-8.78 2.209zm-2.344-14.305c-.715 1.34-1.177 3.076-1.177 4.424 0 3.61 3.522 3.633 5.252.239.712-1.394 1.171-3.171 1.171-4.529 0-2.917-3.495-3.434-5.246-.134z",
		user: "M20.822 18.096c-3.439-.794-6.641-1.49-5.09-4.418 4.719-8.912 1.251-13.678-3.732-13.678-5.082 0-8.465 4.949-3.732 13.678 1.598 2.945-1.725 3.641-5.09 4.418-2.979.688-3.178 2.143-3.178 4.663l.005 1.241h1.995c0-3.134-.125-3.55 1.838-4.003 2.851-.657 5.543-1.278 6.525-3.456.359-.795.592-2.103-.338-3.815-2.058-3.799-2.578-7.089-1.423-9.026 1.354-2.275 5.426-2.264 6.767-.034 1.15 1.911.639 5.219-1.403 9.076-.91 1.719-.671 3.023-.31 3.814.99 2.167 3.707 2.794 6.584 3.458 1.879.436 1.76.882 1.76 3.986h1.995l.005-1.241c0-2.52-.199-3.975-3.178-4.663z",
		fork: "M21 3c0-1.657-1.343-3-3-3s-3 1.343-3 3c0 1.323.861 2.433 2.05 2.832.168 4.295-2.021 4.764-4.998 5.391-1.709.36-3.642.775-5.052 2.085v-7.492c1.163-.413 2-1.511 2-2.816 0-1.657-1.343-3-3-3s-3 1.343-3 3c0 1.305.837 2.403 2 2.816v12.367c-1.163.414-2 1.512-2 2.817 0 1.657 1.343 3 3 3s3-1.343 3-3c0-1.295-.824-2.388-1.973-2.808.27-3.922 2.57-4.408 5.437-5.012 3.038-.64 6.774-1.442 6.579-7.377 1.141-.425 1.957-1.514 1.957-2.803zm-16.8 0c0-.993.807-1.8 1.8-1.8s1.8.807 1.8 1.8-.807 1.8-1.8 1.8-1.8-.807-1.8-1.8zm3.6 18c0 .993-.807 1.8-1.8 1.8s-1.8-.807-1.8-1.8.807-1.8 1.8-1.8 1.8.807 1.8 1.8zm10.2-16.2c-.993 0-1.8-.807-1.8-1.8s.807-1.8 1.8-1.8 1.8.807 1.8 1.8-.807 1.8-1.8 1.8z"
	}

	var svgOptions = {
		atomOptions: {
			pop: true,
			popRadius: 4,
			popProbability: 0.002,
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

	svg.move({x: W/2 - 175, y: H/2-253})
	svg.alpha = 1;
	pjs.addDrawObject(svg);
	pjs.addDrawObject(random);


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

	var codeSVG = new ParticleJSAnimations.SVGAnimation(icons.code, svgOptions);
	codeSVG.move({x: W/2 - 36 - 200, y: H/2+200})
	codeSVG.alpha = 0;
	pjs.addDrawObject(codeSVG);

	var userSVG = new ParticleJSAnimations.SVGAnimation(icons.user, svgOptions);
	userSVG.move({x: W/2 - 36, y: H/2+200})
	userSVG.alpha = 0;
	pjs.addDrawObject(userSVG);

	var emailSVG = new ParticleJSAnimations.SVGAnimation(icons.email, svgOptions);
	emailSVG.move({x: W/2 - 36 + 200, y: H/2+200})
	emailSVG.alpha = 0;
	pjs.addDrawObject(emailSVG);

	var menu = $id("menu-container");
	var banner = $id("github-banner")
	menu.style.display = "block";
	banner.style.display = "block";

	new Animation(function (t) {
		codeSVG.alpha = emailSVG.alpha = userSVG.alpha = t * 0.5;
		menu.style.opacity = banner.style.opacity = t;
	}, EasingFunctions.easeOutCubic, 2000);

	window.addEventListener("resize", function() {
		W = document.body.clientWidth;
		H = document.body.clientHeight;
		canvas.width = W;
		canvas.height = H;
		svg.move({x: W/2 - 175, y: H/2-253});
		codeSVG.move({x: W/2 - 36 - 200, y: H/2+200});
		userSVG.move({x: W/2 - 36, y: H/2+200});
		emailSVG.move({x: W/2 - 36 + 200, y: H/2+200});
		pjs.didResize(canvas);
	})
}

function openPage(page) {
	if(!page || currentPage.toLowerCase() === page[1].toLowerCase())
		return;

	page = page[1];
	switch(page) {
		case "code":
			var codePage = $id("code-page");
			codePage.querySelector(".heading").innerHTML = "";
			codePage.querySelector(".github").className = "github big";
			codePage.querySelector(".github").href = "https://github.com/karanjitsingh/";
			codePage.querySelector(".desc").innerHTML = "";
			codePage.querySelector(".image").src = "";
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

	timeout = setTimeout(pjs.stop, 400);
	
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

function onPopState(e) {
	var page = document.location.href.match(/http:\/\/.*\/([^/]+)\/?/);
	clearTimeout(timeout);

	if(!page) {
		$id(currentPage + "-page").className = "";
		$id("page-close").className = "";
		currentPage = "";
		pjs.start();
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
		var github = codePage.querySelector(".github");
		var desc = codePage.querySelector(".desc");
		var image = codePage.querySelector(".image");
		
		if(codePageData[this.index].link != "") {
			var win = window.open(codePageData[this.index].link, '_blank');
			win.focus();
		}
		else {

			if(ListItem.selectedIndex!=-1)
				ListItem.list[ListItem.selectedIndex].element.className = "";
			this.element.className = "selected";
			ListItem.selectedIndex = this.index;

			if(codePageData[this.index].github != "") {
				github.className = "github";
				github.href = codePageData[this.index].github;
			}
			else {
				github.href = "";
				github.className = "github hidden";
			}

			heading.innerHTML = codePageData[this.index].title;
			desc.innerHTML = codePageData[this.index].desc;

			if(codePageData[this.index].img != "") {
				image.className = "image";
				image.src = codePageData[this.index].img;
			}
			else {
				image.className = "image hidden";
				image.src = "";
			}
		}
	}.bind(this);
	this.index = ListItem.list.length;
	ListItem.list.push(this);
}

ListItem.selectedIndex = -1;
ListItem.list = [];

function loadPages() {
	// Code Page
	var codePage = $id("code-page");
    var list = codePage.querySelector("ul");
    for(var i=0;i<codePageData.length;i++) {
        var listItem = document.createElement("li");
        listItem.innerHTML = codePageData[i].title;
		list.appendChild(listItem);
		var label = document.createElement("label");
		label.innerHTML = codePageData[i].year;
		listItem.appendChild(label);
		new ListItem(listItem);
	}

	// About Page
	var aboutPage = $id("about-page");
	aboutPage.querySelector("p").innerHTML = aboutPageData;
	aboutPageData  = null;
}