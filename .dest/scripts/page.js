var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var Components;
(function (Components) {
    var linkTimer;
    Components.GithubBanner = {
        Element: null,
        init: function () {
            var githubLink = Components.GithubBanner.Element = $id("github-banner");
            githubLink.onmouseout = Components.GithubBanner.blurGithubBanner;
            githubLink.style.display = "block";
            Components.GithubBanner.setGithubLinkTimer();
        },
        blurGithubBanner: function () {
            clearTimeout(linkTimer);
            $id("github-banner").className = "";
        },
        setGithubLinkTimer: function () {
            linkTimer = setTimeout(function () {
                $id("github-banner").className = "visible";
            }, 3000);
        }
    };
})(Components || (Components = {}));
var Pages;
(function (Pages) {
    Pages.AboutPage = {
        Container: null,
        initPage: function () {
            var aboutPage = Pages.AboutPage.Container = $id("about-page");
            aboutPage.querySelector("p").innerHTML = PageData.AboutPageData;
        },
        showPage: function () {
            Pages.AboutPage.Container.className = "visible";
        },
        hidePage: function () {
            Pages.AboutPage.Container.className = "";
        }
    };
})(Pages || (Pages = {}));
var Pages;
(function (Pages) {
    var RightPaneMarkdown;
    var RightPaneIFrame;
    var GithubLink;
    var IFrame;
    var ProjectListElement;
    var CodePageLoading;
    var RightPaneHome;
    function getGithubStats(username, commitsContainer, languageContainer) {
        var _this = this;
        (function () { return __awaiter(_this, void 0, void 0, function () {
            var githubStats, githubCommits, commitsContribSVG, githubLanguageDistribution, languageContribSVG;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, GithubStats(username)];
                    case 1:
                        githubStats = _a.sent();
                        githubCommits = document.querySelector(commitsContainer);
                        commitsContribSVG = githubStats.commitsContribSVG({
                            rows: 7,
                            space: 4,
                            rectWidth: 16,
                            levelColors: [
                                {
                                    minCommits: 0,
                                    color: '#ebedf0'
                                },
                                {
                                    minCommits: 1,
                                    color: '#c6e48b'
                                },
                                {
                                    minCommits: 9,
                                    color: '#7bc96f'
                                },
                                {
                                    minCommits: 17,
                                    color: '#239a3b'
                                },
                                {
                                    minCommits: 26,
                                    color: '#196127'
                                }
                            ]
                        });
                        githubCommits.appendChild(commitsContribSVG);
                        githubLanguageDistribution = document.querySelector(languageContainer);
                        languageContribSVG = githubStats.languagesContribSVG({
                            barHeight: 20,
                            barWidth: githubLanguageDistribution.offsetWidth,
                            lineSpacing: 4,
                            languageNameWidth: 140,
                            fontSize: 14
                        });
                        githubLanguageDistribution.appendChild(languageContribSVG);
                        return [2];
                }
            });
        }); })();
    }
    Pages.CodePage = {
        Container: null,
        initPage: function () {
            var codePage = Pages.CodePage.Container = $id("code-page");
            RightPaneMarkdown = codePage.querySelector(".right-pane.type-content");
            RightPaneIFrame = codePage.querySelector(".right-pane.type-frame");
            IFrame = codePage.querySelector(".right-pane.type-frame iframe");
            GithubLink = codePage.querySelector(".github-link");
            ProjectListElement = codePage.querySelector("ul");
            CodePageLoading = codePage.querySelector(".loading-svg");
            RightPaneHome = codePage.querySelector(".right-pane.type-home");
            RightPaneHome.innerHTML = marked("\n# Karan Jit Singh\n\nCheckout my github profile at [github.com/karanjitsingh/karanjitsingh.com](https://github.com/karanjitsingh/karanjitsingh.com). If you liked the fancy particle animations on this website, check it out at [github.com/karanjitsingh/particle.js](https://github.com/karanjitsingh/particle.js).<br />\n\n### Github Activity\n<div class=\"contrib-stats\"></div>\n\n### Language Stats\n<div class=\"language-stats\"></div>\n");
            getGithubStats("karanjitsingh", ".contrib-stats", ".language-stats");
            for (var i = 0; i < PageData.CodePageData.length; i++) {
                ProjectItem.add(i);
            }
        },
        showPage: function () {
            GithubLink.href = "https://github.com/karanjitsingh/";
            Pages.CodePage.Container.className = "visible";
            ProjectItem.unSelectAny();
            Pages.CodePage.windowStateChange();
        },
        hidePage: function () {
            Pages.CodePage.Container.className = "";
        },
        windowStateChange: function () {
            var hash = window.location.hash.substring(1);
            RightPaneHome.style.display = "none";
            RightPaneIFrame.style.display = "none";
            RightPaneMarkdown.style.display = "none";
            GithubLink.style.display = "none";
            if (hash) {
                ProjectItem.selectHash(hash);
            }
            else {
                RightPaneHome.style.display = "block";
            }
        }
    };
    var ProjectItem = (function () {
        function ProjectItem(dataIndex) {
            this.dataIndex = dataIndex;
            var projectData = PageData.CodePageData[dataIndex];
            this.urlTitle = encodeURIComponent(projectData.title.replace(/ /g, "_").toLocaleLowerCase()).toLowerCase();
            this.element = document.createElement("li");
            var link = document.createElement("a");
            link.className = "project-link";
            link.href = "/code/#" + this.urlTitle;
            link.innerHTML = "<span>" + projectData.title + "<label>" + projectData.year + "</label></span>";
            this.element.appendChild(link);
            ProjectListElement.appendChild(this.element);
        }
        ProjectItem.add = function (dataIndex) {
            ProjectItem.List.push(new ProjectItem(dataIndex));
            var title = PageData.CodePageData[dataIndex].title;
            ProjectItem.ItemMap[encodeURIComponent(title.replace(/ /g, "_").toLocaleLowerCase()).toLowerCase()] = dataIndex;
        };
        ProjectItem.unSelectAny = function () {
            if (ProjectItem.SelectedIndex != -1) {
                ProjectItem.List[ProjectItem.SelectedIndex].unSelect();
            }
            ProjectItem.SelectedIndex = -1;
            RightPaneIFrame.style.display = "none";
            RightPaneMarkdown.style.display = "none";
            GithubLink.style.display = "none";
            IFrame.src = "";
            RightPaneMarkdown.innerHTML = "";
            CodePageLoading.style.display = "none";
        };
        ProjectItem.selectHash = function (hash) {
            var item = ProjectItem.List[ProjectItem.ItemMap[hash]];
            if (item) {
                item.select();
            }
        };
        ProjectItem.prototype.unSelect = function () {
            this.element.className = "";
        };
        ProjectItem.prototype.setMarkdownContent = function (content) {
            RightPaneMarkdown.style.display = "block";
            var html = marked(content);
            CodePageLoading.style.display = "none";
            RightPaneMarkdown.innerHTML = html;
        };
        ProjectItem.prototype.setGithubLink = function (link) {
            if (link) {
                GithubLink.href = link;
                GithubLink.style.display = "block";
            }
        };
        ProjectItem.prototype.select = function (hash) {
            var _this = this;
            var pageData = PageData.CodePageData[this.dataIndex];
            ProjectItem.unSelectAny();
            CodePageLoading.style.display = "block";
            if (pageData.markdown) {
                Utils.HttpGet(pageData.markdown, function (content) {
                    _this.setGithubLink(pageData.github);
                    _this.setMarkdownContent(content);
                });
            }
            else if (pageData.link) {
                IFrame.src = pageData.link;
                IFrame.onload = function () {
                    CodePageLoading.style.display = "none";
                    RightPaneIFrame.style.display = "block";
                    IFrame.onload = undefined;
                };
                this.setGithubLink(pageData.github);
            }
            else if (pageData.desc) {
                this.setMarkdownContent("\n# " + pageData.title + "\n" + pageData.desc + "\n<br />\n<br />\n" + (pageData.img ? ("![image](" + pageData.img + ")") : "") + "\n");
                this.setGithubLink(pageData.github);
            }
        };
        ProjectItem.List = [];
        ProjectItem.SelectedIndex = -1;
        ProjectItem.ItemMap = {};
        return ProjectItem;
    }());
})(Pages || (Pages = {}));
var Pages;
(function (Pages) {
    Pages.ContactPage = {
        Container: null,
        initPage: function () {
            Pages.ContactPage.Container = $id("contact-page");
        },
        showPage: function () {
            Pages.ContactPage.Container.className = "visible";
        },
        hidePage: function () {
            Pages.ContactPage.Container.className = "";
        }
    };
})(Pages || (Pages = {}));
var Pages;
(function (Pages) {
    var currentPage = "";
    var PageHeight = Globals.PageHeight, PageWidth = Globals.PageWidth, ParticleJS = Globals.ParticleJS;
    var particleJSTimeout;
    var canvasElement = Components.Canvas.Element;
    var PageCloseButton = $id("page-close");
    var PageLinks = document.querySelectorAll(".menu a");
    var MenuContainer = $id("menu-container");
    function getCurrentPage() {
        var match = document.location.pathname.split("/");
        var page;
        if ((match.length == 3 && !match[2]) || match.length == 2) {
            page = match[1];
        }
        return page || null;
    }
    Pages.MainPage = {
        Container: null,
        showPage: function () {
            var svgOptions = {
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
            var svg = new ParticleJSAnimations.SVGAnimation(Resources.VectorPaths.NameText, svgOptions, total);
            var random = new ParticleJSAnimations.FadeExplode(null, total);
            svg.move({ x: PageWidth / 2 - 175, y: PageHeight / 2 - 253 });
            svg.alpha = 1;
            ParticleJS.addDrawObject(svg);
            ParticleJS.addDrawObject(random);
            svgOptions.mouseRepel = true;
            svgOptions.scale = 3;
            svgOptions.pathVariation = 0;
            svgOptions.lineDensity = 0.28;
            svgOptions.atomOptions.colorSet = ["#FFFFFF"];
            svgOptions.atomOptions.radius = 1;
            svgOptions.atomOptions.popRadius = 3;
            svgOptions.atomOptions.popProbability = 0.001;
            svgOptions.connectingLines = true;
            svgOptions.connectingLineMaxLength = 30;
            svgOptions.blur = false;
            svgOptions.maxRepelDistance = 20;
            svgOptions.forceFactor = 10;
            svgOptions.frictionFactor = 0.6;
            var codeSVG = new ParticleJSAnimations.SVGAnimation(Resources.VectorPaths.CodeIcon, svgOptions);
            codeSVG.move({ x: PageWidth / 2 - 36 - 200, y: PageHeight / 2 + 200 });
            codeSVG.alpha = 0;
            ParticleJS.addDrawObject(codeSVG);
            var userSVG = new ParticleJSAnimations.SVGAnimation(Resources.VectorPaths.UserIcon, svgOptions);
            userSVG.move({ x: PageWidth / 2 - 36, y: PageHeight / 2 + 200 });
            userSVG.alpha = 0;
            ParticleJS.addDrawObject(userSVG);
            var emailSVG = new ParticleJSAnimations.SVGAnimation(Resources.VectorPaths.EmailIcon, svgOptions);
            emailSVG.move({ x: PageWidth / 2 - 36 + 200, y: PageHeight / 2 + 200 });
            emailSVG.alpha = 0;
            ParticleJS.addDrawObject(emailSVG);
            Components.GithubBanner.init();
            MenuContainer.style.display = "block";
            Utils.Animate(function (t) {
                codeSVG.alpha = emailSVG.alpha = userSVG.alpha = t * 0.5;
                MenuContainer.style.opacity = Components.GithubBanner.Element.style.opacity = t.toString();
            }, Utils.EasingFunctions.easeOutCubic, 2000);
            window.addEventListener("resize", function () {
                PageWidth = Globals.PageWidth = document.body.clientWidth;
                PageHeight = Globals.PageHeight = document.body.clientHeight;
                canvasElement.width = PageWidth;
                canvasElement.height = PageHeight;
                svg.move({ x: PageWidth / 2 - 175, y: PageHeight / 2 - 253 });
                codeSVG.move({ x: PageWidth / 2 - 36 - 200, y: PageHeight / 2 + 200 });
                userSVG.move({ x: PageWidth / 2 - 36, y: PageHeight / 2 + 200 });
                emailSVG.move({ x: PageWidth / 2 - 36 + 200, y: PageHeight / 2 + 200 });
                ParticleJS.didResize(canvasElement);
            });
        },
        openPage: function (page) {
            if (!page || (page && currentPage.toLowerCase() === page.toLowerCase()))
                return;
            Pages.MainPage.getPage(page).showPage();
            Components.GithubBanner.blurGithubBanner();
            particleJSTimeout = setTimeout(ParticleJS.stop, 400);
            currentPage = page;
            PageCloseButton.className = "visible";
            if (currentPage == "code") {
                PageCloseButton.className += " black";
            }
            window.history.pushState(null, "", "/" + page + "/");
        },
        initPage: function () {
            Pages.CodePage.initPage(PageData.CodePageData);
            Pages.AboutPage.initPage(PageData.AboutPageData);
            Pages.ContactPage.initPage();
            for (var i = 0; i < PageLinks.length; i++) {
                PageLinks[i].onclick = function (e) {
                    e.preventDefault();
                    var page = e.target.href.match(/.*\/(.*)\//);
                    Pages.MainPage.openPage(page ? page[1] : null);
                };
            }
            PageCloseButton.onclick = function () {
                window.history.pushState(null, "", "/");
                Pages.MainPage.windowStateChange();
            };
            window.onpopstate = Pages.MainPage.windowStateChange;
        },
        getPage: function (page) {
            switch (page) {
                case "code":
                    return Pages.CodePage;
                case "about":
                    return Pages.AboutPage;
                case "contact":
                    return Pages.ContactPage;
            }
        },
        windowStateChange: function () {
            var page = getCurrentPage();
            clearTimeout(particleJSTimeout);
            if (currentPage && currentPage != page) {
                Pages.MainPage.getPage(currentPage).hidePage();
            }
            if (!page) {
                PageCloseButton.className = "";
                currentPage = "";
                Components.GithubBanner.setGithubLinkTimer();
                ParticleJS.start();
            }
            else if (currentPage != page) {
                Pages.MainPage.openPage(page);
            }
            else if (Pages.MainPage.getPage(currentPage).windowStateChange) {
                Pages.MainPage.getPage(currentPage).windowStateChange();
            }
        },
        hidePage: function () { }
    };
})(Pages || (Pages = {}));
var Resources;
(function (Resources) {
    var VectorPaths = (function () {
        function VectorPaths() {
        }
        VectorPaths.NameText = "M 0 0 L 0 105 M 0 61.5 L 61.5 0 M 17 44 L 61.5 105 M 81.38697428310476 34.7150396039779 A 32 32 0 0 1 128.0184936160645 42.85354256067211 M 97.0767174181432 63.31228973972378 A 365 365 0 0 1 128.00000000000003 62 M 97 102 A 19 19 0 0 1 97 64 M 127.61833855844927 75.84946841624716 A 31 31 0 0 1 97 102 M 128 42 L 128 105 M 160.5 27 L 160.5 105 M 161.6318519781126 47.291267499687024 A 32 32 0 0 1 196.9962020667432 28.566807976681964 M 263 42 L 263 105 M 216.38697428310476 34.7150396039779 A 32 32 0 0 1 263.01849361606446 42.85354256067211 M 232.0767174181432 63.31228973972378 A 365 365 0 0 1 263 62 M 232 102 A 19 19 0 0 1 232 64 M 262.6183385584493 75.84946841624716 A 31 31 0 0 1 232 102 M 294 27 L 294 105 M 295.1911894296917 50.63026681882313 A 30 30 0 0 1 348.8124172282369 42.13749866443608 M 349 42 L 349 105 ";
        VectorPaths.CodeIcon = "M24 10.935v2.131l-8 3.947v-2.23l5.64-2.783-5.64-2.79v-2.223l8 3.948zm-16 3.848l-5.64-2.783 5.64-2.79v-2.223l-8 3.948v2.131l8 3.947v-2.23zm7.047-10.783h-2.078l-4.011 16h2.073l4.016-16z";
        VectorPaths.EmailIcon = "M12.042 23.648c-7.813 0-12.042-4.876-12.042-11.171 0-6.727 4.762-12.125 13.276-12.125 6.214 0 10.724 4.038 10.724 9.601 0 8.712-10.33 11.012-9.812 6.042-.71 1.108-1.854 2.354-4.053 2.354-2.516 0-4.08-1.842-4.08-4.807 0-4.444 2.921-8.199 6.379-8.199 1.659 0 2.8.876 3.277 2.221l.464-1.632h2.338c-.244.832-2.321 8.527-2.321 8.527-.648 2.666 1.35 2.713 3.122 1.297 3.329-2.58 3.501-9.327-.998-12.141-4.821-2.891-15.795-1.102-15.795 8.693 0 5.611 3.95 9.381 9.829 9.381 3.436 0 5.542-.93 7.295-1.948l1.177 1.698c-1.711.966-4.461 2.209-8.78 2.209zm-2.344-14.305c-.715 1.34-1.177 3.076-1.177 4.424 0 3.61 3.522 3.633 5.252.239.712-1.394 1.171-3.171 1.171-4.529 0-2.917-3.495-3.434-5.246-.134z";
        VectorPaths.UserIcon = "M20.822 18.096c-3.439-.794-6.641-1.49-5.09-4.418 4.719-8.912 1.251-13.678-3.732-13.678-5.082 0-8.465 4.949-3.732 13.678 1.598 2.945-1.725 3.641-5.09 4.418-2.979.688-3.178 2.143-3.178 4.663l.005 1.241h1.995c0-3.134-.125-3.55 1.838-4.003 2.851-.657 5.543-1.278 6.525-3.456.359-.795.592-2.103-.338-3.815-2.058-3.799-2.578-7.089-1.423-9.026 1.354-2.275 5.426-2.264 6.767-.034 1.15 1.911.639 5.219-1.403 9.076-.91 1.719-.671 3.023-.31 3.814.99 2.167 3.707 2.794 6.584 3.458 1.879.436 1.76.882 1.76 3.986h1.995l.005-1.241c0-2.52-.199-3.975-3.178-4.663z";
        VectorPaths.ForkIcon = "M21 3c0-1.657-1.343-3-3-3s-3 1.343-3 3c0 1.323.861 2.433 2.05 2.832.168 4.295-2.021 4.764-4.998 5.391-1.709.36-3.642.775-5.052 2.085v-7.492c1.163-.413 2-1.511 2-2.816 0-1.657-1.343-3-3-3s-3 1.343-3 3c0 1.305.837 2.403 2 2.816v12.367c-1.163.414-2 1.512-2 2.817 0 1.657 1.343 3 3 3s3-1.343 3-3c0-1.295-.824-2.388-1.973-2.808.27-3.922 2.57-4.408 5.437-5.012 3.038-.64 6.774-1.442 6.579-7.377 1.141-.425 1.957-1.514 1.957-2.803zm-16.8 0c0-.993.807-1.8 1.8-1.8s1.8.807 1.8 1.8-.807 1.8-1.8 1.8-1.8-.807-1.8-1.8zm3.6 18c0 .993-.807 1.8-1.8 1.8s-1.8-.807-1.8-1.8.807-1.8 1.8-1.8 1.8.807 1.8 1.8zm10.2-16.2c-.993 0-1.8-.807-1.8-1.8s.807-1.8 1.8-1.8 1.8.807 1.8 1.8-.807 1.8-1.8 1.8z";
        return VectorPaths;
    }());
    Resources.VectorPaths = VectorPaths;
})(Resources || (Resources = {}));
