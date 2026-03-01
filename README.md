# Intervu AI

**Intervu AI** is an AI-powered mock interview platform designed to help developers and job seekers practice technical interviews in an interactive environment.

The platform simulates real interview scenarios by generating interview questions and evaluating responses using AI, helping users improve their problem-solving and communication skills.

---

# Demo Screenshots

## Dashboard

Shows previously created interviews and allows quick access to manage or schedule interviews.

![Dashboard](./public/demo/dashboard.png)

---

## Interview Details

Displays the interview configuration, job description, and generated interview questions.

![Interview Details](./public/demo/interview-details.png)

---

## Candidate Skill Assessment

AI evaluates candidate responses and generates a performance report including skill scoring and recommendations.

![Skill Assessment](./public/demo/assessment.png)

---

# Overview

Preparing for technical interviews can be challenging. **Intervu AI** simplifies this process by providing an AI-powered environment where users can practice answering interview questions and receive intelligent feedback.

The platform helps users:

- Practice mock interviews
- Improve response quality
- Gain confidence before real interviews
- Simulate realistic interview experiences

---

# Features

## AI Generated Interview Questions

Generate interview questions based on:

- Job role
- Technology stack
- Difficulty level

---

## Interactive Interview Sessions

Users can go through interview questions step-by-step and respond as they would in a real interview.

---

## AI Feedback System

The AI evaluates answers and provides insights such as:

- clarity of explanation
- completeness of answer
- improvement suggestions

---

## Interview Management

Create and manage multiple interviews including:

- scheduling interviews
- sharing interview links
- tracking interview sessions

---

## Clean and Modern UI

A simple and intuitive interface that allows users to focus on practicing interviews without distractions.

---

# Tech Stack

## Frontend

- React / Next.js
- TypeScript
- Tailwind CSS
- Modern UI components

## Backend

- Node.js
- API routes

## AI Integration

- LLM based question generation
- AI response evaluation

---

# Project Structure

```
intervu-ai
│
├── components
│   ├── InterviewCard
│   ├── QuestionCard
│   └── FeedbackPanel
│
├── pages / app
│   ├── dashboard
│   ├── interview-session
│   └── results
│
├── api
│   ├── generateQuestions
│   └── evaluateAnswer
│
├── utils
│   └── aiHelpers
│
└── public
```

---

# Installation

Clone the repository

```bash
git clone https://github.com/Dark-Legend/intervu-ai.git
```

Move into the project directory

```bash
cd intervu-ai
```

Install dependencies

```bash
npm install
```

Run the development server

```bash
npm run dev
```

Open the app in your browser

```
http://localhost:3000
```

---

# Environment Variables

Create a `.env` file in the root directory and add the following variables:

```
OPENAI_API_KEY=your_api_key
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

---

# Example Interview Flow

1. User selects interview role or topic
2. AI generates interview questions
3. User answers questions
4. AI evaluates responses
5. Feedback and insights are provided

---

# Future Improvements

Planned enhancements for the platform include:

- Voice-based interview simulation
- AI interviewer avatar
- Resume-based question generation
- Coding interview mode
- Interview performance analytics
- Multi-round interview simulations

---

# Contributing

Contributions are welcome.

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

---

# License

This project is licensed under the MIT License.

---

# Author

**Mohit Sharma**

Frontend Developer

GitHub: https://github.com/Dark-Legend

---

# Support

If you found this project useful, consider giving it a ⭐ on GitHub.
