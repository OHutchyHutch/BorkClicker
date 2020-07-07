var require = function (path) {

    return exports;
};
var brk = 0;
var borkbps = 0;
var brktmp = 0;
var brkmnt = 1;
var brkupcost = 100;
var brkuparray = [];
var puppyarray = [];
var pupbps = 0;
var pupupbpsamount = .2;
var puppiescost = 10;
var pupupcost = 5;
var pupuparray = [];
var hadpuppy = false;
var chihuahuaarray = [];
var chibps = 0;
var chiupbpsamount = 1;
var chihuahuacost = 100;
var chiupcost = 5;
var chiuparray = [];
var hadchihuahua = false;
var beaglearray = [];
var beabps = 0;
var beaupbpsamount = 7;
var beaglecost = 1000;
var beaupcost = 5;
var beauparray = [];
var hadbeagle = false;
var burnesearray = [];
var burbps = 0;
var burupbpsamount = 35;
var burnesecost = 8000;
var burupcost = 5;
var buruparray = [];
var hadburnese = false;
var goldenarray = [];
var golbps = 0;
var golupbpsamount = 245;
var goldencost = 90000;
var golupcost = 5;
var goluparray = [];
var hadgolden = false;
var huskyarray = [];
var husbps = 0;
var husupbpsamount = 1200;
var huskycost = 750000;
var husupcost = 5;
var husuparray = [];
var hadhusky = false;
var skt = 0;
var squeaktemp = 0;

$('#buychi').hide();
$('#buybea').hide();
$('#buybur').hide();
$('#buygol').hide();
$('#buyhus').hide();
$('#pupupgrade').hide();
$('#chiupgrade').hide();
$('#beaupgrade').hide();
$('#burupgrade').hide();
$('#golupgrade').hide();
$('#husupgrade').hide();

if (JSON.parse(localStorage.getItem('borkssave')) != null) {
    brk = localStorage.getItem('borkssave');
    brktmp = localStorage.getItem('brktmpsave');
}
if (localStorage.getItem('pupsave') != null) {
    var pupsv = JSON.parse(localStorage.getItem('pupsave'));
    pupsv.forEach(BPG);
}
if (localStorage.getItem('chisave') != null) {
    var chisv = JSON.parse(localStorage.getItem('chisave'));
    chisv.forEach(BCHG);
    $('#BB').show();
}
if (localStorage.getItem('beasave') != null) {
    var beasv = JSON.parse(localStorage.getItem('beasave'));
    beasv.forEach(BBG);
    $('#BMD').show();
}
if (localStorage.getItem('bursave') != null) {
    var bursv = JSON.parse(localStorage.getItem('bursave'));
    bursv.forEach(BMDG);
    $('#BGR').show();
}
if (localStorage.getItem('golsave') != null) {
    var golsv = JSON.parse(localStorage.getItem('golsave'));
    golsv.forEach(BGRG);
}
if (localStorage.getItem('hussave') != null) {
    var hussv = JSON.parse(localStorage.getItem('hussave'));
    hussv.forEach(BHG);
}
if (JSON.parse(localStorage.getItem('squsave')) != null) {
    skt = JSON.parse(localStorage.getItem('squsave'));
    upgradeupdate();
}
if (localStorage.getItem('pupupsave') != null) {
    var pupupsv = JSON.parse(localStorage.getItem('pupupsave'));
    pupupsv.forEach(PupUp);
}
if (localStorage.getItem('chiupsave') != null) {
    var chiupsv = JSON.parse(localStorage.getItem('chiupsave'));
    chiupsv.forEach(ChiUp);
}
if (localStorage.getItem('beaupsave') != null) {
    var beaupsv = JSON.parse(localStorage.getItem('beaupsave'));
    beaupsv.forEach(BeaUp);
}
if (localStorage.getItem('burupsave') != null) {
    var burupsv = JSON.parse(localStorage.getItem('burupsave'));
    burupsv.forEach(BurUp);
}
if (localStorage.getItem('golupsave') != null) {
    var golupsv = JSON.parse(localStorage.getItem('golupsave'));
    golupsv.forEach(GolUp);
}
if (localStorage.getItem('husupsave') != null) {
    var husupsv = JSON.parse(localStorage.getItem('husupsave'));
    husupsv.forEach(HusUp);
}

function Bork() {
    brk = +brk + +brkmnt;
    brktmp = brktmp + +brkmnt;
}

function brkup () {
    if (brk >= brkupcost)
    {
        brk = +brk - +brkupcost;
        brkmnt *= 1.2;
        brkuparray.push("B");
        $('#BorkUpButton').tooltip('hide')
            .attr('data-original-title', 'Get ' + (brkmnt *= 1.2).toFixed(1) + ' Borks Per Click')
            .tooltip('fixTitle')
            .tooltip('show');
    }
}

function format(num) {
    var units = ['k', 'M', 'B', 'T', 'q', 'Q', 's', 'S', 'O', 'N', 'D', 'uD', 'dD', 'tD', 'qD', 'QD', 'sD', 'SD', 'OD', 'nD', 'V', 'uV', 'dV', 'qV', 'QV'], decimal;

    for (var i = units.length - 1; i >= 0; i--) {
        decimal = Math.pow(1000, i + 1);
        if (num <= -decimal || num >= decimal) {
            return +(num / decimal).toFixed(2) + units[i];
        }
    }
    return num;
}

function PIMG() {
    if (puppyarray.length <= maximages.amount) {
        var img = $('<img id="pimg" name="pimg">');
        img.attr('src', "Res/IM/pupgif.gif");
        img.attr('class', 'pimg');
        img.appendTo('#PIC');
        img.css("animation-duration", (10 + (Math.random() * 10)) + "s");
        img.css("margin-top", Math.random() * 70 + "%");
        img.css("animation-delay", Math.random() * 10 + "s");
    }
}

function BP() {
    if (brk >= puppiescost) {
        brk -= puppiescost;
        BPG();
    }
}

function BPG() {
    puppiescost = Math.round(puppiescost *= 1.2);
    pupbps += pupupbpsamount;
    hadpuppy = true;
    puppyarray.push("P");
    document.getElementById("pucost").innerHTML = "Cost: " + format(puppiescost);
    document.getElementById("punum").innerHTML = "x" + puppyarray.length;

    if (puppyarray.length >= 1) {
        $('#buychi').show();
        document.getElementById("pupname").innerHTML = "Puppy";
        document.getElementById('pupimg').src = 'Res/IM/puppy.png';
    }
    PIMG();
    localStorage.setItem('pupsave', JSON.stringify(puppyarray));
    localStorage.setItem('hadpup', JSON.stringify(hadpuppy));

    if (hadpuppy === true) {
        $('#pupupgrade').show();
    }

}

function PupUpCheck() {
    if (skt >= pupupcost) {
        skt -= pupupcost;
        PupUp();
    }
}

function PupUp() {
    pupupcost *= 1.7;
    pupupcost = Math.round(pupupcost);
    pupupbpsamount *= 1.5;
    pupbps *= 1.5;
    pupuparray.push("P");
    $('#buypupbut').tooltip('hide')
        .attr('data-original-title', "+" + format(pupupbpsamount.toFixed(1)) + " bps")
        .tooltip('fixTitle')
        .tooltip('show');
    document.getElementById("pupupcost").innerHTML = "Cost: " + format(pupupcost) + " Squeaky Toys";
    document.getElementById("pupupnum").innerHTML = "x" + pupuparray.length;
    localStorage.setItem('pupupsave', JSON.stringify(pupuparray));
    upgradeupdate();
}

function CIMG() {
    if (chihuahuaarray.length <= maximages.amount) {
        var img = $('<img id="cimg" name="cimg">');
        img.attr('src', "Res/IM/chigif.gif");
        img.attr('class', 'pimg');
        img.appendTo('#PIC');
        img.css("animation-duration", (10 + (Math.random() * 10)) + "s");
        img.css("margin-top", Math.random() * 70 + "%");
        img.css("animation-delay", Math.random() * 10 + "s");
    }
}

function BCH() {
    if (brk >= chihuahuacost) {
        brk -= chihuahuacost;
        BCHG();
    }
}

function BCHG() {
    chihuahuacost = Math.round(chihuahuacost *= 1.2);
    chibps += chiupbpsamount;
    hadchihuahua = true;
    chihuahuaarray.push("C");
    document.getElementById("chcost").innerHTML = "Cost: " + format(chihuahuacost);
    document.getElementById("chnum").innerHTML = "x" + chihuahuaarray.length;

    if (chihuahuaarray.length >= 1) {
        $('#buybea').show();
        document.getElementById("chiname").innerHTML = "Chihuahua";
        document.getElementById('chiimg').src = 'Res/IM/chihuahua.png';
    }

    CIMG();
    localStorage.setItem('chisave', JSON.stringify(chihuahuaarray));
    localStorage.setItem('hadchi', JSON.stringify(hadchihuahua));

    if (hadchihuahua === true) {
        $('#chiupgrade').show();
    }
}

function ChiUpCheck() {
    if (skt >= chiupcost) {
        skt -= chiupcost;
        ChiUp();
    }
}

function ChiUp() {
    chiupcost *= 1.7;
    chiupcost = Math.round(chiupcost);
    chiupbpsamount *= 1.5;
    chibps *= 1.5;
    chiuparray.push("C");
    $('#buychibut').attr('data-original-title', "+" + format(chiupbpsamount.toFixed(1)) + " bps");
    document.getElementById("chiupcost").innerHTML = "Cost: " + format(chiupcost) + " Squeaky Toys";
    document.getElementById("chiupnum").innerHTML = "x" + chiuparray.length;
    localStorage.setItem('chiupsave', JSON.stringify(chiuparray));
    upgradeupdate();
}


function BIMG() {
    if (beaglearray.length <= maximages.amount) {
        var img = $('<img id="bimg" name="bimg">');
        img.attr('src', "Res/IM/beagif.gif");
        img.attr('class', 'pimg');
        img.appendTo('#PIC');
        img.css("animation-duration", (10 + (Math.random() * 10)) + "s");
        img.css("margin-top", Math.random() * 70 + "%");
        img.css("animation-delay", Math.random() * 10 + "s");
    }
}

function BB() {
    if (brk >= beaglecost) {
        brk -= beaglecost;
        BBG();
    }
}

function BBG() {
    beaglecost = Math.round(beaglecost *= 1.2);
    beabps += beaupbpsamount;
    beaglearray.push("B");
    hadbeagle = true;
    document.getElementById("becost").innerHTML = "Cost: " + format(beaglecost);
    document.getElementById("benum").innerHTML = "x" + beaglearray.length;

    if (beaglearray.length >= 1) {
        $('#buybur').show();
        document.getElementById("beaname").innerHTML = "Beagle";
        document.getElementById('beaimg').src = 'Res/IM/beagle.png';
    }
    BIMG();
    localStorage.setItem('beasave', JSON.stringify(beaglearray));
    localStorage.setItem('hadbea', JSON.stringify(hadbeagle));

    if (hadbeagle == true) {
        $('#beaupgrade').show();
    }
}

function BeaUpCheck() {
    if (skt >= beaupcost) {
        skt -= beaupcost;
        BeaUp();
    }
}

function BeaUp() {
    beaupcost *= 1.7;
    beaupcost = Math.round(beaupcost);
    beaupbpsamount *= 1.5;
    beabps *= 1.5;
    beauparray.push("B");
    $('#buybeabut').attr('data-original-title', "+" + format(beaupbpsamount.toFixed(1)) + " bps");
    document.getElementById("beaupcost").innerHTML = "Cost: " + format(beaupcost) + " Squeaky Toys";
    document.getElementById("beaupnum").innerHTML = "x" + beauparray.length;
    localStorage.setItem('beaupsave', JSON.stringify(beauparray));
    upgradeupdate();
}

function BMING() {
    if (burnesearray.length <= maximages.amount) {
        var img = $('<img id="bming" name="bming">');
        img.attr('src', "Res/IM/burgif.gif");
        img.attr('class', 'pimg');
        img.appendTo('#PIC');
        img.css("animation-duration", (10 + (Math.random() * 10)) + "s");
        img.css("margin-top", Math.random() * 70 + "%");
        img.css("animation-delay", Math.random() * 10 + "s");
    }
}

function BMD() {
    if (brk >= burnesecost) {
        brk -= burnesecost;
        BMDG();
    }
}

function BMDG() {
    burnesecost = Math.round(burnesecost *= 1.2);
    burbps += burupbpsamount;
    hadburnese = true;
    burnesearray.push("B");
    document.getElementById("bucost").innerHTML = "Cost: " + format(burnesecost);
    document.getElementById("bunum").innerHTML = "x" + burnesearray.length;

    if (burnesearray.length >= 1) {
        $('#buygol').show();
        document.getElementById("burname").innerHTML = "Burnese Mtn";
        document.getElementById('burimg').src = 'Res/IM/bmd.png';
    }
    BMING();
    localStorage.setItem('bursave', JSON.stringify(burnesearray));
    localStorage.setItem('hadbur', JSON.stringify(hadburnese));

    if (hadburnese === true) {
        $('#burupgrade').show();
    }
}

function BurUpCheck() {
    if (skt >= burupcost) {
        skt -= burupcost;
        BurUp();
    }
}

function BurUp() {
    burupcost *= 1.7;
    burupcost = Math.round(burupcost);
    burupbpsamount *= 1.5;
    burbps *= 1.5;
    buruparray.push("B");
    $('#buyburbut').attr('data-original-title', "+" + format(burupbpsamount.toFixed(1)) + " bps");
    document.getElementById("burupcost").innerHTML = "Cost: " + format(burupcost) + " Squeaky Toys";
    document.getElementById("burupnum").innerHTML = "x" + buruparray.length;
    localStorage.setItem('burupsave', JSON.stringify(buruparray));
    upgradeupdate();
}

function GIMG() {
    if (goldenarray.length <= maximages.amount) {
        var img = $('<img id="gimg" name="gimg">');
        img.attr('src', "Res/IM/golgif.gif");
        img.attr('class', 'pimg');
        img.appendTo('#PIC');
        img.css("animation-duration", (10 + (Math.random() * 10)) + "s");
        img.css("margin-top", Math.random() * 70 + "%");
        img.css("animation-delay", Math.random() * 10 + "s");
    }
}

function BGR() {
    if (brk >= goldencost) {
        brk -= goldencost;
        BGRG();
    }
}

function BGRG() {
    goldencost = Math.round(goldencost *= 1.2);
    golbps += golupbpsamount;
    hadgolden = true;
    goldenarray.push("O");
    document.getElementById("gocost").innerHTML = "Cost: " + format(goldencost);
    document.getElementById("gonum").innerHTML = "x" + goldenarray.length;

    if (goldenarray.length >= 1) {
        $('#buyhus').show();
        document.getElementById("golname").innerHTML = "Golden Retriever";
        document.getElementById('golimg').src = 'Res/IM/golden.png';
    }
    GIMG();
    localStorage.setItem('golsave', JSON.stringify(goldenarray));
    localStorage.setItem('hadgol', JSON.stringify(hadgolden));

    if (hadgolden === true) {
        $('#golupgrade').show();
    }
}

function GolUpCheck() {
    if (skt >= golupcost) {
        skt -= golupcost;
        GolUp();
    }
}

function GolUp() {
    golupcost *= 1.7;
    golupcost = Math.round(golupcost);
    golupbpsamount *= 1.5;
    golbps *= 1.5;
    goluparray.push("O");
    $('#buygolbut').attr('data-original-title', "+" + format(golupbpsamount.toFixed(1)) + " bps");
    document.getElementById("golupcost").innerHTML = "Cost: " + format(golupcost) + " Squeaky Toys";
    document.getElementById("golupnum").innerHTML = "x" + goluparray.length;
    localStorage.setItem('golupsave', JSON.stringify(goluparray));
    upgradeupdate();
}

function HIMG() {
    if (huskyarray.length <= maximages.amount) {
        var img = $('<img id="himg" name="himg">');
        img.attr('src', "Res/IM/husgif.gif");
        img.attr('class', 'pimg');
        img.appendTo('#PIC');
        img.css("animation-duration", (10 + (Math.random() * 10)) + "s");
        img.css("margin-top", Math.random() * 70 + "%");
        img.css("animation-delay", Math.random() * 10 + "s");
    }
}

function BH() {
    if (brk >= huskycost) {
        brk -= huskycost;
        BHG();
    }
}

function BHG() {
    huskycost = Math.round(huskycost *= 1.2);
    husbps += husupbpsamount;
    hadhusky = true;
    huskyarray.push("H");
    document.getElementById("hucost").innerHTML = "Cost: " + format(huskycost);
    document.getElementById("hunum").innerHTML = "x" + huskyarray.length;

    if (huskyarray.length >= 1) {
        document.getElementById("husname").innerHTML = "Husky";
        document.getElementById('husimg').src = 'Res/IM/husky.png';
    }
    HIMG();
    localStorage.setItem('hussave', JSON.stringify(huskyarray));
    localStorage.setItem('hadhus', JSON.stringify(hadhusky));

    if (hadhusky === true) {
        $('#husupgrade').show();
    }
}

function HusUpCheck() {
    if (skt >= husupcost) {
        skt -= husupcost;
        HusUp();
    }
}

function HusUp() {
    husupcost *= 1.7;
    husupcost = Math.round(husupcost);
    husupbpsamount *= 1.5;
    husbps *= 1.5;
    husuparray.push("H");
    $('#buyhusbut').attr('data-original-title', "+" + format(husupbpsamount.toFixed(1)) + " bps");
    document.getElementById("husupcost").innerHTML = "Cost: " + format(husupcost) + " Squeaky Toys";
    document.getElementById("husupnum").innerHTML = "x" + husuparray.length;
    localStorage.setItem('husupsave', JSON.stringify(husuparray));
    upgradeupdate();
}


var sliderinfo = require("./Res/CAL/settings.js");

function RESET() {
    localStorage.clear();
    location.reload(true);
}

function REWIND() {
    var darkTheme = localStorage.getItem('darkThemeEnabled');
    localStorage.clear();
    skt += squeaktemp;
    localStorage.setItem('squsave', skt);
    squeaktemp = 0;
    localStorage.setItem('darkThemeEnabled', darkTheme);
    localStorage.setItem('pupupsave', JSON.stringify(pupuparray));
    localStorage.setItem('chiupsave', JSON.stringify(chiuparray));
    localStorage.setItem('beaupsave', JSON.stringify(beauparray));
    localStorage.setItem('burupsave', JSON.stringify(buruparray));
    localStorage.setItem('golupsave', JSON.stringify(goluparray));
    localStorage.setItem('husupsave', JSON.stringify(husuparray));
    localStorage.setItem('maximagesbefore', sliderinfo.maximagesbefore());
    localStorage.setItem('maximages', sliderinfo.maximages());
    location.reload(true);
}

function upgradeupdate() {
    document.getElementById("squeakcount").innerHTML = format(skt) + " Squeaky Toys";
    if (skt >= pupupcost) {
        $("#pupupgrade").removeClass("dog-btn btn btn-light w-100").addClass("dog-btn btn btn-primary w-100");
    } else if (skt < pupupcost) {
        $("#pupupgrade").removeClass("dog-btn btn btn-primary w-100").addClass("dog-btn btn btn-light w-100");
    }

    if (skt >= chiupcost) {
        $("#chiupgrade").removeClass("dog-btn btn btn-light w-100").addClass("dog-btn btn btn-primary w-100");
    } else if (skt < chiupcost) {
        $("#chiupgrade").removeClass("dog-btn btn btn-primary w-100").addClass("dog-btn btn btn-light w-100");
    }

    if (skt >= beaupcost) {
        $("#beaupgrade").removeClass("dog-btn btn btn-light w-100").addClass("dog-btn btn btn-primary w-100");
    } else if (skt < beaupcost) {
        $("#beaupgrade").removeClass("dog-btn btn btn-primary w-100").addClass("dog-btn btn btn-light w-100");
    }

    if (skt >= burupcost) {
        $("#burupgrade").removeClass("dog-btn btn btn-light w-100").addClass("dog-btn btn btn-primary w-100");
    } else if (skt < burupcost) {
        $("#burupgrade").removeClass("dog-btn btn btn-primary w-100").addClass("dog-btn btn btn-light w-100");
    }

    if (skt >= golupcost) {
        $("#golupgrade").removeClass("dog-btn btn btn-light w-100").addClass("dog-btn btn btn-primary w-100");
    } else if (skt < golupcost) {
        $("#golupgrade").removeClass("dog-btn btn btn-primary w-100").addClass("dog-btn btn btn-light w-100");
    }

    if (skt >= husupcost) {
        $("#husupgrade").removeClass("dog-btn btn btn-light w-100").addClass("dog-btn btn btn-primary w-100");
    } else if (skt < husupcost) {
        $("#husupgrade").removeClass("dog-btn btn btn-primary w-100").addClass("dog-btn btn btn-light w-100");
    }
    localStorage.setItem('squsave', skt);
}

function squcal() {
    squeaktemp = Math.floor(brktmp / 20000);
    return squeaktemp;
}

setInterval(function () {
    if (brk < 1000 && brk > 0) {
        document.getElementById("borks").innerHTML = brk.toFixed(1) + " Borks";
    } else {
        document.getElementById("borks").innerHTML = format(brk) + " Borks";
    }

    borkbps = +pupbps + +chibps + +beabps + +burbps + +golbps + +husbps;
    borkbps = borkbps.toFixed(1);
    document.getElementById("BCA").innerHTML = "+" + format(borkbps) + " Borks per second";

}, 100);
setInterval(function () {
    if (brk >= puppiescost) {
        $("#buypupbut").removeClass("dog-btn btn btn-light w-100").addClass("dog-btn btn btn-primary w-100");
    } else if (brk < puppiescost) {
        $("#buypupbut").removeClass("dog-btn btn btn-primary w-100").addClass("dog-btn btn btn-light w-100");
    }
    if (brk >= chihuahuacost) {
        $("#buychibut").removeClass("dog-btn btn btn-light w-100").addClass("dog-btn btn btn-primary w-100");
    } else if (brk < chihuahuacost) {
        $("#buychibut").removeClass("dog-btn btn btn-primary w-100").addClass("dog-btn btn btn-light w-100");
    }
    if (brk >= beaglecost) {
        $("#buybeabut").removeClass("dog-btn btn btn-light w-100").addClass("dog-btn btn btn-primary w-100");
    } else if (brk < beaglecost) {
        $("#buybeabut").removeClass("dog-btn btn btn-primary w-100").addClass("dog-btn btn btn-light w-100");
    }
    if (brk >= burnesecost) {
        $("#buyburbut").removeClass("dog-btn btn btn-light w-100").addClass("dog-btn btn btn-primary w-100");
    } else if (brk < burnesecost) {
        $("#buyburbut").removeClass("dog-btn btn btn-primary w-100").addClass("dog-btn btn btn-light w-100");
    }
    if (brk >= goldencost) {
        $("#buygolbut").removeClass("dog-btn btn btn-light w-100").addClass("dog-btn btn btn-primary w-100");
    } else if (brk < goldencost) {
        $("#buygolbut").removeClass("dog-btn btn btn-primary w-100").addClass("dog-btn btn btn-light w-100");
    }
    if (brk >= huskycost) {
        $("#buyhusbut").removeClass("dog-btn btn btn-light w-100").addClass("dog-btn btn btn-primary w-100");
    } else if (brk < huskycost) {
        $("#buyhusbut").removeClass("dog-btn btn btn-primary w-100").addClass("dog-btn btn btn-light w-100");
    }
    if (brk >= brkupcost) {
        $("#BorkUpButton").css('opacity', '1.0');
    } else if (brk < brkupcost) {
        $("#BorkUpButton").css('opacity', '0.6');
    }
}, 200);
setInterval(function () {
    localStorage.setItem('borkssave', brk);
    localStorage.setItem('brktmpsave', brktmp);

}, 1750);


var exports;
setInterval(function () {

    exports = {

        puppyamount: function () {
            return puppyarray;
        },

        puppyimg: function () {
            return PIMG();
        },

        chihuahuaamount: function () {
            return chihuahuaarray;
        },

        chihuahuaimg: function () {
            return CIMG();
        },

        beagleamount: function () {
            return beaglearray;
        },

        beagleimg: function () {
            return BIMG();
        },

        burneseamount: function () {
            return burnesearray;
        },

        burneseimg: function () {
            return BMING();
        },

        goldenamount: function () {
            return goldenarray;
        },

        goldenimg: function () {
            return GIMG();
        },

        huskyamount: function () {
            return huskyarray;
        },

        huskyimg: function () {
            return HIMG();
        }
    };

}, 1000);

function RewindCal() {
    var div = document.getElementById('RewindBody');
    div.innerHTML = '<p>You will get ' + format(squcal()) + ' Squeaky Toys.</p> <break></break> <p>You get one Squeaky Toy for every 20k borks you have earned. As of opening this, you have earned ' + format(Math.floor(brktmp)) + ' borks.</p>';
}

var incomeTime = {

    prev: new Date(),

    getSecondsBetween: function () {
        var result = Date.now() - this.prev;

        this.prev = Date.now();

        return result / 1000;
    }
};

gainBorks();
setInterval(function () {
    gainBorks();

}, 1000);
var borksSincePrev = 0;


function gainBorks() {

    borksSincePrev = +borkbps * +incomeTime.getSecondsBetween();

    borksSincePrev = (borksSincePrev / 3);

    setTimeout(function () {
        addBorks();
        setTimeout(function () {
            addBorks();
            setTimeout(function () {
                addBorks();
            }, 330);
        }, 330);
    }, 330);
}

function addBorks() {
    brk = +borksSincePrev + +brk;
    brktmp = +borksSincePrev + +brktmp;
    Math.floor(brktmp);
}

function isNan(x) {
    if (isNaN(x)) {
        console.log("Nan");
    }
    console.log("safe");
}
