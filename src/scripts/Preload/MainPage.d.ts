interface MainPage {
    openPage: (page) => void
    initPage: () => void;
}

declare module Pages {
    export const MainPage: MainPage
}