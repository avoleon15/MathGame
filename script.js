
//Variables for the game
sign = ["+", "-", "*","/"];
const numberButtons = document.querySelectorAll(".number").length;
const header = document.getElementById("head");
const body = document.body;
let currentLevel = 0;
let mistakes = 0;
let backgroundLevel = 1;

let answer = 0;
let problem;


//generate equation randomly
function equationLevel1(){
    do {

        const eqNumber = Math.floor(Math.random() * 2);
        const eqSign = sign[eqNumber];
        const num1 = Math.floor(Math.random() * 5) + 1;
        const num2 = Math.floor(Math.random() * 4) + 1;
        problem = (`${num1} ${eqSign} ${num2}  = ? `);
        answer = eval(`${num1}${eqSign}${num2}`);

    } while (answer < 0);

    header.innerHTML = `${problem}`
    console.log(problem);
    return answer;
};


//review the anser of the user
function reviewAnswer(userAnswer, correctAnswer){
    if (userAnswer === correctAnswer) {
        console.log("Correct!");
        statusAnimation("correctAnimation");
        currentLevel ++;
        nextEquation(currentLevel);

    } else {
        mistakes ++;
        console.log("Incorrect. The correct answer was " + correctAnswer);
        statusAnimation("incorrectAnimation");
        removeHeart(mistakes);
        CheckGameOver(mistakes);
    }
    updateScore(currentLevel);
}


//Generate the next level of the game
function nextEquation(score){
    if (score <= 1){
        console.log("NIVEL 1")
        correctAnswer = equationLevel1();
    } else if (2 < score <= 4 ){
        //backgroundLevel2();
        console.log("NIVEL 2")
        correctAnswer = equationLevel2();
    } else if (4 < score <= 7 ){
        //backgroundLevel2();
        console.log("NIVEL 3")
        correctAnswer = equationLevel3();
    } else if (7 < score <= 10 ){
        //backgroundLevel2();
        console.log("NIVEL 4")
        correctAnswer = equationLevel4();
    }
}

//Initialize the game
nextEquation(currentLevel);

//buttons of the screen. Interaction
for (i = 0; i < numberButtons; i++){

    document.querySelectorAll("button")[i].addEventListener("click", function(){

        let buttonPressed = this.className[0];
        let userAnswer = parseInt(buttonPressed);

        reviewAnswer(userAnswer, correctAnswer);

        buttonAnimation(this);
    });
}

//Animation of the numbers
function buttonAnimation(currentKey){

    currentKey.classList.add("pressed");

    setTimeout(function(){
        currentKey.classList.remove("pressed");
    }, 100);
}

//Correct Animation
function statusAnimation(animation){

    body.classList.remove("lvl1Color")
    body.classList.add(".",animation);

    setTimeout(function(){
        body.classList.remove(".",animation);
        body.classList.add("lvl1Color")
    }, 200);
}

//Update the scoreboard
function updateScore(level){
    scoreboard = document.getElementById("score");

    scoreboard.innerHTML = `Score : ${level}`
}


//Remove a heart when a mistake occurs
function removeHeart(numberOfMistakes){

    let heartID = "heart" + numberOfMistakes;
    let heartToRemove = document.getElementById(heartID);

    heartToRemove.classList.remove("heart")
}


//check if the game is still going
function CheckGameOver(numberOfMistakes){
    if(numberOfMistakes === 3){
        alert("Game Over!");
        header.innerHTML = `Thanks for playing`
    } else {
        return;
    }
}

//Level 2
function equationLevel2(){

    do {

        const eqNumber1 = Math.floor(Math.random() * 2);
        const eqNumber2 = Math.floor(Math.random() * 2);
        const eqSign1 = sign[eqNumber1];
        const eqSign2 = sign[eqNumber2];
        const num1 = Math.floor(Math.random() * 9) + 1;
        const num2 = Math.floor(Math.random() * 7) + 1;
        const num3 = Math.floor(Math.random() * 6) + 1;
        problem = (`${num1} ${eqSign1} ${num2} ${eqSign2} ${num3} = ? `);
        answer = eval(`${num1}${eqSign1}${num2}${eqSign2}${num3}`);

    } while (answer <= 0 || answer >= 10);

    header.innerHTML = `${problem}`
    console.log(problem);
    return answer;
};

//Changes background if level 2 is reached
/*function backgroundLevel2(){

    body.classList.remove("lvl1Color")
    body.classList.add("lvl2Color");
    console.log("HELLO")
}
*/

//Level 3
function equationLevel3(){

    do {

        const eqNumber1 = Math.floor(Math.random() * 3);
        const eqNumber2 = Math.floor(Math.random() * 3);
        const eqSign1 = sign[eqNumber1];
        const eqSign2 = sign[eqNumber2];
        const num1 = Math.floor(Math.random() * 9) + 1;
        const num2 = Math.floor(Math.random() * 7) + 1;
        const num3 = Math.floor(Math.random() * 6) + 1;
        problem = (`${num1} ${eqSign1} ${num2} ${eqSign2} ${num3} = ? `);
        answer = eval(`${num1}${eqSign1}${num2}${eqSign2}${num3}`);

    } while (answer <= 0 || answer >= 10);

    header.innerHTML = `${problem}`
    console.log(problem);
    return answer;
};

function equationLevel4(){

    do {

        const eqNumber1 = Math.floor(Math.random() * 4);
        const eqNumber2 = Math.floor(Math.random() * 4);
        const eqSign1 = sign[eqNumber1];
        const eqSign2 = sign[eqNumber2];
        const num1 = Math.floor(Math.random() * 9) + 1;
        const num2 = Math.floor(Math.random() * 7) + 1;
        const num3 = Math.floor(Math.random() * 6) + 1;
        problem = (`${num1} ${eqSign1} ${num2} ${eqSign2} ${num3} = ? `);
        answer = eval(`${num1}${eqSign1}${num2}${eqSign2}${num3}`);

    } while (answer <= 0 || answer >= 10);

    header.innerHTML = `${problem}`
    console.log(problem);
    return answer;
};