class PageData {
    public static CodePageData;
    public static AboutPageData;

    public static loadPageData(callback) {
        this.AboutPageData = ""

        var xhttp;
        if ((window as any).XMLHttpRequest) {
            xhttp = new XMLHttpRequest();
        } else {
            xhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }

        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var json = JSON.parse(this.responseText);
                this.CodePageData = json["code"];
                this.AboutPageData = json["about"];
                callback();
        }
        };

        xhttp.open("GET", "./data/projects.json", true);
        xhttp.send();

    }
}