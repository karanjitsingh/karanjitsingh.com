module Pages {
    export const AboutPage: IContentPage = {
        Container: null,

        initPage: () => {
            var aboutPage = $id("about-page");
            aboutPage.querySelector("p").innerHTML = PageData.AboutPageData;
            PageData.AboutPageData  = null;
        },

        showPage: () => {

        }
    }
}

class ProjectSelector {

}