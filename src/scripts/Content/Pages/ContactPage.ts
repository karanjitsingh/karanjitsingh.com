module Pages {
    export const ContactPage: IContentPage = {
        Container: null,

        initPage: () => {
            ContactPage.Container = $id("contact-page");
        },

        showPage: () => {
            ContactPage.Container.className = "visible";
        },
        
        hidePage: () => {
            ContactPage.Container.className = "";
        }
    }
}