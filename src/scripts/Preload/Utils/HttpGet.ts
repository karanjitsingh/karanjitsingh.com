module Utils {
    export const HttpGet = (url: string, callback: (content: string) => void) => {
        var xhttp;
        if ((window as any).XMLHttpRequest) {
            xhttp = new XMLHttpRequest();
        } else {
            xhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }

        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                callback(this.responseText);
            }
        };

        xhttp.open("GET", url, true);
        xhttp.send();
    }
}