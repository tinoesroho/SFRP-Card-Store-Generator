function SatellaArmory() {
    var i;
    var j;
    var k;
    var l;
    var m;
    var n;

var standardPool = ["Heat Ball: 1,800z",
"Ice Meteor: 3,500z",
"Fire Ring: 4,200z",
"Time Bomb: 3,500z",
"Fire Bazooka: 4,500z",
"Tail Burner: 3,500z",
"Wide Wave: 3,400z",
"Chain Bubble: 5,000z",
"Stiky Rain: 3,500z",
"Cloud Shot: 4,100z",
"Thunder Shot: 4,500z",
"Voltic Eye: 4,000z",
"Flicker Kick: 4,600z",
"Jumbo Hammer: 4,500z",
"Mop Lance: 3,300z",
"Fokx-Fu: 4,900z",
"Vulcan Seed: 4,000z",
"Magic Crystal: 2,700z",
"Jet Ski: 3,200z",
"Heat Upper: 3,800z",
"Kilo Bomb: 3,500z",
"Sno Ball: 2,800z",
"Piranha Kiss: 3,000z",
"Fire Dance: 2,500z",
"Mummy Hand: 3,900z",
"Needle Attack: 2,800z",
"Atom Mine: 3,500z",
"Mech Flame: 3,900z",
"Mad Fire: 2,000",
"Shark Attack: 3,500z",
"Ice Spin: 3,600z",
"Bubble Hook: 5,500z",
"Thunder Head: 3,500z",
"Flash Strike: 4,800z",
"Arach Attack: 4,200z",
"Shuriken: 2,000z",
"Pollen Shot: 4,000z",
"Acorn Bomb: 2,900z",
"Mal Wizard: 4,800z",
"Air Spread: 4,300z",
"Ground Wave: 2,800z",
"Brave Sword: 4,200z",
"Big Ax: 3,500z",
"Beserk Sword: 2,600z",
"Mad Vulcan: 3,600z",
"Boo Hat: 1,800z",
"Stealth Laser: 4,500z",
"Squall: 4,000z",
"Bushido: 2,200z",
"Windy Attack: 4,100z",
"Buzz Saw: 1,800z",
"Beast Slap: 2,600z",
"Noise Wizard: 2,600z",
"Jet Attack: 4,000z",
"Junk Cube: 3,000z",
"Moai Fall: 5,200z",
"Buki: 5,200z",
"Drill Arm: 4,000z",
"Big Drop: 3,800z",
"Ghost Pulse: 2,500z",
"Black Hole: 3,700z",
"Scythe: 3,200z",
"Skull Arrow: 2,700z",
"Mu Tech: 3,600z",
"Gatling: 2,500z",
"Power Bomb: 1,500z",
"Mini Grenade: 900z",
"Puff Blast: 1,800z",
"Smile Coin: 3,300z",
"Pearl Burst",
"Evil  Claw",
"Wind Cutter",
"Ninjato Raid",
"Sun Flower",
"Night Wing",
"Crazy Chain",
"Silent Knight",
"White Lightning",
"Black  Magic",
"Ashes",
"Water Strider",
"Morning Star",
"Wing Boots",
"Ice Sickle",
"DisCord",
"Double-Shot Gun",
"Space Laser",
"Russain Roulette",
"Madness Spread",
"Hunter&#39;s Rifle",
"Mini-Me",
"Tornado",
"Reflector Beam",
"Stun Knuckle: 7,000z",
"Freeze Knuckle: 7,500z",
"Poison Knuckle: 6,500z",
"Blazing Edge: 6,500z",
"Tidal Edge: 6,500z",
"Arbo Edge: 6,500z",
"Striker Edge: 8,500z",
"Break Sabre: 9,000z",
"Tornado Dance: 7,600z",
"Jamming Punch: 6,100z",
"Green Ink: 4,200z",
"Blue Ink: 4,200z",
"Black Ink: 4,500z",
"Purple Ink: 4,200z",
"Guardian: 6,000z",
"White Meteor: 3,700z",
"Jamming Machine Gun: 5,100z",
"Heat Grenade: 2,000z",
"Ice Grenade: 2,500z",
"Green Carpet: 2,500z",
"Blue Carpet: 3,100z",
"Purple Carpet: 4,200z",
"Great Axe: 6,000z",
"Fire Axe: 6,000z",
"Sword: 2,500z",
"Wide Sword: 3,000z",
"Long Sword: 3,500z",
"Bombalizer: 3,500z",
"Cannon: 2,000z"];

var supportPool = ["Power Song: 8,000z",
"Quake Song: 6,000z",
"Trip Song: 7,000z",
"Anti Sword: 4,500z",
"Recover 50: 1,700z",
"Barrier: 1,500z",
"Aura: 8,500z",
"Invisible: 8,000z",
"Grass Stage: 3,000z",
"Ice Stage: 3,000z",
"Gravity Stage: 4,500z",
"GNull Stage: 4,000z",
"Holy Stage: 5,000z",
"Swamp Stage: 5,000z",
"Paralyze Plus: 2,000z",
"Attack +10: 1,000z",
"Guard: 3,000z",
"Reflector: 5,000z",
"Double Stone: 5,000z",
"Paralyze Stage: 5,000z",
"Area Eater: 2,500z",
"Spirit Fury: 5,000z",
"Poison Apple: 4,000z",
"Double Cross: 7,000z",
"Giga Mine: 9,000z",
"Divide Line: 2,000z",
"Double Eater: 5,000z",
"Panel Format: 3,000z",
"Panic Cloud: 5,000z",
"Mega Crusher: 3,000z",
"Gravity Plus: 1,500z",
"Freeze Plus: 2,500z",
"Bubble Plus: 2,500z",
"Blind Plus: 1,000z",
"Poison Plus: 2,000z",
"Confuse Plus: 1,000z",
"Whistle: 6,000z",
"Chaos Card: 3,000z"];

var megaPool = ["Taurus Fire: 13,000z",
"Cygnus Wing: 13,000z",
"Harp Note: 15,000z",
"Libra Scales: 14,000z",
"Queen Ophiuca: 12,000z",
"Gemini Spark: 16,000z",
"Cancer Bubble: 14,000z",
"Wolf Woods: 14,000z",
"Crown Thunder: 13,000z",
"Dark Phantom: 13,000z",
"Yeti Blizzard: 11,000z",
"Terra Condor: 14,000z",
"Plesio Surf: 14,000z",
"Hollow: 14,000z",
"Rogue: 16,000z",
"Kung-Fu Kid: 12,000z",
"General Auriga: 16,000z",
"Apollo Flame: 17,000z",
"Spade Magnes: 13,000z",
"Diamond Ice: 14,000z",
"Club Strong: 15,000z",
"Acid Ace: 15,000z",
"Dread Joker: 15,000z",
"Jack Corvus: 14,000z",
"Queen Virgo: 14,000z",
"Moon Destroyer: 15,000z",
"Sirius: 18,000z"];

var gigaPool = ["Ox Tackle: 40,000z",
"Gorgon Eye: 40,000z",
"Gemini Thunder: 42,000z",
"Nadare Daiko: 42,000z",
"Gekiryuu Wave: 42,000z",
"Flying Impact: 40,000z",
"Burai Break: 44,000z",
"Empty Magic: 40,000z",
"Wing Blade: 42,000z",
"G Meteor Laser: 44,000z",
"Light of Saint: 38,000z",
"Pain Hell Flame: 38,000z",
"Andromeda: 50,000z",
"Ra Mu: 50,000z",
"Meteor of Crimson: 50,000z",
"Dark Sword: 37,000z",
"Thousand Kick: 40,000z",
"Destroy Missile: 45,000z",
"Darkness Hole: 35,000z",
"Break Count Bomb: 45,000z",
"Dopple Mirror: 35,000z",
"Poison Pharaoh: 42,000z",
"Mu Rejection: 35,000z",
"Buster Max: 40,000z",
"Attack +50: 37,000z",
"Dark Aura: 35,000z"];


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

document.getElementById("firstgsp").innerHTML = "[big][big]~Standard Cards~[/big][/big]<br><br>" + standard[0] + "<br>" + standard[1] + "<br>" + standard[2] + "<br>" + standard[3] + "<br>" + standard[4] + "<br>" + standard[5] + "<br>" + standard[6] + "<br>" + standard[7] + "<br>" + standard[8] + "<br>" + standard[9] + "<br>" + standard[10] + "<br>" + standard[11] + "<br>" + standard[12] + "<br>" + standard[13] + "<br>" + standard[14] + "<br>" + standard[15] + "<br>" + standard[16] + "<br>" + standard[17] + "<br>" + standard[18] + "<br>" + standard[19] + "<br>" + standard[20] + "<br>" + standard[21] + "<br>" + standard[22] + "<br>" + standard[23];
document.getElementById("secondgsp").innerHTML = "";
document.getElementById("thirdgsp").innerHTML = "[big][big]~Rare Cards~[/big][/big]<br></br>[color=#5a70b3]" + mega[0] + "<br>" + "[/color]<br>[color=#ee4a2d]" + giga + "[/color]";

    delete standard;
    delete support;
    delete mega;
}