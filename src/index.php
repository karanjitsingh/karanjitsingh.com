<!doctype html>
<!--

    Hello there fellow coder!

    It seems to me this particle animation thingy has peaked
    your interest. Let me know if I've earned your star on GitHub.
    https://github.com/karanjitsingh.com/particle.js

-->
<html>
<head>
    <link rel="stylesheet" type="text/css" href="./style/page.css"/>
    <link rel="stylesheet" type="text/css" href="./style/markdown.css"/>
    <link href='https://fonts.googleapis.com/css?family=Roboto:400,100,300' rel='stylesheet' type='text/css'>
    <script type="text/javascript" src="./scripts/particle.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"></script>
    <script type="text/javascript" src="https://cdn.jsdelivr.net/gh/byliuyang/github-stats@0.0.4/src/github-stats.js"></script>
    <title>karanjitsingh</title>
</head>
<body>
    <?php include_once("./data/analytics.php"); ?>
    <div id="canvas-container">
        <canvas id="canvas"></canvas>
    </div>
    <div id="menu-container">
        <div class="menu">
            <a href="/code/">Code</a>
            <a href="/about/">About</a>
            <a href="/contact/">Contact</a>
        </div>
    </div>
    <div id="github-banner">
        <a class="github-banner-link" href="https://github.com/karanjitsingh/particle.js" target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                <use xlink:href="./images/icons.svg#fork" />
            </svg>
        </a>
    </div>
    <div id="pages-container">
        <div id="code-page">
            <div>
                <div class="code-page-container">
                    <div class="left-pane">
                        <ul>
                        </ul>
                    </div>
                    <div class="right-pane-container">
                        <div class="right-pane type-content markdown-body"></div>
                        <div class="right-pane type-home markdown-body"></div>
                        <div class="right-pane type-frame">
                            <iframe></iframe>
                        </div>
                        <a href="https://github.com/you" class="github-link" target="_blank">
                            <img width="149" height="149" src="https://github.blog/wp-content/uploads/2008/12/forkme_left_white_ffffff.png?resize=149%2C149" class="attachment-full size-full" alt="Fork me on GitHub" data-recalc-dims="1">
                        </a>
                        <div class="loading-svg">
                            <svg xmlns="http://www.w3.org/2000/svg">
                                <use xlink:href="./images/icons.svg#loading"></use>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="about-page">
            <div>
                <div>
                    <div></div>
                    <p></p>
                </div>
            </div>
        </div>
        <div id="contact-page">
            <div>
                <div>
                    <span>Leave a message.</span>
                    <div>
                        <a href="https://in.linkedin.com/in/kjitsingh/" target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="#fff">
                                <use xlink:href="./images/icons.svg#linkedin" />
                            </svg>
                        </a>
                        <a href="https://github.com/karanjitsingh/" target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="#fff">
                                <use xlink:href="./images/icons.svg#github" />
                            </svg>
                        </a>
                        <a href="mailto:karan1866@gmail.com" target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="#fff">
                                <use xlink:href="./images/icons.svg#mail" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <a id="page-close">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" style="transform:rotate(90deg)" fill="#fff">
                <use xlink:href="./images/icons.svg#close" />
            </svg>
        </a>
    </div>
</body>
<script type="text/javascript" src="./scripts/preload.js"></script>
</html>
