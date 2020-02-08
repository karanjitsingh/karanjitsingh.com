class PageData {
    public static CodePageData;
    public static AboutPageData;

    public static loadPageData(callback) {
        this.AboutPageData = ""

        Utils.HttpGet("./data/projects.json", (content: string) => {
            var json = JSON.parse(content);
            PageData.CodePageData = json["code"];
            PageData.AboutPageData = json["about"];
            callback();
        })
    }
}