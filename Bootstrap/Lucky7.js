var dice1;
var dice2;
var diceSum;
var startMoney;
var gameMoney; 
var numRolls=0;
var maxRolls=0;
var maxWins=0;




function rollDice() {
  return Math.floor(Math.random()* 6) +1;
}

function setUp(){
    console.log("you are in the setUp() function");
    var bet= document.forms["lucky7"]["bet"].value;
    console.log(bet);
    
    if(bet > 0) {
        startMoney = bet;
        gameMoney = startMoney;
        play();
    }
    else {
       alert("Error:number must be greater than 0"); 
    }

    return false;
}

function play(){
    console.log("you have entered the play() function");
    
    while(gameMoney > 0){
        
        numRolls++;
        dice1=rollDice();
        dice2=rollDice();
        diceSum = dice1 + dice2;
        console.log(diceSum);
        
        if (diceSum ==7) {
            gameMoney = gameMoney += 4;
            console.log("you win!")
            // test to see if your current gameMoney is greater than your previous maxWins
        }    

        else {
            
                gameMoney--;
                console.log("you lose maybe next time")
        
        
        } 
        
        if (gameMoney > maxWins){
            maxWins=gameMoney;
            maxRolls=numRolls;
        }
        //do this last:
        //maxWins=gameMoney;
        //maxRolls=numRolls;
        
    }
    

    document.getElementById("results").style.display="block";
    document.getElementById("playButton").innerText="Play Again";
    document.getElementById("startingBet").innerText=startMoney;
    document.getElementById("numberRolls").innerText=numRolls;
    document.getElementById("maximumWins").innerText=maxWins;
    document.getElementById("maximumRolls").innerText=maxRolls;
}
