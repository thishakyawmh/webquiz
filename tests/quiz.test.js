import test from "node:test";
import assert from "node:assert/strict";
import { questions } from "../questions.js";
import { formatTime, findCorrectAnswerIndex } from "../quiz-utils.js";

test("every quiz question has four distinct options and exactly one correct answer", () => {
  assert.ok(questions.length >= 10);
  for (const [index, question] of questions.entries()) {
    assert.ok(question.question.trim(), `question ${index + 1} needs text`);
    assert.equal(question.answers.length, 4, `question ${index + 1} needs four options`);
    assert.equal(new Set(question.answers.map((answer) => answer.text)).size, 4, `question ${index + 1} has duplicate options`);
    assert.equal(question.answers.filter((answer) => answer.correct).length, 1, `question ${index + 1} needs exactly one correct answer`);
  }
});

test("formats timer values consistently", () => {
  assert.equal(formatTime(60), "1:00");
  assert.equal(formatTime(9), "0:09");
  assert.equal(formatTime(0), "0:00");
  assert.equal(formatTime(-4), "0:00");
  assert.equal(formatTime(Number.NaN), "0:00");
});

test("finds the correct answer and handles missing correct answers", () => {
  assert.equal(findCorrectAnswerIndex([{ correct: false }, { correct: true }]), 1);
  assert.equal(findCorrectAnswerIndex([{ correct: false }]), -1);
  assert.equal(findCorrectAnswerIndex(null), -1);
});
