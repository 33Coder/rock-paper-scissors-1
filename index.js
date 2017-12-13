/*jshint esversion: 6 */
let playerScore = 0;
  let compScore = 0;


let computer_play = () => {
	let randomizer = Math.floor(Math.random()*3);
	let choice = {
		0 : "rock", 
		1 : "paper", 
		2 : "scissors"
	};
	//console.log(choice[randomizer]);
	let compChoice = choice[randomizer];
	console.log("comp",compChoice);
	return compChoice;
};


let play_round = (playerChoice) => {
  playerChoice = playerChoice.toLowerCase();
  console.log("player", playerChoice);
  if (playerChoice == "rock" || playerChoice == "paper" || playerChoice == "scissors") {
  	check_winner(playerChoice);
  }
  else
  {
  	console.log("Please enter, rock, paper, or scissors as parameter in play_round()");
  }
};

let check_winner = (playerChoice) => {
  
	let comp_test = computer_play();

	if (comp_test == playerChoice) {
		console.log("TIE");
		return;
	}

	switch (comp_test) {
		case "rock":
		console.log(
		playerChoice == "paper" ?
		  ("You win, paper beats rock!", playerScore++) : 
		  ("You lose, rock beats scissors", compScore++)
		); // this case uses the ternary operator to do the same thing as
			 // the if/else statements
		break;	
		case "paper":
		if (playerChoice == "scissors") {
			console.log("You win, scissors beats paper");
			playerScore++;
		}
		else {
			console.log("You lose, paper beats rock");
			compScore++;
		}
		break;
		case "scissors":
		if (playerChoice == "rock") {
			console.log("You win, rock beats scissors");
		}
		else {
			console.log("You lose, scissors beats paper");
		}
		return playerScore, compScore;
	}
};



let game = () => {
	let playerChoice = window.prompt("Enter rock, paper, or scissors");
	play_round(playerChoice);
  console.log("playerScore=", playerScore, "compScore=", compScore);
};

game();