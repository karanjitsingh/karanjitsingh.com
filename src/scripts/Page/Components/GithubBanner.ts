module Components {
    export class GithubBanner extends IComponent{
        private static gitHubLinkTimer;

        public static Element

        public static blurGithubBanner() {
            clearTimeout(this.gitHubLinkTimer);
            $id("github-banner").className = ""
        }
    
        public static setGithubLinkTimer() {
            this.gitHubLinkTimer = setTimeout(function() {
                $id("github-banner").className = "visible";
            }, 3000);
        }

        public static init() {
                
            var githubLink = $id("github-banner");
            githubLink.onmouseout = this.blurGithubBanner;

            this.setGithubLinkTimer();
        }
    }
}