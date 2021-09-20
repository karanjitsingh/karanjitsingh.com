/// <reference types="marked" />

declare function GithubStats(username: string): Promise<any>;

module Pages {

    let RightPaneMarkdown: HTMLElement;
    let RightPaneIFrame: HTMLElement;
    let GithubLink: HTMLAnchorElement;
    let IFrame: HTMLIFrameElement;
    let ProjectListElement: HTMLUListElement;
    let CodePageLoading: HTMLDivElement;
    let RightPaneHome: HTMLDivElement;

    function getGithubStats(username: string, commitsContainer: string, languageContainer: string): void {
        (async () => {
            const githubStats = await GithubStats(username);
        
            let githubCommits = document.querySelector(commitsContainer);
            /* Render SVG for commit contributions */
            let commitsContribSVG = githubStats.commitsContribSVG({
                rows: 7,
                space: 4,
                rectWidth: 16,
                levelColors: [
                    {
                        minCommits: 0,
                        color: '#DCDFE5'
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
        
            let githubLanguageDistribution = document.querySelector(languageContainer);
            /* Render SVG for language contributions */
            let languageContribSVG = githubStats.languagesContribSVG({
                barHeight: 20,
                barWidth: (githubLanguageDistribution as any).offsetWidth,
                lineSpacing: 4,
                languageNameWidth: 140,
                fontSize: 14
            });
            githubLanguageDistribution.appendChild(languageContribSVG);
        })();
    }

    export const CodePage: IContentPage = {
        Container: null,

        initPage: () => {
            const codePage = CodePage.Container = $id("code-page");

            RightPaneMarkdown = codePage.querySelector(".right-pane.type-content");
            RightPaneIFrame = codePage.querySelector(".right-pane.type-frame")
            IFrame = codePage.querySelector(".right-pane.type-frame iframe")
            GithubLink = codePage.querySelector(".github-link");
            ProjectListElement = codePage.querySelector("ul");
            CodePageLoading = codePage.querySelector(".loading-svg");
            RightPaneHome = codePage.querySelector(".right-pane.type-home");

            RightPaneHome.innerHTML = marked(`
# Karan Jit Singh

Checkout my github profile at [github.com/karanjitsingh/](https://github.com/karanjitsingh/).<br />
You can find the fancy particle animation at [github.com/karanjitsingh/particle.js](https://github.com/karanjitsingh/particle.js).<br />

### Github Activity
<div class=\"contrib-stats\"></div>

### Language Stats
<div class=\"language-stats\"></div>
`);

            getGithubStats("karanjitsingh", ".contrib-stats", ".language-stats");

            for (let i = 0; i < PageData.CodePageData.length; i++) {
                ProjectItem.add(i);
            }
        },

        showPage: () => {
            GithubLink.href = "https://github.com/karanjitsingh/";
            CodePage.Container.className = "visible";
            ProjectItem.unSelectAny();
            CodePage.windowStateChange();
        },

        hidePage: () => {
            CodePage.Container.className = "";
        },

        windowStateChange: () => {
            const hash = window.location.hash.substring(1);
            RightPaneHome.style.display = "none";
            RightPaneIFrame.style.display = "none";
            RightPaneMarkdown.style.display = "none";
            GithubLink.style.display = "none";

            if (hash) {
                ProjectItem.selectHash(hash);
            } else {
                RightPaneHome.style.display = "block";
            }
        }
    }

    class ProjectItem {
        public static List: Array<ProjectItem> = [];
        public static SelectedIndex = -1;
        private static ItemMap: { [key: string]: number } = {};
        private urlTitle: string;

        private element: HTMLElement;

        private constructor(public dataIndex: number) {
            const projectData = PageData.CodePageData[dataIndex];

            this.urlTitle = encodeURIComponent(projectData.title.replace(/ /g, "_").toLocaleLowerCase()).toLowerCase();
            this.element = document.createElement("li");

            const link = document.createElement("a");
            link.className = "project-link";
            link.href = "/code/#" + this.urlTitle;
            link.innerHTML = `<span>${projectData.title}<label>${projectData.year}</label></span>`;

            this.element.appendChild(link);

            ProjectListElement.appendChild(this.element);
        }

        public static add(dataIndex: number) {
            ProjectItem.List.push(new ProjectItem(dataIndex));

            const title = PageData.CodePageData[dataIndex].title;
            ProjectItem.ItemMap[encodeURIComponent(title.replace(/ /g, "_").toLocaleLowerCase()).toLowerCase()] = dataIndex;
        }

        public static unSelectAny() {
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
        }

        public static selectHash(hash: string) {
            const item = ProjectItem.List[ProjectItem.ItemMap[hash]];

            if(item) {
                item.select();
            }
        }

        public unSelect() {
            this.element.className = "";
        }

        private setMarkdownContent(content: string) {
            RightPaneMarkdown.style.display = "block";
                    
            const html = marked(content);
            CodePageLoading.style.display = "none";

            RightPaneMarkdown.innerHTML = html;
        }

        private setGithubLink(link: string) {
            if (link) {
                GithubLink.href = link;
                GithubLink.style.display = "block";
            }
        }

        private select(hash?: string) {
            const pageData = PageData.CodePageData[this.dataIndex];
            
            ProjectItem.unSelectAny();

            ProjectItem.SelectedIndex = this.dataIndex;
            this.element.className = "selected";

            CodePageLoading.style.display = "block";

            if (pageData.markdown) {
                Utils.HttpGet(pageData.markdown, (content: string) => {
                    this.setGithubLink(pageData.github);
                    this.setMarkdownContent(content);
                });
            } else if (pageData.link) {
                IFrame.src = pageData.link;

                IFrame.onload = () => {
                    CodePageLoading.style.display = "none";
                    RightPaneIFrame.style.display = "block";
                    IFrame.onload = undefined;
                }

                this.setGithubLink(pageData.github);
            } else if (pageData.desc) {
                this.setMarkdownContent(`
# ${pageData.title}
${pageData.desc}
<br />
<br />
${ pageData.img ? ("![image](" + pageData.img + ")") : ""}
`);
                this.setGithubLink(pageData.github);
            }
        }
    }
}