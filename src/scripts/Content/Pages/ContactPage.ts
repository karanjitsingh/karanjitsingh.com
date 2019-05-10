module Pages {
    export const ContactPage: IContentPage = {
        Container: null,

        initPage: () => {
            var aboutPage = $id("contact-page");
            aboutPage.querySelector("p").innerHTML = PageData.AboutPageData;
            PageData.AboutPageData  = null;
        },

        showPage: () => {
            ContactPage.Container.className = "visible";
        }
    }
}