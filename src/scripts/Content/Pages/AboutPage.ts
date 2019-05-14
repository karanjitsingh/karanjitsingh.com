module Pages {
    export const AboutPage: IContentPage = {
        Container: null,

        initPage: () => {
            var aboutPage = AboutPage.Container = $id("about-page");
            aboutPage.querySelector("p").innerHTML = PageData.AboutPageData;
        },

        showPage: () => {
            AboutPage.Container.className = "visible";
        },
        
        hidePage: () => {
            AboutPage.Container.className = "";
        }
    }
}