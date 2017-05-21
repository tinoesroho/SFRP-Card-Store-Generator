function BigWave()
{
var i;
var j;
var k;
var l;
var m;
var n;

var standard = new Array(24);
standard[0] = standardPool[Math.floor(Math.random() * standardPool.length)];
standard[1] = standardPool[Math.floor(Math.random() * standardPool.length)];
standard[2] = standardPool[Math.floor(Math.random() * standardPool.length)];
standard[3] = standardPool[Math.floor(Math.random() * standardPool.length)];
standard[4] = standardPool[Math.floor(Math.random() * standardPool.length)];
standard[5] = standardPool[Math.floor(Math.random() * standardPool.length)];
standard[6] = standardPool[Math.floor(Math.random() * standardPool.length)];
standard[7] = standardPool[Math.floor(Math.random() * standardPool.length)];
standard[8] = standardPool[Math.floor(Math.random() * standardPool.length)];
standard[9] = standardPool[Math.floor(Math.random() * standardPool.length)];
standard[10] = standardPool[Math.floor(Math.random() * standardPool.length)];
standard[11] = standardPool[Math.floor(Math.random() * standardPool.length)];
standard[12] = standardPool[Math.floor(Math.random() * standardPool.length)];
standard[13] = standardPool[Math.floor(Math.random() * standardPool.length)];
standard[14] = standardPool[Math.floor(Math.random() * standardPool.length)];
standard[15] = standardPool[Math.floor(Math.random() * standardPool.length)];
standard[16] = standardPool[Math.floor(Math.random() * standardPool.length)];
standard[17] = standardPool[Math.floor(Math.random() * standardPool.length)];
standard[18] = standardPool[Math.floor(Math.random() * standardPool.length)];
standard[19] = standardPool[Math.floor(Math.random() * standardPool.length)];
standard[20] = standardPool[Math.floor(Math.random() * standardPool.length)];
standard[21] = standardPool[Math.floor(Math.random() * standardPool.length)];
standard[22] = standardPool[Math.floor(Math.random() * standardPool.length)];
standard[23] = standardPool[Math.floor(Math.random() * standardPool.length)];

var mega = new Array(2);
mega[0] = megaPool[Math.floor(Math.random() * megaPool.length)];
mega[1] = megaPool[Math.floor(Math.random() * megaPool.length)];

var giga = gigaPool[Math.floor(Math.random() * gigaPool.length)];

var support = new Array (5);
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

//Support
for (n = 0; n < 5; n++) {
support[n] = supportPool[Math.floor(Math.random() * supportPool.length)];
}

document.getElementById("firstbw").innerHTML = "[big][big]~Standard Cards~[/big][/big]<br><br>" + standard[0] + "<br>" + standard[1] + "<br>" + standard[2] + "<br>" + standard[3] + "<br>" + standard[4] + "<br>" + standard[5] + "<br>" + standard[6] + "<br>" + standard[7] + "<br>" + standard[8] + "<br>" + standard[9] + "<br>" + standard[10] + "<br>" + standard[11] + "<br>" + standard[12] + "<br>" + standard[13] + "<br>" + standard[14] + "<br>" + standard[15] + "<br>" + standard[16] + "<br>" + standard[17] + "<br>" + standard[18] + "<br>" + standard[19] + "<br>" + standard[20] + "<br>" + standard[21] + "<br>" + standard[22] + "<br>" + standard[23];
document.getElementById("secondbw").innerHTML = "";
document.getElementById("thirdbw").innerHTML = "";

document.getElementById("supportcards").innerHTML = "[big][big]~Support Cards~[/big][/big]<br></br>" + support[0] + "<br>" + support[1] + "<br>" + support[2] + "<br>" + support[3] + "<br>" + support[4] + "<br>";

document.getElementById("megagiga").innerHTML = "[big][big]~Rare Cards~[/big][/big]<br></br>[color=#5a70b3]" + mega[0] + "<br>" + mega[1] + "[/color]<br>[color=#ee4a2d]" + giga + "[/color]";

delete standard;
delete mega;
delete support;

}