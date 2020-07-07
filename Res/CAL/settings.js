var require = function(path) {

    return exports;
};

$( document ).ready(function() {
    $('[data-toggle="tooltip"]').tooltip({'placement': 'left'});
});

var slider = document.getElementById("DogPicRange");
var output = document.getElementById("dogpicamount");
output.innerHTML = slider.value;

var exports;
var maximages = {amount: 30};
var maximagesbefore = {amount: 30};

exports = {
    maximages: function()
    { return maximages.amount; },

    maximagesbefore: function()
    { return maximagesbefore.amount; }
};

var pupimages;
var chiimages;
var beaimages;
var burimages;
var golimages;
var husimages;
var imgcalc1;
var imgcalc2;

var pupamount;
var chiamount;
var beaamount;
var buramount;
var golamount;
var husamount;
slider.oninput = function() {
    output.innerHTML = this.value;

    maximages = {amount: parseInt(this.value)};
};

slider.onchange = function() {
    pupimages = document.getElementsByName("pimg");
    chiimages = document.getElementsByName("cimg");
    beaimages = document.getElementsByName("bimg");
    burimages = document.getElementsByName("bming");
    golimages = document.getElementsByName("gimg");
    husimages = document.getElementsByName("himg");

    imgcalc1 = maximagesbefore.amount - maximages.amount;
    imgcalc2 = maximagesbefore.amount - imgcalc1;

    var dogs = require("./Res/CAL/site.js");
    dogs.puppyamount();

    if(maximagesbefore.amount > maximages.amount) {
        for (var a = pupimages.length - 1; a >= imgcalc2; a--) {
            pupimages[a].parentElement.removeChild(pupimages[a]);
        }

        for (var b = chiimages.length - 1; b >= imgcalc2; b--) {
            chiimages[b].parentElement.removeChild(chiimages[b]);
        }

        for (var c = beaimages.length - 1; c >= imgcalc2; c--) {
            beaimages[c].parentElement.removeChild(beaimages[c]);
        }

        for (var d = burimages.length - 1; d >= imgcalc2; d--) {
            burimages[d].parentElement.removeChild(burimages[d]);
        }

        for (var e = golimages.length - 1; e >= imgcalc2; e--) {
            golimages[e].parentElement.removeChild(golimages[e]);
        }

        for (var f = husimages.length - 1; f >= imgcalc2; f--) {
            husimages[f].parentElement.removeChild(husimages[f]);
        }
    }
    else if (maximagesbefore.amount < maximages.amount)
    {
        pupamount = dogs.puppyamount();
        pupamount = pupamount.length;
        if(pupamount > maximagesbefore.amount)
        {
            pupamount -= maximagesbefore.amount;
            for(var aa = 0; aa <= pupamount; aa++)
            { dogs.puppyimg(); }
        }

        chiamount = dogs.chihuahuaamount();
        chiamount = chiamount.length;
        if(chiamount > maximagesbefore.amount)
        {
            chiamount -= maximagesbefore.amount;
            for(var bb = 0; bb <= chiamount; bb++)
            { dogs.chihuahuaimg(); }
        }

        beaamount = dogs.beagleamount();
        beaamount = beaamount.length;
        if(beaamount > maximagesbefore.amount)
        {
            beaamount -= maximagesbefore.amount;
            for(var cc = 0; cc <= beaamount; cc++)
            { dogs.beagleimg(); }
        }

        buramount = dogs.burneseamount();
        buramount = buramount.length;
        if(buramount > maximagesbefore.amount)
        {
            buramount -= maximagesbefore.amount;
            for(var dd = 0; dd <= buramount; dd++)
            { dogs.burneseimg(); }
        }

        golamount = dogs.goldenamount();
        golamount = golamount.length;
        if(golamount > maximagesbefore.amount)
        {
            golamount -= maximagesbefore.amount;
            for(var ee = 0; ee <= golamount; ee++)
            { dogs.goldenimg(); }
        }

        husamount = dogs.huskyamount();
        husamount = husamount.length;
        if(husamount > maximagesbefore.amount)
        {
            husamount -= maximagesbefore.amount;
            for(var ff = 0; ff <= husamount; ff++)
            { dogs.huskyimg(); }
        }
    }

    maximagesbefore.amount = maximages.amount;
    localStorage.setItem('maximagesbefore', maximagesbefore.amount);
    localStorage.setItem('maximages', maximages.amount);
};


if (localStorage.getItem('maximagesbefore') != null) {
    maximagesbefore.amount = localStorage.getItem('maximagesbefore');
}

if (localStorage.getItem('maximages') != null) {
    var input = document.getElementById("DogPicRange");
    input.value = localStorage.getItem("maximages");
    maximages.amount = localStorage.getItem('maximages');
    output.innerHTML = maximages.amount;
}
