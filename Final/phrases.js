//This file deals with the phrases for the sketch

let activePhrases = [
  "",
  "",
  "",
  "",
];

let phrases = [
  "Unknown page to load",
  //Fire place scene (p1)//
  //Has Arduino 1-2
  "Help the cupids to put out the fire by pouring water",
  "on to the rain sensor with your Arduino!",
  //No Arduino 3-4
  "You don't have an Arduno? Well that sucks :C, Just keep",
  "on clicking on the fire place until the fire goes out.",
  //pt 2 fire place// 5-6
  "Good job! On to the next part of the process of",
  "closing down the card making workshop.",
  //Turn off lights//
  //Part 1 7-9
  "Please turn off the lights, it's that simple.",
  "So simple that even a kindergartener can do it!",
  "You don't need an Arduino for this.",
  //Part 2 10-12
  "No, we're not continuing until YOU turn off the lights.",
  "We don't care if it takes too long, JUST DO IT! Need help?",
  "Click the hint button.",
  //Lights off positive// 13-15
  "Good job! Light switches doesn't have to always be the",
  "same design and layout. There's one more thing left for",
  "you to do! Before we wrap up for today!",
  //Lights off positive// 16-19,
  "You thought that wasn't a light switch but we had to",
  "change the light switch so that you can understand",
  "where to turn off the light. Oh well, you turned off the lights,",
  "we can still continue on.",
  
  //Close the card making workshop// 20-22
  "Alright, now we need you to open the door for the cupids.",
  "Just click on the door to open it, it's that simple!",
  "",
  
  //After door open// 23-24
  "Good job! You've open the door! As you may have noticed,",
  "it's getting late and the cupids will go home.",
  "",
  
  //Cupids going home// 26,27
  "The two cupid brothers left the cupid workshop and the",
  "two cupid brothers went home.",
  
  //Ending 28,29
  "Well this it. It's looks like we've reached the end.",
  "",
  
  //True Ending// 30 - 32
  "THE END",
  "If you want to experience this interactive story again",
  "click continue to start over.",
  
  //Introduction// 33 - 36
  "Whooo, what a beautiful cute day we're having today.",
  "But today, the cupid brothers will go into the cupid",
  "workshop to make Valentine's Day cards for customers.",
  "",
  
  //Introduction - Part 1 - 37-38
  "The cupid brothers goes inside the cupid workshop.",
  "house........",
  
  //Introduction part 2 - 39 - 41
  "Now that we're in the workshop huh....",
  "The cupids forgot to turn off the lights in the workshop",
  "yesterday. They didn't see that comming.",
  
  //Introduction part 3 - 42
  "Oh well moving on! Let's get started.",
  
  //1st task  - part 1 - 43-45
  "Here is the first task for you. Please help the cupids to",
  "seal Valentine's Day cards.",
  "",
  
  //has arduino 1st task promo 46-49
  "I see that you have an Arduino with you. We'll be using it",
  "to help the cupids seal the boxes. Use your touch sensor",
  "to press down the boxes.",
  "",
  
  //no arduino 1st task promo 50 - 52
  "I see that you don't have an Arduino with you. No worries!",
  "Just click on the box to apply pressure to seal the boxes.",
  "",
  
  //1st task 53 - 55
  "Help the cupids out by helping them seal the box. We can't",
  "continue until you've sealed the box. You can do it!",
  "",
  
  //1st task completed 56- 57
  "Thank you for sealing the cards. We appreciate you doing that.",
  "You've just made the cupid's lives easier.",
  
  //1st task completed part 2 58 - 61.
  "Did you hear that alarm sound. That means that it's time",
  "toclose the card making workshop. Quick! I have a first",
  "task for you to help the cupids close the card making",
  "workshop!",
  
  //1st task completed part 3 - 62,63
  "You're going to find out very soon and it's a surprise!",
  "",
  
  //The fire place 64,65,66
  "You're going to help the cupids put out a fire in the",
  "fire place! We don't want to burn down the card",
  "workshop.",
  
  //Bonus phrase, raining outside 67 - 69
  "It's raining outside?! Oh no, now the cupid's clothes will",
  "get wet. Quick! Get insidethe building!",
  "",
];


function setActivePhrases(ph1ID = -1, ph2ID=-1, ph3ID=-1,ph4ID=-4){
  if (ph1ID >= 0){
    activePhrases[0] = phrases[ph1ID];
  }
  else{
    activePhrases[0] = "";
  }
  if (ph2ID >= 0){
    activePhrases[1] = phrases[ph2ID];
  }
  else{
    activePhrases[1] = "";
  }
  if (ph3ID >= 0){
    activePhrases[2] = phrases[ph3ID];
  }
  else{
    activePhrases[2] = "";
  }
  if (ph4ID >= 0){
    activePhrases[3] = phrases[ph4ID];
  }
  else{
    activePhrases[3] = "";
  }
}

function updatePage(){
  switch(curPage){
    case 1:
        if (hasArduino == true){
          setActivePhrases(1,2);
        }
        else{
          setActivePhrases(3,4);
        }
      break; 
    case 2:
      canContinue = true;
      setActivePhrases(5,6);
      break;
    case 3:
      canContinue = true;
      setActivePhrases(7,8,9);
      break;
    case 4:
      setActivePhrases(10,11,12);
      break;
    case 5:
    case 6:
      if (realLightSwitch == false){
        setActivePhrases(13,14,15);
      }
      else{
        setActivePhrases(16,17,18,19);
      }
      break;
    case 7:
      setActivePhrases(20,21,22);
      break;
    case 8:
      setActivePhrases(22,23,24);
      break;
    case 9: 
      setActivePhrases(26,27);
      break;
    case 10: 
      setActivePhrases(28,29);
      break;
    case 11: 
      setActivePhrases(30,31,32);
      break;
    //other start
    case 13: 
      setActivePhrases(33,34,35,36);
      break;
    case 14: 
      setActivePhrases(37,38);
      break;
    case 15:
      setActivePhrases(39,40,41);
      break;
    case 16:
      setActivePhrases(42);
      break;  
    case 17:
      setActivePhrases(43,44,45);
      break;
    //Has Arduino//
    case 18:
      if (hasArduino == true){
         setActivePhrases(46,47,48,49);
      }
      else{
        setActivePhrases(50,51,52);
      }
      break;
    case 19:
      setActivePhrases(53,54,55);
    break;
    case 20:
      canContinue = true;
      setActivePhrases(56,57); 
    break;
    case 21:
      setActivePhrases(58,59,60,61);
    break;
    case 22:
      setActivePhrases(62,63);
    break;
    case 23:
      setActivePhrases(64,65,66);
    break;
    
    //Bonus stuff
    case 24:
      setActivePhrases(67,68,69);
    break;
    default:
      setActivePhrases(0);
  }
  loadScene();
}

