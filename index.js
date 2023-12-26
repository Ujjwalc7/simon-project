


var buttonColours=["red","blue","green","yellow"];

var gamePattern=[];

var userClickedPattern = [];

var started=false;

var level=0;

const restart = document.getElementById('level-title');

$(".btn").click(function() {

  var userChosenColour = $(this).attr("id");

  userClickedPattern.push(userChosenColour);

  playSound(userChosenColour);
  animatePress(userChosenColour);
  checkAnswer(userClickedPattern.length-1);

});


function nextSequence(){
    userClickedPattern=[];
    level++;
    $("#level-title").text("level"+level);

    var randomNumber=Math.floor(Math.random()*4);
    var randomChosenColour=buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    $("#"+randomChosenColour).fadeTo(50, 0.0, function() { $(this).fadeTo(50, 1.0); });
    playSound(randomChosenColour);
}

function playSound(colour){
    var audio=new Audio("sounds/"+colour+".mp3");
    audio.play();
}

function animatePress(button){
    $("#"+button).addClass("pressed");
    setTimeout(function(){
        $("#"+button).removeClass("pressed");
    }, 100)
}

$(document).keydown(function(){
    if(!started){
        $("#level-title").text("level"+level);
        nextSequence();
        started=true;
    }
    
});

function checkAnswer(currentLevel){
    if(userClickedPattern[currentLevel]===gamePattern[currentLevel]){
        if(userClickedPattern.length===gamePattern.length){
            if(userClickedPattern.length === gamePattern.length){
                setTimeout(function(){
                nextSequence();
            },1000);
            }
        }
        
        
    }else{
        $("#level-title").text("Game Over, Press Any Key to Restart");
       
        playSound("wrong");
        wrongFunction();
        startOver();
        
    }
}

function wrongFunction(){
    $("body").addClass("game-over");
    setTimeout(function(){
        $("body").removeClass("game-over");
    }, 200);
}

function startOver(){
    level=0;
    gamePattern=[];
    started=false;
}


let screen = window.innerWidth;

document.addEventListener("DOMContentLoaded",()=>{
    if(screen < 624){
        restart.innerHTML=`<button id="start">Start</button>`
    }
})