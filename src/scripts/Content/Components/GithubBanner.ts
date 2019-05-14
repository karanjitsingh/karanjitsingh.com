module Components {

    interface GithubBanner extends IComponent {
        setGithubLinkTimer();
        blurGithubBanner();
    }

    let linkTimer;

    export const GithubBanner: GithubBanner = {
        Element: null,

        init: () => {
            var githubLink = GithubBanner.Element = $id("github-banner");
            githubLink.onmouseout = GithubBanner.blurGithubBanner;
            githubLink.style.display = "block";

            GithubBanner.setGithubLinkTimer();
        },

        blurGithubBanner: () => {
            clearTimeout(linkTimer);
            $id("github-banner").className = ""
        },

        setGithubLinkTimer: () => {
            linkTimer = setTimeout(function() {
                $id("github-banner").className = "visible";
            }, 3000);
        }
    }
}