// // Creates an array that lists out all of the options (Rock, Paper, or Scissors).

var computerChoices = ["r", "p", "s"];

//variable that hold teh number of wins, losses ans ties

var wins = 0;
var losses = 0;
var ties = 0;

for (i = 0; i < 10; i++ ){
    // random choice selection from the array by the computer
    var computerGuess = computerChoices [Math.floor (Math.random() * computerChoices.length)];

    //user response rounded to the lowercase

    var userGuess = prompt('Enter r, p, or s to play!');
    userGuess = userGuess.toLowerCase();

    ///game to only run if valid option is chosen by user.
    if (userGuess === 'r' || userGuess === 'p' || userGuess === 's') {
        alert('The computer chose ' + computerGuess);

        //  Win/lose conditions:
        if (userGuess === computerGuess) {
            ties++;
            alert("You've tied " + ties + ' time(s).');
        } else if (
            (userGuess === 'r' && computerGuess === 's') ||
            (userGuess === 's' && computerGuess === 'p') ||
            (userGuess === 'p' && computerGuess === 'r')
        ) {
            wins++;
            alert("You've won " + wins + ' time(s)!');
        } else {
            losses++;
            alert("You've lost " + losses + ' time(s).');
        }
    }
}

alert('Total wins: ' + wins + '\nTotal ties: ' + ties + '\nTotal losses: ' + losses);

// 2. Prompt user to enter "r," "p," or "s".

// 3. Computer chooses a **random** value in a list of "r," "p," or "s."

// 4. We determine if the user wins or not.

