<!doctype html>
<!--

    Hello there fellow coder!

    It seems to me this particle animation thingy has peaked your
    interest. Won't it be more fun to read the uncompressed and
    uncompiled TypeScript it was written in?
    
    Let me know if I've earned your star on GitHub.
    https://github.com/karanjitsingh.com/particle.js

-->
<html>
<head>
<!--

    Ahh! I guess you still insist on doing it your way ;)
    I already like you.

-->
    <link rel="stylesheet" type="text/css" href="./style/page.css"/>
    <link href='http://fonts.googleapis.com/css?family=Open+Sans:400,300' rel='stylesheet' type='text/css'>
    <link href='http://fonts.googleapis.com/css?family=Roboto:400,100,300' rel='stylesheet' type='text/css'>
    <script type="text/javascript" src="./scripts/particle.js"></script>
</head>
<body>
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
                            <li class="selected">Particle.js</li>
                            <li>SVG Path Parser</li>
                            <li>Neural Network to play 2048</li>
                            <li>Hospital Management System</li>
                            <li>IE CSE Website 2014-2015</li>
                            <li>Snakes in Classic C</li>
                            <li>Solar System 2D Simulation</li>
                            <li>Sudoku Solver</li>
                            <li>Experimental Projects</li>
                        </ul>

                    </div>
                    <div>
                        <div>
                            <span class="heading">Particle.js</span>
                            <a class="github" href="https://github.com/karanjitsingh/particle.js" target="_blank">
                                <svg xmlns="http://www.w3.org/2000/svg">
                                    <use xlink:href="./images/icons.svg#github" />
                                </svg>
                            </a>
                            <p>Particle.js is a JavaScript canvas library for fancy particle animations. The fun animations you see on the main page of this website use Particle.js at its core. You can checkout another implementation of particle.js at <a target="_blank" href="https://www.headout.com/careers">Headout's careers page</a>.</p>
                            <img src="./images/particlejs.png"/>
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
                    <p><span>Hi!</span>I am Karan Jit Singh. I live in <a class="location" target="_blank" href="https://www.google.co.in/search?q=Chandigarh+India">Chandigarh, India</a>, currently pursuing my bachelor's degree in Computer Science and Engineering at Manipal Institute of Technology, Manipal.<br/><br/>My technical interests are Machine Learning, mainly reinforcement leanirng, Math, simulations and fun javascript canvas projects! Apart from enjoying technical stuff, I also enjoy watching Formula 1&#127937;, playing the guitar and frustrating n00bs at counter-strike.<br/><br/><span>Work</span>I spent my last summer interning at Microsoft, working on code coverage reporting and prototyping a hybrid code coverage reporting engine for Visual Studio Team Services. Prior to that, I had interned at Headout migrating their website to ReactJS.</p>
                </div>
            </div>
        </div>
        <div id="contact-page">
            <div>
                <div>
                    <span>Leave a message.</span>
                    <div>
                        <a href="mailto:karan1866@gmail.com" target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="#fff"><path d="M12 .02c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.99 6.98l-6.99 5.666-6.991-5.666h13.981zm.01 10h-14v-8.505l7 5.673 7-5.672v8.504z"/></svg>
                        </a>
                        <a href="https://facebook.com/karan1866/" target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="#fff"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z"/></svg>
                        </a>
                        <a href="http://in.linkedin.com/in/kjitsingh/" target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="#fff"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z"/></svg>
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
<script type="text/javascript" src="./scripts/page.js"></script>
</html>