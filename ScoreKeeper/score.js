var b1 = document.getElementById ("button1");
var b2 = document.querySelector ("#button2");
var b3 = document.getElementById ("reset");
var h1 = document.querySelector ("h1");
var p1Score = 0;
var p2Score = 0;
var maxScore = 5;
var gameOver = false;

b1.addEventListener("click", function(){
    if (!gameOver) {
        p1Score++;
        console.log("player 1 scored");
        UpdateScore();
    }
});

b2.addEventListener("click", function(){
    if (!gameOver) {
        p2Score++;
        console.log("player 2 scored");
        UpdateScore();
    }
});

b3.addEventListener("click", function(){
    gameOver = false;
    p1Score = 0;
    p2Score = 0;
    // Need to update our max score.
    b1.classList.remove("win");
    b2.classList.remove("win");
    maxScore = Number(document.getElementById ("maxScore").value);
    if ((maxScore < 2) || !Number.isInteger(maxScore)) {
        maxScore = 5;
        console.log ("Input Error");
    }
    document.getElementById("score").innerText = maxScore;
    console.log("new max score is "+ maxScore);
});

function UpdateScore(){
   if (p1Score == maxScore) {
        b1.classList.add("win");
        gameOver = true;
        }
   if (p2Score == maxScore) {
        b2.classList.add("win");
        gameOver = true;
        }
   console.log ("Player 1: " + p1Score + "     Player 2: " + p2Score);
   h1.innerText = p1Score +" to " + p2Score;
  }