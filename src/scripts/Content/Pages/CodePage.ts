module Pages {

    let HeadingElement: HTMLElement;
    let RightPane: HTMLElement;
    let GithubLink: HTMLAnchorElement;
    let DescriptionTextElement: HTMLElement;
    let ImageContainer: HTMLElement;
    let ImageElement: HTMLImageElement;
    let ProjectListElement: HTMLUListElement;

    export const CodePage: IContentPage = {
        Container: null,

        initPage: () => {
            var codePage = CodePage.Container = $id("code-page");

            for (var i = 0; i < PageData.CodePageData.length; i++) {
                new ProjectItem(i);
            }

            HeadingElement = codePage.querySelector(".heading");
            RightPane = codePage.querySelector(".right-pane");
            GithubLink = codePage.querySelector(".github");
            DescriptionTextElement = codePage.querySelector(".desc");
            ImageElement = codePage.querySelector(".image img");
            ImageContainer = codePage.querySelector(".image");
            ProjectListElement = codePage.querySelector("ul");

            ImageElement.onload = function () {
                ImageContainer.className = "image";
            }
        },

        showPage: () => {
            var codePage = $id("code-page");
            codePage.querySelector(".heading").innerHTML = "";
            codePage.querySelector(".right-pane").className = "right-pane no-content";
            (codePage.querySelector(".github") as HTMLAnchorElement).href = "https://github.com/karanjitsingh/";
            codePage.querySelector(".desc").innerHTML = "";
            (codePage.querySelector(".image") as HTMLImageElement).src = "";
            
            ProjectItem.unSelectAny();
        }
    }

    class ProjectItem {
        public static List: Array<ProjectItem> = [];
        public static SelectedIndex = -1;

        public static UnSele

        private element: HTMLElement;

        constructor(public dataIndex: number) {
            const projectData = PageData.CodePageData[dataIndex];
            
            this.element = document.createElement("li");
            this.element.innerHTML = projectData.title;

            ProjectListElement.appendChild(this.element);

            const label = document.createElement("label");
            label.innerHTML = projectData.year;
            
            this.element.appendChild(label);

            this.element.onclick = this.Select.bind(this);

            ProjectItem.List.push(this);
        }

        public static unSelectAny() {
            if (ProjectItem.SelectedIndex != -1) {
                ProjectItem.List[ProjectItem.SelectedIndex].unSelect();
            }
            ProjectItem.SelectedIndex = -1;
        }

        public unSelect() {
            this.element.className = "";
        }

        private Select() {
            if (PageData.CodePageData[this.dataIndex].link != "") {
                var win = window.open(PageData.CodePageData[this.dataIndex].link, '_blank');
                win.focus();
            }
            else {

                ProjectItem.unSelectAny();

                this.element.className = "selected";
                ProjectItem.SelectedIndex = this.dataIndex;

                if (PageData.CodePageData[this.dataIndex].github != "") {
                    GithubLink.className = "github";
                    GithubLink.href = PageData.CodePageData[this.dataIndex].github;
                }
                else {
                    GithubLink.href = "";
                    GithubLink.className = "github hidden";
                }

                HeadingElement.innerHTML = PageData.CodePageData[this.dataIndex].title;
                DescriptionTextElement.innerHTML = PageData.CodePageData[this.dataIndex].desc;

                if (PageData.CodePageData[this.dataIndex].img != "") {
                    ImageContainer.className = "image loading";
                    ImageElement.src = PageData.CodePageData[this.dataIndex].img;
                }
                else {
                    ImageContainer.className = "image hidden";
                    ImageElement.src = "";
                }
            }
        }
        
    }

}