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
    <title>karanjitsingh</title>
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
                    <div id="left-pane">
                        <ul>
                        </ul>
                    </div>
                    <div>
                        <div class="right-pane no-content">
                            <a class="github" href="https://github.com/karanjitsingh/" target="_blank">
                                <svg xmlns="http://www.w3.org/2000/svg">
                                    <use xlink:href="./images/icons.svg#github" />
                                </svg>
                            </a>
                            <div class="content">
                                <span class="heading"></span>
                                <p class="desc"></p>
                                <div class="image">
                                    <svg xmlns="http://www.w3.org/2000/svg">
                                        <use xlink:href="./images/icons.svg#loading" />
                                    </svg>
                                    <img class="image" />
                                </div>
                            </div>
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
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" style="transform:rotate(90deg)" fill="#fff">
                <use xlink:href="./images/icons.svg#close" />
            </svg>
        </a>
    </div>
</body>
<script type="text/javascript" src="./scripts/preload.js"></script>
</html>