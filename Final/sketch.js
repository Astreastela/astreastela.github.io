//Settings you can change
let usePlaceHolderPhrases = false;
let canContinue = false;

//Don't touch
//This library will be used: https://www.npmjs.com/package/p5.createloop
//This library will be used too: https://github.com/loneboarder/p5.experience.js
let nativeCanvasSize;
let dialogueBottomSize = 230;
let storyBorderSize = 3;
//misc
let normalFontSize = 22;
let fontStyleConfig;
let linesUsing = 4;
//dont touch
let textScaleFactor1 = 1;
//pages and scenes
let curPage = 12;
let storyEndPointPage = 23;
let maxPage = 11
let curScene = 1;
//objs for the project
let cupidDoorPosX;
let cupidDoorPosY;
let witchDoorPosX;
let witchDoorPosY;
let firePlaceLogsPosX;
let firePlaceLogsPosY;
let fireIsActive = true;
//media sounds
let pageClick;
//media images
let megaFlowerVase;
let randHeartPositions;
let numHearts = 32;
let hintTries = 0;

//Workshop door//
let workshopDoorOpen = false;
let canTouchDoor = false;
let showCupids = true;
//Light switch//
let lightSwitchIsOn = true;
let realLightSwitch = false;
let lightSwitchRealPosX = 400;
let lightSwitchRealPosY = 120;
let lightSwitchFakePosX = 400;
let lightSwitchFakePosY = 110;
let lightSwitchMarker = false;
let lightSwitchDummyHint = false;
//cupid card thing Arduino
let canStartPressing = false;
let amountSealedBoxDisplay = 0;
let amountSealedMaxPercentage = 100;
let amountSealedCurPercentage = 0;
let cardBoxCloseOffset;
let applyingPressure = false;
let valentinesBoxCardArdunoChng = 0;
let cardBoxSealed = false;
//Arduino variables
let hasArduino = true;
let serial;
let latestData = "waiting for data";
let maximumFireStrength = 1000;
//Fire place//
let curFireStrength = maximumFireStrength;
let curFireStrengthBarSizePercentage = maximumFireStrength;
let fireStrengthMaximumBarSize = 470;
//Lights off workshop//
let hintButtonWorkshopClicked = false;
//misc//
let houseStripes = 0;
//////////////
let inMessage = [0,0];


/*
Random hearts generation
for (let i; i < numHearts; i++){
  
}
*/

function preload(){
  //sound
  pageClick = loadSound('./sound/general-UI-click.ogg');
  doorOpen = loadSound('./sound/door-open.ogg');
  doorCloseSFX = loadSound('./sound/door-close.ogg');
  doorKnock = loadSound('./sound/door-knock.mp3');
  fireStart = loadSound('./sound/match-start.ogg');
  magicalTranform = loadSound('sound/magic-transform.ogg');
  firePlaceBurning = loadSound('./sound/fire-place-burning.ogg');
  lightSwitchSnap = loadSound('./sound/light-switch-snap.ogg');
  cartoonKidLaugh = loadSound('./sound/silly-cartoon-kid-laugh.ogg');
  cartoonKidLaugh.setVolume(0.125);
  waterPour = loadSound('./sound/water-pour.ogg');
  waterPour.setVolume(0.25);
  alarmClose = loadSound('./sound/alarm-close.ogg');
  alarmClose.setVolume(0.125);
  boxClose = loadSound('./sound/box-close.ogg');
  //music//
  
  //images
  flowerCard = loadImage('./images/heart-shaped-flowers.png');
  megaFlowerVase = loadImage('./images/vase-with-big-flowers.png');
  bowEffectItem = loadImage('./images/bow-effect-card.png');
  woodenFloor = loadImage('./images/wooden-floor.png');
  flowerVaseCard = loadImage('./images/flower-vase-card.png');
  cloudEffectTransformation = loadImage('./images/cloud-effect-transformation.png');
  cutieHearts = loadImage('./images/cutie-hearts.png');
  cupidWorkshopWallPaper = loadImage('./images/cupid-workshop-wallpaper.png');
  cupidWorkshopDoor = loadImage('./images/Cupid-Door-ONLY.png');
  cupidWorkshopDoorBorder = loadImage('./images/cupid-house-door-border.png');
  nightTintIndoor = loadImage('./images/night-tint-indoor.png');
  dummyHint = loadImage('./images/dummy-hint.png');
  cupidWorkshopTitle = loadImage('./images/Cupid-Workshop-Title.png');
  cupidFrontWindow = loadImage('./images/cupid-front-window.png');
  tableWoodDetail = loadImage('./images/tableWoodDetail.png');
  cupidBoxCover = loadImage('./images/cupidCardBoxCover.png');
  cupudBoxBase = loadImage('./images/cardBoxBase.png');
  cupidHand = loadImage('./images/cupidHandAndArms.png');

  //The fire place
  firePlaceLogs = loadImage('./images/fire-place-logs-processed.png');
  firePlaceNoFire = loadImage('./images/fire-place-no-fire.png');
  ///Multiple Fire Strength images
  fire100 = loadImage('./images/Fire-100.png');
  fire75 = loadImage('./images/Fire-75.png');
  fire50 = loadImage('./images/Fire-50.png');
  fire25 = loadImage('./images/Fire-25.png');
  //Light switches//
  lightSwitchOnAlt = loadImage('./images/lightSwitchALT_on.png');
  lightSwitchOffAlt = loadImage('./images/lightSwitchALT_off.png');
  lightSwitchRealOn = loadImage('./images/light-switch-real-on.png');
  lightSwitchRealOff = loadImage('./images/light-switch-real-off.png');
  lightsOffFade = loadImage('./images/lights-off-fade-2.png');  
  lightSwitchMarkerOBJ = loadImage('./images/click-light-switch-Area.png');
  ////////////////////////////////
  firePlaceBack = loadImage('./images/fire-place-wall-back.png');
  //images of people

  cupidJack = loadImage('./characters-images/Cupid-Jack.png');
  cupidSammy = loadImage('./characters-images/Cupid-Sammy.png');
  /*
  cupidJackCard = loadImage('./characters-images/cupid-jack-card.png');
  cupidSammyCard = loadImage('./characters-images/Cupid-Sammy-Card.png');
  meanWitchCard1 = loadImage('./characters-images/mean-witch-card-1.png');
  meanWitchCard2 = loadImage('./characters-images/mean-witch-card-2.png');
  cupidSupervisor = loadImage('./characters-images/cupid-supervisor.png');
  */
}



function resetVariablesToDefault(){
  canContinue  = false;
  workshopDoorOpen = false;
  canTouchDoor = false;
  showCupids = true;	
  lightSwitchIsOn = true;
  realLightSwitch = false;
  lightSwitchMarker = false;
  hintButtonWorkshopClicked = false;
  curFireStrength = maximumFireStrength; 
  amountSealedMaxPercentage = 100;
  amountSealedCurPercentage = 0;
  applyingPressure = false;
  cardBoxSealed = false;
  canStartPressing = false;
}

let continueClick;


function serverConnected() {
 print("Connected to Server");
}

function gotList(thelist) {
 print("List of Serial Ports:");

 for (let i = 0; i < thelist.length; i++) {
  print(i + " " + thelist[i]);
 }
}

function gotOpen() {
 print("Serial Port is Open");
}

function gotClose(){
 print("Serial Port is Closed");
 latestData = "Serial Port is Closed";
}

function gotError(theerror) {
 print(theerror);
}

function gotData() {
 let currentString = serial.readLine();
  trim(currentString);
 if (!currentString) return;
 //console.log(currentString);
 latestData = currentString;
  //console.log(parseFloat(latestData));
}


function setup() {
  //Canvas configuration
  canvasSize = createVector(640,550); //if you want to change the canvas size, alter the numbers on this line
  nativeCanvasSize = createVector(640,550); //don't alter the numbers on this line
  if (!(canvasSize.x == nativeCanvasSize.x && canvasSize.y == nativeCanvasSize.y)){
    console.log("The image is best rendered at native canvas size.");
  }
  createCanvas(canvasSize.x, canvasSize.y);
  if (canvasSize.x >= 1024 && canvasSize.y >= 960){
    textScaleFactor1 = 2;
  }
  //other
 fontStyleConfig = loadFont('./KGPayphone.ttf');

  //Set up the buttons here//
  //The button for next page//
  nextPageClick = new Clickable();
  nextPageClick.cornerRadius = 0;
  nextPageClick.textScaled = true;
  nextPageClick.text = "Continue";
  nextPageClick.textSize = 14;
  nextPageClick.locate(convert2Scalable(520,"x"), convert2Scalable(330,"y"));
  nextPageClick.resize(convert2Scalable(100,"x"), convert2Scalable(42,"y"));
  nextPageClick.cornerRadius = 5;
  nextPageClick.textColor = "#000000";
  nextPageClick.stroke = "#505050";
  nextPageClick.textFont = "KG Payphone";
  nextPageClick.onOutside = function () {
    this.color = "#FFFFFF";
  }
  nextPageClick.onHover = function () {
    this.color = "#E02546";
    //backPage();
  }
  nextPageClick.onPress = function () {
    //alert("test");
    //console.log("Pressed next page.");
    this.color = "#FC78A6";
    continuePage();
  }
  
  //The button for hint//
  hintButton = new Clickable();
  hintButton.cornerRadius = 0;
  hintButton.textScaled = true;
  hintButton.text = "Hint";
  hintButton.textSize = 14;
  hintButton.locate(convert2Scalable(455,"x"), convert2Scalable(330,"y"));
  hintButton.resize(convert2Scalable(60,"x"), convert2Scalable(42,"y"));
  hintButton.cornerRadius = 5;
  hintButton.textColor = "#000000";
  hintButton.stroke = "#505050";
  hintButton.textFont = "KG Payphone";
  hintButton.onOutside = function () {
    this.color = "#FFFFFF";
  }
  hintButton.onHover = function () {
    this.color = "#E02546";
    //backPage();
  }
  hintButton.onPress = function () {
    //alert("test");
    //console.log("Pressed next page.");
    this.color = "#FC78A6";
    //console.log("Hint tries: "  + hintTries);
    hintTries = hintTries + 1;
    if (curPage == 4){
      if (hintTries <= 3){
        cartoonKidLaugh.play();
        if (hintTries == 1){
          realLightSwitch = true;
        }
        if (hintTries == 2){
          lightSwitchMarker = true;
        }
        if (hintTries == 3){
          lightSwitchDummyHint = true;
        }
      }
    }

  }
  
  //The button for previous page//
  /*
  previousPageClick = new Clickable();
  previousPageClick.textScaled = true;
  previousPageClick.text = "Previous Page";
  previousPageClick.textSize = 16;
  previousPageClick.locate(convert2Scalable(180,"x"), convert2Scalable(455,"y"));
  previousPageClick.resize(convert2Scalable(140,"x"), convert2Scalable(42,"y"));
  previousPageClick.cornerRadius = 5;
  previousPageClick.textColor = "#000000";
  previousPageClick.stroke = "#505050";
  previousPageClick.textFont = "KG Payphone";
  previousPageClick.onOutside = function () {
    this.color = "#FFFFFF";
  }
  previousPageClick.onHover = function () {
    this.color = "#E02546";
  }
  previousPageClick.onPress = function () {
    //alert("test");
    this.color = "#FC78A6";
    backPage();
  }  
  */
  
  
  //Set up the p5 Arduino reader
  serial = new p5.SerialPort();
  serial.list();
  serial.open('COM3');
  serial.on('connected', serverConnected);
  serial.on('list', gotList);
  serial.on('data', gotData);
  serial.on('error', gotError);
  serial.on('open', gotOpen);
  serial.on('close', gotClose);
  
  checkPageConfigs();
}

//Image scalibility
function convert2Scalable(nativePoint,pType){
  //(currentCanvasWidth/x) = pointPositionOfNativeCanvasSize
  let eq1;
  let eq2;
  let eq3;
  if (pType == "width" || pType == "x"){
    eq1 = width*1;
    eq2 = nativePoint;
    eq3 = nativeCanvasSize.x/nativePoint;
    let resultantEQ = width/eq3;
    return resultantEQ;
  }
  else if (pType == "height" || pType == "y"){
    eq1 = height*1;
    eq2 = nativePoint;
    eq3 = nativeCanvasSize.y/nativePoint;
    let resultantEQ = height/eq3;
    return resultantEQ;
  }
  else{
    console.warn("Invalid point type dimension.");
    return nativePoint;
  }
}

function renderScalableImage(imgAsset,posX,posY,scale=1){ image(imgAsset,convert2Scalable(posX,"x"),convert2Scalable(posY,"y"),convert2Scalable(imgAsset.width*scale,"width"),convert2Scalable(imgAsset.height*scale,"height")); 
}

// Called when there is data available from the serial port
function gotData() {
  var currentString = serial.readLine();  // read the incoming data
  trim(currentString);                    // trim off trailing whitespace
  if (!currentString) return;             // if the incoming string is empty, do no more
  //console.log(currentString);
  inMessage = split(currentString, '&');   // save the currentString to use for the text
  /*
  inMessage[0] is the rain sensor
  inMessage[1] is the touch sensor
  */
  
  //console.log(inMessage[1]);
}

function draw() {
  background(255, 77, 77);
  //Draw The HUD//
  
  push();
  updatePage();
  noStroke();
  fill(0);
  //left bar
  rect(0,0,convert2Scalable(3,"width"),(height - dialogueBottomSize));
  //right bar
    rect(width - convert2Scalable(storyBorderSize,"width"),0,convert2Scalable(storyBorderSize,"width"),(height - dialogueBottomSize));
  //top bar
  rect(0,0,width,convert2Scalable(storyBorderSize,"width"));
  pop();
  ////////////////storyBorderSize
}



function checkPageConfigs(){
  //Check if it's currently on page 1//
  if (curPage == 1){
    if (firePlaceBurning.isPlaying() == false){
      firePlaceBurning.play();
      firePlaceBurning.loop();
    }
  }
  else{
    firePlaceBurning.stop();
  }
  //Page 4 lights off task hard//
  if (curPage == 4){
    canContinue = false;
  }
  
  //Page 7 open the door for the cupids//
  if (curPage == 7){
    canContinue = false;
    canTouchDoor = true;
  }
  if (curPage >=5 && lightSwitchDummyHint <= 8){
    lightSwitchDummyHint = false;
  }
  
  //close door
  if (curPage == 9){
    canTouchDoor = false;
    workshopDoorOpen = false;
    showCupids = false;
    doorCloseSFX.play();
  }
  
  if (curPage == 19){
    canContinue = false;
    canStartPressing = true;
  }
  
  if (curPage == 21){
    alarmClose.play();
  }
}

function continuePage(playSound = true,defaultContinue=true) {
  //if (canContinue == true){
  //Check for weird numbers//
  //The light switch turn off result//
  if (curPage == 5 || curPage == 6){
    curPage = 7;
    defaultContinue = false;
  }
  else if (curPage == 7){
    defaultContinue = true;
  }
  
    if ((curPage < maxPage) || (curPage >= 13 && curPage < storyEndPointPage)){  
      if (playSound == true){
        pageClick.play();
      }
      if (defaultContinue == true){
        curPage = curPage + 1;
      }
    }
    else{
      if (playSound == true){
        pageClick.play();
      }
      resetVariablesToDefault();
      if (curPage == maxPage){
        curPage = 12;
      }
      else{
        curPage = 1;
      }      
    }
    checkPageConfigs();
  //}
}

function checkCardBoxSeal(){
  if (amountSealedCurPercentage  >= amountSealedMaxPercentage && cardBoxSealed == false){
      cardBoxSealed = true;
      applyingPressure = false;
      boxClose.play();
      amountSealedCurPercentage = amountSealedMaxPercentage;
      canContinue = true;
  } 
}

//Specific functions//
function mouseReleased(){
  //console.log("Mouse click X: " + mouseX + "| Mouse click Y: " + mouseY);
  //Fire place scene
  if (curPage == 1){
    if (hasArduino == false){
      //mouseDistFire= dist(mouseX, mouseY, 0, 72);
      checkPageConfigs(); 
      if ((mouseY < 320) && (mouseY >= 96) &&  curFireStrength > 0){   
        curFireStrength = curFireStrength - 15;
        waterPour.play();
        //no negative numbers//
        if (curFireStrength < 0){
          curFireStrength = 0;
        }
        //canContinue = true;
        //doorOpen.play();
      }
    }
    
  }
  
  //Turn off cupid workshop
  if (curPage == 4 || curPage == 3){
    checkPageConfigs();
    mouseLightSearchRealDist = dist(mouseX, mouseY, lightSwitchRealPosX , lightSwitchRealPosY );
    //console.log(mouseLightSearchRealDist);
    if (mouseLightSearchRealDist < 50){ 
      if (lightSwitchIsOn == true){
        lightSwitchIsOn = false;
        canContinue = true;
        lightSwitchSnap.play();
        lightSwitchDummyHint = false;
        if (realLightSwitch == true){
          curPage = 5;
        }
        else{
          curPage = 6;
        }
        
      }
    } 
  }
  
  //open the door for the cupids and in scenes where there is a cupid workshop
  if (curPage == 7){
    cupidWorkShopDoorDist = dist(mouseX, mouseY, cupidDoorPosX, cupidDoorPosY);
    console.log(cupidWorkShopDoorDist);
    if (cupidWorkShopDoorDist < 110){
      if (canTouchDoor == true){
         canTouchDoor = false;
         workshopDoorOpen = true;
         doorOpen.play();
         continuePage(false,false);
         canContinue = true;
      }
    }
  }
  if (curPage == 9){
    showCupids = false;
  }
  if (curPage == 12){
    canContinue = true;
    pageClick.play();
    curPage = curPage + 1;
  }
  
  if (curPage == 19){
    applyingPressure = false;
    if (hasArduino == false){
      //mouseDistFire= dist(mouseX, mouseY, 0, 72);
      checkPageConfigs();
      //console.log(amountSealedMaxPercentage);
      checkCardBoxSeal();
      if ((mouseY < 320) && (mouseY >= 96) && canStartPressing == true){   
        //(amountSealedCurPercentage < amountSealedMaxPercentage)
        //waterPour.play();
        //no negative numbers//

        if (amountSealedCurPercentage < amountSealedMaxPercentage){
          amountSealedCurPercentage = amountSealedCurPercentage + 10;
        }
        //canContinue = true;
        //doorOpen.play();
      }
    }
  }
}

function mousePressed(){
  if (curPage == 19){
    /*
    Disabled this code because it freezes the program
    if ((mouseY < 320) && (mouseY >= 96) &&  (amountSealedCurPercentage < amountSealedMaxPercentage)){   
      if (applyingPressure == false){
        applyingPressure = true;
        while (applyingPressure == true){
           amountSealedCurPercentage  = amountSealedCurPercentage  + .25;
        }
      }
    }
    */
  }
}
