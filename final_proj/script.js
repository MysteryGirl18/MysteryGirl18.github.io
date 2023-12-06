const questions = [
    { question: "Question 1?", options: ["Option 1A", "Option 1B"] },
    { question: "Question 2?", options: ["Option 2A", "Option 2B"] },
    { question: "Question 3?", options: ["Option 3A", "Option 3B"] },
    { question: "Question 4?", options: ["Option 4A", "Option 4B"] },
    { question: "Question 5?", options: ["Option 5A", "Option 5B"] },
    { question: "Question 6?", options: ["Option 6A", "Option 6B"] },
    { question: "Question 7?", options: ["Option 7A", "Option 7B"] },
];

let currentQuestion = 0;

function displayQuestion() {
    const questionElement = document.getElementById("question");
    const btnOption1 = document.getElementById("btnOption1");
    const btnOption2 = document.getElementById("btnOption2");

    questionElement.textContent = questions[currentQuestion].question;
    btnOption1.textContent = questions[currentQuestion].options[0];
    btnOption2.textContent = questions[currentQuestion].options[1];
}

function nextQuestion(option) {
    // Get the current question and options
    const current = questions[currentQuestion];
    
    // Update logic to handle the chosen option and transition to the next question
    if (option === 1) {
        // For simplicity, let's assume option 1 is the correct choice
        // alert("You have chosen: left");

        document.body.style.backgroundImage = "url('pics/pretty_tall_tree_path.jpg')";
        document.body.style.backgroundSize = "50% 100%";
        // You can add more logic or update the game state as needed
    } else if (option === 2) {
        // For simplicity, let's assume option 2 is an incorrect choice
        // alert("You have chosen: right");

        document.body.style.backgroundImage = "url('pics/mysterious_path.jpg')";
        document.body.style.backgroundSize = "50% 100%";
        // You can add more logic or update the game state as needed
    }

    // Move to the next question
    currentQuestion++;

    // Check if there are more questions
    if (currentQuestion < questions.length) {
        displayQuestion();
    } else {
        // Display game over or completion message
        document.getElementById("question-container").innerHTML = "<h2>Game Over!</h2>";
    }
}

// Initial display
displayQuestion();

// function startGame() {
//     document.querySelector('.welcome-container').style.display = 'none';
//     document.querySelector('.rules-container').style.display = 'block';
// }