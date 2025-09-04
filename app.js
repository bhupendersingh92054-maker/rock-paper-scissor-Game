
let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score")
const comScorePara = document.querySelector("#comp-score")

// const playAgainBtn = document.getElementById("play-again");
// let gameOver = false;



const genCompChoice = () =>{
    const option = ["rock", "paper", "scisor"];
    const randIdx = Math.floor(Math.random()*3);
    return option[randIdx];
    //rock, paper, scissor

}
const drawGame = () =>{
    msg.innerText = "Game was Draw! Play again";
    msg.style.backgroundColor = "yellow"; 

}

const showWinner = (userWin, userChoice, compChoice) =>{
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Win!! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "#90ee90";
    }else{
        compScore++
        comScorePara.innerText = compScore;
        msg.innerText = `You Lose!! ${compChoice} beats your choice ${userChoice}`;
        msg.style.backgroundColor = "#ff6666";
    }
}

const playGame = (userChoice)=>{
    console.log("user choice =", userChoice);
    //Generate computer choice -> modular
    const compChoice = genCompChoice();
    console.log("computer choice =", compChoice);

    if(userChoice === compChoice){
        drawGame();
    }else{
        let userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice ==="paper" ? false : true;
        }else if(userChoice === "paper"){
            userWin = compChoice === "scisor" ? false : true;
        }else if (userChoice === "scisor"){
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

// const playGame = (userChoice) => {
//     if (gameOver) return; // Prevent further clicks

//     const compChoice = genCompChoice();

//     if (userChoice === compChoice) {
//         drawGame();
//     } else {
//         let userWin = true;
//         if (userChoice === "rock") {
//             userWin = compChoice === "paper" ? false : true;
//         } else if (userChoice === "paper") {
//             userWin = compChoice === "scisor" ? false : true;
//         } else if (userChoice === "scisor") {
//             userWin = compChoice === "rock" ? false : true;
//         }
//         showWinner(userWin, userChoice, compChoice);

//         // ⛔ Stop if game over
//         if (userScore === 5 || compScore === 5) {
//             gameOver = true;
//             msg.innerText = userScore === 5 ? "🎉 You WON the Game!" : "😢 Computer WON the Game!";
//             msg.style.backgroundColor = userScore === 5 ? "#90ee90" : "#ff6666";
//             playAgainBtn.style.display = "inline-block"; // Show play again button
//         }
//     }
// };


choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
       
    });
});

// playAgainBtn.addEventListener("click", () => {
//     userScore = 0;
//     compScore = 0;
//     userScorePara.innerText = userScore;
//     compScorePara.innerText = compScore;
//     msg.innerText = "Play Your Move";
//     msg.style.backgroundColor = "white";
//     playAgainBtn.style.display = "none";
//     gameOver = false;
// });
