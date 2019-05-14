interface MainPage {
    openPage: (page) => void
    initPage: () => void;
    showPage: () => void;
}

declare module Pages {
    export const MainPage: MainPage
}