let playerInput, randomNumber;
function playGame() {
    let myButton;
    // Step 1: Generate a random number between 1 and 100
    randomNumber = Math.floor(Math.random() * 100) + 1;
    // Step 2: Get references to HTML elements use document.getElementById
    inputBox = document.getElementById("inputBox");
    myButton = document.getElementById("myButton");
    outputBox = document.getElementById("outputBox")
    // Step 3: Event listener for the button click (read about this before implementing)
    myButton.addEventListener("click", clicked);
    // Check if the guess is too high, too low, or correct
    console.log(randomNumber);
}

function clicked(){
    playerInput = inputBox.value;
    console.log(playerInput);
    if (playerInput == ""){
        outputBox.innerHTML = "You didn't enter anything";
    }
    if(playerInput > randomNumber){
        outputBox.innerHTML = "Your input of " + playerInput + " was too high! Try again.";
    } else if (playerInput < randomNumber) {
        outputBox.innerHTML = "Your input of " + playerInput + " was too low! Try again.";
    } else {
        outputBox.innerHTML = "The number was " + randomNumber + " and you guessed the number correctly. Good job!";
    }
}

// Run the game
window.onload = function() {
    playGame();
}