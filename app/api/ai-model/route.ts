import { QUESTION_GENERATE_PROMPT } from "@/app/constant";
import { NextResponse } from "next/server";
import OpenAI from "openai";

export async function POST(request) {
  const { jobDescription, jobPosition, duration, type } = await request?.json();
  const questionPrompt = QUESTION_GENERATE_PROMPT?.replace(
    "{{jobDescription}}",
    jobDescription
  )
    ?.replace("{{jobPosition}}", jobPosition)
    ?.replace("{{duration}}", duration)
    ?.replace("{{type}}", type);
  const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
  try {
    const openai = new OpenAI({
      baseURL: "https://openrouter.ai/api/v1",
      apiKey: OPENAI_API_KEY,
    });
    const completion = await openai.chat.completions.create({
      model: "google/gemma-3-27b-it:free",
      messages: [
        {
          role: "user",
          content: questionPrompt,
        },
      ],
    });
    const extractedData = completion?.choices[0].message.content;
    console.log(completion?.choices[0].message.content);
    return NextResponse.json({ data: extractedData });
  } catch (e) {
    return NextResponse.json(e);
  }
}
