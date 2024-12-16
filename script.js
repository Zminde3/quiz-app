const questionEl = document.getElementById("question");
const choicesEl = document.getElementById("choices");
const nextBtn = document.getElementById("next-btn");
const finalScoreEl = document.getElementById("final-score");
const resultsSection = document.getElementById("results");
const quizSection = document.getElementById("quiz");
const restartBtn = document.getElementById("restart-btn");
const themeToggle = document.getElementById("theme-toggle");

let currentQuestionIndex = 0;
let score = 0;

const questions = [
  { question: "What is 5 + 3?", choices: ["5", "8", "10", "7"], correct: 1 },
  { question: "What is the capital of Spain?", choices: ["Madrid", "Barcelona", "Seville"], correct: 0 },
  { question: "2² equals?", choices: ["2", "4", "8"], correct: 1 },
  { question: "Which planet is known as the Red Planet?", choices: ["Earth", "Mars", "Venus", "Saturn"], correct: 1 },
  { question: "Who wrote 'Romeo and Juliet'?", choices: ["Shakespeare", "Hemingway", "Dickens", "Poe"], correct: 0 },
  { question: "What is the largest ocean on Earth?", choices: ["Atlantic", "Indian", "Arctic", "Pacific"], correct: 3 },
  { question: "What year did World War II end?", choices: ["1945", "1940", "1939", "1950"], correct: 0 },
  { question: "What is the square root of 64?", choices: ["6", "8", "10", "4"], correct: 1 },
  { question: "Which gas do plants absorb from the atmosphere?", choices: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"], correct: 1 },
  { question: "What is the freezing point of water in Celsius?", choices: ["-10°C", "0°C", "10°C", "100°C"], correct: 1 },
  { question: "What is 7 x 6?", choices: ["42", "48", "36", "56"], correct: 0 },
  { question: "Which animal is known as the King of the Jungle?", choices: ["Tiger", "Elephant", "Lion", "Cheetah"], correct: 2 },
  { question: "How many continents are there?", choices: ["5", "6", "7", "8"], correct: 2 },
  { question: "What does 'H2O' stand for?", choices: ["Hydrogen", "Oxygen", "Water", "Carbon"], correct: 2 },
  { question: "Which language is spoken in Brazil?", choices: ["Spanish", "English", "Portuguese", "French"], correct: 2 },
  { question: "What is the capital of Italy?", choices: ["Venice", "Milan", "Rome", "Naples"], correct: 2 },
  { question: "What is the boiling point of water in Celsius?", choices: ["50°C", "100°C", "200°C", "150°C"], correct: 1 },
  { question: "Which country is known as the Land of the Rising Sun?", choices: ["China", "Japan", "Korea", "Vietnam"], correct: 1 },
  { question: "What is 12 divided by 4?", choices: ["4", "3", "6", "2"], correct: 1 },
  { question: "What is the main gas in the air we breathe?", choices: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"], correct: 2 },
];

function showQuestion() {
  const q = questions[currentQuestionIndex];
  questionEl.textContent = q.question;
  choicesEl.innerHTML = "";
  q.choices.forEach((choice, i) => {
    const button = document.createElement("button");
    button.textContent = choice;
    button.addEventListener("click", () => selectAnswer(i));
    choicesEl.appendChild(button);
  });
  nextBtn.disabled = true;
}

function selectAnswer(index) {
  const q = questions[currentQuestionIndex];
  const buttons = choicesEl.querySelectorAll("button");
  if (index === q.correct) {
    buttons[index].classList.add("correct");
    score++;
  } else {
    buttons[index].classList.add("incorrect");
    buttons[q.correct].classList.add("correct");
  }
  buttons.forEach(btn => btn.disabled = true);
  nextBtn.disabled = false;
}

function nextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showResults();
  }
}

function showResults() {
  quizSection.classList.add("hidden");
  resultsSection.classList.remove("hidden");
  finalScoreEl.textContent = `Your score: ${score} / ${questions.length}`;
}

function restartQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  quizSection.classList.remove("hidden");
  resultsSection.classList.add("hidden");
  showQuestion();
}

themeToggle.addEventListener("click", () => {
  document.body.toggleAttribute("data-theme", "dark");
});

nextBtn.addEventListener("click", nextQuestion);
restartBtn.addEventListener("click", restartQuiz);

// Initialize quiz
showQuestion();
