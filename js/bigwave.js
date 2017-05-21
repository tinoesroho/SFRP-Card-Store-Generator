function BigWave() {
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
    for (n = 0; n < 5; n++) {
        support[n] = supportPool[Math.floor(Math.random() * supportPool.length)];
    }


    for (i = 0; i < 24; i++) {
        standard[i] = standardPool[Math.floor(Math.random() * standardPool.length)];
    }

    //Megas
    for (l = 0; l < 2; l++) {
        mega[l] = megaPool[Math.floor(Math.random() * megaPool.length)];
    } //

    //Gigas
    giga = gigaPool[Math.floor(Math.random() * gigaPool.length)];

    //Support
    for (n = 0; n < 5; n++) {
        support[n] = supportPool[Math.floor(Math.random() * supportPool.length)];
    }

    var firstbw = "[big][big]~Standard Cards~[/big][/big]<br>";
    for (i = 0; i < 24; i++) {
        firstbw += ("<br>" + standard[i]);
    }

    var supportcards = "[big][big]~Support Cards~[/big][/big]<br>";
    for (n = 0; n < 5; n++) {
        supportcards += ("<br>" + support[n]);
    }

    document.getElementById("firstbw").innerHTML = firstbw;
    document.getElementById("secondbw").innerHTML = "";
    document.getElementById("thirdbw").innerHTML = "";

    document.getElementById("supportcards").innerHTML = supportcards;
    document.getElementById("megagiga").innerHTML = "[big][big]~Rare Cards~[/big][/big]<br></br>[color=#5a70b3]" + mega[0] + "<br>" + mega[1] + "[/color]<br>[color=#ee4a2d]" + giga + "[/color]";
}