let userScore = 0;
let compScore = 0;
const msg = document.querySelector(".msg");
const choices = document.querySelectorAll(".choice");

const userpoint = document.querySelector("#user-score");
const comppoint = document.querySelector("#comp-score");

const getCompChoice = () => {
  const options = ["Rock", "Paper", "Scissors"];
  const randIndex = Math.floor(Math.random() * 3);
  return options[randIndex];
};

const drawScore = () => {
  console.log("It's a draw!");
  msg.innerText = `Game was Draw. Play again! `;

  msg.style.backgroundColor = "#0c033d";
};

const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    userpoint.innerHTML = userScore;
    console.log("userscore: ",userScore);
    console.log("User wins!");
    msg.innerText = `You Win! Your ${userChoice} beats  Computer's ${compChoice}`;
    msg.style.backgroundColor = "#2aff0e";
  } else {
    compScore++;
    console.log("comp score: ",compScore);
    comppoint.innerHTML = compScore;
    console.log("Computer wins!");
    msg.innerText = `You Loose!  Computer ${compChoice} beats Your ${userChoice}`;

    msg.style.backgroundColor = "#ff0000";
  }
};

const playGame = (userChoice) => {
  console.log("User choice:", userChoice);
  const compChoice = getCompChoice();
  console.log("Computer choice:", compChoice);
  if (userChoice === compChoice) {
    drawScore();
  } else {
    let userWin = true;
    if (userChoice === "Rock") {
      userWin = compChoice === "Paper" ? false : true;
    } else if (userChoice === "Paper") {
      userWin = compChoice === "Scissors" ? false : true;
    } else {
      userWin = compChoice === "Rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
