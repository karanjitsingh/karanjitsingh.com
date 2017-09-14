<!doctype html>
<!--

    Hello there fellow coder!

    It seems to me this particle animation thingy
    has peaked your interest. Won't it be more fun
    to read the uncompressed and uncompiled
    TypeScript it was written in?
    
    Let me know if I've earned your star on GitHub.
    https://github.com/karanjitsingh.com/particle.js

-->
<html>
<head>
<!--

    Ahh! I guess you still insist on doing it your
    way ;)
    I already like you.

-->
    <link rel="stylesheet" type="text/css" href="./style/page.css"/>
    <link href='http://fonts.googleapis.com/css?family=Roboto:400,100,300' rel='stylesheet' type='text/css'>
    <script type="text/javascript" src="./scripts/particle.js"></script>
</head>
<body>
    <?php include_once("./data/analyticstracking.php"); ?>
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
                <div>
                    <div>
                        <ul>
                        </ul>
                    </div>
                    <div>
                        <div>
                            <span class="heading"></span>
                            <a class="github big" href="https://github.com/karanjitsingh/" target="_blank">
                                <svg xmlns="http://www.w3.org/2000/svg">
                                    <use xlink:href="./images/icons.svg#github" />
                                </svg>
                            </a>
                            <p class="desc"></p>
                            <img class="image" src=""/>
                            <p></p>
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
                        <a href="mailto:karan1866@gmail.com" target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="#fff">
                                <use xlink:href="./images/icons.svg#mail" />
                            </svg>
                        </a>
                        <a href="https://facebook.com/karan1866/" target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="#fff">
                                <use xlink:href="./images/icons.svg#facebook" />
                            </svg>
                        </a>
                        <a href="http://in.linkedin.com/in/kjitsingh/" target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="#fff">
                                <use xlink:href="./images/icons.svg#linkedin" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <a id="page-close">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" style="transform:rotate(90deg)" fill="#fff">
                <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"></path>
            </svg>
        </a>
    </div>
</body>
<script type="text/javascript" src="./scripts/preload.js"></script>
</html>