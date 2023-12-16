// maps questions to their answer choices
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
        "Does anything actually exist?", 
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
// stores if answer maps to question (True) or external link (False)
const answerMappings = [
    { answer: 
      "Something deeply intertwined with daily life", 
      mapping: [
        true, 
        "How does philosophy connect to daily life?",
      ] 
    },
    { answer: 
      "Capturing the big picture, something above the level of daily life", 
      mapping: [
        true, 
        "What kinds of questions constitutes the big picture of life to you?",
      ] 
    },
    { answer: 
      "How do we, and should we, reason through life? (logic)",
      mapping: [
        true, 
        "How do people use logic to deliver valid philosophical arguments?",
      ] 
    },
    { answer: 
      "What is the nature of reality and that which we perceive? (metaphysics)",
      mapping: [
        true, 
        "What is the true nature of reality?",
      ] 
    },
    { answer: 
      "How do we assign value in the world? (value theory)",
      mapping: [
        true, 
        "How do we determine our values in relation to…?",
      ] 
    },
    { answer: 
      "At what point do we deem ourselves to have knowledge of something (epistemology)?",
      mapping: [
        true, 
        "Our (philosophers') interest in the concept of knowledge is tied to….?",
      ] 
    },
    { answer: 
      "Logic is the basis underpinning all of philosophy: I want to learn more about the formal logic methods used to support arguments", 
      mapping: [
        false, 
        "https://youtu.be/NKEhdsnKKHs?si=rCHQs1z2tafdRabY",
      ] 
    },
    { answer: 
      "Logic is just a tool, I'm more interested in the subjects people like to debate over",
      mapping: [
        false, 
        "Logic is just a tool, I'm more interested in the subjects people like to debate over…",
      ] 
    },
    { answer: 
      "Does the reality we see correspond to the objective reality that exists outside of us? What actually exists? (ontology)",
      mapping: [
        false, 
        "Does the reality we see correspond to the objective reality that exists outside of us? What actually exists?",
      ] 
    },
    { answer: 
      "Is reality completely predictable by physics and the sciences, or is the something greater to it than the sum of its parts? (philosophy of science)", 
      mapping: [
        false, 
        "Is reality completely predictable by physics and the sciences, or is the something greater to it than the sum of its parts?",
      ] 
    },
    { answer: 
      "Human morality (ethics)",
      mapping: [
        false, 
        "https://www.philosophybasics.com/branch_ethics.html",
      ] 
    },
    { answer: 
      "Measuring beauty and appearance, when so much of how we judge the world is tied to how we see and perceive it (aesthetics)",
      mapping: [
        false, 
        "https://www.philosophybasics.com/branch_aesthetics.html",
      ] 
    },
    { answer: 
      "How do/should we define knowledge?",
      mapping: [
        true, 
        "How do we define knowledge?",
      ] 
    },
    { answer: 
      "What responsibilities/precautions must people bear in handling and understanding knowledge?",
      mapping: [
        true, 
        "What responsibilities/precautions must people bear in handling and understanding knowledge?",
      ] 
    },
    { answer: 
      "I question the physical world",
      mapping: [
        true, 
        "How should I interpret the physical world?",
      ] 
    },
    { answer: 
      "I question the abstract",
      mapping: [
        true, 
        "How can I qualify abstract human concepts?",
      ] 
    },
    { answer: 
      "Seeing is believing! (empiricism)",
      mapping: [
        false,
        "https://youtu.be/5C-s4JrymKM?si=s8iSgND39ZiJnDjF",
      ]
    },
    { answer: 
      "How can I believe anything I see? (skepticism)",
      mapping: [
        false, 
        "https://youtu.be/MLKrmw906TM?si=BNqExUzTxXOsYiMX",
      ] 
    },
    { answer: 
      "Isn't god supposed to be greater than anything else in the universe, if he exists? (philosophy of religion)",
      mapping: [
        false, 
        "https://youtu.be/FmTsS5xFA6k?si=C5ywTwkKPn_punCV",
      ] 
    },
    { answer: 
      "I think science is the key to answering this question! (philosophy of science)",
      mapping: [
        false, 
        "https://youtu.be/3SJROTXnmus?si=xcaRD8iWer8cjmiJ",
      ] 
    },
    { answer: 
      "Easy! On the basis of objective truth and reasoning!",
      mapping: [
        false, 
        "https://youtu.be/kXhJ3hHK9hQ?si=39uWV5K6g_1dcjRs",
      ] 
    },
    { answer: 
      "I bet philosophers struggle to capture the boundaries of knowledge in a clear-cut way.",
      mapping: [
        false, 
        "https://www.philosophybasics.com/branch_epistemology.html",
      ] 
    },
    { answer: 
      "Does anything actually exist?",
      mapping: [
        false,
        "https://youtu.be/IV-8YsyghbU?si=yeWY06nko6YVOJa_",
      ]
    },
    { answer: 
      "Can I trust what I see? (empiricism, skepticism)",
      mapping: [
        false, 
        "https://www.philosophybasics.com/philosophers_descartes.html",
      ] 
    },
    { answer: 
      "How do we determine ethical standards?",
      mapping: [
        false, 
        "https://www.philosophybasics.com/branch_ethics.html",
      ] 
    },
    { answer: 
      "How do we value the beauty/appearance of things?",
      mapping: [
        false, 
        "https://www.philosophybasics.com/branch_aesthetics.html",
      ] 
    },
    { answer: 
      "People can believe whatever they like privately",
      mapping: [
        false, 
        "https://youtu.be/AYkhlXronNk?si=Q0OYzXg5OF_mIhAn",
      ] 
    },
    { answer: 
      "People must do their best to justify all their beliefs based off evidence",
      mapping: [
        true, 
        "How do people go about acquiring evidence to justify their beliefs?",
      ] 
    },
    { answer: 
      "Through healthy scientific skepticism and the scientific method",
      mapping: [
        false,
        "https://www.philosophybasics.com/branch_philosophy_of_science.html",
      ]
    },
    { answer: 
      "Science vs Pseudoscience- how do we distinguish between the two?",
      mapping: [
        false,
        "https://youtu.be/-X8Xfl0JdTQ?si=1dIJ-J404UVby4os",
      ]
    },
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
    const currAnswer = current.options[option - 1];

    // Change background based on chosen option
    if (option === 1) {
        document.body.style.backgroundImage = "url('pics/pretty_tall_tree_path.jpg')";
        document.body.style.backgroundSize = "50% 100%";
    } else if (option === 2) {
        document.body.style.backgroundImage = "url('pics/mysterious_path.jpg')";
        document.body.style.backgroundSize = "50% 100%";
    }

    // Find the corresponding mapping for the selected answer
    const answerToQuestion = answerMappings.find(item => item.answer === currAnswer);

    if (answerToQuestion) {
        if (answerToQuestion.mapping[0]) {
            // Mapping to another question
            const nextQuestionIndex = questions.findIndex(q => q.question === answerToQuestion.mapping[1]);
            if (nextQuestionIndex !== -1) {
                currentQuestion = nextQuestionIndex;
                displayQuestion();
            }
        } else {
            // Debugging logs
            console.log("learnMoreLink:", learnMoreLink);
            console.log("Mapping URL:", answerToQuestion.mapping[1]);

            // go to end of path animation page
            window.location.href = 'anime.html';
            // Reload the entire page
            location.reload();

            const learnMoreLink = document.getElementById("outside-link");
            learnMoreLink.href = answerToQuestion.mapping[1];
        }
    }

    // Move to the next question if answer mapping not found
    currentQuestion++;
}

// Initial display
displayQuestion();