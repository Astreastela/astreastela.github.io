let officeRoomEmpty;
let officeRoomWorking;
let kimJongUn_Chill;
let kimJongUn_Scold;
let back2WorkSFX;
let gardenCricketSFX;
let tonedDownBack2WorkScolded;
//Misc values//
let isEmployeesWorking = false;
let coolDownTimeSec = 2;
//Don't touch variables
let mapVariableBackgroundOffsetX = 0;
let kimJongUnVariableOffsetX = 0;
let mouseXWidth;
let kimJonUnPositionSet1 = 0;
let curCoolDownPitch = 0;
let fps = 60;
let timesScolded = 0;
//back 2 work text
let back2WorkTextPos = 100;
let back2WorkTextMaxPitches = 5;
let back2WorkTextMatchCurPitches = 0;
let back2WorkTextMatchCurPitchMove = 1;
let pitchVal = 0;

function noLongerWork(){
  isEmployeesWorking = false;
  gardenCricketSFX.play();  
}

function preload(){
  //Images
  officeRoomEmpty = loadImage("empty-office-cubicles-2-480h.png");
  officeRoomWorking = loadImage("office-cubicles-people-1024w.png");
  kimJongUn_Chill = loadImage("kim-jong un-disappointed-transparent.png");
  kimJongUn_Scold = loadImage("kim-scold.png");
  //Audios
  back2WorkSFX = loadSound('Get-Back to-Work-Funny-2.ogg');
  gardenCricketSFX = loadSound('garden-cricket.mp3');
  tonedDownBack2WorkScolded = loadSound('Get-Back-to-Work-toned-down.ogg');
}

function setup() {
  createCanvas(800, 480);
  gardenCricketSFX.play();
}

function draw() {
  pitchVal = pitchVal + 1;
  background(16);  
  kimJonUnPositionSet1 = map(mouseX, 0, width, -50, 50);
  mapVariableBackgroundOffsetX = map(mouseX, 0, width, -12, 12);
  kimJongUnVariableOffsetX = map(mouseX, 0, width, -50, 50);
  if (isEmployeesWorking == false){
    image(officeRoomEmpty,mapVariableBackgroundOffsetX-64,0);
    image(kimJongUn_Chill,kimJonUnPositionSet1+144,128,600,625);
  }
  else{
    image(officeRoomWorking,mapVariableBackgroundOffsetX-32,0);
    image(kimJongUn_Scold,kimJonUnPositionSet1,128,681,384);
    textSize(65);
    fill(0);
    if (back2WorkTextMatchCurPitches > back2WorkTextMaxPitches || back2WorkTextMatchCurPitches < (back2WorkTextMaxPitches*-1)){
      back2WorkTextMatchCurPitchMove = back2WorkTextMatchCurPitchMove*-1;
    }
    else{
       back2WorkTextMatchCurPitches = 100 + back2WorkTextMatchCurPitches + back2WorkTextMatchCurPitchMove;
    }
    back2WorkTextPos = back2WorkTextMatchCurPitches + back2WorkTextMatchCurPitchMove;
    console.log(back2WorkTextPos);
    text("GET BACK TO WORK!", 60, back2WorkTextPos);     
    textSize(64);
    if (pitchVal %  6){
      fill(255);
    }
    else{    
      fill(255,0,0);
    }
    
    text("GET BACK TO WORK!", 65, back2WorkTextPos); 
    curCoolDownPitch = curCoolDownPitch + 1;
    if (curCoolDownPitch > (coolDownTimeSec*fps)){
      noLongerWork()
    }
  }
    textSize(24);
    fill(224);
    text(timesScolded, 750, 470);
}

function mouseReleased() {
  if (isEmployeesWorking == false){
    timesScolded = timesScolded + 1;
    gardenCricketSFX.stop();
    curCoolDownPitch = 0;
    isEmployeesWorking = true;
    if (tonedDownBack2WorkScolded >= 5){
      back2WorkSFX.play();
    }
    else{
      tonedDownBack2WorkScolded.play();
    }   
  }
  else{
    noLongerWork();
  }
}
