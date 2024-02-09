

function askAboutMotorcycle() {
    let userHasRidden = confirm("Have you ridden a motorcycle?");
    if (userHasRidden) {
        document.write("Awesome! What's your favorite place to ride?");
    } else {
        document.write("What's stopping you from riding one?");
    }
}

function whatColorIsBest() {
    let color = prompt("What Color do you think looks best on a bike?")
    document.write("Great Choice! " + color + " looks great on all bikes!")
}


function rateMe() {
    let rating = prompt("On a scale of 1-5, how good is this page? and dont lie!")
    rating = Number(rating);
    for( let i = 0; i < rating; i++ ){
        document.write("🥇");
    }
}

function triviaQuestion() {
    let numberOfGuess = 0;

    while (numberOfGuess < 3) { // Set a limit for the number of guesses
        let answer = prompt(" **Trivia** Which American Motorcycle was created first? Indian or Harley?");
        
        // Convert the user's input to lowercase for case-insensitive comparison just in case
        answer = answer.toLowerCase();

        if (answer === "harley" || answer === "harley davidson") {
            alert("Good Try! However, Harley Davidson was created in 1903! Try Again!");
            numberOfGuess++;
        } else if (answer === "indian") {
            alert("Correct! Indian was created in 1901 in Springfield, MA.");
            numberOfGuess++;
            break;

        } else {
            alert("Invalid input. Please answer 'Indian' or 'Harley'.");
            numberOfGuess++;
        }
    }
    
    // Inform the user if they exceeded the number of allowed guesses just in case
    if (numberOfGuess >= 3) {
        alert("You've exceeded the number of guesses. The correct answer is Indian (1901).");
    }
}
















