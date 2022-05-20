//This javascript file deals with scenes

function loadScene(){
  function firePlaceScene(hasFire = false){
    //The fire place//
    renderScalableImage(firePlaceBack ,0,0,.5);
    //The witches cards get burned in the fire place
    //renderScalableImage(meanWitchCard1 ,120,95,.325);
    //renderScalableImage(meanWitchCard2  ,340,95,.325);
    //Witches cards end
    firePlaceLogsPosX = convert2Scalable(160,"x");
    firePlaceLogsPosY = convert2Scalable(220,"y");
    //renderScalableImage(firePlaceLogs,firePlaceLogsPosX,firePlaceLogsPosY,.35);
    
    //Subtract fire strength//
    if (curFireStrength > 0){
      if (waterPour.isPlaying == false){
        waterPour.play();
      }
      curFireStrength = curFireStrength - (parseFloat(inMessage[0])/(10*60));
    }
    //Fire level measurement//
    if ((curFireStrength/maximumFireStrength) >= 0.76){
      renderScalableImage(fire100,0,72,0.5);
    }
    else if (((curFireStrength/maximumFireStrength) < 0.76) && ((curFireStrength/maximumFireStrength) > 0.51)){
      renderScalableImage(fire75,0,72,0.5);
    }
    else if (((curFireStrength/maximumFireStrength) >= 0.26) && ((curFireStrength/maximumFireStrength) < 0.51)){
      renderScalableImage(fire50,0,72,0.5);
    }
    else if (((curFireStrength/maximumFireStrength) > 0) && ((curFireStrength/maximumFireStrength) < 0.26)){
      renderScalableImage(fire25,0,72,0.5);
    }
    //console.log(curFireStrength);
    if ((curFireStrength/maximumFireStrength) <= 0){
        canContinue = true;
    }
    /*
    Provision for 12% fire part
    else if (((curFireStrength/maximumFireStrength) > 0) && ((curFireStrength/maximumFireStrength) < 0.12)){
      renderScalableImage(fire12,0,72,0.5);
    }  
    */
    //Fire level measurement end//
    renderScalableImage(firePlaceNoFire ,0,0,.5);
  }
  
  function RenderLightSwitch(forceOff = false,offFull = false){
    if (forceOff == true){
      lightSwitchIsOn = false;
    }
    //Light switch function
    if (realLightSwitch == false){
      if (lightSwitchIsOn == true){
        renderScalableImage(lightSwitchOnAlt,lightSwitchFakePosX ,lightSwitchFakePosY ,.5); 
      }
      else{
        renderScalableImage(lightSwitchOffAlt,lightSwitchFakePosX ,lightSwitchFakePosY ,.5); 
      }
    }
    else{
      if (lightSwitchIsOn == true){
         renderScalableImage(lightSwitchRealOn ,lightSwitchRealPosX ,lightSwitchFakePosY ,.1); 
      }
      else{
        renderScalableImage(lightSwitchRealOff ,lightSwitchRealPosX ,lightSwitchFakePosY ,.1); 
      }
    }
    //Light switch marker
    if (lightSwitchMarker == true){
      renderScalableImage(lightSwitchMarkerOBJ ,365 ,70 ,.2); 
    }   
  }
  
  function workshopMainScene(){
    //The wall paper
    renderScalableImage(cupidWorkshopWallPaper ,-64,0,.3);
    renderScalableImage(cupidWorkshopWallPaper ,320,0,.3);
    //The door
    cupidDoorPosX = convert2Scalable(255,"x");
    cupidDoorPosY = convert2Scalable(96,"x");
    renderScalableImage(cupidWorkshopDoor ,cupidDoorPosX,cupidDoorPosY,.3);
    renderScalableImage(cupidWorkshopDoorBorder ,240,30,.3);
    //The floor
    renderScalableImage(woodenFloor,-205,180,.75); 
    //The light switch//
    RenderLightSwitch(false);
    
    //Characters
    if (showCupids == true){
      renderScalableImage(cupidJack ,40,32,0.225);
      renderScalableImage(cupidSammy,460,32,0.25);   
    }
    
    //Idiot light switch
    if (lightSwitchDummyHint == true){
      renderScalableImage(dummyHint ,0 ,0 ,.5); 
    }
    
    //Render light//
    if (lightSwitchIsOn == false){
      renderScalableImage(lightsOffFade,-120,0,.625);  
    }
  }
  
  function workshopClosedScene(){
    //The wall paper
    renderScalableImage(cupidWorkshopWallPaper ,-64,0,.3);
    renderScalableImage(cupidWorkshopWallPaper ,320,0,.3);
    //The door
    cupidDoorPosX = convert2Scalable(255,"x");
    cupidDoorPosY = convert2Scalable(96,"x");
    renderScalableImage(cupidWorkshopDoor ,cupidDoorPosX,cupidDoorPosY,.3);
    renderScalableImage(cupidWorkshopDoorBorder ,240,30,.3);
    
    //The floor
    renderScalableImage(woodenFloor,-205,180,.75); 
  
    //Lighting//     
    RenderLightSwitch(true);
    renderScalableImage( nightTintIndoor ,-120,0,.625);
  }
  
  function workshopLightsIsOff(){
    //The wall paper
    renderScalableImage(cupidWorkshopWallPaper ,-64,0,.3);
    renderScalableImage(cupidWorkshopWallPaper ,320,0,.3);
    //The door
    cupidDoorPosX = convert2Scalable(255,"x");
    cupidDoorPosY = convert2Scalable(96,"x");
    //The door back
    push();
    fill(69,90,112);
    noStroke();
    rect(convert2Scalable(255,"x"), convert2Scalable(100,"y"), convert2Scalable(120,"width"), convert2Scalable(90,"height"));
    pop(); 
    if (workshopDoorOpen == false){
      renderScalableImage(cupidWorkshopDoor ,cupidDoorPosX,cupidDoorPosY,.3);
    }
    renderScalableImage(cupidWorkshopDoorBorder ,240,30,.3);
      
    //The floor
    renderScalableImage(woodenFloor,-205,180,.75); 
    //The light switch//
    RenderLightSwitch(true);
    
    //Characters
    if (showCupids == true){
      renderScalableImage(cupidJack ,40,32,0.225);
      renderScalableImage(cupidSammy,460,32,0.25);
    }
    
    //Lighting//
    renderScalableImage(lightsOffFade,-120,0,.625);
  }
  
  function titleScreen(){
    background(255,247,153);   
    //Grass//
    push();
    fill(0,166,81);
    noStroke();
    rect(convert2Scalable(0,"x"),convert2Scalable(360,"y"),convert2Scalable(640,"width"),convert2Scalable(192,"height"));
    pop();
    
    //Sky Decoration//
    renderScalableImage(cloudEffectTransformation,0,0,0.25);
    renderScalableImage(cloudEffectTransformation,-64,192,0.35);
    renderScalableImage(cloudEffectTransformation,480,128,0.325);
     
    //Props//
    renderScalableImage(megaFlowerVase,-128,102,0.625);
    renderScalableImage(megaFlowerVase,256,102,0.625);
    
    //characters//
    renderScalableImage(cupidJack ,-16,320,0.275);
    renderScalableImage(cupidSammy,480,300,0.35);
    
    //text//
    push();
    fill(255);
    textFont(fontStyleConfig);
    stroke(0);
    strokeWeight(2);
    textSize(28*textScaleFactor1);
    text("Click anywhere to begin!", convert2Scalable(155,"x"),     convert2Scalable(480,"y")); 
    textSize(16*textScaleFactor1);
    noStroke();
    fill(32,0,0);
    text("By Frances George", convert2Scalable(240,"x"),     convert2Scalable(540,"y")); 
    pop();
   
    //title
     renderScalableImage(cupidWorkshopTitle,48,16,0.5);
    
    
  }
  
  function introScene(){
    canContinue = true;
    background(255,247,153);
    //Cupid building//
    push();
    fill(242,109,125)
    strokeWeight(4);
    stroke(133,52,64);
    rect(convert2Scalable(0,"x"),convert2Scalable(0,"y"),convert2Scalable(640,"width"),convert2Scalable(224,"height"));
    //Cupid building detail//
    push();
    noStroke();
    fill(133,52,64);
    for (houseStripes = 1; houseStripes <= 11; houseStripes++){
      rect(convert2Scalable(0,"x"),convert2Scalable(20*houseStripes,"y"),convert2Scalable(640,"width"),convert2Scalable(3,"height"));
    }


    pop();
    
    renderScalableImage(cupidWorkshopDoor ,255,(138 ),.3);
    renderScalableImage(cupidWorkshopDoorBorder ,240,72,.3);
    pop();
    
    //windows//
    renderScalableImage(cupidFrontWindow ,64,72,.25);
    renderScalableImage(cupidFrontWindow ,450,72,.25);
      
    //Grass//
    push();
    fill(0,166,81);
    noStroke();   
    rect(convert2Scalable(0,"x"),convert2Scalable(224,"y"),convert2Scalable(640,"width"),convert2Scalable(96,"height"));
    pop();  
    
    //Characters//
    renderScalableImage(cupidJack ,40,192,0.225);
    renderScalableImage(cupidSammy,460,192,0.25);   
  }
  
    
  //The Interactive HUDs
    //Page HUDs
  function firePlaceHUD(){
    push();
    fill(255);
    textFont(fontStyleConfig);
    stroke(0);
    strokeWeight(2);
    textSize(20*textScaleFactor1);
    text("Fire Strength ", convert2Scalable(10,"x"),     convert2Scalable(355,"y"));      
    stroke(24);
    fill(48);   rect(convert2Scalable(10,"x"),convert2Scalable(360,"y"),convert2Scalable(480,"width"),convert2Scalable(40,"height"));
    textSize(24*textScaleFactor1);
    fill(255);
    //format 1
    push();
    noStroke();
    fill(232,0,85);
    rect(convert2Scalable(15,"x"), convert2Scalable(363,"y"), convert2Scalable(curFireStrengthBarSizePercentage,"width"), convert2Scalable(32,"height"));
    pop();
    curFireStrengthBarSizePercentage = map((curFireStrength/maximumFireStrength),0, 1, 0, fireStrengthMaximumBarSize);
    firePlaceBurning.setVolume(curFireStrength/maximumFireStrength);
    text(Math.ceil(curFireStrength)  + "/" + maximumFireStrength, convert2Scalable(185,"x"),     convert2Scalable(390,"y"));      
    pop();
  }
  
  function workShopHUDLightsOff(drawHint=false){
    if (drawHint == true){
      if (hintTries < 3){
        hintButton.draw();
      }
    }
  }
  
  function sealValentinesCards(showValentineCards){
      background(102,51,0);
      renderScalableImage(tableWoodDetail,0,0,0.5);
      push();
      
      pop();
      //touch sensor thing//
      if (hasArduino == true){
        
        if (amountSealedCurPercentage < amountSealedMaxPercentage && canStartPressing == true){
          //valentinesBoxCardArdunoChng = map(inMessage[1],)
          amountSealedCurPercentage = amountSealedCurPercentage + ((inMessage[1])/60)/10
          
        } 
        else if (amountSealedCurPercentage >= amountSealedMaxPercentage && canStartPressing == true){
          checkCardBoxSeal();
        }
      }
      //touch sensor thing end//
      cardBoxCloseOffset = (amountSealedCurPercentage/amountSealedMaxPercentage )*(20);
      if (showValentineCards == true){
        renderScalableImage(cupudBoxBase,96,224,0.5);
        renderScalableImage(cupidBoxCover ,79,192+cardBoxCloseOffset,0.5);             
      }
      renderScalableImage(cupidHand ,224,-70 + cardBoxCloseOffset,0.5);
      
  }
  
  function ValentinesDaySealHUD(){
    push();
    fill(255);
    textFont(fontStyleConfig);
    stroke(0);
    strokeWeight(2);
    textSize(20*textScaleFactor1);
    text("Amount sealed ", convert2Scalable(10,"x"),     convert2Scalable(355,"y"));      
    stroke(24);
    fill(48);   rect(convert2Scalable(10,"x"),convert2Scalable(360,"y"),convert2Scalable(480,"width"),convert2Scalable(40,"height"));
    textSize(24*textScaleFactor1);
    fill(255);
    //format 1
    push();
    noStroke();
    fill(232,0,85);
    rect(convert2Scalable(15,"x"), convert2Scalable(363,"y"), convert2Scalable(amountSealedBoxDisplay,"width"), convert2Scalable(32,"height"));
    pop();
    amountSealedBoxDisplay = map((amountSealedCurPercentage/amountSealedMaxPercentage ),0, 1, 0, fireStrengthMaximumBarSize);
    text(Math.ceil(amountSealedCurPercentage) + "%", convert2Scalable(225,"x"), convert2Scalable(390,"y"));      
    pop();
  }
  
  function drawHUDBottom(){
    //The HUD BKG//
    push()
    fill(0);
    noStroke();
    rect(0, (height - convert2Scalable(dialogueBottomSize,"y")), width, convert2Scalable(dialogueBottomSize,"height"));
    pop();
    //Draw the dialogue//
    push();
    textFont(fontStyleConfig);
    textSize(normalFontSize*textScaleFactor1);
    fill(255);
    stroke(0);
    strokeWeight(2);
    //text('Narrator:', convert2Scalable(10,"x"), convert2Scalable(350,"y"));
    textSize(normalFontSize*textScaleFactor1);
    if (linesUsing >= 1){
        if (usePlaceHolderPhrases == true){
          text('Line 1 test. This is the first line of text.', convert2Scalable(10,"x"), convert2Scalable(435,"y"));
        }
        else{
           text(activePhrases[0], convert2Scalable(10,"x"), convert2Scalable(435,"y"));
        }
    }
    if (linesUsing >= 2){
        if (usePlaceHolderPhrases == true){
          text('Line 2 test. This is the second line of text.', convert2Scalable(10,"x"), convert2Scalable(460,"y"));
        }
        else{
          text(activePhrases[1], convert2Scalable(10,"x"), convert2Scalable(460,"y"));
        }
    }
    if (linesUsing >= 3){
        if (usePlaceHolderPhrases == true){
          text('Line 3 test. This is the second line of text.', convert2Scalable(10,"x"), convert2Scalable(485,"y"));
        }
        else{
          text(activePhrases[2], convert2Scalable(10,"x"), convert2Scalable(485,"y"));
        }
    }
    if (linesUsing >= 4){
        if (usePlaceHolderPhrases == true){
          text('Line 4 test. This is the second line of text.', convert2Scalable(10,"x"), convert2Scalable(510,"y"));
        }
        else{
          text(activePhrases[3], convert2Scalable(10,"x"), convert2Scalable(510,"y"));
        }
    }
    textSize(16*textScaleFactor1);
    //text("Click this area to continue", convert2Scalable(200,"x"), convert2Scalable(465,"y"));
    if (canContinue == true){
      nextPageClick.draw();
    }
    //previousPageClick.draw
    textSize(18*textScaleFactor1);
    //text("Page " + curPage + "/" + maxPage, convert2Scalable(535,"x"), convert2Scalable(530,"y"));
    pop(); 
  }
   
  
  switch(curPage){
    case 1:
    case 2:
      firePlaceScene(true);
      drawHUDBottom();
      firePlaceHUD();
      break;
    case 3:
    case 5:
    case 6:
      workshopMainScene();
      drawHUDBottom();
      workShopHUDLightsOff(false);
      break;
    case 4:
      workshopMainScene();
      drawHUDBottom();
      workShopHUDLightsOff(true);
      break;
    case 7:
    case 8:
    case 9:
    case 10:
      workshopLightsIsOff();
      drawHUDBottom();
      workShopHUDLightsOff(false);      
      break;
    case 11:
      workshopClosedScene();
      drawHUDBottom();
      workShopHUDLightsOff(false);  
    break;
    case 12:
      titleScreen();
    break;
    case 13:
    case 14:
      introScene();
      drawHUDBottom();
    break;
    case 15:
    case 16:
    case 17:
      canContinue = true;
      workshopMainScene();
      drawHUDBottom();
    break;
    case 18:
      canContinue = true;
      sealValentinesCards(false);
      drawHUDBottom();
      ValentinesDaySealHUD();
    break;
    case 19:
    case 20:
      sealValentinesCards(true);
      drawHUDBottom();
      ValentinesDaySealHUD();
    break;
    case 21:
    case 22:
    case 23:
      canContinue = true;
      workshopMainScene();
      drawHUDBottom();      
    break;
  }
}
