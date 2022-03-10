// Javascript

// Special Text Animation
let specialtext = ["FACTORY DAY." , "THE WEB GAME", "OMOK", "EGG POWER"];
let ksts_number = 0;
function changeSpecialText(){
  let defaultSpecialText = document.getElementById("special-text");
  let curTX = specialtext.indexOf(defaultSpecialText.innerHTML);
  // indexof -> 문자찾기 // 있으면 index를, 없으면 -1을 반환 // EX.js(197)참조
  defaultSpecialText.innerHTML = specialtext[(curTX+1)%specialtext.length];

  // Stopping STA
//   let ksts_time = ksts_number++;
//   if(ksts_time > 30){
//       clearInterval(CST);
//   };
};
const CST = setInterval(changeSpecialText ,7000);



// Home
let homeContent = document.createElement("div");
homeContent.className = "home-content";

let mainbox_1a = document.createElement("div");
mainbox_1a.className = "mainbox";
let mainbox_1b = document.createElement("div");
mainbox_1b.className = "mainbox";
let mainbox_1c = document.createElement("div");
mainbox_1c.className = "mainbox-v2";
let mainbox_1d = document.createElement("div");
mainbox_1d.className = "mainbox-v1";

let mainboxscpb_1a = document.createElement("img");
mainboxscpb_1a.className = "mainbox-scpb";
mainboxscpb_1a.src = "../Design/scpb/box1.1-scpb.png";
let mainboxscpb_1b = document.createElement("img");
mainboxscpb_1b.className = "mainbox-scpb";
mainboxscpb_1b.src = "../Design/scpb/box1.2-scpb.png";
let mainboxscpb_1c = document.createElement("img");
mainboxscpb_1c.className = "mainboxv2-scpb";
mainboxscpb_1c.src = "../Design/scpb/box1.1.2-scpb.png";
let mainboxscpb_1d = document.createElement("img");
mainboxscpb_1d.className = "mainboxv1-scpb";
mainboxscpb_1d.src = "../Design/scpb/box1.1.1-scpb.png";

let mainboxicon_1c = document.createElement("img");
mainboxicon_1c.className = "accountbox-icon";
mainboxicon_1c.src = "../Design/icons/account-icon.png";

let mainboxtext_1a = document.createElement("p");
mainboxtext_1a.className = "mainbox-text";
mainboxtext_1a.innerHTML = "PLAY";
let mainboxtext_1b = document.createElement("p");
mainboxtext_1b.className = "mainbox-text";
mainboxtext_1b.innerHTML = "HOW TO PLAY";
let mainboxtext_1d = document.createElement("p");
mainboxtext_1d.className = "mainbox-text";
mainboxtext_1d.innerHTML = "CREDIT";

mainbox_1a.appendChild(mainboxscpb_1a);
mainbox_1b.appendChild(mainboxscpb_1b);
mainbox_1c.appendChild(mainboxscpb_1c);
mainbox_1c.appendChild(mainboxicon_1c);
mainbox_1d.appendChild(mainboxscpb_1d);

mainbox_1a.appendChild(mainboxtext_1a);
mainbox_1b.appendChild(mainboxtext_1b);
mainbox_1d.appendChild(mainboxtext_1d);

let fragment1 = document.createDocumentFragment();
fragment1.appendChild(mainbox_1a);
fragment1.appendChild(mainbox_1b);
fragment1.appendChild(mainbox_1c);
fragment1.appendChild(mainbox_1d);
homeContent.appendChild(fragment1);

function CreateHomeContent(){
    document.getElementsByClassName("wrapper")[0].appendChild(homeContent);
};



// Play
let playContent = document.createElement("div");
playContent.className = "play-content";

let mainbox_2a = document.createElement("div");
mainbox_2a.className = "mainbox";
let mainbox_2b = document.createElement("div");
mainbox_2b.className = "mainbox";
let mainbox_2c = document.createElement("div");
mainbox_2c.className = "mainbox";

let mainboxscpb_2a = document.createElement("img");
mainboxscpb_2a.className = "mainbox-scpb";
mainboxscpb_2a.src = "../Design/scpb/box1.3-scpb.png";
let mainboxscpb_2b = document.createElement("img");
mainboxscpb_2b.className = "mainbox-scpb";
mainboxscpb_2b.src = "../Design/scpb/box1.4-scpb.png";
let mainboxscpb_2c = document.createElement("img");
mainboxscpb_2c.className = "mainbox-scpb";
mainboxscpb_2c.src = "../Design/scpb/box1.4-scpb.png";

let mainboxtext_2a = document.createElement("p");
mainboxtext_2a.className = "mainbox-text";
mainboxtext_2a.innerHTML = "OFFLINE PLAY"
let mainboxtext_2b = document.createElement("p");
mainboxtext_2b.className = "mainbox-text-x";
mainboxtext_2b.innerHTML = "ONLINE PLAY"
let mainboxtext_2c = document.createElement("p");
mainboxtext_2c.className = "mainbox-text-x";
mainboxtext_2c.innerHTML = "WITH COMPUTER"

mainbox_2a.appendChild(mainboxscpb_2a);
mainbox_2b.appendChild(mainboxscpb_2b);
mainbox_2c.appendChild(mainboxscpb_2c);

mainbox_2a.appendChild(mainboxtext_2a);
mainbox_2b.appendChild(mainboxtext_2b);
mainbox_2c.appendChild(mainboxtext_2c);

let fragment2 = document.createDocumentFragment();
fragment2.appendChild(mainbox_2a);
fragment2.appendChild(mainbox_2b);
fragment2.appendChild(mainbox_2c);
playContent.appendChild(fragment2);

function CreatePlayfromHome(){
    document.getElementsByClassName("wrapper")[0].appendChild(playContent);
};



// Game-Mode(off)
let gameoffContent = document.createElement("div");
gameoffContent.className = "gameoff-content";

let mainbox_3a = document.createElement("div");
mainbox_3a.className = "mainbox";
let mainbox_3b = document.createElement("div");
mainbox_3b.className = "mainbox";
let mainbox_3c = document.createElement("div");
mainbox_3c.className = "mainbox";

let mainboxscpb_3a = document.createElement("img");
mainboxscpb_3a.className = "mainbox-scpb";
mainboxscpb_3a.src = "../Design/scpb/box1.1-scpb.png";
let mainboxscpb_3b = document.createElement("img");
mainboxscpb_3b.className = "mainbox-scpb";
mainboxscpb_3b.src = "../Design/scpb/box1.4-scpb.png";
let mainboxscpb_3c = document.createElement("img");
mainboxscpb_3c.className = "mainbox-scpb";
mainboxscpb_3c.src = "../Design/scpb/box1.4-scpb.png";

let mainboxtext_3a = document.createElement("p");
mainboxtext_3a.className = "mainbox-text";
let mainboxtext_3b = document.createElement("p");
mainboxtext_3b.className = "mainbox-text-x";
let mainboxtext_3c = document.createElement("p");
mainboxtext_3c.className = "mainbox-text-x";
let mainboxrealtext_3a = document.createTextNode("4X4(4eggs, one line)");
let mainboxrealtext_3b = document.createTextNode("15X15(5eggs, one line)");
let mainboxrealtext_3c = document.createTextNode("15X15(6eggs, one line)");
mainboxtext_3a.appendChild(mainboxrealtext_3a);
mainboxtext_3b.appendChild(mainboxrealtext_3b);
mainboxtext_3c.appendChild(mainboxrealtext_3c);

mainbox_3a.appendChild(mainboxscpb_3a);
mainbox_3b.appendChild(mainboxscpb_3b);
mainbox_3c.appendChild(mainboxscpb_3c);

mainbox_3a.appendChild(mainboxtext_3a);
mainbox_3b.appendChild(mainboxtext_3b);
mainbox_3c.appendChild(mainboxtext_3c);

let fragment3 = document.createDocumentFragment();
fragment3.appendChild(mainbox_3a);
fragment3.appendChild(mainbox_3b);
fragment3.appendChild(mainbox_3c);
gameoffContent.appendChild(fragment3);

function CreateGameofffromPlay(){
    document.getElementsByClassName("wrapper")[0].appendChild(gameoffContent);
};



// Back(Play to Home)
let PlaytoHome = document.createElement("div");
PlaytoHome.className = "serve-content";

let backbox1 = document.createElement("div");
backbox1.className = "backbox";

let backboxscpb1 = document.createElement("img");
backboxscpb1.id = "backbox-scpb";
backboxscpb1.src = "../Design/scpb/box2-scpb.png";

let backboxtext1 = document.createElement("p");
backboxtext1.id = "backbox-text";
let backboxrealtext1 = document.createTextNode("BACK");
backboxtext1.appendChild(backboxrealtext1);

let fragmentback1 = document.createDocumentFragment();
backbox1.appendChild(backboxscpb1);
backbox1.appendChild(backboxtext1);
fragmentback1.appendChild(backbox1);
PlaytoHome.appendChild(fragmentback1);

function CreateBackforHome(){
    document.getElementsByClassName("wrapper")[0].appendChild(PlaytoHome);
};



// Back(Game-Mode(off) to Play)
let gameofftoPlay = document.createElement("div");
gameofftoPlay.className = "serve-content";

let backbox2 = document.createElement("div");
backbox2.className = "backbox";

let backboxscpb2 = document.createElement("img");
backboxscpb2.id = "backbox-scpb";
backboxscpb2.src = "../Design/scpb/box2-scpb.png";

let backboxtext2 = document.createElement("p");
backboxtext2.id = "backbox-text";
let backboxrealtext2 = document.createTextNode("BACK");
backboxtext2.appendChild(backboxrealtext2);

let fragmentback2 = document.createDocumentFragment();
backbox2.appendChild(backboxscpb2);
backbox2.appendChild(backboxtext2);
fragmentback2.appendChild(backbox2);
gameofftoPlay.appendChild(fragmentback2);

function CreateBackforPlay(){
    document.getElementsByClassName("wrapper")[0].appendChild(gameofftoPlay);
};



// Home -> Play
document.getElementsByClassName("mainbox")[0].addEventListener("click", function(){
    let homecontent = document.getElementsByClassName("home-content")[0];
    homecontent.parentNode.removeChild(homecontent);
    CreatePlayfromHome();
    CreateBackforHome();
});

mainbox_1a.addEventListener("click", function(){
    homeContent.remove();
    CreatePlayfromHome();
    CreateBackforHome();
});

// Play -> Home // Back 삭제
backbox1.addEventListener("click", function(){
    playContent.remove();
    PlaytoHome.remove();
    CreateHomeContent();
});

// Play -> Game-Mode(off)
mainbox_2a.addEventListener("click", function(){
    playContent.remove();
    PlaytoHome.remove();
    CreateGameofffromPlay();
    CreateBackforPlay();
});

// Game-Mode(off) -> Play
backbox2.addEventListener("click", function(){
    gameoffContent.remove();
    gameofftoPlay.remove();
    CreatePlayfromHome();
    CreateBackforHome();
});



// ------------------------------------------------------------------------ //



// Game-Content(off)(4x4) - game content
let gameContent_off_4x4 = document.createElement("div");
gameContent_off_4x4.className = "game-content";

let playerbox_off_1a = document.createElement("div");
playerbox_off_1a.className = "player";
let playerbox_off_1b = document.createElement("div");
playerbox_off_1b.className = "player";

let playername_off_1a = document.createElement("div");
playername_off_1a.className = "player-name";
let playername_off_1b = document.createElement("div");
playername_off_1b.className = "player-name";

let playerscpb_off_1a = document.createElement("img");
playerscpb_off_1a.className = "player-scpb";
playerscpb_off_1a.src = "../Design/scpb/player-scpb.png";
let playerscpb_off_1b = document.createElement("img");
playerscpb_off_1b.className = "player-scpb";
playerscpb_off_1b.src = "../Design/scpb/player-scpb.png";

let playertext_off_1a = document.createElement("p");
playertext_off_1a.className = "player-text";
let playertext_off_1b = document.createElement("p");
playertext_off_1b.className = "player-text";
let playerrealtext_off_1a = document.createTextNode("Player1");
let playerrealtext_off_1b = document.createTextNode("Player2");
playertext_off_1a.appendChild(playerrealtext_off_1a);
playertext_off_1b.appendChild(playerrealtext_off_1b);

let playereggselect_off_1a = document.createElement("div");
playereggselect_off_1a.className = "player-egg-select";
let playereggselect_off_1b = document.createElement("div");
playereggselect_off_1b.className = "player-egg-select";

let eggselectscpb_off_1a = document.createElement("img");
eggselectscpb_off_1a.className = "eggselect-scpb";
eggselectscpb_off_1a.src = "../Design/scpb/egg-scpb.png";
let eggselectscpb_off_1b = document.createElement("img");
eggselectscpb_off_1b.className = "eggselect-scpb";
eggselectscpb_off_1b.src = "../Design/scpb/egg-scpb.png";

let eggbox_forselect_off_1a = document.createElement("div");
eggbox_forselect_off_1a.className = "eggbox-forselect";
let eggbox_forselect_off_1b = document.createElement("div");
eggbox_forselect_off_1b.className = "eggbox-forselect";

let purpleegg_forselect_off_1a = document.createElement("div");
purpleegg_forselect_off_1a.id = "purple-egg";
let redegg_forselect_off_1a = document.createElement("div");
redegg_forselect_off_1a.id = "red-egg";

playername_off_1a.appendChild(playerscpb_off_1a);
playername_off_1b.appendChild(playerscpb_off_1b);
playername_off_1a.appendChild(playertext_off_1a);
playername_off_1b.appendChild(playertext_off_1b)

playereggselect_off_1a.appendChild(eggselectscpb_off_1a);
playereggselect_off_1b.appendChild(eggselectscpb_off_1b);
eggbox_forselect_off_1a.appendChild(purpleegg_forselect_off_1a);
eggbox_forselect_off_1b.appendChild(redegg_forselect_off_1a);
playereggselect_off_1a.appendChild(eggbox_forselect_off_1a);
playereggselect_off_1b.appendChild(eggbox_forselect_off_1b);

playerbox_off_1a.appendChild(playername_off_1a);
playerbox_off_1a.appendChild(playereggselect_off_1a);
playerbox_off_1b.appendChild(playername_off_1b);
playerbox_off_1b.appendChild(playereggselect_off_1b);

let fragment_off_1 = document.createDocumentFragment();
fragment_off_1.appendChild(playerbox_off_1a);
fragment_off_1.appendChild(playerbox_off_1b);
gameContent_off_4x4.appendChild(fragment_off_1);

function CreateGameContent_off_4x4(){
    document.getElementsByClassName("wrapper")[0].appendChild(gameContent_off_4x4);
};



// Game-Content(off)(4x4) - game setting
let gameContent_off_4x4_setting = document.createElement("div");
gameContent_off_4x4_setting.className = "game-setting";

let gameSettingbox_off_1a = document.createElement("div");
gameSettingbox_off_1a.className = "gamesettingbox";
let gameSettingbox_off_1b = document.createElement("div");
gameSettingbox_off_1b.className = "gamesettingbox";

let playsettingboxscpb_off_1a = document.createElement("img");
playsettingboxscpb_off_1a.className = "playsettingbox-scpb";
playsettingboxscpb_off_1a.src = "../Design/scpb/box3.1-scpb.png";
let playsettingboxscpb_off_1b = document.createElement("img");
playsettingboxscpb_off_1b.className = "playsettingbox-scpb";
playsettingboxscpb_off_1b.src = "../Design/scpb/box3.1-scpb.png";

let playsettingboxtext_off_1a = document.createElement("p");
playsettingboxtext_off_1a.className = "playsettingbox-text";
let playsettingboxrealtext_off_1a = document.createTextNode("PLAY");
let playsettingboxtext_off_1b = document.createElement("p");
playsettingboxtext_off_1b.className = "playsettingbox-text";
let playsettingboxrealtext_off_1b = document.createTextNode("PLAY");
playsettingboxtext_off_1a.appendChild(playsettingboxrealtext_off_1a);
playsettingboxtext_off_1b.appendChild(playsettingboxrealtext_off_1b);

gameSettingbox_off_1a.appendChild(playsettingboxscpb_off_1a);
gameSettingbox_off_1a.appendChild(playsettingboxtext_off_1a);
gameSettingbox_off_1b.appendChild(playsettingboxscpb_off_1b);
gameSettingbox_off_1b.appendChild(playsettingboxtext_off_1b);

let fragment_gs_off_1 = document.createDocumentFragment();
fragment_gs_off_1.appendChild(gameSettingbox_off_1a);
fragment_gs_off_1.appendChild(gameSettingbox_off_1b);
gameContent_off_4x4_setting.appendChild(fragment_gs_off_1);

function CreateGameContent_off_4x4_Setting(){
    document.getElementsByClassName("wrapper")[0].appendChild(gameContent_off_4x4_setting);
};
gameSettingbox_off_1a.style.visibility = "hidden";




// Choose EGG(off)(4x4)
let chooseEggContainer_off_1a = document.createElement("div");
chooseEggContainer_off_1a.className = "chooseegg-container";

let chooseEggBox_off_1a = document.createElement("div");
chooseEggBox_off_1a.className = "chooseeggbox";

let chooseEggBoxtext_off_1a = document.createElement("h1");
chooseEggBoxtext_off_1a.className = "chooseeggbox-text";
chooseEggBoxtext_off_1a.innerHTML = "CHOOSE YOUR EGG"

let chooseEggBox_EggBox_off_1a = document.createElement("div");
chooseEggBox_EggBox_off_1a.className = "chooseeggbox-eggbox";

let purpleegg_forchoose_off_1a = document.createElement("div");
purpleegg_forchoose_off_1a.id = "purple-egg";
let redegg_forchoose_off_1a = document.createElement("div");
redegg_forchoose_off_1a.id = "red-egg";
let yellowegg_forchoose_off_1a = document.createElement("div");
yellowegg_forchoose_off_1a.id = "yellow-egg";
let mintegg_forchoose_off_1a = document.createElement("div");
mintegg_forchoose_off_1a.id = "mint-egg";
let blueegg_forchoose_off_1a = document.createElement("div");
blueegg_forchoose_off_1a.id = "blue-egg";
let pinkegg_forchoose_off_1a = document.createElement("div");
pinkegg_forchoose_off_1a.id = "pink-egg";

chooseEggBox_EggBox_off_1a.appendChild(purpleegg_forchoose_off_1a);
chooseEggBox_EggBox_off_1a.appendChild(redegg_forchoose_off_1a);
chooseEggBox_EggBox_off_1a.appendChild(yellowegg_forchoose_off_1a);
chooseEggBox_EggBox_off_1a.appendChild(mintegg_forchoose_off_1a);
chooseEggBox_EggBox_off_1a.appendChild(blueegg_forchoose_off_1a);
chooseEggBox_EggBox_off_1a.appendChild(pinkegg_forchoose_off_1a);

let purpleegg_forchoose_off_1b = document.createElement("div");
purpleegg_forchoose_off_1b.id = "purple-egg";
let redegg_forchoose_off_1b = document.createElement("div");
redegg_forchoose_off_1b.id = "red-egg";
let yellowegg_forchoose_off_1b = document.createElement("div");
yellowegg_forchoose_off_1b.id = "yellow-egg";
let mintegg_forchoose_off_1b = document.createElement("div");
mintegg_forchoose_off_1b.id = "mint-egg";
let blueegg_forchoose_off_1b = document.createElement("div");
blueegg_forchoose_off_1b.id = "blue-egg";
let pinkegg_forchoose_off_1b = document.createElement("div");
pinkegg_forchoose_off_1b.id = "pink-egg";

let chooseEggBoxCloseBox_off_1a = document.createElement("button");
chooseEggBoxCloseBox_off_1a.className = "chooseeggbox-close";
chooseEggBoxCloseBox_off_1a.innerHTML = "CLOSE";

chooseEggBox_off_1a.appendChild(chooseEggBoxtext_off_1a);
chooseEggBox_off_1a.appendChild(chooseEggBox_EggBox_off_1a);
chooseEggBox_off_1a.appendChild(chooseEggBoxCloseBox_off_1a);

let chooseEggBox_fragment_off_1a = document.createDocumentFragment();
chooseEggBox_fragment_off_1a.appendChild(chooseEggBox_off_1a);
chooseEggContainer_off_1a.appendChild(chooseEggBox_fragment_off_1a);

function CreateChooseEggBoxContainer_off_1a(){
    document.getElementsByClassName("wrapper")[0].appendChild(chooseEggContainer_off_1a);
};
// --- //
let chooseEggContainer_off_1b = document.createElement("div");
chooseEggContainer_off_1b.className = "chooseegg-container";

let chooseEggBox_off_1b = document.createElement("div");
chooseEggBox_off_1b.className = "chooseeggbox";

let chooseEggBoxtext_off_1b = document.createElement("h1");
chooseEggBoxtext_off_1b.className = "chooseeggbox-text";
chooseEggBoxtext_off_1b.innerHTML = "CHOOSE YOUR EGG"

let chooseEggBox_EggBox_off_1b = document.createElement("div");
chooseEggBox_EggBox_off_1b.className = "chooseeggbox-eggbox";

let purpleegg_forchoose_off_1c = document.createElement("div");
purpleegg_forchoose_off_1c.id = "purple-egg";
let redegg_forchoose_off_1c = document.createElement("div");
redegg_forchoose_off_1c.id = "red-egg";
let yellowegg_forchoose_off_1c = document.createElement("div");
yellowegg_forchoose_off_1c.id = "yellow-egg";
let mintegg_forchoose_off_1c = document.createElement("div");
mintegg_forchoose_off_1c.id = "mint-egg";
let blueegg_forchoose_off_1c = document.createElement("div");
blueegg_forchoose_off_1c.id = "blue-egg";
let pinkegg_forchoose_off_1c = document.createElement("div");
pinkegg_forchoose_off_1c.id = "pink-egg";

chooseEggBox_EggBox_off_1b.appendChild(purpleegg_forchoose_off_1c);
chooseEggBox_EggBox_off_1b.appendChild(redegg_forchoose_off_1c);
chooseEggBox_EggBox_off_1b.appendChild(yellowegg_forchoose_off_1c);
chooseEggBox_EggBox_off_1b.appendChild(mintegg_forchoose_off_1c);
chooseEggBox_EggBox_off_1b.appendChild(blueegg_forchoose_off_1c);
chooseEggBox_EggBox_off_1b.appendChild(pinkegg_forchoose_off_1c);

let purpleegg_forchoose_off_1d = document.createElement("div");
purpleegg_forchoose_off_1d.id = "purple-egg";
let redegg_forchoose_off_1d = document.createElement("div");
redegg_forchoose_off_1d.id = "red-egg";
let yellowegg_forchoose_off_1d = document.createElement("div");
yellowegg_forchoose_off_1d.id = "yellow-egg";
let mintegg_forchoose_off_1d = document.createElement("div");
mintegg_forchoose_off_1d.id = "mint-egg";
let blueegg_forchoose_off_1d = document.createElement("div");
blueegg_forchoose_off_1d.id = "blue-egg";
let pinkegg_forchoose_off_1d = document.createElement("div");
pinkegg_forchoose_off_1d.id = "pink-egg";

let chooseEggBoxCloseBox_off_1b = document.createElement("button");
chooseEggBoxCloseBox_off_1b.className = "chooseeggbox-close";
chooseEggBoxCloseBox_off_1b.innerHTML = "CLOSE";

chooseEggBox_off_1b.appendChild(chooseEggBoxtext_off_1b);
chooseEggBox_off_1b.appendChild(chooseEggBox_EggBox_off_1b);
chooseEggBox_off_1b.appendChild(chooseEggBoxCloseBox_off_1b);

let chooseEggBox_fragment_off_1b = document.createDocumentFragment();
chooseEggBox_fragment_off_1b.appendChild(chooseEggBox_off_1b);
chooseEggContainer_off_1b.appendChild(chooseEggBox_fragment_off_1b);

function CreateChooseEggBoxContainer_off_1b(){
    document.getElementsByClassName("wrapper")[0].appendChild(chooseEggContainer_off_1b);
};



// Back(Game-Content(off)(4x4) to Game-Mode(off))
let gameContent_off_4x4toplay = document.createElement("div");
gameContent_off_4x4toplay.className = "serve-content";

let backbox_off_1 = document.createElement("div");
backbox_off_1.className = "backbox";

let backboxscpb_off_1 = document.createElement("img");
backboxscpb_off_1.id = "backbox-scpb";
backboxscpb_off_1.src = "../Design/scpb/box2-scpb.png";

let backboxtext_off_1 = document.createElement("p");
backboxtext_off_1.id = "backbox-text";
let backboxrealtext_off_1 = document.createTextNode("BACK");
backboxtext_off_1.appendChild(backboxrealtext_off_1);

let fragmentback_off_1 = document.createDocumentFragment();
backbox_off_1.appendChild(backboxscpb_off_1);
backbox_off_1.appendChild(backboxtext_off_1);
fragmentback_off_1.appendChild(backbox_off_1);
gameContent_off_4x4toplay.appendChild(fragmentback_off_1);

function CreateBackforGameContent_off_1(){
    document.getElementsByClassName("wrapper")[0].appendChild(gameContent_off_4x4toplay);
};



// Game-Mode(off) -> Game-Content(off)(4x4)
mainbox_3a.addEventListener("click", function(){
    gameoffContent.remove();
    gameofftoPlay.remove();
    CreateGameContent_off_4x4();
    CreateGameContent_off_4x4_Setting();
    CreateBackforGameContent_off_1();
});

// Game-Content(off)(4x4) -> Game-Mode(off)
backbox_off_1.addEventListener("click", function(){
    gameContent_off_4x4.remove();
    gameContent_off_4x4_setting.remove();
    gameContent_off_4x4toplay.remove();
    CreateGameofffromPlay();
    CreateBackforPlay();
});

// Game-Content(off)(4x4) -> Choose EGG(off)(4x4)
eggbox_forselect_off_1a.addEventListener("click", function(){
    CreateChooseEggBoxContainer_off_1a();
    backbox_off_1.style.pointerEvents = "none";
})
eggbox_forselect_off_1b.addEventListener("click", function(){
    CreateChooseEggBoxContainer_off_1b();
    backbox_off_1.style.pointerEvents = "none";
})

// Change Choose EGG Function
let changeEggType_off_1a = [
    purpleegg_forchoose_off_1a,
    redegg_forchoose_off_1a, 
    yellowegg_forchoose_off_1a,
    mintegg_forchoose_off_1a,
    blueegg_forchoose_off_1a,
    pinkegg_forchoose_off_1a
];
let changeEggType_off_1b = [
    purpleegg_forchoose_off_1b,
    redegg_forchoose_off_1b, 
    yellowegg_forchoose_off_1b,
    mintegg_forchoose_off_1b,
    blueegg_forchoose_off_1b,
    pinkegg_forchoose_off_1b
];
changeEggType_off_1a.forEach((item, index) => item.addEventListener("click", function(){
    eggbox_forselect_off_1a.removeChild(eggbox_forselect_off_1a.firstChild);
    eggbox_forselect_off_1a.appendChild(changeEggType_off_1b[index]);
    // Limit -> Choosing same color of eggs
    if(String(eggbox_forselect_off_1a.firstChild.id).slice(0,4) == String(eggbox_forselect_off_1b.firstChild.id).slice(0,4)){
        if(changeEggType_off_1b[index+1]){
            eggbox_forselect_off_1a.removeChild(eggbox_forselect_off_1a.firstChild);
            eggbox_forselect_off_1a.appendChild(changeEggType_off_1b[index+1]);
            alert("Please choose different Egg.");
        }
        else{
            eggbox_forselect_off_1a.removeChild(eggbox_forselect_off_1a.firstChild);
            eggbox_forselect_off_1a.appendChild(changeEggType_off_1b[index-1]);
            alert("Please choose different Egg.");
        }
    } else{
        chooseEggContainer_off_1a.remove();
        backbox_off_1.style.pointerEvents = "all";
    }
}));
let changeEggType_off_1c = [
    purpleegg_forchoose_off_1c,
    redegg_forchoose_off_1c, 
    yellowegg_forchoose_off_1c,
    mintegg_forchoose_off_1c,
    blueegg_forchoose_off_1c,
    pinkegg_forchoose_off_1c
];
let changeEggType_off_1d = [
    purpleegg_forchoose_off_1d,
    redegg_forchoose_off_1d, 
    yellowegg_forchoose_off_1d,
    mintegg_forchoose_off_1d,
    blueegg_forchoose_off_1d,
    pinkegg_forchoose_off_1d
];
changeEggType_off_1c.forEach((item, index) => item.addEventListener("click", function(){
    eggbox_forselect_off_1b.removeChild(eggbox_forselect_off_1b.firstChild);
    eggbox_forselect_off_1b.appendChild(changeEggType_off_1d[index]);
    // Limit -> Choosing same color of eggs
    if(String(eggbox_forselect_off_1a.firstChild.id).slice(0,4) == String(eggbox_forselect_off_1b.firstChild.id).slice(0,4)){
        if(changeEggType_off_1d[index+1]){
            eggbox_forselect_off_1b.removeChild(eggbox_forselect_off_1b.firstChild);
            eggbox_forselect_off_1b.appendChild(changeEggType_off_1d[index+1]);
            alert("Please choose different Egg.");
        }
        else{
            eggbox_forselect_off_1b.removeChild(eggbox_forselect_off_1b.firstChild);
            eggbox_forselect_off_1b.appendChild(changeEggType_off_1d[index-1]);
            alert("Please choose different Egg.");
        }
    } else{
        chooseEggContainer_off_1b.remove();
        backbox_off_1.style.pointerEvents = "all";
    }
}));

// Remove Choose EGG(off)(4x4)
chooseEggBoxCloseBox_off_1a.addEventListener("click", function(){
    chooseEggContainer_off_1a.remove();
    backbox_off_1.style.pointerEvents = "all";
})
chooseEggBoxCloseBox_off_1b.addEventListener("click", function(){
    chooseEggContainer_off_1b.remove();
    backbox_off_1.style.pointerEvents = "all";
})



// -------------------------------------------------------------------------- //



// HOW TO PLAY
let howtoPlayContent = document.createElement("div");
howtoPlayContent.className = "howtoplay-content";

let howtoPlay_img1 = document.createElement("img");
howtoPlay_img1.id = "howtoplay-img1";
howtoPlay_img1.src = "../Design/howtoplay1.png";
let howtoPlay_img2 = document.createElement("img");
howtoPlay_img2.id = "howtoplay-img2";
howtoPlay_img2.src = "../Design/howtoplay2.png";

let howtoPlay_text1 = document.createElement("p");
howtoPlay_text1.id = "howtoplay-text1";
howtoPlay_text1.innerHTML = `Fill all eggs in one line.<br>Then you win!`;
let howtoPlay_text2 = document.createElement("p");
howtoPlay_text2.id = "howtoplay-text2";
howtoPlay_text2.innerHTML = `You can’t put the egg on the green egg.`;
let howtoPlay_text3 = document.createElement("p");
howtoPlay_text3.id = "howtoplay-text3";
howtoPlay_text3.innerHTML = `When you put the egg, the number on green egg will be decreased.`;
let howtoPlay_text4 = document.createElement("p");
howtoPlay_text4.id = "howtoplay-text3";
howtoPlay_text4.innerHTML = `When the number becomes 0, the green egg will be removed.`;

let howtoPlay_fragment = document.createDocumentFragment();
howtoPlay_fragment.appendChild(howtoPlay_img1);
howtoPlay_fragment.appendChild(howtoPlay_text1);
howtoPlay_fragment.appendChild(howtoPlay_img2);
howtoPlay_fragment.appendChild(howtoPlay_text2);
howtoPlay_fragment.appendChild(howtoPlay_text3);
howtoPlay_fragment.appendChild(howtoPlay_text4);

howtoPlayContent.appendChild(howtoPlay_fragment);

function CreateHowtoPlayContent(){
    document.getElementsByClassName("wrapper")[0].appendChild(howtoPlayContent);
};



// Back(HOW TO PLAY -> Home)(howtoplaytohome)
let howtoPlaytoHome = document.createElement("div");
howtoPlaytoHome.className = "howtoplaytohome";

let howtoPlayBox = document.createElement("div");
howtoPlayBox.className = "howtoplaybox";

let howtoPlayBox_scpb1 = document.createElement("img");
howtoPlayBox_scpb1.id = "howtoplaybox-scpb";
howtoPlayBox_scpb1.src = "../Design/scpb/box1.1-scpb.png";

let howtoPlayBox_text1 = document.createElement("p");
howtoPlayBox_text1.id = "howtoplaybox-text";
howtoPlayBox_text1.innerHTML = "ENJOY!"

howtoPlayBox.appendChild(howtoPlayBox_scpb1);
howtoPlayBox.appendChild(howtoPlayBox_text1);

let howtoPlaytoHome_fragment = document.createDocumentFragment();
howtoPlaytoHome_fragment.appendChild(howtoPlayBox);
howtoPlaytoHome.appendChild(howtoPlaytoHome_fragment);

function CreateBackforHowtoPlaytoHome(){
    document.getElementsByClassName("wrapper")[0].appendChild(howtoPlaytoHome);
};



// Home -> HOW TO PLAY
document.getElementsByClassName("mainbox")[1].addEventListener("click", function(){
    let homecontent = document.getElementsByClassName("home-content")[0];
    homecontent.parentNode.removeChild(homecontent);
    CreateHowtoPlayContent();
    CreateBackforHowtoPlaytoHome();
});

mainbox_1b.addEventListener("click", function(){
    homeContent.remove();
    CreateHowtoPlayContent();
    CreateBackforHowtoPlaytoHome();
});

// HOW TO PLAY -> Home

howtoPlayBox.addEventListener("click", function(){
    howtoPlayContent.remove();
    howtoPlaytoHome.remove();
    CreateHomeContent();
});



// CREDIT (credit-intro-content & credit-notice-content)
let creditIntroContent = document.createElement("div");
creditIntroContent.className = "credit-intro-content";

let creditIntroContent_img1 = document.createElement("img");
creditIntroContent_img1.id = "credit-intro-img";
creditIntroContent_img1.src = "../Design/forcredit1.png";

let creditIntroContent_fragment = document.createDocumentFragment();
creditIntroContent_fragment.appendChild(creditIntroContent_img1);
creditIntroContent.appendChild(creditIntroContent_fragment);

// --- //

let creditNoticeContent = document.createElement("div");
creditNoticeContent.className = "credit-notice-content";

let creditNotice_text = document.createElement("h1");
creditNotice_text.id = "credit-notice-text";
creditNotice_text.innerHTML = "-NOTICE-"

let noticeContent = document.createElement("div");
noticeContent.className = "notice-content";
// Notice 1 //
let creditNoticeBox_1a = document.createElement("div");
creditNoticeBox_1a.className = "noticebox";

let creditNoticeBoxscpb_1a = document.createElement("img");
creditNoticeBoxscpb_1a.className = "noticebox-scpb";
creditNoticeBoxscpb_1a.src = "../Design/scpb/box1.5-scpb.png"

let creditNoticeBoxtext_1a = document.createElement("h1");
creditNoticeBoxtext_1a.className = "noticebox-text";
creditNoticeBoxtext_1a.innerHTML = "2022.03.02 - Game Released"

creditNoticeBox_1a.appendChild(creditNoticeBoxscpb_1a);
creditNoticeBox_1a.appendChild(creditNoticeBoxtext_1a);
// Notice 2 //
let creditNoticeBox_1b = document.createElement("div");
creditNoticeBox_1b.className = "noticebox";

let creditNoticeBoxscpb_1b = document.createElement("img");
creditNoticeBoxscpb_1b.className = "noticebox-scpb";
creditNoticeBoxscpb_1b.src = "../Design/scpb/box1.5-scpb.png"

let creditNoticeBoxtext_1b = document.createElement("h1");
creditNoticeBoxtext_1b.className = "noticebox-text";
creditNoticeBoxtext_1b.innerHTML = "20??.??.?? - ???"

creditNoticeBox_1b.appendChild(creditNoticeBoxscpb_1b);
creditNoticeBox_1b.appendChild(creditNoticeBoxtext_1b);
noticeContent.appendChild(creditNoticeBox_1a);
noticeContent.appendChild(creditNoticeBox_1b);

let creditNoticeContent_fragment = document.createDocumentFragment();
creditNoticeContent_fragment.appendChild(creditNotice_text);
creditNoticeContent_fragment.appendChild(noticeContent);
creditNoticeContent.appendChild(creditNoticeContent_fragment);

function CreateCreditIntroContent(){
    document.getElementsByClassName("wrapper")[0].appendChild(creditIntroContent);
};

function CreateCreditNoticeContent(){
    document.getElementsByClassName("wrapper")[0].appendChild(creditNoticeContent);
};



// Back(CREDIT -> Home)(credittohome)
let credittoHome = document.createElement("div");
credittoHome.className = "credittohome";

let credittoHomeBox = document.createElement("div");
credittoHomeBox.className = "credittohomebox";

let credittoHomebox_scpb1 = document.createElement("img");
credittoHomebox_scpb1.id = "credittohomebox-scpb";
credittoHomebox_scpb1.src = "../Design/scpb/box1.1-scpb.png";

let credittoHomebox_text1 = document.createElement("p");
credittoHomebox_text1.id = "credittohomebox-text";
credittoHomebox_text1.innerHTML = "THANKS!"

credittoHomeBox.appendChild(credittoHomebox_scpb1);
credittoHomeBox.appendChild(credittoHomebox_text1);

let credittoHome_fragment = document.createDocumentFragment();
credittoHome_fragment.appendChild(credittoHomeBox);
credittoHome.appendChild(credittoHome_fragment);

function CreateBackforCredittoHome(){
    document.getElementsByClassName("wrapper")[0].appendChild(credittoHome);
};



// Real Notice
let realNoticeBoxContainer_1a = document.createElement("div");
realNoticeBoxContainer_1a.className = "realnoticebox-container";

let realNoticeBox_1a = document.createElement("div");
realNoticeBox_1a.className = "realnoticebox";

let realNoticeBoxtext_1a = document.createElement("h1");
realNoticeBoxtext_1a.className = "realnoticebox-text";
realNoticeBoxtext_1a.innerHTML = "2022.03.02 - Game Released"

let realnoticeboxinfo_1a = document.createElement("p");
realnoticeboxinfo_1a.className = "realnoticebox-info";
realnoticeboxinfo_1a.innerHTML = "Finally, MAKE.A.LINE is released!!<br>Enjoy the Game.";

let realNoticeBoxCloseBox_1a = document.createElement("button");
realNoticeBoxCloseBox_1a.className = "realnoticebox-close";
realNoticeBoxCloseBox_1a.innerHTML = "CLOSE";

realNoticeBox_1a.appendChild(realNoticeBoxtext_1a);
realNoticeBox_1a.appendChild(realnoticeboxinfo_1a);
realNoticeBox_1a.appendChild(realNoticeBoxCloseBox_1a);
let realNoticeBox_fragment_1a = document.createDocumentFragment();
realNoticeBox_fragment_1a.appendChild(realNoticeBox_1a);
realNoticeBoxContainer_1a.appendChild(realNoticeBox_fragment_1a);

function CreateRealNoticeBoxContainer_1a(){
    document.getElementsByClassName("wrapper")[0].appendChild(realNoticeBoxContainer_1a);
};



// Home -> CREDIT
document.getElementsByClassName("mainbox-v1")[0].addEventListener("click", function(){
    let homecontent = document.getElementsByClassName("home-content")[0];
    homecontent.parentNode.removeChild(homecontent);
    CreateCreditIntroContent();
    CreateCreditNoticeContent();
    CreateBackforCredittoHome();
});

mainbox_1d.addEventListener("click", function(){
    homeContent.remove();
    CreateCreditIntroContent();
    CreateCreditNoticeContent();
    CreateBackforCredittoHome();
});

// CREDIT -> Home
credittoHomeBox.addEventListener("click", function(){
    creditIntroContent.remove();
    creditNoticeContent.remove();
    credittoHome.remove();
    CreateHomeContent();
});

// Real Notice 1a
creditNoticeBox_1a.addEventListener("click", function(){
    CreateRealNoticeBoxContainer_1a();
    creditNoticeBox_1a.style.pointerEvents = "none";
    creditNoticeBox_1b.style.pointerEvents = "none";
    credittoHomeBox.style.pointerEvents = "none";
});
realNoticeBoxCloseBox_1a.addEventListener("click", function(){
    realNoticeBoxContainer_1a.remove();
    creditNoticeBox_1a.style.pointerEvents = "all";
    creditNoticeBox_1b.style.pointerEvents = "all";
    credittoHomeBox.style.pointerEvents = "all";
});