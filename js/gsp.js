﻿function SatellaArmory() {
var i; var j; var k; var l; var m; var n;

    var standard = new Array(24);
    for (i = 0; i < 24; i++) {
        standard[i] = standardPool[Math.floor(Math.random() * standardPool.length)];
    }
    var mega = new Array(2);
    mega[0] = megaPool[Math.floor(Math.random() * megaPool.length)];
    mega[1] = megaPool[Math.floor(Math.random() * megaPool.length)];

    var giga = gigaPool[Math.floor(Math.random() * gigaPool.length)];

    var support = new Array(5);
    support[0] = supportPool[Math.floor(Math.random() * supportPool.length)];
    support[1] = supportPool[Math.floor(Math.random() * supportPool.length)];
    support[2] = supportPool[Math.floor(Math.random() * supportPool.length)];
    support[3] = supportPool[Math.floor(Math.random() * supportPool.length)];
    support[4] = supportPool[Math.floor(Math.random() * supportPool.length)];


    for (i = 0; i < 24; i++) {
        standard[i] = standardPool[Math.floor(Math.random() * standardPool.length)];
    }

    //Megas
    for (l = 0; l < 2; l++) {
        mega[l] = megaPool[Math.floor(Math.random() * megaPool.length)];
    } //

    //Gigas
    giga = gigaPool[Math.floor(Math.random() * gigaPool.length)];

    var firstgsp = "[big][big]~Standard Cards~[/big][/big]<br>";
    for (i = 0; i < 24; i++) {
        firstgsp += ("<br>" + standard[i]);
    }

    document.getElementById("firstgsp").innerHTML = firstgsp;
    document.getElementById("secondgsp").innerHTML = "";
    document.getElementById("thirdgsp").innerHTML = "[big][big]~Rare Cards~[/big][/big]<br></br>[color=#5a70b3]" + mega[0] + "<br>" + "[/color]<br>[color=#ee4a2d]" + giga + "[/color]";
}