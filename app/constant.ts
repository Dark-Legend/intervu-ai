export const QUESTION_GENERATE_PROMPT = `You are an expert technical interviewer.

Based on the following inputs, generate a well-structured list of high-quality interview questions:

- Job Title: {{jobTitle}}
- Job Description: {{jobDescription}}
- Interview Duration (in minutes): {{duration}}
- Interview Type: {{type}} (e.g., Technical, Behavioral, Panel, One-on-One)

### Your Task:
1. Analyze the job description to extract key responsibilities, required skills, and expected experience.
2. Generate a structured list of interview questions tailored to the role.
3. Adjust the **number and complexity** of questions based on the interview duration.
4. Ensure the tone and structure align with a real-life {{type}} interview.

### Output Format:
Respond in valid **JSON** format as shown below:

json
interviewQuestions = [
  {
    "question": "Describe a time you had to debug a production issue.",
    "type": "Problem Solving"
  },
  {
    "question": "How do you stay updated with new technologies in {{jobTitle}}?",
    "type": "Behavioral"
  }
]
`;

export const FEEDBACK_PROMPT = `{{conversation}}
Depends on this interview conversation between assistant and user,
Give me feedback for user interview. Give me rating out of 10 for technical Skills,
Communication, Problem Solving, Experience. Also give me summary in 3 lines
about the interview and one line to let me know whether is recommandaation for hire or not with message.
Give me response in JSON format
{
feedback:{
rating:{
  technicalSkills:5,
  communication:6,
  problemSolving:4,
  experience:7
},
  summary:<in 3 lines>,
  Recommendation:"",
  RecommendationMsg:""
}}`;
