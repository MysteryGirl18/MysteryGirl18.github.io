const questions = [
    { question: 
        "What does philosophy mean to you?", 
      options: [
        "Something deeply intertwined with daily life", 
        "Capturing the big picture, something above the level of daily life",
      ] 
    },
    { question: 
        "How does philosophy connect to daily life?", 
      options: [
        "How do we, and should we, reason through life? (logic)", 
        "What is the nature of reality and that which we perceive? (metaphysics)",
      ] 
    },
    { question: 
        "What kinds of questions constitutes the big picture of life to you?", 
      options: [
        "How do we assign value in the world? (value theory)", 
        "At what point do we deem ourselves to have knowledge of something (epistemology)?",
      ] 
    },
    { question: 
        "How do people use logic to deliver valid philosophical arguments?", 
      options: [
        "Logic is the basis underpinning all of philosophy: I want to learn more about the formal logic methods used to support arguments", 
        "Logic is just a tool, I'm more interested in the subjects people like to debate over",
      ] 
    },
    { question: 
        "What is the true nature of reality?", 
      options: [
        "Does the reality we see correspond to the objective reality that exists outside of us? What actually exists? (ontology)", 
        "Is reality completely predictable by physics and the sciences, or is the something greater to it than the sum of its parts? (philosophy of science)",
      ] 
    },
    { question: 
        "How do we determine our values in relation to…?", 
      options: [
        "Human morality (ethics)", 
        "Measuring beauty and appearance, when so much of how we judge the world is tied to how we see and perceive it (aesthetics)",
      ] 
    },
    { question: 
        "Our (philosophers') interest in the concept of knowledge is tied to….?", 
      options: [
        "How do/should we define knowledge?", 
        "What responsibilities/precautions must people bear in handling and understanding knowledge?",
      ] 
    },
    { question: 
        "Logic is just a tool, I'm more interested in the subjects people like to debate over…",
      options: [
        "I question the physical world", 
        "I question the abstract",
      ] 
    },
    { question: 
        "Does the reality we see correspond to the objective reality that exists outside of us? What actually exists?",
      options: [
        "Seeing is believing! (empiricism)", 
        "How can I believe anything I see? (skepticism)",
      ] 
    },
    { question: 
        "Is reality completely predictable by physics and the sciences, or is the something greater to it than the sum of its parts?", 
      options: [
        "Isn't god supposed to be greater than anything else in the universe, if he exists? (philosophy of religion)", 
        "I think science is the key to answering this question! (philosophy of science)",
      ] 
    },
    { question: 
        "How do we define knowledge?", 
      options: [
        "Easy! On the basis of objective truth and reasoning!", 
        "I bet philosophers struggle to capture the boundaries of knowledge in a clear-cut way.",
      ] 
    },
    { question: 
        "How should I interpret the physical world?", 
      options: [
        "Does anything actually exist? (existentialism)", 
        "Can I trust what I see? (empiricism, skepticism)", // -----------------
      ] 
    },
    { question: 
        "How can I qualify abstract human concepts?", 
      options: [
        "How do we determine ethical standards?", 
        "How do we value the beauty/appearance of things?",
      ] 
    },
    { question: 
        "What responsibilities/precautions must people bear in handling and understanding knowledge?", 
      options: [
        "People can believe whatever they like privately", 
        "People must do their best to justify all their beliefs based off evidence",
      ] 
    },
    { question: 
        "How do people go about acquiring evidence to justify their beliefs?", 
      options: [
        "Through healthy scientific skepticism and the scientific method", 
        "Science vs Pseudoscience- how do we distinguish between the two?",
      ] 
    },
];

// map answers to the next question
// stores if answer maps to question or a link
// const ansMaps = [
//     { answer: 
//       "Something deeply intertwined with daily life", 
//       mapping: [
//         True, 
//         "How does philosophy connect to daily life?",
//       ] 
//     },
//     { answer: 
//       "Capturing the big picture, something above the level of daily life", 
//       mapping: [
//         True, 
//         "What kinds of questions constitutes the big picture of life to you?",
//       ] 
//     },
//     { answer: 
//       "How do we, and should we, reason through life? (logic)",
//       mapping: [
//         True, 
//         "How do people use logic to deliver valid philosophical arguments?",
//       ] 
//     },
//     { answer: 
//       "What is the nature of reality and that which we perceive? (metaphysics)",
//       mapping: [
//         True, 
//         "What is the true nature of reality?",
//       ] 
//     },
//     { answer: 
//       "How do we assign value in the world? (value theory)",
//       mapping: [
//         True, 
//         "How do we determine our values in relation to…?",
//       ] 
//     },
//     { answer: 
//       "At what point do we deem ourselves to have knowledge of something (epistemology)?",
//       mapping: [
//         True, 
//         "Our (philosophers') interest in the concept of knowledge is tied to….?",
//       ] 
//     },
//     { answer: 
//       "Logic is the basis underpinning all of philosophy: I want to learn more about the formal logic methods used to support arguments", 
//       mapping: [
//         False, 
//         "",
//       ] 
//     },
//     { answer: 
//       "Logic is just a tool, I'm more interested in the subjects people like to debate over",
//       mapping: [
//         True, 
//         "Logic is just a tool, I'm more interested in the subjects people like to debate over…",
//       ] 
//     },
//     { answer: 
//       "Does the reality we see correspond to the objective reality that exists outside of us? What actually exists? (ontology)",
//       mapping: [
//         True, 
//         "Does the reality we see correspond to the objective reality that exists outside of us? What actually exists?",
//       ] 
//     },
//     { answer: 
//       "Is reality completely predictable by physics and the sciences, or is the something greater to it than the sum of its parts? (philosophy of science)", 
//       mapping: [
//         True, 
//         "Is reality completely predictable by physics and the sciences, or is the something greater to it than the sum of its parts?",
//       ] 
//     },
//     { answer: 
//       "Human morality (ethics)",
//       mapping: [
//         False, 
//         "",
//       ] 
//     },
//     { answer: 
//       "Measuring beauty and appearance, when so much of how we judge the world is tied to how we see and perceive it (aesthetics)",
//       mapping: [
//         False, 
//         "",
//       ] 
//     },
//     { answer: 
//       "How do/should we define knowledge?",
//       mapping: [
//         True, 
//         "How do we define knowledge?",
//       ] 
//     },
//     { answer: 
//       "What responsibilities/precautions must people bear in handling and understanding knowledge?",
//       mapping: [
//         True, 
//         "What responsibilities/precautions must people bear in handling and understanding knowledge?",
//       ] 
//     },
//     { answer: 
//       "I question the physical world",
//       mapping: [
//         True, 
//         "How should I interpret the physical world?",
//       ] 
//     },
//     { answer: 
//       "I question the abstract",
//       mapping: [
//         True, 
//         "How can I qualify abstract human concepts?",
//       ] 
//     },
//     { answer: 
//       "Seeing is believing! (empiricism)",
//       mapping: [
//         False, 
//         "",
//       ]
//     },
//     { answer: 
//       "How can I believe anything I see? (skepticism)",
//       mapping: [
//         False, 
//         "",
//       ] 
//     },
//     { answer: 
//       "Isn't god supposed to be greater than anything else in the universe, if he exists? (philosophy of religion)",
//       mapping: [
//         False, 
//         "",
//       ] 
//     },
//     { answer: 
//       "I think science is the key to answering this question! (philosophy of science)",
//       mapping: [
//         False, 
//         "",
//       ] 
//     },
//     { answer: 
//       "Easy! On the basis of objective truth and reasoning!",
//       mapping: [
//         False, 
//         "",
//       ] 
//     },
//     { answer: 
//       "I bet philosophers struggle to capture the boundaries of knowledge in a clear-cut way.",
//       mapping: [
//         False, 
//         "",
//       ] 
//     },
//     { answer: 
//       "Does anything actually exist? (existentialism)",
//       mapping: [
//         False,
//         "",
//       ]
//     },
//     { answer: 
//       "Can I trust what I see? (empiricism, skepticism)",
//       mapping: [
//         False, 
//         "",
//       ] 
//     },
//     { answer: 
//       "How do we determine ethical standards?",
//       mapping: [
//         False, 
//         "",
//       ] 
//     },
//     { answer: 
//       "How do we value the beauty/appearance of things?",
//       mapping: [
//         False, 
//         "",
//       ] 
//     },
//     { answer: 
//       "People can believe whatever they like privately",
//       mapping: [
//         False, 
//         "",
//       ] 
//     },
//     { answer: 
//       "People must do their best to justify all their beliefs based off evidence",
//       mapping: [
//         True, 
//         "How do people go about acquiring evidence to justify their beliefs?",
//       ] 
//     },
//     { answer: 
//       "Through healthy scientific skepticism and the scientific method",
//       mapping: [
//         False,
//         "",
//       ]
//     },
//     { answer: 
//       "Science vs Pseudoscience- how do we distinguish between the two?",
//       mapping: [
//         False,
//         "",
//       ]
//     },
// ];

let currentQuestion = 0;

function displayQuestion() {
    const questionElement = document.getElementById("question");
    const btnOption1 = document.getElementById("btnOption1");
    const btnOption2 = document.getElementById("btnOption2");
    const btnOption3 = document.getElementById("btnOption3");


    questionElement.textContent = questions[currentQuestion].question;
    btnOption1.textContent = questions[currentQuestion].options[0];
    btnOption2.textContent = questions[currentQuestion].options[1];
    btnOption3.textContent = questions[currentQuestion].options[2];
}

function nextQuestion(option) {
    // Get the current question and options
    const current = questions[currentQuestion];
    const currAnswer = 0;  // --------------------
    
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
        // document.getElementById("question-container").innerHTML = "<h2>Game Over!</h2>";
        // window.location.href = '/anime.html'
        // window.location.pathname = '/anime.html'
        window.location.href = 'anime.html';
        // document.location.href = newUrl;
    }
}

// Initial display
displayQuestion();

// function startGame() {
//     document.querySelector('.welcome-container').style.display = 'none';
//     document.querySelector('.rules-container').style.display = 'block';
// }
