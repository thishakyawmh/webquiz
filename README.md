# Web Quiz

A browser-based logical-thinking quiz built with vanilla JavaScript, HTML, and CSS.

## Features

- Multiple-choice questions
- A 60-second timer for each question
- Answer feedback and score summary
- Restart support
- Question bank separated from UI logic

## Run locally

Because the app uses JavaScript modules, serve the repository with a local web server:

```bash
python -m http.server 8000
```

Open `http://localhost:8000`.

## Quality checks

Node.js 22 or newer:

```bash
npm test
npm run check
```

## Project scope

This is a client-side learning project. Questions and answers are shipped to the browser, so the answer key is visible to users and scores are not server-verified. Do not use it for formal exams or high-stakes assessments without a server-side question bank, authenticated sessions, and trusted scoring.
