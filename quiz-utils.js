export function formatTime(totalSeconds) {
  const safeSeconds = Number.isFinite(totalSeconds)
    ? Math.max(0, Math.floor(totalSeconds))
    : 0;
  const minutes = Math.floor(safeSeconds / 60);
  const seconds = safeSeconds % 60;
  return `${minutes}:${String(seconds).padStart(2, "0")}`;
}

export function findCorrectAnswerIndex(answers) {
  if (!Array.isArray(answers)) return -1;
  return answers.findIndex((answer) => answer?.correct === true);
}
