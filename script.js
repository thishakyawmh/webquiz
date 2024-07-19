const questions = [
    {
        question: "What is the next number in the sequence? 2, 6, 12, 20, ...",
        answers: [
            { text: "28", correct: true },
            { text: "30", correct: false },
            { text: "32", correct: false },
            { text: "34", correct: false },
        ],
    },
    {
        question: "Which shape does not belong to the group?",
        answers: [
            { text: "Circle", correct: false },
            { text: "Square", correct: false },
            { text: "Triangle", correct: false },
            { text: "Oval", correct: true },
        ],
    },
    {
        question: "If FIVE is coded as 52143, how would you code the word STAR?",
        answers: [
            { text: "1947", correct: true },
            { text: "1234", correct: false },
            { text: "2187", correct: false },
            { text: "4321", correct: false },
        ],
    },
    {
        question: "How many letters are there between M and R in the English alphabet?",
        answers: [
            { text: "3", correct: false },
            { text: "4", correct: false },
            { text: "5", correct: true },
            { text: "6", correct: false },
        ],
    },
    {
        question: "If 8 - 4 = 32, 7 - 3 = 21, then what is 6 - 2?",
        answers: [
            { text: "16", correct: false },
            { text: "18", correct: true },
            { text: "12", correct: false },
            { text: "20", correct: false },
        ],
    },
    {
        question: "If all cats are mammals and some mammals are carnivores, then which statement is true?",
        answers: [
            { text: "All cats are carnivores", correct: false },
            { text: "Some cats are carnivores", correct: false },
            { text: "All carnivores are cats", correct: false },
            { text: "Some mammals are cats", correct: true },
        ],
    },
    {
        question: "What is half of one-tenth of 400?",
        answers: [
            { text: "4", correct: true },
            { text: "8", correct: false },
            { text: "20", correct: false },
            { text: "40", correct: false },
        ],
    },
    {
        question: "If GOOD is coded as 7633, how would you code the word LUCK?",
        answers: [
            { text: "3424", correct: false },
            { text: "3525", correct: false },
            { text: "5734", correct: false },
            { text: "6645", correct: true },
        ],
    },
    {
        question: "Which number comes next in the series? 2, 4, 6, 8, ...",
        answers: [
            { text: "10", correct: false },
            { text: "12", correct: true },
            { text: "9", correct: false },
            { text: "14", correct: false },
        ],
    },
    {
        question: "If all squares are rectangles and some rectangles are blue, then which statement is true?",
        answers: [
            { text: "All squares are blue", correct: false },
            { text: "Some squares are blue", correct: true },
            { text: "All blue things are squares", correct: false },
            { text: "Some rectangles are squares", correct: false },
        ],
    },
    {
        question: "What is the missing letter in the series? A, C, E, G, ...",
        answers: [
            { text: "I", correct: false },
            { text: "J", correct: false },
            { text: "F", correct: false },
            { text: "H", correct: true },
        ],
    },
    {
        question: "If all whales are mammals and some mammals are herbivores, then which statement is true?",
        answers: [
            { text: "All whales are herbivores", correct: false },
            { text: "Some whales are herbivores", correct: false },
            { text: "All herbivores are whales", correct: false },
            { text: "Some mammals are whales", correct: true },
        ],
    },
    {
        question: "What is the sum of 7 and 6 multiplied by 2?",
        answers: [
            { text: "20", correct: false },
            { text: "26", correct: false },
            { text: "24", correct: true },
            { text: "28", correct: false },
        ],
    },
    {
        question: "If ORANGE is coded as 158914, how would you code the word APPLE?",
        answers: [
            { text: "138531", correct: false },
            { text: "172061", correct: true },
            { text: "143501", correct: false },
            { text: "156614", correct: false },
        ],
    },
    {
        question: "If the day after tomorrow is three days before Monday, what day is it today?",
        answers: [
            { text: "Monday", correct: false },
            { text: "Tuesday", correct: false },
            { text: "Wednesday", correct: false },
            { text: "Sunday", correct: true },
        ],
    },
    {
        question: "If all birds can fly and some birds are sparrows, then which statement is true?",
        answers: [
            { text: "All sparrows can fly", correct: false },
            { text: "Some sparrows can fly", correct: true },
            { text: "All flying creatures are sparrows", correct: false },
            { text: "Some birds are sparrows", correct: false },
        ],
    },
    {
        question: "What is 7 multiplied by 8 minus 9?",
        answers: [
            { text: "41", correct: false },
            { text: "47", correct: false },
            { text: "51", correct: false },
            { text: "47", correct: true },
        ],
    },
    {
        question: "If BOOK is coded as 251114, how would you code the word PAGE?",
        answers: [
            { text: "10211", correct: false },
            { text: "19215", correct: false },
            { text: "16125", correct: true },
            { text: "20110", correct: false },
        ],
    },
    {
        question: "What comes next in the series? 3, 6, 9, 12, ...",
        answers: [
            { text: "15", correct: true },
            { text: "14", correct: false },
            { text: "16", correct: false },
            { text: "18", correct: false },
        ],
    },
    {
        question: "If all squares are rectangles and some rectangles are blue, then which statement is true?",
        answers: [
            { text: "All squares are blue", correct: false },
            { text: "Some squares are blue", correct: true },
            { text: "All blue things are squares", correct: false },
            { text: "Some rectangles are squares", correct: false },
        ],
    },
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-button");
const timerElement = document.getElementById("timer");

let currentQuestionIndex = 0;
let score = 0;
let timeLeft = 60; // 1 minutes in seconds
let timerInterval;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    nextButton.style.display = "none";
    showQuestion();
    startTimer();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach((answer, index) => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("button");
        button.addEventListener("click", () => handleAnswerClick(answer.correct, button, index));
        answerButtons.appendChild(button);
    });
}

function handleAnswerClick(isCorrect, button, index) {
    stopTimer(); // Stop the timer when an answer is selected

    // Highlight selected answer with appropriate color
    if (isCorrect) {
        score++;
        button.classList.add("correct");
    } else {
        button.classList.add("incorrect");
        const correctAnswerIndex = questions[currentQuestionIndex].answers.findIndex((answer) => answer.correct);
        if (correctAnswerIndex !== -1) {
            answerButtons.children[correctAnswerIndex].classList.add("correct");
        }
    }

    nextButton.style.display = "block";
    nextButton.addEventListener("click", nextQuestion);
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        resetTimer(); // Reset the timer for the next question
        showQuestion();
    } else {
        // Quiz is finished, display the score or do something else
        alert("Quiz finished! Your score: " + score);
    }
}

function resetState() {
    // Remove the highlight classes from previous answers
    const buttons = answerButtons.querySelectorAll("button");
    buttons.forEach((button) => {
        button.classList.remove("correct");
        button.classList.remove("incorrect");
    });

    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function startTimer() {
    updateTimerDisplay(timeLeft);
    timerInterval = setInterval(() => {
        timeLeft--;
        if (timeLeft >= 0) {
            updateTimerDisplay(timeLeft);
        } else {
            stopTimer();
            handleAnswerClick(false, null, null); // Treat unanswered as incorrect
        }
    }, 1000);
}

function stopTimer() {
    clearInterval(timerInterval);
}

function resetTimer() {
    stopTimer();
    timeLeft = 90;
    updateTimerDisplay(timeLeft);
}

function updateTimerDisplay(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    const formattedTime = `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
    timerElement.textContent = formattedTime;
}

startQuiz();
