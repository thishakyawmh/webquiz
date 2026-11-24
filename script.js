import { formatTime, findCorrectAnswerIndex } from "./quiz-utils.js";
import { questions } from "./questions.js";

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-button");
const timerElement = document.getElementById("timer");

const QUESTION_TIME_SECONDS = 60;
let currentQuestionIndex = 0;
let score = 0;
let timeLeft = QUESTION_TIME_SECONDS;
let timerInterval = null;
let hasAnswered = false;
let isQuizFinished = false;

function stopTimer() {
    if (timerInterval !== null) {
        window.clearInterval(timerInterval);
        timerInterval = null;
    }
}

function resetState() {
    answerButtons.replaceChildren();
    nextButton.style.display = "none";
    nextButton.disabled = true;
}

function showQuestion() {
    resetState();
    hasAnswered = false;

    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = `${currentQuestionIndex + 1}. ${currentQuestion.question}`;

    currentQuestion.answers.forEach((answer) => {
        const button = document.createElement("button");
        button.type = "button";
        button.textContent = answer.text;
        button.classList.add("button");
        button.setAttribute("aria-pressed", "false");
        button.addEventListener("click", () => handleAnswerClick(answer.correct, button));
        answerButtons.appendChild(button);
    });

    nextButton.textContent = currentQuestionIndex === questions.length - 1 ? "Finish Quiz" : "Next";
}

function handleAnswerClick(isCorrect, selectedButton = null) {
    if (hasAnswered || isQuizFinished) return;

    hasAnswered = true;
    stopTimer();

    const buttons = answerButtons.querySelectorAll("button");
    buttons.forEach((button) => {
        button.disabled = true;
    });

    if (selectedButton) {
        selectedButton.setAttribute("aria-pressed", "true");
        selectedButton.classList.add(isCorrect ? "correct" : "incorrect");
    }

    if (!isCorrect) {
        const correctAnswerIndex = findCorrectAnswerIndex(questions[currentQuestionIndex].answers);
        if (correctAnswerIndex !== -1 && buttons[correctAnswerIndex]) {
            buttons[correctAnswerIndex].classList.add("correct");
        }
    } else {
        score += 1;
    }

    nextButton.style.display = "block";
    nextButton.disabled = false;
}

function finishQuiz() {
    stopTimer();
    isQuizFinished = true;
    questionElement.textContent = `Quiz finished! Your score: ${score}/${questions.length}`;
    answerButtons.replaceChildren();
    timerElement.textContent = "Completed";
    nextButton.textContent = "Restart Quiz";
    nextButton.style.display = "block";
    nextButton.disabled = false;
}

function nextQuestion() {
    if (isQuizFinished) {
        startQuiz();
        return;
    }

    if (!hasAnswered) return;

    currentQuestionIndex += 1;
    if (currentQuestionIndex >= questions.length) {
        finishQuiz();
        return;
    }

    timeLeft = QUESTION_TIME_SECONDS;
    updateTimerDisplay();
    showQuestion();
    startTimer();
}

function updateTimerDisplay() {
    timerElement.textContent = formatTime(timeLeft);
}

function startTimer() {
    stopTimer();
    updateTimerDisplay();

    timerInterval = window.setInterval(() => {
        timeLeft -= 1;
        updateTimerDisplay();

        if (timeLeft <= 0) {
            stopTimer();
            handleAnswerClick(false);
        }
    }, 1000);
}

function startQuiz() {
    stopTimer();
    currentQuestionIndex = 0;
    score = 0;
    timeLeft = QUESTION_TIME_SECONDS;
    hasAnswered = false;
    isQuizFinished = false;
    showQuestion();
    startTimer();
}

if (questionElement && answerButtons && nextButton && timerElement && questions.length > 0) {
    nextButton.addEventListener("click", nextQuestion);
    startQuiz();
}
