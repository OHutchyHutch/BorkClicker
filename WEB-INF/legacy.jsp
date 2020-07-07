<html>
<head>
    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-139693929-1"></script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag()
        {dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'UA-139693929-1');
    </script>
    <link rel="stylesheet" href="bootstrap-4.3.1-dist/css/bootstrap.css"/>
    <style type="text/css">
        .row
        {display: flex;}

        .top-buffer
        {margin-top: 20px;}

        .dark-theme {
            color: #e1e1e1;
            background-color: #333333;
            transition: all 0.25s ease-out;
        }
        body {
            background-color: #fff;
            color: #333;
            transition: all 0.25s ease-out;
            overflow: hidden;
        }

        .btn-bork {
            padding: 13px 20px;
            font-size: 22px;
            border-radius: 5px;
        }

        .bot-left {
            position: fixed;
            bottom: 0;
            left: 0;
            max-width: 100px;
            max-height: 100px;
        }

        .pimg {
            margin-top: -125%;
            width: 142px;
            height: 83px;
            position: absolute;
            animation-name: fall;
            animation-duration: 10s;
            animation-delay: 0s;
            animation-iteration-count: infinite;
            z-index: -1;
        }

        @keyframes fall {
            0% {
                margin-top: -100%;
                transform: rotate(0deg)
            }
            100% {
                margin-top: 125%;
                transform: rotate(360deg)
            }
        }

        button.dog-btn {
            width: 400px;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            height: 63px;
        }

        .dog-left {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
        }
        .dog
        {font-size: 20px;}

        .cost
        {font-size: 14px;}

        .number {
            font-size: 40px;
            line-height: 40px;
        }
        .resetbut {
            margin: 100px 75px 0;
        }
        .popover-title .close{
            position: relative;
            bottom: 3px;
        }
        .slidecontainer {
            width: 100%;
        }
        .slider {
            -webkit-appearance: none;
            width: 100%;
            height: 10px;
            border-radius: 5px;
            background: #d3d3d3;
            outline: none;
            opacity: 0.7;
            -webkit-transition: .2s;
            transition: opacity .2s;
        }

        .slider::-webkit-slider-thumb {
            -webkit-appearance: none;
            appearance: none;
            width: 17px;
            height: 17px;
            border-radius: 50%;
            background: #28acaf;
            cursor: pointer;
        }

        .slider::-moz-range-thumb {
            width: 17px;
            height: 17px;
            border-radius: 50%;
            background: #28acaf;
            cursor: pointer;
        }
    </style>
</head>

<body>
<div class="container mt-5 h-100">
    <div class="row h-75">

        <div class="col-7 flex-column align-self-center" id="PIC">
            <div class="d-flex justify-content-center">
                <span style="font-family: 'Comic Sans MS'; font-weight:bold; font-size:30px;" id="borks">0 Borks</span>
            </div>
            <div class="d-flex justify-content-center">
                <span style="font-family: 'Comic Sans MS'; font-weight:bold; font-size:25px;" id="BCA"></span>
            </div>
            <div class="d-flex justify-content-center">
                <button id="Bork" onclick="Bork()" type="button" class="btn btn-primary btn-bork">Bork!</button>
            </div>
        </div>

        <div class="col-5">
            <ul class="nav nav-tabs nav-fill" id="MyTab" role="tablist">
                <li class="nav-item">
                    <a class="nav-link active" id="doggo-tab" href="#doggos" data-toggle="tab" role="tab"
                       aria-controls="doggos-tab" aria-selected="true">Doggos</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" id="upgrade-tab" href="#upgrades" data-toggle="tab" role="tab"
                       aria-controls="upgrades-tab" aria-selected="false">Upgrades</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" id="contact-tab" href="#changelog" data-toggle="tab" role="tab"
                       aria-controls="changelog-tab" aria-selected="false">Changelog</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" id="settings-tab" href="#settings" data-toggle="tab" role="tab"
                       aria-controls="settings-tab" aria-selected="false">Settings</a>
                </li>
            </ul>

            <div class="tab-content" id="myTabContent">
                <div class="tab-pane fade show active" id="doggos" role="tabpanel" aria-labelledby="doggos-tab">
                    <div class="row top-buffer">
                        <div class="col-12">
                            <button id="buypup" class="dog-btn btn btn-primary w-100" onclick="BP()" data-toggle="tooltip" data-placement="left" data-trigger="hover" data-original-title="+.3 BPS">
                                <div class="dog-left">
                                    <span class="dog">Puppy</span>
                                    <span class="cost" id="pucost">Cost: 10</span>
                                </div>
                                <div class="dog-right">
                                    <span class="number" id="punum"></span>
                                </div>
                            </button>
                        </div>
                    </div>
                    <dive class="row top-buffer">
                        <div class="col-12">
                            <button id="buychi" class="dog-btn btn btn-primary w-100" onclick="BCH()" data-toggle="tooltip" data-placement="left" data-trigger="hover" data-original-title="+1 BPS">
                                <div class="dog-left">
                                    <span class="dog">Chihuahua</span>
                                    <span class="cost" id="chcost">Cost: 100</span>
                                </div>
                                <div class="dog-right">
                                    <span class="number" id="chnum"></span>
                                </div>
                            </button>
                        </div>
                    </dive>
                    <dive class="row top-buffer">
                        <div class="col-12">
                            <button id="buybea" class="dog-btn btn btn-primary w-100" onclick="BB()" data-toggle="tooltip" data-placement="left" data-trigger="hover" data-original-title="+3 BPS">
                                <div class="dog-left">
                                    <span class="dog">Beagle</span>
                                    <span class="cost" id="becost">Cost: 500</span>
                                </div>
                                <div class="dog-right">
                                    <span class="number" id="benum"></span>
                                </div>
                            </button>
                        </div>
                    </dive>
                    <dive class="row top-buffer">
                        <div class="col-12">
                            <button id="buybur" class="dog-btn btn btn-primary w-100" onclick="BMD()" data-toggle="tooltip" data-placement="left" data-trigger="hover" data-original-title="+7 BPS">
                                <div class="dog-left">
                                    <span class="dog">Burmese Mountain Dog</span>
                                    <span class="cost" id="bucost">Cost: 1.5k</span>
                                </div>
                                <div class="dog-right">
                                    <span class="number" id="bunum"></span>
                                </div>
                            </button>
                        </div>
                    </dive>
                    <dive class="row top-buffer">
                        <div class="col-12">
                            <button id="buygol" class="dog-btn btn btn-primary w-100" onclick="BGR()" data-toggle="tooltip" data-placement="left" data-trigger="hover" data-original-title="+20 BPS">
                                <div class="dog-left">
                                    <span class="dog">Golden Retriever</span>
                                    <span class="cost" id="gocost">Cost: 3k</span>
                                </div>
                                <div class="dog-right">
                                    <span class="number" id="gonum"></span>
                                </div>
                            </button>
                        </div>
                    </dive>

                    <dive class="row top-buffer">
                        <div class="col-12">
                            <button id="buyhus" class="dog-btn btn btn-primary w-100" onclick="BH()" data-toggle="tooltip" data-placement="left" data-trigger="hover" data-original-title="+60 BPS">
                                <div class="dog-left">
                                    <span class="dog">Husky</span>
                                    <span class="cost" id="hucost">Cost: 7.5k</span>
                                </div>
                                <div class="dog-right">
                                    <span class="number" id="hunum"></span>
                                </div>
                            </button>
                        </div>
                    </dive>
                </div>

                <div class="tab-pane fade" id="upgrades" role="tabpanel" aria-labelledby="upgrades-tab">
                    <h3 id="squeakcount">0 Squeaky Toys</h3>
                    <dive class="row top-buffer">
                        <div class="col-12">
                            <button id="pupupgrade" class="dog-btn btn btn-light w-100" onclick="PupUpCheck()" data-toggle="tooltip" data-placement="left" data-trigger="hover" data-original-title="x1.5 Puppy BPS">
                                <div class="dog-left">
                                    <span class="dog">Puppy Upgrade</span>
                                    <span class="cost" id="pupupcost">Cost: 10 Squeaky Toys</span>
                                </div>
                                <div class="dog-right">
                                    <span class="number" id="pupupnum"></span>
                                </div>
                            </button>
                        </div>
                    </dive>
                    <dive class="row top-buffer">
                        <div class="col-12">
                            <button id="chiupgrade" class="dog-btn btn btn-light w-100" onclick="ChiUpCheck()" data-toggle="tooltip" data-placement="left" data-trigger="hover" data-original-title="x1.5 Chihuahua BPS">
                                <div class="dog-left">
                                    <span class="dog">Chihuahua Upgrade</span>
                                    <span class="cost" id="chiupcost">Cost: 10 Squeaky Toys</span>
                                </div>
                                <div class="dog-right">
                                    <span class="number" id="chiupnum"></span>
                                </div>
                            </button>
                        </div>
                    </dive>
                    <dive class="row top-buffer">
                        <div class="col-12">
                            <button id="beaupgrade" class="dog-btn btn btn-light w-100" onclick="BeaUpCheck()" data-toggle="tooltip" data-placement="left" data-trigger="hover" data-original-title="x1.5 Beagle BPS">
                                <div class="dog-left">
                                    <span class="dog">Beagle Upgrade</span>
                                    <span class="cost" id="beaupcost">Cost: 10 Squeaky Toys</span>
                                </div>
                                <div class="dog-right">
                                    <span class="number" id="beaupnum"></span>
                                </div>
                            </button>
                        </div>
                    </dive>
                    <dive class="row top-buffer">
                        <div class="col-12">
                            <button id="burupgrade" class="dog-btn btn btn-light w-100" onclick="BurUpCheck()" data-toggle="tooltip" data-placement="left" data-trigger="hover" data-original-title="x1.5 Burnese BPS">
                                <div class="dog-left">
                                    <span class="dog">Burnese Upgrade</span>
                                    <span class="cost" id="burupcost">Cost: 10 Squeaky Toys</span>
                                </div>
                                <div class="dog-right">
                                    <span class="number" id="burupnum"></span>
                                </div>
                            </button>
                        </div>
                    </dive>
                    <dive class="row top-buffer">
                        <div class="col-12">
                            <button id="golupgrade" class="dog-btn btn btn-light w-100" onclick="GolUpCheck()" data-toggle="tooltip" data-placement="left" data-trigger="hover" data-original-title="x1.5 Golden BPS">
                                <div class="dog-left">
                                    <span class="dog">Golden Upgrade</span>
                                    <span class="cost" id="golupcost">Cost: 10 Squeaky Toys</span>
                                </div>
                                <div class="dog-right">
                                    <span class="number" id="golupnum"></span>
                                </div>
                            </button>
                        </div>
                    </dive>
                    <dive class="row top-buffer">
                        <div class="col-12">
                            <button id="husupgrade" class="dog-btn btn btn-light w-100" onclick="HusUpCheck()" data-toggle="tooltip" data-placement="left" data-trigger="hover" data-original-title="x1.5 Husky BPS">
                                <div class="dog-left">
                                    <span class="dog">Husky Upgrade</span>
                                    <span class="cost" id="husupcost">Cost: 10 Squeaky Toys</span>
                                </div>
                                <div class="dog-right">
                                    <span class="number" id="husupnum"></span>
                                </div>
                            </button>
                        </div>
                    </dive>
                </div>

                <div class="tab-pane fade" id="changelog" role="tabpanel" aria-labelledby="changelog-tab">
                    <div class="pre-scrollable" style="max-height: 75vh">
                        <h3>Update 6.8-6.8.1</h3>
                        <h6>May 22, 2019</h6>
                        <ul>
                            <li>Added numerous more abbreviations to numbers</li>
                            <li>From now on, every time a new X.0 update is released. All X.Y updates will be condensed into one update section</li>
                            <li>Fixed bug with burnese images not maxing out at 30</li>
                            <li>Uh oh, is that a new setting I see? You can now decrease/increase the number of dog pics allowed to help performance</li>
                            <li>The slider also saves your spot :D</li>
                            <li>(6.8.1) Fixed slider defaulting to zero</li>
                            <li>(6.8.1) Fixed slider not saving on rewind</li>
                        </ul>
                        <h3>Update 6.7</h3>
                        <h6>May 21, 2019</h6>
                        <ul>
                            <li>Nerfed the upgrades down to x1.5 instead of x2</li>
                            <li>Upgrades now increase by x1.7 instead of x1.5</li>
                            <li>Huskies now give 60 bps instead of 80</li>
                            <li>Fixed puppy upgrade not showing proper cost</li>
                        </ul>
                        <h3>Update 6.6</h3>
                        <h6>May 21, 2019</h6>
                        <ul>
                            <li>Fixed bug of Squeaky Toys not saving properly</li>
                        </ul>
                        <h3>Update 6.5</h3>
                        <h6>May 21, 2019</h6>
                        <ul>
                            <li>Significantly Optimized dogs. They now give their full number per second instead of stuff like 1 bork per 12.5 milliseconds</li>
                        </ul>
                        <h3>Update 6.4</h3>
                        <h6>May 21, 2019</h6>
                        <ul>
                            <li>Fixed dogs giving the wrong amount of borks (again)</li>
                        </ul>
                        <h3>Update 6.3</h3>
                        <h6>May 21, 2019</h6>
                        <ul>
                            <li>Made it take 25k borks for 1 squeaky toy (was 3k but that was too broken)</li>
                            <li>Fixed dogs giving the wrong amount of borks</li>
                        </ul>
                        <h3>Update 6.2</h3>
                        <h6>May 20, 2019</h6>
                        <ul>
                            <li>Added more letters to the format for anybody that passes S</li>
                        </ul>
                        <h3>Update 6.1</h3>
                        <h6>May 20, 2019</h6>
                        <ul>
                            <li>Formatted Squeaky Toys</li>
                            <li>Made upgrades cost more</li>
                            <li>Fixed buttons not showing up on refresh</li>
                            <li>Borks now save a little faster</li>
                            <li>Minor Optimizations when loading the website</li>
                        </ul>
                        <h3>Update 6</h3>
                        <h6>May 20, 2019</h6>
                        <ul>
                            <li>Made a confirmation box when resetting/rewinding game</li>
                            <li>After hours of work, upgrades are here! You can buy upgrades with Squeaky Toys. You get toys by prestiging in the settings section. For every 3,000 borks you get one squeaky toy.</li>
                            <li>Text in darkmode is a little more gray now</li>
                            <li>Minor Optimizations</li>
                        </ul>
                        <h3>Update 5</h3>
                        <h6>May 6, 2019</h6>
                        <ul>
                            <li>You can now see a dog rain from the sky when you buy one!(Limit is 30 pictures of each dog at a time to prevent lag)
                            </li>
                            <li>Added another dog</li>
                            <li>UI changes! I'm now taking steps to make the game a little more pretty on the eyes</li>
                            <li>Burnese Mountain Dog's cost is now 1500 borks. (Was 1300)</li>
                            <li>Golden Retriever's cost is now 3000 borks. (Was 2600)</li>
                            <li>Fixed bug where buttons don't show up</li>
                            <li>Fixed bug where tooltip shows up and gets stuck on screen (For most, not all, instances)</li>
                            <li>Minor optimizations</li>
                            <li>(5.1) Optimized a chunk of html so loading the site should be faster</li>
                            <li>(5.1) Fixed bork button and bork info not being centered</li>
                            <li>(5.1) Fixed dog sprites from falling to the bottom of the user's screen then disappearing</li>
                            <li>(5.2) Fixed changelog bugging screen out by turning it into a scrollable area</li>
                            <li>(5.3) Made clicking the discord icon in the bottom left open in a new tab. Come join us!</li>
                            <li>(5.4) Formatted borks to show 11.1k and such as it grows</li>
                            <li>(5.4) Fixed the +X BPS box from staying around after you buy a dog</li>
                            <li>(5.4) Fixed bug that allowed users to hold down enter on bork by disabling enter input</li>
                            <li>(5.4) Decreased size of dog images by 5%</li>
                            <li>(5.4) Increased size of bork button, bork amount display, and BPS amount display</li>
                        </ul>
                        <h3>Update 4</h3>
                        <h6>April 27, 2019</h6>
                        <ul>
                            <li>Added a discord icon in the bottom left, come join us!</li>
                            <li>Everything now saves properly!</li>
                        </ul>
                        <h3>Update 3</h3>
                        <h6>April 26, 2019</h6>
                        <ul>
                            <li>Fixed bug of Golden Retrievers displaying the dog amount instead of cost</li>
                            <li>Fixed bug of burnese dog count displaying the beagle amount</li>
                            <li>Borks and dogs are now saved to cookies so you don't need to restart everytime you play (this feature is still in beta and buggy but still works a bit)</li>
                            <li>Added a reset game button in settings</li>
                            <li>Minor optimizations</li>
                        </ul>
                        <h3>Update 2</h3>
                        <h6>April 25, 2019</h6>
                        <ul>
                            <li>Added Settings Tab</li>
                            <li>Added dark theme to settings</li>
                            <li>Made it so dark theme is saved to cookies so it remembers which theme you had whenever you open the site</li>
                            <li>Buttons now change color based on if you can afford it</li>
                            <li>(2.1) Added dates to updates</li>
                            <li>(2.1) Added 2 more dogs</li>
                            <li>(2.1) Increased size of bork button</li>
                            <li>(2.1) Minor optimizations</li>

                        </ul>
                        <h3>-Update 1-</h3>
                        <h6>April 22, 2019</h6>
                        <ul>
                            <li>Added changelog (Officially keeping track now!)</li>
                            <li>Added Doggos, Upgrades, and Changelog buttons</li>
                            <li>Made cost of each dog go up every time you buy</li>
                            <li>Changed Small Dogs to puppies</li>
                            <li>Made it so you require one of the previous dogs to get the next type</li>
                            <li>Added Chihuahuas</li>
                            <li>Added Beagles</li>
                        </ul>
                    </div>
                </div>

                <div class="tab-pane fade" id="settings" role="tabpanel" aria-labelledby="settings-tab">
                    <div class="row">
                        <div class="col-2 my-auto">
                            <span>
                                Pictures
                            </span>
                        </div>
                        <div class="col-1 my-auto">
                            <img src="Res/IM/qmark.png" data-toggle="tooltip" data-placement="top" data-trigger="hover" data-original-title="Change the amount of pictures each dog is allowed to have. Lower this if you're having performance issues." align="right" >
                        </div>
                        <div class="col-8 my-auto">
                            <div class="slidecontainer">
                                <input type="range" min="0" max="50" value="30" class="slider" id="DogPicRange" onchange="showValue(this.value); changeScrollBar(this.value);">
                            </div>
                        </div>
                        <div class="col-1 my-auto">
                            <span id="dogpicamount"> 30</span>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12">
                            <div class="custom-control custom-checkbox">
                                <input type="checkbox" class="custom-control-input" id="ChangeTheme">
                                <label class="custom-control-label" for="ChangeTheme" onclick="IsDarkTheme()">Dark Theme</label>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12">
                            <div class="resetbut">
                                <button id="REWIND" type="button" class="btn btn-primary w-100" data-toggle="spopover">
                                    Rewind
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12">
                            <div class="resetbut">
                                <button id="RESET" type="button" class="btn btn-danger w-100" data-toggle="rpopover">
                                    Reset Everything
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<a href="https://discordapp.com/invite/gnXsdcS" target="_blank">
    <img src="Res/IM/discord.png" class="bot-left" data-toggle="tooltip" data-placement="top" data-original-title="Join our discord!">
</a>
</body>
</html>
<script src="JQuery/jquery-3.4.0.min.js"></script>
<script src="bootstrap-4.3.1-dist/js/bootstrap.bundle.js"></script>
<script src="Res/CAL/change-theme.js"></script>
<script src="Res/CAL/settings.js"></script>
<script src="Res/CAL/site.js"></script>