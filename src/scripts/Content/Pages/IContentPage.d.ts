interface IContentPage {
    initPage(pageData?);
    showPage();
    hidePage();
    windowStateChange?();
    Container: HTMLElement;
}